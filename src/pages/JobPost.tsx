import React, { useState } from 'react';
import OnlineTalentPost from "../components/JobPost/OnlineTalentPost";
import OffilneTalentPost from "../components/JobPost/OffilneTalentPost";
import { BookText } from 'lucide-react';



// Types
interface Tab {
    id: 'online' | 'offline';
    label: string;
    component: React.ReactNode;
}



const tabs: Tab[] = [
    {
        id: 'online',
        label: 'Online Talent',
        component: <OnlineTalentPost />
    },
    {
        id: 'offline',
        label: 'Offline Talent',
        component: <OffilneTalentPost />
    }
];



const JobPost: React.FC = () => {


    // Tab State
    const [activeTab, setActiveTab] = useState<Tab['id']>('online');


    return (


        <main className="w-full h-full pt-32 sm:pt-24 px-2 sm:px-4 md:px-10 lg:px-24 pb-10 bg-white">
            

            <div className="bg-gradient-to-l from-green-500 to-green-700 mb-5">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white flex items-center justify-center p-4">
                    Job Post Application  <BookText size={28} className='ms-2 mt-1' />
                </h1>
            </div>


            <div className="rounded-lg border border-gray-100 bg-white py-2 px-3 shadow-md">

                <nav className="flex flex-wrap justify-center gap-4 ">

                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap inline-flex hover:cursor-pointer rounded-lg py-2 px-3 text-sm font-bold transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900 ${activeTab === tab.id
                                ? 'bg-gray-200 text-gray-900'
                                : 'text-gray-600'
                                }`}
                            type="button"
                        >
                            {tab.label}
                        </button>
                    ))}


                </nav>

            </div>


            <div className="mt-6">
                {tabs.find(tab => tab.id === activeTab)?.component}
            </div>


        </main>

    );
};

export default JobPost;