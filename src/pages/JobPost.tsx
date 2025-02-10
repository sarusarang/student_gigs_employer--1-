import Select from 'react-select';
import RichTextEditor from '../components/Common/JobDis';



// types
interface Option {
    value: string;
    label: string;
}



export default function JobPost() {


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

            <main className="w-full h-full pt-32 sm:pt-20 px-2 md:px-24 pb-10 bg-white">


                <div className="container">

                    <div className="bg-gradient-to-l from-green-500 to-green-700 mb-5">
                        <h1 className="text-3xl font-bold mb-4 text-center text-white p-4">
                            Job Post Application
                        </h1>
                    </div>

                    <form className="space-y-6 shadow-sm p-2 sm:p-8  rounded-lg bg-orange-600/5">


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Job Title*
                            </label>
                            <Select
                                options={qualificationOptions}
                                styles={customSelectStyles}
                                placeholder="Select Job Title"
                                className="mt-1"

                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Qualification / Eligibility*
                            </label>
                            <Select
                                options={qualificationOptions}
                                styles={customSelectStyles}
                                placeholder="Select Qualification"
                                className="mt-1"

                            />
                        </div>


                        {/* Salary */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Monthly Salary (Min)*
                                </label>
                                <input
                                    type="number"
                                    title="Monthly Salary (Min)"
                                    name="salaryMin"
                                    placeholder='Monthly Salary (Min)'
                                    className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Monthly Salary (Max)
                                </label>
                                <input
                                    type="number"
                                    title="Monthly Salary (Max)"
                                    name="salaryMax"
                                    placeholder='Monthly Salary (Max)'
                                    className="mt-1 p-4 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
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



                        {/* Job Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Job Type*
                            </label>
                            <Select
                                options={jobTypeOptions}
                                styles={customSelectStyles}
                                placeholder="Select Job Type"
                                className="mt-1"

                            />
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



                        {/* Hiring Process */}
                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Hiring Process*
                            </label>

                            <div className="mt-2 space-y-2">

                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="faceToFace"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Face to Face</span>
                                </label>


                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="writtenTest"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Written-test</span>
                                </label>


                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="telephonic"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Telephonic</span>
                                </label>


                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="groupDiscussion"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Group Discussion</span>
                                </label>


                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="virtualInterview"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Virtual Interview</span>
                                </label>


                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="walkIn"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Walk in</span>
                                </label>


                            </div>

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


                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="workFromHome"
                                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">
                                    This Job has work from home option
                                </span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="contractJob"
                                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">
                                    This Job is Contract Jobs
                                </span>
                            </label>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Post Job
                            </button>
                        </div>


                    </form>
                </div>



            </main>



        </>

    )
}
