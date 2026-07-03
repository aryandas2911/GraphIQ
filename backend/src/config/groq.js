import Groq from "groq-sdk";

const groqKey = process.env.GROQ_API_KEY;

if (!groqKey) {
  throw new Error("Missing Groq key");
}

export const groq = new Groq({ apiKey: groqKey });
