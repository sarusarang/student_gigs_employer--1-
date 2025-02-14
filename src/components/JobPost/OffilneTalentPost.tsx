import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import RichTextEditor from '../Common/JobDis'
import { FileText } from 'lucide-react';
import toast from 'react-hot-toast';
import { OnlineTalentCategory } from '../../Hooks/Utlis';
import { OfflineJobPost } from '../../Hooks/Jobform';
import { Controller, useForm } from 'react-hook-form';
import Jobdata from '../../Data/JobData.json';
import Academic from '../../Data/Academic.json';
import { Country, State, City } from 'country-state-city';
import Flag from 'react-world-flags';
import { useEffect, useState } from 'react';



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
    pay_structure: string;
    salary_type: string;
    job_location_map: string;
    street_address: string;
    city: string;
    state: string
    postal_code: string;
    country: string;

}




// country option types
interface CountryOption {
    value: string;
    label: string;
    flag: string;
}



// state option types
interface StateOption {
    value: string;
    label: string;
    stateCode: string;
    latitude: string;
    longitude: string;
}




interface CityOption {
    value: string;
    label: string;
    stateCode: string;
    latitude: string;
    longitude: string;
}



// Salary types
const compensationTypes: Option[] = [
    { label: "Hourly Rate", value: "hourly" },
    { label: "Daily Rate", value: "daily" },
    { label: "Monthly Salary", value: "monthly" },
    { label: "Annual Salary", value: "annual" },
    { label: "Project Based", value: "project" }
];


