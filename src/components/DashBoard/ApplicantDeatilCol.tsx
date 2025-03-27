import React from 'react';
import { Link } from 'react-router-dom';
import { File, X, Mail, Phone, MapPin, ExternalLink, User, Unlink2 } from 'lucide-react';
import ResumeViewer from '../Common/ResumeViewer';


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


interface ApplicantDetailColumnProps {
    selectedApplicant: Applicant | null;
    setSelectedApplicant: (applicant: Applicant | null) => void;
}



const ApplicantDetailColumn: React.FC<ApplicantDetailColumnProps> = ({

    selectedApplicant,
    setSelectedApplicant

}) => {


    // Resume viewer
    const [isResumeOpen, setIsResumeOpen] = React.useState(false);


    return (

        <div id="applicant-detail-section" className={`lg:col-span-1 ${selectedApplicant ? 'block' : 'hidden lg:block'}`}>


            {selectedApplicant ? (

                <div className="bg-white rounded-xl shadow-sm p-5 h-full">


                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold flex items-center">
                            <File className="h-5 w-5 mr-2 text-amber-600" />
                            Applicant Details
                        </h2>
                        <button
                            className="lg:hidden text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedApplicant(null)}
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>


                    <div className="flex flex-col items-center mb-6">

                        <img
                            src={selectedApplicant?.employee?.profile?.profile_pic ?? "./DeaflutProfile.jpeg"}
                            loading='lazy'
                            alt={selectedApplicant?.employee?.name}
                            className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-amber-100"
                        />

                        <h2 className="text-xl font-semibold">{selectedApplicant?.employee?.name}</h2>

                        <p className="text-gray-600">{selectedApplicant?.employee?.job_title}</p>


                        {/* preferred job categories */}
                        {selectedApplicant?.employee?.preferred_job_categories && selectedApplicant?.employee?.preferred_job_categories.length > 0 && (

                            <div className="mt-3 flex flex-wrap gap-2 justify-center">
                                {selectedApplicant?.employee?.preferred_job_categories.map((skill: PreferredJobCategory, index: number) => (
                                    <span key={index} className="bg-blue-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        {skill?.preferred_job_category}
                                    </span>
                                ))}
                            </div>
                        )}

                    </div>

                    <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start">
                            <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p>{selectedApplicant?.employee?.email}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p>{selectedApplicant?.employee?.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p>{selectedApplicant?.employee?.preferred_work_location}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Unlink2 className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                            <div>
                                <p className="text-sm text-gray-500">portfolio Link</p>
                                <p>{selectedApplicant?.employee?.portfolio ? selectedApplicant?.employee?.portfolio : "Not Available"}</p>
                            </div>
                        </div>


                        <div className="flex items-start">

                            <File className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />

                            <div>
                                <p className="text-sm text-gray-500">Resume</p>

                                {selectedApplicant?.resume ?

                                    <a
                                        onClick={() => setIsResumeOpen(true)}
                                        className="text-amber-600 flex items-center hover:underline hover:cursor-pointer"
                                        rel="noopener noreferrer"
                                    >
                                        View Resume <ExternalLink className="h-3 w-3 ml-1" />
                                    </a>

                                    : "Not Available"

                                }

                            </div>

                        </div>


                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">

                        {/* <button className="bg-amber-500 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                            <Calendar className="h-4 w-4 mr-2" /> Schedule Interview
                        </button>

                        <button className="border border-gray-300 hover:bg-gray-50 text-gray-800 py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                            <Mail className="h-4 w-4 mr-2" /> Send Message
                        </button> */}

                        <Link to={`/studentprofile/${selectedApplicant?.employee?.user}`} className="col-span-2 border bg-amber-500 border-gray-300 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                            <User className="h-4 w-4 mr-2" /> View Profile
                        </Link>

                    </div>

                </div>


            ) : (
                <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center justify-center h-full">
                    <div className="bg-amber-100 p-4 rounded-full mb-4">
                        <File className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Select an Applicant</h3>
                    <p className="text-center text-gray-500">Select an applicant to view their details and resume</p>
                </div>
            )}

            <ResumeViewer resumeUrl={selectedApplicant?.resume ?? null} isOpen={isResumeOpen} onRequestClose={() => setIsResumeOpen(false)} />

        </div>
    );
};

export default ApplicantDetailColumn;