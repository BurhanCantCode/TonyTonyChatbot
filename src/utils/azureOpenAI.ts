import { AzureOpenAI } from "openai";

const azureOpenAIEndpoint = "https://burhan.openai.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-02-15-preview";
const apiKey = "6c1713a574004d7f80d26b2c9c45005a";
const deployment = "gpt-4o";
const apiVersion = "2024-02-15-preview";

const client = new AzureOpenAI({
  apiKey,
  baseURL: azureOpenAIEndpoint,
  apiVersion,
  dangerouslyAllowBrowser: true,
});

export const generateChatbotResponse = async (input: string, formData: any): Promise<string> => {
  try {
    const response = await fetch('/api/generateChatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the correct Content-Type header
      },
      body: JSON.stringify({ input, formData }), // Send JSON data
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.message || 'No valid response received.';
  } catch (error) {
    console.error('Error generating chatbot response:', error);
    return 'Failed to generate a response.';
  }
};