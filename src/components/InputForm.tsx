import { Sparkles, Loader } from 'lucide-react';

interface InputFormProps {
  description: string;
  platform: string;
  onDescriptionChange: (value: string) => void;
  onPlatformChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function InputForm({
  description,
  platform,
  onDescriptionChange,
  onPlatformChange,
  onGenerate,
  isGenerating,
}: InputFormProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
      <div>
        <label htmlFor="description" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
          Describe tu video o idea
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="Ej: Un video tutorial sobre cómo hacer pan casero en 5 minutos..."
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none h-24 sm:h-32 text-sm sm:text-base"
        />
      </div>

      <div>
        <label htmlFor="platform" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
          Plataforma
        </label>
        <select
          id="platform"
          value={platform}
          onChange={(e) => onPlatformChange(e.target.value)}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white cursor-pointer text-sm sm:text-base"
        >
          <option value="tiktok">TikTok</option>
          <option value="instagram">Instagram Reels</option>
          <option value="youtube">YouTube Shorts</option>
        </select>
      </div>

      <button
        onClick={onGenerate}
        disabled={!description.trim() || isGenerating}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
      >
        {isGenerating ? (
          <>
            <Loader className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" />
            <span>Generando con IA...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />
            Generar Ganchos Virales
          </>
        )}
      </button>
    </div>
  );
}
