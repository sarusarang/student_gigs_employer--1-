import { useState } from "react";
import CompanyOpenCard from "../components/Common/CompanyOpenings"
import ModernProfileModal from "../components/Common/ProfileModal";
import { GetProfile } from "../Hooks/UserProfile";

export default function UserProfile() {



    const { data } = GetProfile()

    console.log(data)
    

    // Profile Modal
    const [isModalOpen, setIsModalOpen] = useState(false)


    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', })


    return (


        <>

            <main className="w-full h-auto">


                <div >

                    <div className="relative -z-0">

                        {/* Dark overlay with green tint */}
                        <div className="relative bg-emerald-900/90 overflow-hidden h-[50vh]">

                            {/* Background image */}
                            <div
                                className="absolute inset-0 z-0 bg-[url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?cs=srgb&dl=pexels-seven11nash-380769.jpg&fm=jpg')] bg-cover bg-no-repeat bg-center opacity-20"
                                aria-hidden="true"
                            />


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


                    {/* Profile card */}
                    <div>

                        <div className="-mt-14 flex flex-col sm:flex-row  md:p-8 p-5 justify-between w-[95%] md:w-3/4 m-auto border border-gray-200 shadow-sm bg-white rounded-lg relative top-[-40px] gap-5 sm:gap-0">

                            <div className="flex">

                                <div>
                                    <img
                                        src="https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png"
                                        alt="logo"
                                        loading="lazy"
                                        className=" md:w-[80px] w-[60px] shadow-lg rounded-lg p-2"
                                    />
                                </div>


                                <div className="content-center pl-3">
                                    <h2 className="font-bold text-md">Google</h2>
                                    <div className="flex gap-1">
                                        <i className="fas fa-map-marker-alt pt-1 text-gray-400"></i>
                                        <p className="text-gray-400">USA</p>
                                    </div>
                                </div>


                            </div>


                            <div className="flex md:gap-4 gap-3 items-center">
                                <div>
                                    <a>
                                        <button onClick={() => setIsModalOpen(true)} className="hover:cursor-pointer rounded-md shadow-md md:px-4 px-2 py-1 bg-gray-200 text-[#059669] font-bold hover:scale-110 duration-300">
                                            Edit Deatils
                                        </button>
                                    </a>
                                </div>
                            </div>


                        </div>


                    </div>



                    <div className="w-full px-2 sm:px-0 sm:w-3/4 m-auto ">

                        <div className="">
                            <h1 className="text-2xl font-semibold text-gray-800 pb-5">
                                Company Story
                            </h1>
                            <p className="text-[1rem] text-gray-500 pb-2 text-justify text-pretty">
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout. The point of
                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                letters, as opposed.
                            </p>
                            <p className="text-[1rem] text-gray-500 text-justify text-pretty">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                has roots in a piece of classical Latin literature from 45 BC, making
                                it over 2000 years old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum passage.
                            </p>
                        </div>


                        <div className="pt-5">
                            <div>
                                <img
                                    src="https://img.freepik.com/premium-photo/computers-data-center-facility-used-managing-rackmounts-energy_482257-93392.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_tags_boosted"
                                    alt=""
                                    loading="lazy"
                                    className="w-full rounded-lg"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 ">
                                <img
                                    className="w-full rounded-lg"
                                    loading="lazy"
                                    src="https://img.freepik.com/premium-photo/computers-class-studying-it-technology_249974-15262.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_tags_boosted"
                                    alt=""
                                />
                                <img
                                    className="w-full rounded-lg"
                                    loading="lazy"
                                    src="https://img.freepik.com/premium-photo/computers-class-studying-it-technology_249974-15262.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_tags_boosted"
                                    alt=""
                                />
                            </div>
                        </div>

                    </div>


                    {/* Company openings */}
                    <div>

                        <CompanyOpenCard />

                    </div>


                </div>


                <ModernProfileModal title="Your Profile" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


            </main>



        </>



    )



}
