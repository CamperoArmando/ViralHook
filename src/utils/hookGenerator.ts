const platformNames: { [key: string]: string } = {
  tiktok: 'TikTok',
  instagram: 'Instagram Reels',
  youtube: 'YouTube Shorts',
};

export async function generateHooks(description: string, platform: string): Promise<string[]> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    throw new Error('VITE_GROQ_API_KEY no está configurada');
  }

  const platformName = platformNames[platform] || 'TikTok';

  const systemPrompt =
    'Eres un experto en marketing viral. Crea 3 ganchos (hooks) cortos, impactantes y con emojis para la plataforma seleccionada. Devuelve los resultados en un formato de lista claro.';

  const userMessage = `Crea 3 ganchos virales para ${platformName} sobre: "${description}". Devuelve solo los 3 ganchos, uno por línea, sin números ni viñetas.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.8,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Error de Groq: ${error.error?.message || 'Error desconocido'}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || '';

    const hooks = content
      .split('\n')
      .map((hook: string) => hook.trim())
      .filter((hook: string) => hook.length > 0)
      .slice(0, 3);

    if (hooks.length === 0) {
      throw new Error('No se pudieron generar los ganchos');
    }

    return hooks;
  } catch (error) {
    console.error('Error al generar ganchos:', error);
    throw error;
  }
}
