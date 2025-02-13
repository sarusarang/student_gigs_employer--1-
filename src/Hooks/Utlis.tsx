import { useQuery } from "@tanstack/react-query";
import { GetOnlineTalent } from "../Services/AllApi";





// Get Online Talent
export const OnlineTalentCategory = () => {

    return useQuery({

        queryKey: ["OnlineTalentCategory"],

        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetOnlineTalent(headers)

                return Response.data

            } catch (err) {

                console.log(err);

            }

        },
        staleTime: 1000 * 60 * 10,

    })

}




