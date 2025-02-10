import { CommonApi } from "./CommonApi";



const Base_Url = ""



// User Register
export const RegisterUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/user/register/`, data, "")

}