import { groq } from "../config/groq.js";

export const summarizeText = async (cleanText) => {
  const prompt = `Summarize the following text in exactly 1-2 short sentences.
Output ONLY the summary itself. No preamble, no "Here's a summary" phrasing, no explanation, no markdown.

Text:
${cleanText}`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
  });

  let summary = response.choices[0].message.content.trim();
  summary = summary.replace(/^here('s| is)[^:]*:\s*/i, "").trim();

  return summary;
};
