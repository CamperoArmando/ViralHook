import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-6 sm:py-8 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 flex-col sm:flex-row">
        <div className="bg-white/20 p-2 sm:p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
          <Zap className="w-6 sm:w-8 h-6 sm:h-8" strokeWidth={2.5} />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">ViralHook</h1>
          <p className="text-blue-50 text-xs sm:text-sm mt-1">Genera ganchos irresistibles para tus videos</p>
        </div>
      </div>
    </header>
  );
}
