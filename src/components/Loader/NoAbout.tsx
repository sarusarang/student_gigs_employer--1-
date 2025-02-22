import { User, Star, Heart } from 'lucide-react';

const NoAboutMe = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-12 px-4">
            <div className="relative w-40 h-20">
                {/* Circular path for rotating stars */}
                <div className="absolute inset-0">
                    <div className="absolute w-full h-full animate-spin-slow">
                        {[...Array(3)].map((_, i) => (
                            <Star
                                key={i}
                                className="absolute w-6 h-6 text-pink-300"
                                style={{
                                    transform: `rotate(${i * 120}deg) translateY(-50px)`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Center avatar circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-24 h-24 bg-pink-100 rounded-full animate-pulse" />
                        <User className="absolute inset-0 w-16 h-16 m-4 text-pink-600" />
                    </div>
                </div>

                <Heart className="absolute bottom-0 right-0 w-8 h-8 text-pink-400 animate-bounce" />
            </div>

            <h3 className="text-2xl font-bold text-pink-900 mt-6 mb-3 text-center">
                No About Found
            </h3>

           
        </div>
    );
};

export default NoAboutMe;