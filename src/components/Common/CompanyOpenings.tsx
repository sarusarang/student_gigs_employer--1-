import { Trash } from "lucide-react";
import { useEffect, useState } from "react";



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

}


export default function CompanyOpenCard({ job_title, pay_structure, logo, company_name, posted_date, country, job_location, salary_type }: Props) {




    const [relativeTime, setRelativeTime] = useState("");

    const getRelativeTime = (dateString: string) => {
        const postedDate = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - postedDate.getTime()) / 1000);

        if (diffInSeconds < 60) return `Posted ${diffInSeconds} sec ago`;
        if (diffInSeconds < 3600) return `Posted ${Math.floor(diffInSeconds / 60)} min ago`;
        if (diffInSeconds < 86400) return `Posted ${Math.floor(diffInSeconds / 3600)} hr ago`;
        if (diffInSeconds < 30 * 86400) return `Posted ${Math.floor(diffInSeconds / 86400)} days ago`;

        return `Posted on ${postedDate.toDateString()}`; // Example: "Posted on Fri Feb 14 2025"
    };

    useEffect(() => {
        setRelativeTime(getRelativeTime(posted_date));

        const interval = setInterval(() => {
            setRelativeTime(getRelativeTime(posted_date));
        }, 60000); // Update every minute

        return () => clearInterval(interval); // Cleanup
    }, [posted_date]);



    return (

        <>

            <section className="py-5">

                <div className="w-full">

                    <div>

                        <div className="border border-gray-200 p-6 rounded-lg  hover:scale-105 duration-300 shadow-sm">

                            <div className="flex gap-10 items-center justify-center">

                                <h2 className="font-semibold text-xl pb-3">{job_title}</h2>

                                <button className="flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 text-white font-semibold px-3 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                    Delete<Trash size={20} className='ms-2' />
                                </button>

                            </div>


                            <div className="flex gap-2 items-center">
                                <span className="text-[#059669]">
                                    <i className="fas fa-clock pt-2"></i>
                                </span>
                                <p className="">posted {relativeTime}</p>
                            </div>


                            <div className="flex justify-between py-5">
                                <h2 className="bg-green-100 text-[#059669] font-semibold text-sm px-2 rounded-lg">
                                    Full Time
                                </h2>

                                <p className="font-semibold text-gray-400">
                                    <span className="text-[#059669]">&#8377;</span> {pay_structure} - {salary_type}
                                </p>
                            </div>

                            <hr className="border-gray-200" />

                            <div className="flex pt-5">
                                <img
                                    src={logo ? logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"}
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
