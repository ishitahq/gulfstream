import { NextApiRequest, NextApiResponse } from 'next';
import { openai } from '@/lib/openai';

interface ConfigOption {
  category: string;
  selectedOption: string;
}

const systemPrompt = `You are an AI assistant specializing in Gulfstream aircraft configuration. Based on the user's selections, provide 3-4 specific recommendations that enhance their chosen configuration. Consider:

1. Aesthetics and design harmony
2. Functionality and practicality
3. Common industry preferences
4. Latest aviation technology trends
5. Gulfstream's design philosophy

Keep recommendations concise, specific, and focused on enhancing the user's selections.`;

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
    const { configuration } = req.body as { configuration: ConfigOption[] };

    // Format the configuration for the AI
    const configDescription = configuration
      .map(config => `${config.category}: ${config.selectedOption}`)
      .join('\n');

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Based on this configuration:\n${configDescription}\n\nProvide specific recommendations to enhance this setup.` }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const response = completion.choices[0]?.message?.content || '';
    
    // Parse the response into individual recommendations
    const recommendations = response
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^[0-9]+\.\s*/, '').trim());

    res.status(200).json({ recommendations });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ 
      recommendations: [
        'Consider adding complementary accent colors to your exterior design.',
        'Explore our premium connectivity options for enhanced communication.',
        'Review our latest cabin management system features.'
      ]
    });
  }
} 