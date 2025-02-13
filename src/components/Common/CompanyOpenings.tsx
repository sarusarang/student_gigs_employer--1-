import { History, MousePointerClick } from "lucide-react";


export default function CompanyOpenCard() {


    return (

        <>


            <section className="py-10">


                <div className="w-full px-3 sm:px-0 sm:w-3/4 m-auto">

                    <h1 className="text-2xl font-semibold pb-3 text-gray-800 flex items-center pt-10">
                        Recent Posts <History size={24} className="ms-2 mt-1" />
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {Array.from({ length: 3 }, (_, index) => (


                            <div key={index} className="border border-gray-200 p-6 rounded-lg  hover:scale-105 duration-300 shadow-sm">

                                <div className="flex gap-10 items-center justify-center">

                                    <h2 className="font-semibold text-xl pb-3">Software Engineer</h2>

                                    <button className="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-white font-semibold px-3 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                        Apply <MousePointerClick size={20} className='ms-2' />
                                    </button>

                                </div>


                                <div className="flex gap-2">
                                    <span className="text-[#059669]">
                                        <i className="fas fa-clock pt-2"></i>
                                    </span>
                                    <p className="">posted 3 days ago</p>
                                </div>


                                <div className="flex justify-between py-5">
                                    <h2 className="bg-green-100 text-[#059669] font-semibold text-sm px-2 rounded-lg">
                                        Full Time
                                    </h2>

                                    <p className="font-semibold text-gray-400">
                                        <span className="text-[#059669]">&#8377;</span> 10k - 20k/m
                                    </p>
                                </div>

                                <hr className="border-gray-200" />

                                <div className="flex pt-5">
                                    <img
                                        src="https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png"
                                        className="w-[50px] p-2 shadow-md rounded-lg"
                                        alt="logo"
                                    />
                                    <div className="pl-3 items-center">
                                        <h2 className="font-semibold">Google</h2>
                                        <p>USA</p>
                                    </div>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </>

    )




}
