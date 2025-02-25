import { motion } from "framer-motion";
import { DashStatsData } from "../../Hooks/DashboardHook";



export default function DashStatsCard() {


    // Get Dashboard Stats
    const { data, isLoading, isFetching, isError } = DashStatsData()


    return (


        <>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}

            >

                <section>

                    {

                        isLoading || isError || isFetching  ? (

                            // Loading Skeleton
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                {Array(4).fill(0).map((_, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-sm p-4 border-l-4 animate-pulse">
                                        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                                        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
                                    </div>
                                ))}
                            </div>

                        ) : (

                            // Dashboard Stats
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

                                <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-blue-500">
                                    <p className="text-sm text-gray-500 mb-1">Total Jobs</p>
                                    <h3 className="text-2xl font-bold">{data?.total_job}</h3>
                                </div>


                                <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-purple-500">
                                    <p className="text-sm text-gray-500 mb-1">Total Applicants</p>
                                    <h3 className="text-2xl font-bold">{data?.total_applied_users}</h3>
                                </div>


                                <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-green-500">
                                    <p className="text-sm text-gray-500 mb-1">Online Jobs</p>
                                    <h3 className="text-2xl font-bold">{data?.online_job}</h3>
                                </div>


                                <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-yellow-500">
                                    <p className="text-sm text-gray-500 mb-1">Offline Jobs</p>
                                    <h3 className="text-2xl font-bold">{data?.offline_job}</h3>
                                </div>

                            </div>

                        )

                    }

                </section>


            </motion.div>

        </>

    )





}
