import { useQuery } from "@tanstack/react-query";
import { GetDashboardStats, GetJobApplicants } from "../Services/AllApi";






// Get Dashboard Stats
export const DashStatsData = () => {

    return useQuery({

        queryKey: ["DashStatsData"],
        initialData: [],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                if (!token) {
                    throw new Error("Authentication token not found");
                }

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetDashboardStats(headers)

                return Response.data


            } catch (err) {

                console.log(err);


            }
        },

    })

}



// Get Job Applicants
export const JobApplicantsData = (id: number , job_type : string) => {

    return useQuery({

        queryKey: ["JobApplicantsData" , id , job_type],
        initialData: [],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                if (!token) {
                    throw new Error("Authentication token not found");
                }

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetJobApplicants(id.toString() , job_type , headers)

                return Response.data


            } catch (err) {

                console.log(err);


            }
        },

    })

}