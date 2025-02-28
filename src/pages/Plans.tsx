import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types for the color options and keys
type ColorType = 'bg' | 'bgLight' | 'text' | 'border' | 'gradient' | 'shadow';
type ColorName = 'blue' | 'purple' | 'pink';


// Define the plan feature type
type PlanFeature = {
    name: string;
    value: string;
};



// Define the plan type
type Plan = {
    id: string;
    name: string;
    price: string;
    features: PlanFeature[];
    color: ColorName;
    recommended?: boolean;
    icon: React.ReactNode;
};


const EmployerPlansPage = () => {


    const [activePlan, setActivePlan] = useState('free');

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const plans: Plan[] = [
        {
            id: 'free',
            name: 'Free',
            price: '0',
            features: [
                { name: 'Profile Access', value: '1 Student' },
                { name: 'Validity', value: '1 Month' },
                { name: 'Job posting', value: '1 Job' },
                { name: 'Resume Viewing', value: 'Yes' },
                { name: 'Job Auto-Refreshing', value: 'No' },
                { name: 'Hot Job Label', value: 'No' },
                { name: 'Access to Certified Students', value: 'No' },
                { name: 'Instant Candidate Matching', value: 'No' },
                { name: 'Direct Chat With Candidate', value: 'No' },
                { name: 'Company Dashboard Analytics', value: 'No' }
            ],
            color: 'blue',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
                    <circle cx="12" cy="12" r="10" fill="url(#freeGradient)" />
                    <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="freeGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#60A5FA" />
                            <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        {
            id: 'standard',
            name: 'Standard',
            price: '399',
            features: [
                { name: 'Profile Access', value: '10 Students' },
                { name: 'Validity', value: '3 Months' },
                { name: 'Job posting', value: '5 Jobs' },
                { name: 'Resume Viewing', value: 'Yes' },
                { name: 'Job Auto-Refreshing', value: 'Yes' },
                { name: 'Hot Job Label', value: 'No' },
                { name: 'Access to Certified Students', value: 'No' },
                { name: 'Instant Candidate Matching', value: 'Limited' },
                { name: 'Direct Chat With Candidate', value: 'Yes' },
                { name: 'Company Dashboard Analytics', value: 'Basic' }
            ],
            color: 'purple',
            recommended: false,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
                    <circle cx="12" cy="12" r="10" fill="url(#standardGradient)" />
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="standardGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#A78BFA" />
                            <stop offset="1" stopColor="#8B5CF6" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        },
        {
            id: 'premium',
            name: 'Premium',
            price: '1999',
            features: [
                { name: 'Profile Access', value: '50 Students' },
                { name: 'Validity', value: '6 Months' },
                { name: 'Job posting', value: '25 Jobs' },
                { name: 'Resume Viewing', value: 'Yes' },
                { name: 'Job Auto-Refreshing', value: 'Yes' },
                { name: 'Hot Job Label', value: 'Yes' },
                { name: 'Access to Certified Students', value: 'Yes' },
                { name: 'Instant Candidate Matching', value: 'Yes' },
                { name: 'Direct Chat With Candidate', value: 'Yes' },
                { name: 'Company Dashboard Analytics', value: 'Yes' }
            ],
            color: 'pink',
            recommended: true,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
                    <circle cx="12" cy="12" r="10" fill="url(#premiumGradient)" />
                    <path d="M12 7L13.9389 10.9463L18.1962 11.5836L15.0638 14.6137L15.8779 18.8564L12 16.85L8.12215 18.8564L8.93616 14.6137L5.80385 11.5836L10.0611 10.9463L12 7Z" fill="white" />
                    <defs>
                        <linearGradient id="premiumGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F472B6" />
                            <stop offset="1" stopColor="#EC4899" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
    ];



    const getColorClass = (color: ColorName, type: ColorType): string => {

        const colorMap = {
            blue: {
                bg: 'bg-blue-500',
                bgLight: 'bg-blue-50',
                text: 'text-blue-500',
                border: 'border-blue-200',
                gradient: 'from-blue-500 to-blue-600',
                shadow: 'shadow-blue-200'
            },
            purple: {
                bg: 'bg-purple-500',
                bgLight: 'bg-purple-50',
                text: 'text-purple-500',
                border: 'border-purple-200',
                gradient: 'from-purple-500 to-purple-600',
                shadow: 'shadow-purple-200'
            },
            pink: {
                bg: 'bg-pink-500',
                bgLight: 'bg-pink-50',
                text: 'text-pink-500',
                border: 'border-pink-200',
                gradient: 'from-pink-500 to-pink-600',
                shadow: 'shadow-pink-200'
            }
        };

        return colorMap[color][type];
    };

    const checkValue = (value: string): boolean | string => {
        if (value === 'Yes') return true;
        if (value === 'No') return false;
        return value;
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            
            {/* Animated Background SVGs */}
            {isClient && (
                <>
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-20 bg-blue-400"
                            animate={{
                                x: [0, 40, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 15,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-20 bg-pink-400"
                            animate={{
                                x: [0, -30, 0],
                                y: [0, -40, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 18,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full filter blur-3xl opacity-10 bg-purple-400"
                            animate={{
                                x: [0, 50, 0],
                                y: [0, -50, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        />
                    </div>

                    {/* Animated pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10">
                        <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                                    <circle cx="25" cy="25" r="1" fill="#6366F1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        </svg>
                    </div>
                </>
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-block mb-2 px-4 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-indigo-600">
                        Membership Plans
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 pb-3">
                        Upgrade Your Job Posting Experience
                    </h1>
                    <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600">
                        Engage the most talented candidates with our premium features
                    </p>
                </motion.div>

                {/* Current plan indicator */}
                <motion.div
                    className="mx-auto max-w-lg mb-10 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <div className="bg-white rounded-xl shadow-lg px-6 py-4 inline-flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full animate-pulse bg-green-400"></div>
                        <span className="font-medium text-gray-700">
                            Current Plan:
                        </span>
                        {plans.map(plan => (
                            activePlan === plan.id && (
                                <span key={plan.id} className={`font-bold flex items-center gap-2 ${getColorClass(plan.color, 'text')}`}>
                                    {plan.name}
                                </span>
                            )
                        ))}
                    </div>
                </motion.div>

                {/* Mobile view (accordion style) */}
                <div className="md:hidden space-y-6 mb-12">
                    <AnimatePresence>
                        {plans.map((plan) => (
                            <motion.div
                                key={plan.id}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                className={`rounded-2xl overflow-hidden transition-all duration-300 ${activePlan === plan.id
                                    ? 'bg-white shadow-xl border border-gray-100'
                                    : 'bg-white/80 shadow-md border border-gray-100'
                                    }`}
                            >
                                {plan.recommended && (
                                    <div className="py-2 px-4 text-center bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-medium">
                                        Recommended for employers
                                    </div>
                                )}

                                <motion.div
                                    whileTap={{ scale: 0.98 }}
                                    className="p-6 flex justify-between items-center cursor-pointer"
                                    onClick={() => setActivePlan(plan.id)}
                                >
                                    <div className="flex items-center space-x-4">
                                        <motion.div
                                            className={`p-2 rounded-full ${getColorClass(plan.color, 'bgLight')} flex items-center justify-center`}
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <div className="flex items-center justify-center w-8 h-8">{plan.icon}</div>
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-semibold">{plan.name}</h3>
                                            <p className="text-2xl font-bold">
                                                {plan.price === '0' ? 'Free' : `Rs. ${parseInt(plan.price).toLocaleString()}`}
                                            </p>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: activePlan === plan.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <svg
                                            className="w-6 h-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.div>
                                </motion.div>

                                <AnimatePresence>
                                    {activePlan === plan.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="px-6 pb-6 pt-2 overflow-hidden"
                                        >
                                            <ul className="space-y-3">
                                                {plan.features.map((feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className="flex justify-between items-center py-2 border-b border-gray-100"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                    >
                                                        <span className="text-gray-600">{feature.name}</span>
                                                        <span className={`font-medium ${feature.value === 'Yes' ? 'text-green-500' :
                                                            feature.value === 'No' ? 'text-gray-400' :
                                                                getColorClass(plan.color, 'text')
                                                            }`}>
                                                            {feature.value}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                            <motion.button
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                className={`mt-6 w-full py-3 px-6 rounded-xl font-medium text-white bg-gradient-to-r ${getColorClass(plan.color, 'gradient')} shadow-lg`}
                                            >
                                                {activePlan === plan.id ? 'Current Plan' : plan.price === '0' ? 'Get Started' : 'Upgrade Now'}
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Desktop view (side-by-side) */}
                <motion.div
                    className="hidden md:grid grid-cols-3 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className={`relative rounded-2xl transition-all duration-300 overflow-hidden ${activePlan === plan.id
                                ? `bg-white shadow-xl border-2 ${getColorClass(plan.color, 'border')} ${getColorClass(plan.color, 'shadow')}`
                                : 'bg-white/90 shadow-md border border-gray-100'
                                }`}
                            onClick={() => setActivePlan(plan.id)}
                        >
                            {/* Recommended tag with correct positioning */}
                            {plan.recommended && (
                                <div className="absolute top-0 left-0 right-0 w-full">
                                    <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-medium text-center py-2 px-4 shadow-md">
                                        Recommended for employers
                                    </div>
                                </div>
                            )}

                            {activePlan === plan.id && (
                                <motion.div
                                    className={`absolute top-0 left-0 w-full h-1 ${getColorClass(plan.color, 'bg')} ${plan.recommended ? 'mt-8' : ''}`}
                                    layoutId="activeIndicator"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <div className={`p-8 ${plan.recommended ? 'pt-12' : ''}`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                            {activePlan === plan.id && (
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className={`px-2 py-1 text-xs rounded-full ${getColorClass(plan.color, 'bgLight')} ${getColorClass(plan.color, 'text')}`}
                                                >
                                                    Current
                                                </motion.span>
                                            )}
                                        </div>
                                        <div className="flex items-baseline">
                                            <span className="text-3xl font-extrabold">
                                                {plan.price === '0' ? 'Free' : `Rs. ${parseInt(plan.price).toLocaleString()}`}
                                            </span>
                                        </div>
                                    </div>

                                    <motion.div
                                        className={`p-3 rounded-full ${getColorClass(plan.color, 'bg')} flex items-center justify-center`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <div className={`flex items-center justify-center w-8 h-8`}>
                                            {plan.icon}
                                        </div>
                                    </motion.div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-center justify-between"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + idx * 0.05 }}
                                        >
                                            <span className="text-gray-700">{feature.name}</span>
                                            <span className={`font-medium ${feature.value === 'Yes' ? 'text-green-600' :
                                                feature.value === 'No' ? 'text-gray-400' :
                                                    typeof checkValue(feature.value) === 'boolean' ?
                                                        checkValue(feature.value) ? 'text-green-600' : 'text-gray-400' :
                                                        getColorClass(plan.color, 'text')
                                                }`}>
                                                {feature.value === 'Yes' ? (
                                                    <span className="flex items-center">
                                                        <svg className="w-5 h-5 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {feature.value}
                                                    </span>
                                                ) : feature.value === 'No' ? (
                                                    <span className="flex items-center">
                                                        <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                        {feature.value}
                                                    </span>
                                                ) : (
                                                    feature.value
                                                )}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-3 px-6 rounded-xl font-medium text-white bg-gradient-to-r ${getColorClass(plan.color, 'gradient')} shadow-lg`}
                                >
                                    {activePlan === plan.id ? 'Current Plan' : plan.price === '0' ? 'Get Started' : 'Upgrade Now'}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default EmployerPlansPage;