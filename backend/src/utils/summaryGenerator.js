import { groq } from "../config/groq.js";

export const summarizeText = async (cleanText) => {
  const prompt = `Summarize the following text in 2-3 sentences...\n\n
                Text:
                ${cleanText}`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
  });

  const summary = response.choices[0].message.content.trim();

  return summary;
};
