import React, { useState } from 'react';
import { Users, Filter, ChevronRight } from 'lucide-react';
import { JobApplicantsData } from '../../Hooks/DashboardHook';

// Define TypeScript interfaces for Job
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
}



// Define TypeScript interfaces for Employee
interface PreferredJobCategory {
    id: number;
    preferred_job_category: string;
    employee: number;
}

interface WorkPreference {
    id: number;
    interested_job_type: string;
    expected_salary_range: string;
    availability: string;
    transportation_availability: string;
    employee: number;
}

interface Profile {
    id: number;
    cover_photo: string;
    profile_pic: string;
    employee: number;
}

interface Employee {
    id: number;
    preferred_job_categories: PreferredJobCategory[];
    work_preferences: WorkPreference[];
    profile: Profile;
    name: string;
    profile_photo: string | null;
    email: string;
    phone: string;
    preferred_work_location: string;
    available_work_hours: number;
    available_working_periods_start_date: string;
    available_working_periods_end_date: string;
    portfolio: string | null;
    about: string;
    job_title: string;
    gender: string | null;
    user: number;
}


interface Applicant {
    id: number;
    employee: Employee;
    date_applied: string;
    resume: string;
    online_job: number;
    offline_job: number | null;
}




// Define TypeScript interfaces for Props
interface ApplicantListColumnProps {
    selectedJob: Job | null;
    selectedApplicant: Applicant | null;
    filterStatus: string;
    setFilterStatus: (status: string) => void;
    handleApplicantSelect: (applicant: Applicant) => void;
}



const ApplicantListColumn: React.FC<ApplicantListColumnProps> = ({
    selectedJob,
    selectedApplicant,
    filterStatus,
    setFilterStatus,
    handleApplicantSelect
}) => {


    const [isFiltering, setIsFiltering] = useState<boolean>(false);


    // Get Job Applicants
    const { data, isLoading, isFetching, isError } = JobApplicantsData(selectedJob?.id ?? 0, selectedJob?.job_type ?? "")


    return (


        <div className={`lg:col-span-1 ${selectedJob ? 'block' : 'hidden lg:block'}`}>

            {selectedJob ? (

                <div className="bg-white rounded-xl shadow-sm p-5 h-full">


                    <div className="flex justify-between items-center mb-4">


                        <h2 className="text-lg font-semibold flex items-center">
                            <Users className="h-5 w-5 mr-2 text-blue-600" />
                            Applicants for {selectedJob.job_title}
                        </h2>


                        <div className="relative">


                            <button
                                className="flex items-center text-sm text-gray-600 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-50"
                                onClick={() => setIsFiltering(!isFiltering)}
                            >
                                <Filter className="h-4 w-4 mr-2" />
                                {filterStatus}
                            </button>


                            {isFiltering && (

                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <ul className="py-1">
                                        {["All", "New", "Reviewed", "Screening", "Interview", "Hired", "Rejected"].map((status) => (
                                            <li
                                                key={status}
                                                className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    setFilterStatus(status);
                                                    setIsFiltering(false);
                                                }}
                                            >
                                                {status}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>

                    </div>


                    <div className="space-y-3 overflow-y-auto h-full">

                        {isFetching || isError || isLoading ? (

                            <div className="space-y-4">
                                {Array(5).fill(0).map((_, index) => (
                                    <div key={index} className="opacity-0 transform translate-y-4 transition-all duration-300 ease-out flex items-center p-3 border rounded-lg animate-pulse">
                                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                                        <div className="flex-1">
                                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                                            <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                                        </div>
                                        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                                    </div>
                                ))}
                            </div>

                        ) : data?.length === 0 ? (

                            <p className="text-gray-500 text-center py-8">No applicants match the current filter.</p>

                        ) : (

                            data?.map((applicant: Applicant) => (

                                <div
                                    key={applicant.id}
                                    className={`applicant-card opacity-0 transform translate-y-4 transition-all duration-300 ease-out flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${selectedApplicant?.id === applicant.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                                    onClick={() => handleApplicantSelect(applicant)}
                                >
                                    <img
                                        src={applicant?.employee?.profile?.profile_pic ?? "./DeaflutProfile.jpeg"}
                                        alt={applicant?.employee?.name}
                                        className="w-12 h-12 rounded-full object-cover mr-3"
                                    />

                                    <div className="flex-1">

                                        <h3 className="font-medium">{applicant?.employee?.name}</h3>

                                        <p className="text-sm text-gray-600">{applicant?.employee?.preferred_work_location ? applicant?.employee?.preferred_work_location : "N/A"}</p>

                                        <div className="flex items-center mt-1">

                                            <span className="text-sm font-medium text-gray-500">
                                                Applied on{" "}
                                                {applicant?.date_applied
                                                    ? new Date(applicant.date_applied).toLocaleDateString("en-GB", {
                                                        day: "2-digit",
                                                        month: "2-digit",
                                                        year: "2-digit",
                                                    })
                                                    : "N/A"}
                                            </span>

                                        </div>

                                    </div>

                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </div>
                            ))
                        )}
                    </div>

                </div>


            ) : (
                <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center h-full">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Select a Job</h3>
                    <p className="text-center text-gray-500">Choose a job posting to view its applicants</p>
                </div>
            )}


        </div>

    );
};

export default ApplicantListColumn;