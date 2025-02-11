import { useMutation } from "@tanstack/react-query"
import { RegisterUser, GoogleLogin, LoginUser } from "../Services/AllApi"




// Register User 
export const UserRegister = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            try {

                const Response = await RegisterUser(data)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        }


    })


}





// Login User 
export const UserLogin = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            try {

                const Response = await LoginUser(data)

                return Response

            } catch (err) {

                console.log(err);

            }

        },

    })

}




// Google Auth
export const GoogleAuth = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            try {

                const Response = await GoogleLogin(data)

                return Response

            } catch (err) {

                console.log(err);

            }

        },

    })

}