import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ResultCardProps {
  hook: string;
  index: number;
}

export default function ResultCard({ hook, index }: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hook);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full mb-2 sm:mb-3 whitespace-nowrap">
            Gancho #{index + 1}
          </div>
          <p className="text-gray-800 text-sm sm:text-lg leading-relaxed font-medium break-words">{hook}</p>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="mt-3 sm:mt-4 w-full bg-white border-2 border-gray-300 text-gray-700 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-50 hover:border-blue-500 transition-all duration-200 flex items-center justify-center gap-2"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span className="text-green-600">Copiado</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 flex-shrink-0" />
            Copiar
          </>
        )}
      </button>
    </div>
  );
}
