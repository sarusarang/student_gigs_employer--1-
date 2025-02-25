import { Briefcase, Clock, Users, ChevronUp, ChevronDown } from 'lucide-react';
import { GetPostedJob } from '../../Hooks/Jobform';
import { formatDistanceToNow } from 'date-fns';



// Define TypeScript interfaces
interface Country {
    value: string;
    label: string;
    flag: string;
}

interface Company {
    id: number;
    company_name: string;
    company_info: string;
    logo: string;
    email: string;
    phone_number: string;
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: Country;
    user: number;
}

interface Job {
    id: number;
    company: Company;
    job_title: string;
    job_description: string;
    category: string;
    age_requirement_min: number;
    age_requirement_max: number;
    preferred_academic_courses: string;
    pay_structure: string;
    salary_type: string;
    job_location: string | null;
    posted_date: string;
    job_type: string;
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    total_applied: number;
}



interface JobListingColumnProps {

    expandedJobId: number | null;
    handleJobSelect: (job: Job) => void;
}


const JobListingColumn: React.FC<JobListingColumnProps> = ({
    expandedJobId,
    handleJobSelect
}) => {



    // Get Posted Jobs
    const { data, isLoading, isError, isFetching } = GetPostedJob()


    // posted time 
    const getTimeAgo = (postedTime: string) => {
        return formatDistanceToNow(new Date(postedTime), { addSuffix: true });
    };


    return (


        <div className="lg:col-span-1">


            <div className="bg-white rounded-xl shadow-sm p-5 h-fit">


                <h2 className="text-lg font-semibold mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                    Your Job Postings
                </h2>

                <div className="space-y-4 overflow-y-auto h-full">

                    {data?.jobs?.length === 0 ? (

                        <p className="text-gray-500 text-center py-8">No jobs found matching your search.</p>

                    ) : (

                        isLoading || isFetching || isError ? (

                            <div className="space-y-4">
                                {[...Array(3)].map((_, index) => (
                                    <div key={index} className="job-card animate-pulse border border-gray-200 rounded-lg p-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                                                <div className="h-3 w-48 bg-gray-200 rounded mb-2"></div>
                                                <div className="flex items-center mt-2">
                                                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end">
                                                <div className="h-6 w-20 bg-gray-200 rounded mb-2"></div>
                                                <div className="h-5 w-5 bg-gray-200 rounded-full mt-2"></div>
                                            </div>
                                        </div>

                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <div className="h-3 w-24 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        ) : (


                            data?.jobs?.map((job: Job) => (

                                <div
                                    key={job.id}
                                    className={`job-card opacity-0 transform translate-y-4 transition-all duration-300 ease-out cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-md ${expandedJobId === job.id ? 'border-blue-500 bg-blue-50' : ''}`}
                                    onClick={() => handleJobSelect(job)}
                                >
                                    <div className="flex justify-between items-start">

                                        <div>

                                            <h3 className="font-medium text-blue-600">{job?.job_title}</h3>

                                            <p className="text-sm text-gray-600">{job?.company?.company_name} • {job?.job_location}</p>

                                            <div className="flex items-center mt-2">
                                                <span className="ml-2 text-xs text-gray-500 flex items-center">
                                                    <Clock className="h-3 w-3 mr-1" /> {getTimeAgo(job.posted_date)}
                                                </span>
                                            </div>

                                        </div>

                                        <div className="flex flex-col items-end">

                                            <div className="flex items-center text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                                <Users className="h-4 w-4 mr-1" />
                                                {job?.total_applied}
                                            </div>

                                            {expandedJobId === job?.id ?
                                                <ChevronUp className="h-5 w-5 text-gray-500 mt-2" /> :
                                                <ChevronDown className="h-5 w-5 text-gray-500 mt-2" />}
                                        </div>

                                    </div>

                                    {expandedJobId === job?.id && (
                                        <div className="mt-3 pt-3 border-t border-gray-200 text-sm text-gray-600">
                                            <p>₹{job?.pay_structure} - {job?.salary_type}</p>
                                        </div>
                                    )}
                                </div>
                            )))
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobListingColumn;