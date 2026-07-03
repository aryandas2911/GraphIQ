import { groq } from "../config/groq.js";

export const createChatCompletion = async (params, retries = 2) => {
  try {
    return await groq.chat.completions.create(params);
  } catch (error) {
    if (error.status === 429 && retries > 0) {
      const retryAfterSeconds = Number(error.headers?.get?.("retry-after")) || 2;
      await new Promise((resolve) =>
        setTimeout(resolve, retryAfterSeconds * 1000),
      );
      return createChatCompletion(params, retries - 1);
    }

    throw error;
  }
};
