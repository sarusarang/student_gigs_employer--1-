import { CommonApi } from "./CommonApi";



const Base_Url = "http://localhost:8000/api/employer"




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
export const GetOnlineTalent = async (header: any) => {

    return await CommonApi("GET", `${Base_Url}/online-job-info/`, "", header)

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