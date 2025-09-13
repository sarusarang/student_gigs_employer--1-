import { useMutation } from "@tanstack/react-query"
import { RegisterUser, GoogleLogin, LoginUser, PostEmailVerification, PostResendOtp, PostResetPassword, PostMobileOtp , PostMobileOtpVerify } from "../Services/AllApi"




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





// Email Verification 
export const EmailVerification = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            try {

                const Response = await PostEmailVerification(data)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },
        onError: (error) => {
            console.error("Failed to Verify Email", error);
        },

    })


}




// Resend Otp
export const ResendOtp = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            try {

                const Response = await PostResendOtp(data)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },
        onError: (error) => {
            console.error("Failed to Resend Otp", error);
        },

    })

}





// Reset Password
export const ResetPassword = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            try {

                const Response = await PostResetPassword(data)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },
        onError: (error) => {

            console.error("Failed to Reset Password", error);

        },
    })


}



// Mobile Otp Request
export const useMobileOtp = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            try {

                const Response = await PostMobileOtp(data)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },
        onError: (error) => {
            console.error("Failed to Verify Email", error);
        },

    })

}




// Verify Mobile Otp
export const useVerifyMobileOtp = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            try {

                const Response = await PostMobileOtpVerify(data)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },
        onError: (error) => {
            console.error("Failed to Verify Email", error);
        },

    })

}