import { useState } from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ResultsSection from '../components/ResultsSection';
import ErrorMessage from '../components/ErrorMessage';
import { generateHooks } from '../utils/hookGenerator';

// Interfaz para el estado de error mostrado en la UI
interface Error {
  title: string;
  message: string;
}

// Página principal del generador de hooks de ViralHook
export default function GeneratorPage() {
  // Descripción ingresada por el usuario para generar el hook
  const [description, setDescription] = useState('');
  // Plataforma seleccionada (TikTok, etc.)
  const [platform, setPlatform] = useState('tiktok');
  // Lista de hooks generados por el servicio
  const [hooks, setHooks] = useState<string[]>([]);
  // Estado de carga para mostrar spinner o deshabilitar botones
  const [isGenerating, setIsGenerating] = useState(false);
  // Estado de errores para mostrar mensajes al usuario
  const [error, setError] = useState<Error | null>(null);

  // Función que se invoca al presionar el botón de generar
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
          // Componente para mostrar mensajes de error con opción de cerrar
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