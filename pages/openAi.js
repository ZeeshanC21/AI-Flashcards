import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();



// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // dangerouslyAllowBrowser: true,
});

export const generateFlashcardContent = async (prompt) => {
  try {
    // Adjust the request to match the current method provided by the OpenAI library
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
  });
  if (chatCompletion.data && chatCompletion.data.choices && chatCompletion.data.choices.length > 0) {
    return chatCompletion.data.choices[0].message.content.trim();
  } else {
    console.error('Unexpected API response format. No "choices" property found.');
    // Handle the case where the "choices" property is missing
    return 'Unable to generate a response at this time.'; // Or provide a default message
  }
} catch (error) {
  console.error('Error calling OpenAI API:', error);
  // Handle API call errors gracefully
  return 'An error occurred. Please try again later.';
}
};

