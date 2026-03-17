import { useState } from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ResultsSection from '../components/ResultsSection';
import ErrorMessage from '../components/ErrorMessage';
import { generateHooks } from '../utils/hookGenerator';

interface Error {
  title: string;
  message: string;
}

export default function GeneratorPage() {
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState('tiktok');
  const [hooks, setHooks] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      const generatedHooks = await generateHooks(description, platform);
      setHooks(generatedHooks);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Algo salió mal';

      setError({
        title: "Error",
        message: errorMessage
      });

      setHooks([]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-12">

        {error && (
          <ErrorMessage
            title={error.title}
            message={error.message}
            onClose={() => setError(null)}
          />
        )}

        <InputForm
          description={description}
          platform={platform}
          onDescriptionChange={setDescription}
          onPlatformChange={setPlatform}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />

        <ResultsSection hooks={hooks} />
      </main>

      <footer className="text-center py-6 text-gray-600 text-sm">
        ViralHook - Potencia tu contenido en redes sociales
      </footer>
    </div>
  );
}