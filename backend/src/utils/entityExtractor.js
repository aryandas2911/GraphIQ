import { groq } from "../config/groq.js";

export const extractEntities = async (cleanText) => {
  const prompt =
    "You are an expert entity extractor. Your job is to analyze the given text and extract the entities from it";

  const response = groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt + cleanText }],
  });
};