export default function OffilneTalentPost() {


    // Country and City
    const [countries, setCountries] = useState<CountryOption[]>([]);

    const [state, setState] = useState<StateOption[]>([]);

    const [SelectedState, setSelectedState] = useState<StateOption | null>(null);

    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

    const [cities, setCities] = useState<CityOption[]>([]);

    const [Selectedcities, setSelectedCities] = useState<CityOption[]>([]);



    // Get Online Talent
    const { data } = OnlineTalentCategory()


    // Post Online Job
    const { mutate: PostJob } = OfflineJobPost()



    // React Hook Form state
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm<Inputs>({ defaultValues: { job_description: "" } })




    // Load countries on mount
    useEffect(() => {

        const allCountries = Country.getAllCountries();

        const formattedCountries: CountryOption[] = allCountries.map(country => ({
            value: country.isoCode,
            label: country.name,
            flag: country.isoCode
        }));

        formattedCountries.sort((a, b) => a.label.localeCompare(b.label));

        setCountries(formattedCountries);

    }, [])



    // Load State based on selected country
    useEffect(() => {

        if (selectedCountry) {

            const countryStates = State.getStatesOfCountry(selectedCountry.value) || [];

            const formattedStates: StateOption[] = countryStates.map(state => ({
                value: state.name,
                label: state.name,
                stateCode: state.isoCode,
                latitude: state?.latitude ?? '',
                longitude: state?.longitude ?? ''
            }));

            formattedStates.sort((a, b) => a.label.localeCompare(b.label));

            setState(formattedStates);

        } else {
            setState([]);
        }
    }, [selectedCountry])




    // Load cities based on State
    useEffect(() => {

        if (selectedCountry && SelectedState) {

            const countryCities = City.getCitiesOfState(selectedCountry.value, SelectedState.stateCode) || [];

            const formattedCities: CityOption[] = countryCities.map(city => ({
                value: city.name,
                label: city.name,
                stateCode: city.stateCode,
                latitude: city?.latitude ?? '',
                longitude: city?.longitude ?? ''
            }));

            formattedCities.sort((a, b) => a.label.localeCompare(b.label));

            setCities(formattedCities);

        } else {
            setCities([]);
        }
    }, [SelectedState, data, selectedCountry])




    // Select Styles
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



    // From submission
    const handleFormSubmit = (data: Inputs) => {

        const formdata = new FormData()

        formdata.append("job_title", data.job_title)
        formdata.append("job_description", data.job_description)
        formdata.append("category", data.category)
        formdata.append("age_requirement_min", data.age_requirement_min)
        formdata.append("age_requirement_max", data.age_requirement_max)
        formdata.append("preferred_academic_courses", data.preferred_academic_courses)
        formdata.append("pay_structure", data.pay_structure)
        formdata.append("salary_type", data.salary_type)
        formdata.append("job_location_map", data.job_location_map)
        formdata.append("street_address", data.street_address)
        formdata.append("city", data.city)
        formdata.append("state", data.state)
        formdata.append("postal_code", data.postal_code)
        formdata.append("country", data.country)

        PostJob({ formData: formdata }, {

            onSuccess: (res) => {

                if (res.status >= 200 && res.status <= 300) {

                    toast.success("Job Posted successfully")
                    reset()

                } else {

                    toast.error("Something went wrong. Please try again.")

                    console.log(res);

                }
            }
        })

    }



    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', })

    return (



        <>

            <div className="container">


                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 shadow-sm p-2 sm:p-8  rounded-lg bg-orange-600/5">

                    <h1 className="text-2xl font-semibold py-3 text-gray-800 ">OFFLINE/TALENT*</h1>




                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Title *
                            {errors.job_title && (
                                <span className="text-red-500 ml-2 text-xs">Required</span>
                            )}
                        </label>

                        <Controller
                            name="job_title"
                            control={control}
                            rules={{ required: "Job Title is required" }}
                            render={({ field: { onChange, value, ref } }) => (
                                <CreatableSelect
                                    ref={ref}
                                    options={Jobdata}
                                    value={value ? Jobdata.find((option) => option.value === value) : null}
                                    onChange={(selectedOption) => onChange(selectedOption?.label)}
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


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Job Type */}
                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category *
                                {errors.category && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}
                            </label>

                            <Controller
                                name="category"
                                control={control}
                                rules={{ required: "Job Category is required" }}
                                render={({ field: { onChange, value, ref } }) => (
                                    <CreatableSelect
                                        ref={ref}
                                        options={data?.offline}
                                        value={value ? data?.online.find((option: any) => option.value === value) : null}
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
                                {errors.preferred_academic_courses && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}
                            </label>
                            <Controller
                                name="preferred_academic_courses"
                                control={control}
                                rules={{ required: "Academic Course is required" }}
                                render={({ field: { onChange, value, ref } }) => (
                                    <CreatableSelect
                                        ref={ref}
                                        options={Academic}
                                        value={value ? Academic.find((option) => option.label === value) : null}
                                        onChange={(selectedOption) => onChange(selectedOption?.label)}
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

                    </div>

                    {/*Age */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Age Preference*
                                {errors.age_requirement_min && errors.age_requirement_max && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}
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
                                {errors.salary_type && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}
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
                                        onChange={(selectedOption) => onChange(selectedOption?.label)}
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
                                {errors.pay_structure && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}
                            </label>

                            <input
                                type="text"
                                placeholder="Amount"
                                {...register('pay_structure', { required: "Amount is required" })}
                                onChange={(e) => {
                                    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                    if (value) {
                                        e.target.value = Number(value).toLocaleString(); // Format with commas
                                    } else {
                                        e.target.value = ""; // Keep input empty if cleared
                                    }
                                }}
                                className="block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                                required
                            />

                        </div>

                    </div>




                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Country */}
                        <div className="">


                            <label
                                htmlFor="country"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Country*
                                {errors.country && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}

                            </label>


                            <div className="mt-2">
                                <Controller
                                    name="country"
                                    control={control}
                                    rules={{ required: "Country is required" }}
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Select
                                            ref={ref}
                                            options={countries}
                                            value={countries.find(country => country.label === value) || selectedCountry || null}
                                            onChange={(option) => { setSelectedCountry(option), onChange(option?.label) }}
                                            placeholder="Select a country..."
                                            isSearchable={true}
                                            styles={customSelectStyles}
                                            className="mt-1"
                                            classNamePrefix="select"
                                            formatOptionLabel={(option: CountryOption) => (
                                                <div className="flex items-center">
                                                    <Flag code={option.flag} style={{ width: 20, height: 15, marginRight: 10 }} />
                                                    {option.label}
                                                </div>
                                            )}

                                        />
                                    )}
                                />
                            </div>
                        </div>




                        {/* State */}
                        <div className="">

                            <label
                                htmlFor="city-area"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                State*
                                {errors.state && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}

                            </label>

                            <div className="mt-2">
                                <Controller
                                    rules={{ required: "State is required" }}
                                    name="state"
                                    control={control}
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Select
                                            ref={ref}
                                            options={state}
                                            value={state.find(state => state.value === value) || SelectedState || null}
                                            onChange={(option: any) => { setSelectedState(option), onChange(option.value) }}
                                            placeholder={selectedCountry && Object.keys(selectedCountry).length > 0 ? "Select a State..." : "First select a country"}
                                            isSearchable={true}
                                            isDisabled={!selectedCountry || Object.keys(selectedCountry).length === 0}
                                            styles={customSelectStyles}
                                            className="mt-1"
                                            classNamePrefix="select"
                                        />
                                    )}
                                />
                            </div>
                        </div>

                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/*City */}
                        <div className="">
                            <label
                                htmlFor="city-area"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                City*
                                {errors.city && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}

                            </label>
                            <div className="mt-2">
                                <Controller
                                    name="city"
                                    rules={{ required: "City is required" }}
                                    control={control}
                                    render={({ field: { onChange, value, ref } }) => (
                                        <Select
                                            ref={ref}
                                            options={cities}
                                            value={cities.find(city => city.value === value) || Selectedcities || null}
                                            onChange={(option: any) => { setSelectedCities(option), onChange(option.value) }}
                                            placeholder={
                                                selectedCountry
                                                    ? SelectedState
                                                        ? "Select a city..."
                                                        : "First select a state"
                                                    : "First select a country"
                                            }
                                            isSearchable={true}
                                            isDisabled={!selectedCountry || Object.keys(selectedCountry).length === 0}
                                            className="basic-single mt-1"
                                            styles={customSelectStyles}
                                            classNamePrefix="select"
                                        />
                                    )}
                                />
                            </div>
                        </div>



                        {/* ZIP / Postal code */}
                        <div className="">
                            <label
                                htmlFor="postal-code"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                ZIP / Postal code *
                                {errors.postal_code && (
                                    <span className="text-red-500 ml-2 text-xs">Required</span>
                                )}

                            </label>
                            <div className="mt-2">
                                <input
                                    id="postal-code"
                                    type="text"
                                    placeholder='ZIP / Postal code'
                                    autoComplete="postal-code"
                                    {...register("postal_code", { required: true })}
                                    className="block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                                />
                            </div>
                        </div>

                    </div>


                    {/* Address */}
                    <div className="col-span-full">
                        <label
                            htmlFor="street-address"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Street address*
                            {errors.street_address && (
                                <span className="text-red-500 ml-2 text-xs">Required</span>
                            )}
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="street-address"
                                rows={7}
                                placeholder='Street address'
                                autoComplete="street-address"
                                {...register("street_address", { required: true })}
                                className="block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm "
                            />
                        </div>
                    </div>





                    {/* Portfolio/LinkedIn Profile Link */}
                    <div className="col-span-full mt-2">
                        <label
                            htmlFor="location-on-map"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Location On Map*
                            {errors.job_location_map && (
                                <span className="text-red-500 ml-2 text-xs">Required</span>
                            )}
                        </label>
                        <input
                            id="location-on-map"
                            autoComplete="location-on-map"
                            type="url"
                            {...register("job_location_map", {
                                // Validate if the URL is valid
                                pattern: {
                                    value: /^(https?:\/\/)(www\.)?([a-zA-Z0-9-]+)\.(com|org|net|io|co\.in|co\.uk|edu|gov)\/?([a-zA-Z0-9\-\/]+)?$/, // Regex for valid URLs
                                    message: "Please enter a valid URL"
                                },
                            })}
                            className="block w-full p-4 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-[42px]"
                            placeholder="Enter your portfolio or LinkedIn profile URL"
                        />

                    </div>




                    {/* Job Description */}
                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Description*
                            {errors.job_description && (
                                <span className="text-red-500 ml-2 text-xs">Required</span>
                            )}
                        </label>

                        <Controller
                            name="job_description"
                            control={control}
                            rules={{ required: "Job Description is required" }}
                            render={({ field: { onChange, value } }) => (

                                <RichTextEditor
                                    onChange={(content) => onChange(content)}
                                    minCharacters={4000}
                                    value={value}
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
