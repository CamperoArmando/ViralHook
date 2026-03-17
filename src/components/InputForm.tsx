// TODO: Mantenimiento - Validar límite estricto de 500 caracteres

// Importa íconos desde lucide-react
import { Sparkles, Loader } from 'lucide-react';

// Define la interfaz de las props que recibirá el componente
interface InputFormProps {
  description: string; // Texto que describe la idea del video
  platform: string; // Plataforma seleccionada (TikTok, Instagram, etc.)
  onDescriptionChange: (value: string) => void; // Función para actualizar la descripción
  onPlatformChange: (value: string) => void; // Función para actualizar la plataforma
  onGenerate: () => void; // Función que se ejecuta al generar los ganchos
  isGenerating: boolean; // Indica si se está generando contenido (estado de carga)
}

// Componente principal del formulario
export default function InputForm({
  description,
  platform,
  onDescriptionChange,
  onPlatformChange,
  onGenerate,
  isGenerating,
}: InputFormProps) {
  return (
    // Contenedor principal del formulario con estilos
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
      
      {/* Sección: Descripción del video */}
      <div>
        {/* Etiqueta del textarea */}
        <label
          htmlFor="description"
          className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
        >
          Describe tu video o idea
        </label>

        {/* Campo de texto para escribir la descripción */}
        <textarea
          id="description"
          value={description} // Valor controlado
          onChange={(e) => onDescriptionChange(e.target.value)} // Actualiza el estado al escribir
          placeholder="Ej: Un video tutorial sobre cómo hacer pan casero en 5 minutos..."
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none h-24 sm:h-32 text-sm sm:text-base"
        />
      </div>

      {/* Sección: Selección de plataforma */}
      <div>
        {/* Etiqueta del select */}
        <label
          htmlFor="platform"
          className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
        >
          Plataforma
        </label>

        {/* Selector de plataforma */}
        <select
          id="platform"
          value={platform} // Valor controlado
          onChange={(e) => onPlatformChange(e.target.value)} // Actualiza la plataforma seleccionada
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white cursor-pointer text-sm sm:text-base"
        >
          {/* Opciones disponibles */}
          <option value="tiktok">TikTok</option>
          <option value="instagram">Instagram Reels</option>
          <option value="youtube">YouTube Shorts</option>
        </select>
      </div>

      {/* Botón para generar ganchos */}
      <button
        onClick={onGenerate} // Ejecuta la generación
        disabled={!description.trim() || isGenerating} // Deshabilita si no hay texto o está cargando
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
      >
        {/* Renderizado condicional según estado */}
        {isGenerating ? (
          <>
            {/* Ícono de carga animado */}
            <Loader className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" />
            <span>Generando con IA...</span>
          </>
        ) : (
          <>
            {/* Ícono decorativo */}
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />
            Generar Ganchos Virales
          </>
        )}
      </button>
    </div>
  );
}