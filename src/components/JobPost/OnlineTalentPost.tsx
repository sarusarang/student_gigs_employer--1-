import RichTextEditor from '../Common/JobDis'
import { FileText } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import { OnlineTalentCategory } from '../../Hooks/Utlis';




// types
interface Option {
    value: string;
    label: string;
}


// form types
interface Inputs {

    job_title: string;
    job_description: string;
    category: string;
    age_requirement_min: string;
    age_requirement_max: string;
    preferred_academic_courses: string;
    job_location: string;
    pay_structure: string;
    salary_type: string;
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




export default function OnlineTalentPost() {



    // Get Online Talent
    const {data} = OnlineTalentCategory()


    // React Hook Form state
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<Inputs>()


    console.log(data);
    


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



    const handleFormSubmit = (data: Inputs) => {


        console.log(data);


    }



    return (


        <>




            <div className="container">



                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 shadow-sm p-2 sm:p-8  rounded-lg bg-orange-600/5">

                    <h1 className="text-2xl font-semibold py-3 text-gray-800 ">ONLINE/TALENT*</h1>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Title *
                        </label>

                        <Controller
                            name="job_title"
                            control={control}
                            rules={{ required: "Job Title is required" }}
                            render={({ field: { onChange, value, ref } }) => (
                                <CreatableSelect
                                    ref={ref}
                                    options={jobTypeOptions}
                                    value={value ? jobTypeOptions.find((option) => option.value === value) : null}
                                    onChange={(selectedOption) => onChange(selectedOption?.value)}
                                    styles={customSelectStyles}
                                    placeholder="Select Job Title"
                                    className="mt-1"
                                    isClearable={true}
                                    classNamePrefix="select"
                                    isSearchable={true}
                                    noOptionsMessage={() => 'No options found'}

                                />

                            )}
                        />

                    </div>



                    {/* Job Type */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category *
                        </label>

                        <Controller
                            name="category"
                            control={control}
                            rules={{ required: "Job Category is required" }}
                            render={({ field: { onChange, value, ref } }) => (
                                <CreatableSelect
                                    ref={ref}
                                    options={jobTypeOptions}
                                    value={value ? jobTypeOptions.find((option) => option.value === value) : null}
                                    onChange={(selectedOption) => onChange(selectedOption?.value)}
                                    styles={customSelectStyles}
                                    placeholder="Select Job Category"
                                    className="mt-1"
                                    isClearable={true}
                                    classNamePrefix="select"
                                    isSearchable={true}
                                    noOptionsMessage={() => 'No options found'}

                                />

                            )}
                        />

                    </div>



                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Academic Course *
                        </label>
                        <Controller
                            name="preferred_academic_courses"
                            control={control}
                            rules={{ required: "Academic Course is required" }}
                            render={({ field: { onChange, value, ref } }) => (
                                <CreatableSelect
                                    ref={ref}
                                    options={qualificationOptions}
                                    value={value ? qualificationOptions.find((option) => option.value === value) : null}
                                    onChange={(selectedOption) => onChange(selectedOption?.value)}
                                    styles={customSelectStyles}
                                    placeholder="Select Academic Course"
                                    className="mt-1"
                                    isClearable={true}
                                    classNamePrefix="select"
                                    isSearchable={true}
                                    noOptionsMessage={() => 'No options found'}

                                />

                            )}
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
                                    placeholder="Minimum Age"
                                    min="18"
                                    {...register('age_requirement_min', { required: "Minimum Age is required" })}
                                    className="mt-1 block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Maximum Age"
                                    min="18"
                                    {...register('age_requirement_max', { required: "Maximum Age is required" })}
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
                            <Controller
                                name="salary_type"
                                control={control}
                                rules={{ required: "Compensation is required" }}
                                render={({ field: { onChange, value, ref } }) => (
                                    <CreatableSelect
                                        ref={ref}
                                        options={compensationTypes}
                                        value={value ? compensationTypes.find((option) => option.value === value) : null}
                                        onChange={(selectedOption) => onChange(selectedOption?.value)}
                                        styles={customSelectStyles}
                                        placeholder="Select a compensation type"
                                        className="mt-1"
                                        isClearable={true}
                                        classNamePrefix="select"
                                        isSearchable={true}
                                        noOptionsMessage={() => 'No options found'}

                                    />

                                )}
                            />
                        </div>

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Amount *
                            </label>

                            <input
                                type="number"
                                placeholder="Amount"
                                {...register('pay_structure', { required: "Amount is required" })}
                                className=" block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                                required
                            />

                        </div>

                    </div>


                    {/* Job Description */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Description*
                        </label>

                        <Controller
                            name="job_description"
                            control={control}
                            rules={{ required: "Job Description is required" }}
                            render={({ field: { onChange } }) => (

                                <RichTextEditor
                                    onChange={(content) => onChange(content)}
                                    minCharacters={1000}
                                    placeholder="Enter job description..."
                                    className="mt-2"
                                />
                            )}
                        />


                    </div>

                    <div>
                        <button
                            type="submit"
                            className="inline-flex hover:cursor-pointer justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Post Job <FileText size={18} className='ms-2' />
                        </button>
                    </div>

                </form>

            </div>


        </>


    )


}
