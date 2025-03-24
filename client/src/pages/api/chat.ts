import { NextApiRequest, NextApiResponse } from 'next';
import { openai } from '@/lib/openai';

const systemPrompt = `You are an AI assistant for Gulfstream Aerospace Corporation. You are knowledgeable about:
- Gulfstream's aircraft models (G280, G500, G600, G650ER, G700, G800)
- Aircraft specifications and performance
- Private aviation industry
- Aircraft maintenance and support
- Sustainability initiatives
- Customer service

Keep responses concise, professional, and focused on Gulfstream's expertise in business aviation.`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ message: 'OpenAI API key is not configured' });
  }

  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const reply = completion.choices[0]?.message?.content || 'I apologize, but I am unable to provide a response at this time.';
    
    res.status(200).json({ message: reply });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
} 