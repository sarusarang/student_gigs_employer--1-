import Select from 'react-select';
import RichTextEditor from '../Common/JobDis'
import { FileText } from 'lucide-react';





// types
interface Option {
    value: string;
    label: string;
}




const qualificationOptions: Option[] = [
    { value: 'Bachelor', label: 'Bachelor' },
    { value: 'Master', label: 'Master' },
    { value: 'PhD', label: 'PhD' }
];

const jobTypeOptions: Option[] = [
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' },
    { value: 'Contract', label: 'Contract' }
];



const compensationTypes: Option[] = [
    { label: "Hourly Rate", value: "hourly" },
    { label: "Daily Rate", value: "daily" },
    { label: "Monthly Salary", value: "monthly" },
    { label: "Annual Salary", value: "annual" },
    { label: "Project Based", value: "project" }
];



export default function OffilneTalentPost() {




    const customSelectStyles = {
        control: (base: any) => ({
            ...base,
            minHeight: '42px',
            backgroundColor: '',
            borderColor: '#ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added subtle shadow
            '&:hover': {
                borderColor: '#6366F1',
                boxShadow: '0 4px 6px rgba(99, 102, 241, 0.3)' // Stronger shadow on hover
            }
        }),
        option: (base: any, state: { isSelected: boolean }) => ({
            ...base,
            backgroundColor: state.isSelected ? '#4F46E5' : base.backgroundColor,
            '&:hover': {
                backgroundColor: state.isSelected ? '#4F46E5' : '#F3F4F6'
            }
        })
    };






    return (



        <>


            <div className="container">


                <form className="space-y-6 shadow-sm p-2 sm:p-8  rounded-lg bg-orange-600/5">


                    <h1 className="text-2xl font-semibold py-3 text-gray-800 ">OFFLINE/TALENT*</h1>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Title *
                        </label>
                        <Select
                            options={qualificationOptions}
                            styles={customSelectStyles}
                            placeholder="Select Job Title"
                            className="mt-1"

                        />
                    </div>



                    {/* Job Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category *
                        </label>
                        <Select
                            options={jobTypeOptions}
                            styles={customSelectStyles}
                            placeholder="Select Job Type"
                            className="mt-1"

                        />
                    </div>



                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Academic Course *
                        </label>
                        <Select
                            options={qualificationOptions}
                            styles={customSelectStyles}
                            placeholder="Select Qualification"
                            className="mt-1"

                        />
                    </div>


                    {/*Age */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Age Preference*
                            </label>
                            <div className="flex gap-4">
                                <input
                                    type="number"
                                    name="ageMin"
                                    placeholder="Minimum Age"
                                    min="18"
                                    className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                                    required
                                />
                                <input
                                    type="number"
                                    name="ageMax"
                                    placeholder="Maximum Age"
                                    min="18"
                                    className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                                    required
                                />
                            </div>
                        </div>

                    </div>



                    {/* Compensation Type */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Compensation/Pay Structure *
                            </label>
                            <Select
                                options={compensationTypes}
                                styles={customSelectStyles}
                                placeholder="Select Pay Type"
                                className="mt-1"

                            />
                        </div>

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Amount *
                            </label>

                            <input
                                type="number"
                                name="compensationAmount"
                                placeholder="Amount"
                                className=" block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                                required
                            />

                        </div>

                    </div>



                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="hideSalary"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                                Hide salary to applicants
                            </span>
                        </label>
                    </div>






                    {/* Job Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Location
                        </label>
                        <Select
                            options={jobTypeOptions}
                            styles={customSelectStyles}
                            placeholder="Select Job Location"
                            className="mt-1"

                        />
                    </div>


                    {/* Job Description */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Description*
                        </label>

                        <RichTextEditor
                            onChange={(content) => console.log(content)}
                            minCharacters={1000}
                            placeholder="Enter job description..."
                            className="mt-2"
                        />

                    </div>

                    <div>
                        <button
                            type="submit"
                            className="inline-flex hover:cursor-pointer items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Post Job <FileText size={18} className='ms-2' />
                        </button>
                    </div>

                </form>

            </div>




        </>


    )


}
