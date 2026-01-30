import { AlertCircle, X } from 'lucide-react';

interface ErrorMessageProps {
  title: string;
  message: string;
  onClose: () => void;
}

export default function ErrorMessage({ title, message, onClose }: ErrorMessageProps) {
  return (
    <div className="mb-6 bg-red-50 border-l-4 border-red-500 rounded-lg p-4 sm:p-6 shadow-md animate-in slide-in-from-top-2 duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <AlertCircle className="w-5 sm:w-6 h-5 sm:h-6 text-red-600 mt-0.5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-red-800">{title}</h3>
          <p className="text-xs sm:text-sm text-red-700 mt-1 break-words">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
