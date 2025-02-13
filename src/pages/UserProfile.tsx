import { useState } from "react";
import CompanyOpenCard from "../components/Common/CompanyOpenings"
import ModernProfileModal from "../components/Common/ProfileModal";
import { GetProfile } from "../Hooks/UserProfile";
import { AlertCircle, IdCard, SquarePen } from "lucide-react";

export default function UserProfile() {



    // Get User Profile data
    const { data, isFetching, isLoading, isError } = GetProfile()


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

                    {


                        isLoading || isFetching || isError ?

                            <div className="pb-10">

                                {/* Profile Card Skeleton */}
                                <div className="-mt-14 flex flex-col sm:flex-row md:p-8 p-5 justify-between w-[98%] md:w-3/4 m-auto border border-gray-200 shadow-sm bg-white rounded-lg relative top-[-40px] gap-5 sm:gap-0">
                                    <div className="animate-pulse flex flex-col sm:flex-row justify-between w-full">
                                        <div className="flex">
                                            <div className="w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-gray-200 rounded-full"></div>
                                            <div className="content-center pl-3 gap-y-0.5 flex flex-col">
                                                <div className="w-40 h-6 bg-gray-200 rounded"></div>
                                                <div className="w-64 h-5 bg-gray-200 rounded mt-2"></div>
                                                <div className="w-52 h-5 bg-gray-200 rounded mt-2"></div>
                                                <div className="w-40 h-5 bg-gray-200 rounded mt-2"></div>
                                            </div>
                                        </div>
                                        <div className="flex md:gap-4 gap-3 items-center">
                                            <div>
                                                <div className="w-24 h-10 bg-gray-200 rounded-md"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Company Story Skeleton */}
                                <div className="w-full px-3 sm:px-48 mt-8 animate-pulse">
                                    <div className="w-32 h-6 bg-gray-200 rounded mb-6"></div>
                                    <div className="space-y-4">
                                        <div className="w-full h-5 bg-gray-200 rounded"></div>
                                        <div className="w-full h-5 bg-gray-200 rounded"></div>
                                        <div className="w-3/4 h-5 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            </div>


                            :

                            <div>

                                {/* Profile card */}
                                <div>

                                    <div className="-mt-14 flex flex-col sm:flex-row  md:p-8 p-5 justify-between w-[98%] md:w-3/4 m-auto border border-gray-200 shadow-sm bg-white rounded-lg relative top-[-40px] gap-5 sm:gap-0">

                                        <div className="flex items-center">

                                            {/* Logo */}
                                            <div className="w-[70px] md:w-[90px] h-[70px] md:h-[90px] overflow-hidden rounded-full shadow-md">
                                                <img
                                                    src={data?.employer?.logo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOy82yDB7J2umGoJgo03iwxwDmpXTPfjzDyQ9BiiP7puTOh548G20OhHw6dfGc-LaQmrc&usqp=CAU"}
                                                    alt="logo"
                                                    loading="lazy"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>


                                            {/* Details */}
                                            <div className="content-center pl-3 gap-y-0.5 flex flex-col">

                                                <h2 className="font-bold text-xl">{data?.employer?.company_name}</h2>

                                                <div className="flex gap-1">
                                                    <i className="fas fa-map-marker-alt pt-1 text-gray-500"></i>
                                                    <p className="text-gray-500">
                                                        {data?.employer?.country?.label ||
                                                            data?.employer?.state ||
                                                            data?.employer?.city ||
                                                            data?.employer?.postal_code
                                                            ? `${data?.employer?.country?.label ?? ""} ${data?.employer?.state ?? ""} ${data?.employer?.city ?? ""} ${data?.employer?.postal_code ?? ""}`.trim()
                                                            : "Not Available"}
                                                    </p>
                                                </div>

                                                <div className="flex gap-1">
                                                    <i className="fas fa-envelope pt-1 text-gray-500"></i>
                                                    <a target="_blank" href={`mailto:${data?.employer?.email}`} className="text-gray-500 hover:text-indigo-500 hover:cursor-pointer">{data?.employer?.email ? data?.employer?.email : "Not Available"}</a>
                                                </div>

                                                <div className="flex gap-1">
                                                    <i className="fas pt-1 fa-phone text-gray-500"></i>
                                                    <a target="_blank" href={`tel:${data?.employer?.phone_number}`} className="text-gray-500 hover:text-indigo-500 hover:cursor-pointer">{data?.employer?.phone_number ? data?.employer?.phone_number : "Not Available"}</a>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="flex md:gap-4 gap-3 items-center">
                                            <div>
                                                <a>
                                                    <button onClick={() => setIsModalOpen(true)} className="hover:cursor-pointer flex items-center rounded-md shadow-md md:px-4 px-2 py-1 bg-gray-200 text-[#059669] font-bold hover:scale-110 duration-300">
                                                        Edit Deatils <SquarePen size={18} className="ms-2" />
                                                    </button>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                {/*Company Story */}
                                <div className="w-full px-3 sm:px-48">
                                    <h1 className="text-2xl font-medium text-gray-900 flex items-center mb-6">
                                        About Us <IdCard size={28} className="ms-2 mt-1" />
                                    </h1>

                                    <div className="space-y-6">
                                        <div className="text-gray-600 leading-relaxed text-justify">
                                            {data?.employer?.company_info ? (
                                                <p>{data.employer.company_info}</p>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center p-4 bg-gray-50/5 rounded-lg">
                                                    <AlertCircle className="w-10 h-10 text-gray-500" />
                                                    <p className="mt-2 text-gray-500 font-medium">About Us not Found.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>


                                {/* Company openings */}
                                <div>

                                    <CompanyOpenCard />

                                </div>


                            </div>
                    }


                </div>


                <ModernProfileModal title="Your Profile" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


            </main>



        </>



    )



}
