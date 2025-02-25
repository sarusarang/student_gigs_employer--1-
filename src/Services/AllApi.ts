import { CommonApi } from "./CommonApi";



const Base_Url = "https://server.studentsgigs.com/api/employer"




// User Register
export const RegisterUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/register/`, data, "")

}



// User Login
export const LoginUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/api/token/`, data, "")

}


//Google Login
export const GoogleLogin = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/api/google-auth/`, data, "")

}


//Get Job Categories
export const GetOnlineTalent = async () => {

    return await CommonApi("GET", `${Base_Url}/talent-categories/`, "", "")

}



// Get User profile
export const GetUserProfile = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employer-info/`, "", header)

}



// Add User profile
export const AddUserProfile = async (data: any, header: object, id: string) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("PUT", `${Base_Url}/employer-info/?${params.toString()}`, data, header)

}



//POST Online Job
export const PostOnlineJob = async (data: any, header: any) => {

    return await CommonApi("POST", `${Base_Url}/online-job-info/`, data, header)

}



//POST Offline Job
export const PostOfflineJob = async (data: any, header: any) => {

    return await CommonApi("POST", `${Base_Url}/offline-job-info/`, data, header)

}




// Get Jobs
export const GetJobs = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employer-jobs/`, "", header)

}


// Delete User Education Information
export const DeleteJobs = async (id: string, header: object, type: string) => {

    const params = new URLSearchParams({ pk: id, type: type })

    return await CommonApi("DELETE", `${Base_Url}/employer-jobs/?${params.toString()}`, "", header)

}



// Get Home Slider
export const GetHomeSlider = async () => {

    return await CommonApi("GET", `${Base_Url}/home-slider-employer/`, "", "")

}



//GET Locations
export const GetLocations = async (search: string) => {

    const params = new URLSearchParams({ query: search })

    return await CommonApi("GET", `${Base_Url}/locations-employer/?${params.toString()}`, "", "")

}


//Search Students
export const GetSearchedStudents = async (category: string, location: string, salary_type: string, header: object, isAuthenticated: boolean, page: number) => {


    const params = new URLSearchParams({ category: category, location: location, availability: salary_type, page: page.toString() })

    if (isAuthenticated) {

        return await CommonApi("GET", `${Base_Url}/search-employee/?${params.toString()}`, "", header)

    }

    return await CommonApi("GET", `${Base_Url}/search-employee/?${params.toString()}`, "", "")

}



//GET Single Talent
export const GetSingleTalent = async (id: string, header: object) => {

    const params = new URLSearchParams({ id: id })

    return await CommonApi("GET", `${Base_Url}/employee-data/?${params.toString()}`, "", header)

}


// Get Dashboard Stats
export const GetDashboardStats = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/dashboard-data1/`, "", header)

}



//GET Job Applicants
export const GetJobApplicants = async (id: string, job_type: string, header: object) => {

    const params = new URLSearchParams({ id: id , job_type: job_type })

    return await CommonApi("GET", `${Base_Url}/dashboard-applications/?${params.toString()}`, "", header)

}