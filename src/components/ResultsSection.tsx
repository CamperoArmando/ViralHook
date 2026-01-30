import { TrendingUp } from 'lucide-react';
import ResultCard from './ResultCard';

interface ResultsSectionProps {
  hooks: string[];
}

export default function ResultsSection({ hooks }: ResultsSectionProps) {
  if (hooks.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 sm:mt-12">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 flex-shrink-0" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Tus Ganchos Virales</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {hooks.map((hook, index) => (
          <ResultCard key={index} hook={hook} index={index} />
        ))}
      </div>
    </div>
  );
}
