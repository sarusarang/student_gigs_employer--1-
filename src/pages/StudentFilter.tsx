import { Briefcase, MapPin, Calendar, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import SutudentCard from '../components/Common/SutudentCard';

export default function StudentFilter() {


    const [keyword, setKeyword] = useState('');


    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });


    return (



        <>

            <main className="w-full h-auto">


                {/* Top section */}
                <div className="relative -z-40">

                    {/* Dark overlay with green tint */}
                    <div className="relative bg-emerald-900/90 overflow-hidden">

                        {/* Background image */}
                        <div
                            className="absolute inset-0 z-0 bg-[url('https://image.cnbcfm.com/api/v1/image/105874696-1556279627825gettyimages-947895256.jpeg?v=1571852572&w=1920&h=1080')] bg-cover bg-no-repeat bg-center opacity-20"
                            aria-hidden="true"
                        />


                        <div className="relative z-10 px-4 py-28 sm:px-6 lg:px-8 sm:h-[55vh] h-[50v] flex flex-col justify-center maz-w-xl mx-auto">

                            {/* Main heading */}
                            <p className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl mb-8 mt-5">
                                “By hiring students, you’re shaping future professionals and providing them with invaluable real-world exposure.”
                            </p>

                        </div>

                        {/* Curved bottom edge */}
                        <div className="absolute bottom-0 left-0 right-0">
                            <svg
                                viewBox="0 0 1440 120"
                                className="w-full h-[60px] fill-white"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
                            </svg>
                        </div>

                    </div>

                </div>



                {/* Filter section */}
                <div className="w-full max-w-6xl mx-auto p-2 sm:-mt-20 -mt-24">


                    <div className="flex flex-col md:flex-row bg-white rounded-lg sm:shadow-lg shadow-xl border sm:border-gray-50 border-gray-200 px-2 py-3 sm:py-0 sm:px-0">


                        {/* Keywords Input */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <Briefcase className="text-emerald-500" size={26} />

                            <input
                                type="text"
                                placeholder="Search your Talent..."
                                className="w-full outline-none text-gray-600"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />

                        </div>



                        {/* Location Dropdown */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <MapPin className="text-emerald-500" size={26} />

                            <select className="w-full outline-none text-gray-600 bg-transparent p-2">
                                <option value="" className='w-full'>Select...</option>
                                <option value="location1">Location 1</option>
                                <option value="location2">Location 2</option>
                            </select>

                        </div>



                        {/* Category Dropdown */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <Calendar className="text-emerald-500" size={26} />

                            <select className="w-full outline-none text-gray-600 bg-transparent  p-2">
                                <option value="">Select...</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                            </select>


                        </div>



                        {/* Search Button */}
                        <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg sm:rounded-r-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                            <SearchIcon size={20} />
                            <span>Search</span>
                        </button>


                    </div>


                </div>



                {/* Job Card */}
                <section className='px-2 md:px-32 py-8'>

                    <div className='grid sm:grid-cols-4 gap-x-4 gap-y-8 grid-cols-1'>

                        {Array.from({ length: 12 }, (_, index) => (

                            <SutudentCard key={index} 
                            experience='2 years'
                            imageUrl='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                            name='John Doe'
                            salary='$50,000'
                            jobtitle='Software Engineer'
                            skills={['React', 'Node.js', 'MongoDB']}

                            />

                        ))}

                    </div>

                </section>

            </main>



        </>



    )




}
