import { groq } from "../config/groq.js";

export const extractRelationships = async (cleanText, entities) => {
  const prompt = `Find relationships between these entities using the text as evidence.
                Entities: ${JSON.stringify(entities)}
                Only use entities from the list above, as source and target. Relation = short verb phrase (e.g. USES, CREATED, WORKS_AT, etc.). No self-relations. Only explicit relationships, don't infer.
                Output ONLY a JSON array: [{"source":"","relation":"","target":""}]. No explanation, no markdown.

                Text:
                ${cleanText}`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 4096,
  });

  let raw = response.choices[0].message.content.trim();
  raw = raw
    .replace(/^```json\s*/i, "")
    .replace(/```$/, "")
    .trim();

  const firstBracket = raw.indexOf("[");
  const lastBracket = raw.lastIndexOf("]");

  if (firstBracket !== -1 && lastBracket !== -1) {
    raw = raw.slice(firstBracket, lastBracket + 1);
  }

  let relationships;
  try {
    relationships = JSON.parse(raw);
  } catch (err) {
    console.error("Raw relationship model response:", raw);
    throw new Error("Failed to parse relationships from model response");
  }

  if (!Array.isArray(relationships)) {
    throw new Error("Model did not return an array of relationships");
  }

  const validRelationships = relationships.filter(
    (rel) =>
      rel.source &&
      rel.target &&
      rel.relation &&
      rel.source !== rel.target &&
      entities.includes(rel.source) &&
      entities.includes(rel.target),
  );

  const seen = new Set();
  const uniqueRelationships = validRelationships.filter((rel) => {
    const key = `${rel.source}|${rel.relation}|${rel.target}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return uniqueRelationships;
};
