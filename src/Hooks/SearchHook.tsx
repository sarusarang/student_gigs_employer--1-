import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../Context/AuthContext"
import { GetSearchedStudents } from "../Services/AllApi"




interface GetParams {

    category: string
    location: string
    salary_type: string
    page: number
}


// Get Searched Jobs
export const SerachedStudents = ({ category, location, salary_type, page }: GetParams) => {

    const { isAuthenticated } = useAuth()

    return useQuery({

        queryKey: ["serachedjobs", category, location, salary_type, page],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetSearchedStudents(category, location, salary_type, headers, isAuthenticated, page)

                return Response.data

            } catch (err) {

                console.error("Error fetching searched jobs:", err);
                return [];

            }

        },

    })

}