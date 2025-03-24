import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddUserProfile, GetUserProfile } from "../Services/AllApi";



// Get User Personal Information
export const GetProfile = () => {

    return useQuery({

        queryKey: ["UserProfile"],
        initialData: [],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                if (!token) {
                    throw new Error("Authentication token not found");
                }

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserProfile(headers)

                return Response.data


            } catch (err) {

                console.log(err);


            }
        },

    })

}




// Add User Profile
export const AddProfile = () => {


    interface MutationParams {
        formData: FormData;
        id: string;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData , id }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await AddUserProfile(formData, headers , id )

                return Response


            } catch (err) {

                console.log(err);

            }

        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["UserProfile"] });
            queryclient.invalidateQueries({ queryKey: ["GetPostedJob"] });

        },
        onError: (error) => {
            console.error("Failed to add client data:", error);
        },

    })

}