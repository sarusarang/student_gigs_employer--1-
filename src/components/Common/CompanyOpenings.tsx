import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { DeletePostedJobs } from "../../Hooks/Jobform";
import toast from "react-hot-toast";
import { formatDistanceToNow } from 'date-fns';


interface Props {

    job_title: string;
    pay_structure: string;
    logo: string
    company_name: string
    posted_date: string
    country: {
        value: string
        label: string
        flag: string
    }
    job_location: string
    salary_type: string
    job_type: string
    id: number

}


export default function CompanyOpenCard({ id, job_type, job_title, pay_structure, logo, company_name, posted_date, country, job_location, salary_type }: Props) {




    // Delete Jobs
    const { mutate: Delete } = DeletePostedJobs()



    const [timeAgo, setTimeAgo] = useState(formatDistanceToNow(new Date(posted_date), { addSuffix: true }));

    useEffect(() => {

        const interval = setInterval(() => {
            setTimeAgo(formatDistanceToNow(new Date(posted_date), { addSuffix: true }));
        }, 60000);

        return () => clearInterval(interval);

    }, [posted_date]);



    // Handle delete
    const HandleDelete = (id: string) => {

        Delete({ id: id, type: job_type }, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status < 300) {
                    toast.success("Job Deleted Successfully");
                } else {
                    toast.error("Something went wrong. Please try again Later.");
                }
            },
            onError: (error) => {
                toast.error("An error occurred: " + error.message);
            }

        })

    }



    return (

        <>

            <section className="py-3 sm:py-5">

                <div className="w-full h-full">

                    <div className="h-full">

                        <div className="border border-gray-200 p-6 rounded-lg hover:scale-105 duration-300 shadow-sm h-full flex flex-col">

                            <div className="flex gap-10 items-center justify-between">

                                <h2 className="font-semibold text-xl pb-3">{job_title}</h2>

                                <button onClick={() => HandleDelete(id.toString())} className="hover:cursor-pointer text-red-500 pb-3"><Trash2 className="tetxt-red-500" size={24} /></button>

                            </div>

                            <div className="flex gap-2 items-center">
                                <span className="text-[#059669]">
                                    <i className="fas fa-clock pt-2"></i>
                                </span>
                                <p>posted {timeAgo}</p>
                            </div>

                            <div className="flex justify-between py-5">
                                <h2 className="bg-green-100 text-[#059669] font-semibold text-sm px-2 rounded-lg">
                                    Full Time
                                </h2>
                                <p className="font-semibold text-gray-400 text-sm sm:text-[1rem]">
                                    <span className="text-[#059669]">&#8377;</span> {pay_structure} - {salary_type}
                                </p>
                            </div>

                            <hr className="border-gray-200" />

                            <div className="flex pt-5 mt-auto">
                                <img
                                    src={
                                        logo
                                            ? logo
                                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                                    }
                                    className="w-[50px] h-[50px] shadow-md rounded-full"
                                    alt="logo"
                                />
                                <div className="pl-3 items-center">
                                    <h2 className="font-semibold">{company_name}</h2>
                                    <p>{job_location ? job_location : country.label}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )





}
