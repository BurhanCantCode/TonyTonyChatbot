import { NextApiRequest, NextApiResponse } from 'next';
import { AzureOpenAI } from 'openai'; // Correct import

const azureOpenAIEndpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;
const apiVersion = '2024-02-15-preview';

export const config = {
  api: {
    bodyParser: true, // Enable body parsing for JSON data
  },
};

const client = new AzureOpenAI({
  apiKey,
  baseURL: azureOpenAIEndpoint,
  apiVersion,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { input, formData } = req.body;

// Convert sales data array to a string
const salesDataString = Array.isArray(formData?.salesDataContent)
  ? formData.salesDataContent.map((item: any) => {
      return `Date: ${item.date}, Product: ${item.product}, Amount: ${item.amount}`;
    }).join('; ')
  : formData?.salesDataContent || ''; // If it's a string (PDF text), use it directly or default to an empty string

    // Log the formData to check if sales data is included
    console.log('Received formData:', formData);

    const prompt = `You are a customer support bot for Business Name: ${formData.businessName}, Business Info: ${formData.businessInfo}, Sales Data: ${salesDataString}; roleplay like one and answer to user queries while using the data and roleplay like humans if u dont know the answer u can make your own engage in conversations. User query: ${input} `;

    // Log the constructed prompt
    console.log('Constructed prompt:', prompt);

    const response = await client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 1000,
      model: 'gpt-4o',
    });

    if (response.choices && response.choices.length > 0) {
      res.status(200).json({ message: response.choices[0].message.content });
    } else {
      res.status(500).json({ error: 'No response from OpenAI.' });
    }
  } catch (error) {
    console.error('Error generating chatbot response:', error);
    res.status(500).json({ error: 'Failed to generate a response.' });
  }
};