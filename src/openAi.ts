import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export const MAX_OPEN_AI_QUERY_LENGTH = 20000;
export const MODEL_NAME = "text-davinci-003";
export const TEMPERATURE = 0.5;
export const MAX_TOKENS = 512;