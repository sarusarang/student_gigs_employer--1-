import React from 'react';
import { Briefcase, Users, BarChart, Calendar, File } from 'lucide-react';
import toast from 'react-hot-toast';

const Sidebar: React.FC = () => {


    const ThisFeature = () => {

        toast.error("This feature is not available yet.");

    }

    return (

        <div className="fixed left-0 top-0 bottom-0 w-16  flex flex-col items-center py-8 bg-gradient-to-r from-amber-500 to-orange-500">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-8">
                <Briefcase className="h-5 w-5 text-amber-500" />
            </div>
            <div className="flex flex-col items-center space-y-6 text-white">

                <div onClick={ThisFeature} className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <Users className="h-5 w-5 text-white" />
                </div>

                <div onClick={ThisFeature} className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <BarChart className="h-5 w-5 text-white" />
                </div>

                <div onClick={ThisFeature} className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <Calendar className="h-5 w-5 text-white" />
                </div>

                <div onClick={ThisFeature} className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <File className="h-5 w-5 text-white" />
                </div>

            </div>
        </div>

    );


};

export default Sidebar;