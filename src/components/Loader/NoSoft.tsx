import { Heart, Users, Smile } from 'lucide-react';

const NoSoftSkills = () => {
  return (
    
    <div className="w-full flex flex-col items-center justify-center py-12 px-4">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-purple-100 rounded-full animate-pulse" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-float">
          <Heart className="w-16 h-16 text-purple-500" />
        </div>

        <div className="absolute animate-orbit">
          <Users className="w-8 h-8 text-purple-400" />
        </div>

        <div className="absolute animate-orbit-delayed">
          <Smile className="w-8 h-8 text-purple-300" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-purple-900 mt-6 mb-3 text-center">
        No Soft Skills Added
      </h3>


    </div>
  );
};



export default NoSoftSkills;