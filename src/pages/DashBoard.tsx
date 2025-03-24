import React, { useState, useEffect } from 'react';
import DashStatsCard from '../components/DashBoard/DashStatsCard';
import Sidebar from '../components/Common/Sidebar';
import DashboardHeader from '../components/DashBoard/DashHeader';
import JobListingColumn from '../components/DashBoard/JobListColum';
import ApplicantListColumn from '../components/DashBoard/ApplicantColum';
import ApplicantDetailColumn from '../components/DashBoard/ApplicantDeatilCol';


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



const JobDashboard: React.FC = () => {


    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);

    const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

    const [filterStatus, setFilterStatus] = useState<string>("All");



    // Animation effect when jobs load
    useEffect(() => {
        const jobCards = document.querySelectorAll('.job-card');
        jobCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, []);



    // Function to handle job selection
    const handleJobSelect = (job: Job) => {

        setSelectedJob(job);

        setSelectedApplicant(null);

        setExpandedJobId(expandedJobId === job.id ? null : job.id);

        // Animate applicant cards when job is selected
        setTimeout(() => {
            const applicantCards = document.querySelectorAll('.applicant-card');
            applicantCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            });
        }, 300);
    };




    // Function to handle applicant selection
    const handleApplicantSelect = (applicant: Applicant) => {

        setSelectedApplicant(applicant);

        // Scroll to details section on mobile
        if (window.innerWidth < 768) {
            const detailSection = document.getElementById('applicant-detail-section');
            if (detailSection) {
                detailSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };




    // const filteredApplicants = selectedJob ?
    //     sampleApplicants.filter(applicant =>
    //         filterStatus === "All" || applicant.status === filterStatus
    //     ) : [];



    return (


        <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">


            {/* Sidebar */}
            <Sidebar />


            <div className="ml-16 p-6">


                {/* Dashboard Header */}
                <DashboardHeader />



                {/* Dashboard Stats */}
                <DashStatsCard />


                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                    {/* Job Listings Column */}
                    <JobListingColumn expandedJobId={expandedJobId} handleJobSelect={handleJobSelect} />



                    {/* Applicants Column */}
                    <ApplicantListColumn selectedJob={selectedJob} selectedApplicant={selectedApplicant} filterStatus={filterStatus} setFilterStatus={setFilterStatus} handleApplicantSelect={handleApplicantSelect} />



                    {/* Applicant Details Column */}
                    <ApplicantDetailColumn selectedApplicant={selectedApplicant} setSelectedApplicant={setSelectedApplicant} />


                </div>


            </div>


        </main>
    );
};

export default JobDashboard;