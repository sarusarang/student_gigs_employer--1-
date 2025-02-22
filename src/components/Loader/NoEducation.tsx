import { GraduationCap, BookOpen } from 'lucide-react';

const NoEducation = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-4  rounded-xl">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <GraduationCap className="w-16 h-16 text-blue-600 animate-bounce" />
        </div>
        <BookOpen className="absolute -right-2 -top-2 w-8 h-8 text-blue-400 animate-spin-slow" />
      </div>
      
      <h3 className="text-2xl font-bold text-blue-900 mb-3">
        No Education Added
      </h3>
      
     
    </div>
  );
};

export default NoEducation;