import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


const DashboardHeader: React.FC = () => {


    return (


        <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 mb-10 shadow-xl">


            {/* Abstract shapes in the background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white transform translate-x-1/4 translate-y-1/4"></div>
            </div>


            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between">


                {/* Logo and Title Section */}
                <div className="flex items-center space-x-4">

                    <Link to={'/'}>
                        <div className="bg-white p-2 rounded-xl shadow-lg">
                            <img
                                src="/Nav-Icon.png"
                                alt="logo"
                                loading='lazy'
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    </Link>

                    <div className="text-white">
                        <h1 className="text-3xl font-bold tracking-tight">My Gigs Hub</h1>
                        <p className="text-amber-100 mt-1 font-medium">Manage your recruitment pipeline</p>
                    </div>

                </div>


                {/* Back Button - Stunning animated design with complementary color scheme */}
                <Link
                    to="/"
                    className="mt-6 md:mt-0 group flex items-center px-5 py-3 bg-indigo-600 rounded-xl border border-indigo-500 text-white font-medium hover:bg-emerald-700 relative overflow-hidden shadow-lg transition-all duration-300"
                >
                    {/* Animated gradient overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 bg-[length:200%_100%] animate-gradient-x opacity-80"></span>

                    {/* Button content */}
                    <span className="relative flex items-center">
                        <ChevronLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">Back to Home</span>
                    </span>
                </Link>

            </div>


            {/* Modern navigation indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-20 mt-6">
                <div className="h-full w-full bg-white rounded-r-full"></div>
            </div>

        </div>


    );
};

export default DashboardHeader;