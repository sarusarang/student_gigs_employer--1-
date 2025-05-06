import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PostOnlineJob, PostOfflineJob, GetJobs, DeleteJobs } from "../Services/AllApi";





// Get User Personal Information
export const GetPostedJob = () => {

    return useQuery({

        queryKey: ["GetPostedJob"],
        initialData: [],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                if (!token) {
                    throw new Error("Authentication token not found");
                }

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetJobs(headers)

                return Response.data


            } catch (err) {

                console.log(err);


            }
        },

    })

}



// Post Online Job
export const OnlineJobPost = () => {

    interface MutationParams {
        formData: FormData;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await PostOnlineJob(formData, headers)

                return Response


            } catch (err) {

                console.log(err);

            }

        },
        onError: (error) => {
            console.error("Failed to Job post:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["GetPostedJob"] });
        }

    })

}





// Post Offline Job
export const OfflineJobPost = () => {

    interface MutationParams {
        formData: FormData;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData }: MutationParams) => {


            if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const Response = await PostOfflineJob(formData, headers)

            return Response

        },
        onError: (error) => {
            console.error("Failed to Job post:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["GetPostedJob"] });
        }

    })

}






// Delete Posted Jobs
export const DeletePostedJobs = () => {

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ id, type }: { id: string, type: string }) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await DeleteJobs(id, headers, type)

                return Response

            }
            catch (err) {

                console.log(err);
            }

        },

        onError: (error) => {
            console.error("Failed to Delete Jobs:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["GetPostedJob"] });

        }

    })

}