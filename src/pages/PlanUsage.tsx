import { motion } from 'framer-motion';
import {
    User,
    Calendar,
    Briefcase,
    Zap,
    Layers,
    TrendingUp
} from 'lucide-react';

const UltraModernPlanDetails = () => {

    const planData = {

        name: 'Pro Accelerator',
        price: 49.99,
        tier: 'Premium',
        features: [
            {
                name: 'Profile Visibility',
                used: 1,
                total: 1,
                unit: 'Profile',
                icon: User,
                description: 'Enhanced profile showcase'
            },
            {
                name: 'Plan Duration',
                used: 20,
                total: 30,
                unit: 'Days',
                icon: Calendar,
                description: 'Active subscription period'
            },
            {
                name: 'Job Postings',
                used: 0,
                total: 1,
                unit: 'Job',
                icon: Briefcase,
                description: 'Unlimited job post potential'
            }
        ],
        startDate: '2024-03-01',
        endDate: '2024-03-31',
        boostPoints: 75
    };



    // Calculate progress and status
    const calculateProgress = (used : any, total : any) => {
        return Math.min((used / total) * 100, 100);
    };

    return (

        <div className="relative overflow-hidden flex items-center justify-center py-24 w-full">

            {/* Animated SVG Background */}
            <svg
                className="absolute inset-0 z-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 810"
                preserveAspectRatio="xMinYMin slice"
            >
                <defs>
                    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EFF6FF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.7" />
                    </linearGradient>

                    <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
                    </linearGradient>

                    <filter id="softBlur">
                        <feGaussianBlur stdDeviation="30" />
                    </filter>
                </defs>

                <rect width="100%" height="100%" fill="url(#bg-gradient)" />

                {/* Animated Geometric Elements */}
                <motion.circle
                    cx="30%"
                    cy="20%"
                    r="200"
                    fill="url(#accent-gradient)"
                    filter="url(#softBlur)"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                />

                <motion.circle
                    cx="70%"
                    cy="80%"
                    r="250"
                    fill="url(#accent-gradient)"
                    filter="url(#softBlur)"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                        scale: [0.5, 1.2, 0.5],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 2
                    }}
                />
            </svg>

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 20
                }}
                className="relative z-10 w-full max-w-5xl"
            >
                <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-white/20">

                    {/* Plan Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">{planData.name}</h1>
                                <p className="text-sm opacity-80 flex items-center space-x-2">
                                    <Zap className="w-4 h-4" />
                                    <span>{planData.tier} Tier</span>
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold">${planData.price}/mo</p>
                                <p className="text-xs opacity-80">Billed Monthly</p>
                            </div>
                        </div>
                    </div>

                    {/* Boost Points */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="px-6 py-4 bg-gray-50/50 backdrop-blur-sm flex items-center space-x-4"
                    >
                        <Layers className="w-6 h-6 text-purple-500" />
                        <div className="flex-1">
                            <p className="text-sm text-gray-600">Boost Points</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${planData.boostPoints}%` }}
                                    className="h-2.5 rounded-full bg-purple-500"
                                />
                            </div>
                        </div>
                        <span className="font-bold text-purple-600">{planData.boostPoints}%</span>
                    </motion.div>

                    {/* Feature Usage */}
                    <div className="p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <TrendingUp className="w-6 h-6 mr-3 text-blue-500" />
                            Usage Breakdown
                        </h2>

                        {planData.features.map((feature, index) => {
                            const progressPercentage = calculateProgress(feature.used, feature.total);

                            return (
                                <motion.div
                                    key={feature.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 shadow-sm"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-3">
                                            <feature.icon className="w-6 h-6 text-blue-500" />
                                            <div>
                                                <p className="font-medium text-gray-800">{feature.name}</p>
                                                <p className="text-xs text-gray-500">{feature.description}</p>
                                            </div>
                                        </div>
                                        <span className={`font-bold ${progressPercentage >= 100 ? 'text-red-500' : 'text-green-500'
                                            }`}>
                                            {Math.round(progressPercentage)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progressPercentage}%` }}
                                            className={`h-2 rounded-full ${progressPercentage > 80 ? 'bg-red-500' :
                                                    progressPercentage > 50 ? 'bg-yellow-500' :
                                                        'bg-green-500'
                                                }`}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1 text-right">
                                        {feature.used} / {feature.total} {feature.unit}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Action Button */}
                    <div className="p-6 pt-0">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl 
              font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                        >
                            Upgrade Plan
                        </motion.button>
                    </div>


                </div>
            </motion.div>
        </div>
    );
};

export default UltraModernPlanDetails;