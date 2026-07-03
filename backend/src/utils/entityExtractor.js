import { groq } from "../config/groq.js";

export const extractEntities = async (cleanText) => {
  const prompt = `Extract named entities from the text below (any document type — resume, article, contract, etc.).

            Categories only: Person, Company, Technology, Concept.
            Exclude: URLs, emails, handles, languages, dates, locations, generic nouns, numbers.
            Merge variants of the same entity into one canonical form. Don't invent entities not in the text.

            Output ONLY a JSON array of strings. No explanation, no markdown.

            Text:
            `;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt + cleanText }],
  });

  let raw = response.choices[0].message.content.trim();
  raw = raw
    .replace(/^```json\s*/i, "")
    .replace(/```$/, "")
    .trim();

  let entities;
  try {
    entities = JSON.parse(raw);
  } catch (err) {
    throw new Error("Failed to parse entities from model response");
  }

  if (!Array.isArray(entities)) {
    throw new Error("Model did not return an array of entities");
  }

  const uniqueEntities = deduplicateEntities(entities);
  const normalized = uniqueEntities.map(normalizeEntityName);
  const finalEntities = deduplicateEntities(normalized);
  return finalEntities;
};

const deduplicateEntities = (entities) => [...new Set(entities)];

const normalizeEntityName = (name) => {
  return name.trim().replace(/\s+/g, " ");
};
