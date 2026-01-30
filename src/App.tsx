import { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultsSection from './components/ResultsSection';
import ErrorMessage from './components/ErrorMessage';
import { generateHooks } from './utils/hookGenerator';

interface Error {
  title: string;
  message: string;
}

function App() {
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
      console.error('Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Algo salió mal. Intenta de nuevo.';

      if (errorMessage.includes('VITE_GROQ_API_KEY')) {
        setError({
          title: 'Configuración incompleta',
          message: 'Por favor, configura tu clave de API de Groq en el archivo .env',
        });
      } else if (errorMessage.includes('401') || errorMessage.includes('403')) {
        setError({
          title: 'Error de autenticación',
          message: 'Tu clave de API de Groq no es válida. Verifica que esté correctamente configurada.',
        });
      } else if (errorMessage.includes('429')) {
        setError({
          title: 'Demasiadas solicitudes',
          message: 'Has excedido el límite de solicitudes. Espera unos momentos e intenta de nuevo.',
        });
      } else if (errorMessage.includes('No se pudieron generar')) {
        setError({
          title: 'Generación fallida',
          message: 'No se pudieron generar los ganchos. Intenta con una descripción diferente.',
        });
      } else {
        setError({
          title: 'Error de conexión',
          message: errorMessage || 'Error desconocido. Verifica tu conexión e intenta de nuevo.',
        });
      }
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

      <footer className="text-center py-6 sm:py-8 text-gray-600 text-xs sm:text-sm px-4">
        <p>ViralHook - Potencia tu contenido en redes sociales</p>
      </footer>
    </div>
  );
}

export default App;
