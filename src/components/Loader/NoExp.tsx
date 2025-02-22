import { Briefcase, Building2 } from 'lucide-react';

const NoExperience = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4  rounded-xl border-2 border-dashed border-green-200">
      <div className="relative">
        <div className="w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-green-100 rounded-lg transform rotate-45 animate-pulse" />
          <Briefcase className="relative w-16 h-16 text-green-600 transform hover:rotate-12 transition-transform duration-300" />
        </div>
        <div className="absolute top-0 right-0 animate-bounce">
          <Building2 className="w-10 h-10 text-green-400" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-green-800 mt-6 mb-3">
        No Experience Added
      </h3>
     
    </div>
  );
};

export default NoExperience;