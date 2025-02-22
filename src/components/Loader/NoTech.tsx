import { Code, Cpu, Database } from 'lucide-react';

const NoTechnicalSkills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4  rounded-xl">

      <div className="relative w-40 h-40 mb-6">
        {/* Animated code lines background */}
        <div className="absolute inset-0 flex flex-col gap-2 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-2 bg-indigo-400 rounded animate-pulse"
              style={{
                width: `${Math.random() * 50 + 50}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Code className="w-20 h-20 text-indigo-600" />
        </div>

        <Cpu className="absolute top-0 right-0 w-8 h-8 text-indigo-400 animate-spin-slow" />
        <Database className="absolute bottom-0 left-0 w-8 h-8 text-indigo-400 animate-bounce" />
      </div>

      <h3 className="text-2xl font-bold text-indigo-900 mb-3 text-center">
         No Technical Skills Added
      </h3>

    </div>
  );
};

export default NoTechnicalSkills;