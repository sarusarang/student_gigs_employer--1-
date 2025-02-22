import { Briefcase, Calendar, MapPin, SearchIcon } from "lucide-react"
import { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import Selecet from 'react-select';
import { AllLocations } from "../../Hooks/Utlis";
import { useStudentSearch } from "../../Context/StudentFilterContext";
import { OnlineTalentCategory } from "../../Hooks/Utlis";



// form inputs
interface Inputs {

    category: string
    location: string
    salary_type: string
}


// types
interface Option {
    value: string;
    label: string;
}



// Compensation Types
const compensationTypes: Option[] = [

    { label: "Hourly Rate", value: "hourly" },
    { label: "Daily Rate", value: "daily" },
    { label: "Monthly Salary", value: "monthly" },
    { label: "Annual Salary", value: "annual" },
    { label: "Project Based", value: "project" }
];




export default function FilterBar() {


    // Search keyword
    const [Search, setSearch] = useState<string>("")


    // Job serach context
    const { updateSearchParams } = useStudentSearch();


    // Get Job Category
    const { data, isLoading, isFetching } = OnlineTalentCategory()


    // Form State
    const { handleSubmit, control, } = useForm<Inputs>();



    // Get All Locations
    const { data: Location, isLoading: LocationLoading } = AllLocations(Search)



    // On Submit
    const Onsubmit = (data: Inputs) => {

        console.log(data);


        updateSearchParams({
            category: data.category,
            location: data.location,
            salary_type: data.salary_type
        })

    }


    return (

        <>

            {/* Filter section */}
            <div className="w-full max-w-7xl mx-auto p-2 sm:-mt-20 -mt-24">


                <form onSubmit={handleSubmit(Onsubmit)}>


                    <div className="flex flex-col md:flex-row bg-white rounded-lg sm:shadow-lg shadow-xl border sm:border-gray-50 border-gray-300 px-2 py-3 sm:py-0 sm:px-0">


                        {/* Keywords Input */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <Briefcase className="text-emerald-500" size={26} />

                            <div className="w-full">
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Select
                                            ref={ref}
                                            options={data?.all_jobs}
                                            value={data?.all_jobs.find((option: Option) => option.value === value) || null}
                                            onChange={(option: any) => onChange(option ? option.value : null)}
                                            placeholder="Select a Category...."
                                            isSearchable={true}
                                            isClearable={true}
                                            isLoading={isLoading || isFetching}
                                            noOptionsMessage={() => "No options Found..."}
                                            classNamePrefix="select"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    border: "none",
                                                    boxShadow: "none",
                                                    "&:hover": { border: "none" },
                                                }),
                                                dropdownIndicator: (provided) => ({
                                                    ...provided,
                                                    color: "#555",
                                                }),
                                                indicatorsContainer: (provided) => ({
                                                    ...provided,
                                                    padding: "2px",
                                                }),
                                            }}
                                        />

                                    )}
                                />

                            </div>

                        </div>


                        {/* Location Dropdown */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <MapPin className="text-emerald-500" size={26} />

                            <div className="w-full">

                                <div className="mt-2">
                                    <Controller
                                        name="location"
                                        control={control}
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Select
                                                ref={ref}
                                                options={Location}
                                                onInputChange={(value) => setSearch(value)}
                                                value={value ? Location?.find((option: Option) => option?.label === value) : null}
                                                isSearchable={true}
                                                isClearable={true}
                                                className="basic-single"
                                                onChange={(option: any) => { onChange(option?.label) }}
                                                placeholder="Search a City...."
                                                classNamePrefix="select"
                                                noOptionsMessage={() => "No Locations Found..."}
                                                isLoading={LocationLoading}
                                                styles={{
                                                    control: (provided) => ({
                                                        ...provided,
                                                        border: "none",         // Remove border
                                                        boxShadow: "none",      // Remove focus ring
                                                        "&:hover": { border: "none" } // Ensure no border on hover
                                                    }),
                                                    dropdownIndicator: (provided) => ({
                                                        ...provided,
                                                        color: "#555",          // Optional: Adjust dropdown arrow color
                                                    }),
                                                    indicatorsContainer: (provided) => ({
                                                        ...provided,
                                                        padding: "2px",         // Optional: Adjust spacing for cleaner look
                                                    }),

                                                }}
                                            />
                                        )}
                                    />
                                </div>

                            </div>

                        </div>


                        {/* Category Dropdown */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <Calendar className="text-emerald-500" size={18} />

                            {/* Availability */}
                            <div className="w-full">

                                <div>
                                    <Controller
                                        name="salary_type"
                                        control={control}
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Selecet
                                                ref={ref}
                                                options={compensationTypes}
                                                value={value ? compensationTypes?.find((option) => option?.label === value) : null}
                                                onChange={(option) => { onChange(option?.label) }}
                                                placeholder={"Select Your Salary Type..."}
                                                isSearchable={false}
                                                className="basic-single"
                                                isClearable={true}
                                                classNamePrefix="select"
                                                styles={{
                                                    control: (provided) => ({
                                                        ...provided,
                                                        border: "none",         // Remove border
                                                        boxShadow: "none",      // Remove focus ring
                                                        "&:hover": { border: "none" } // Ensure no border on hover
                                                    }),
                                                    dropdownIndicator: (provided) => ({
                                                        ...provided,
                                                        color: "#555",          // Optional: Adjust dropdown arrow color
                                                    }),
                                                    indicatorsContainer: (provided) => ({
                                                        ...provided,
                                                        padding: "2px",         // Optional: Adjust spacing for cleaner look
                                                    }),


                                                }}

                                            />
                                        )}
                                    />
                                </div>

                            </div>
                        </div>


                        {/* Search Button */}
                        <button type='submit' className="bg-emerald-500 text-white px-8 py-3 rounded-lg sm:rounded-r-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                            <SearchIcon size={20} />
                            <span>Search</span>
                        </button>

                    </div>

                </form>

            </div>

        </>


    )
}
