import { useQuery } from "@tanstack/react-query";
import { GetUserPlans, GetAllPlans, GetPlanUsage } from "@/Services/AllApi";



// Type definitions for plan usage
export interface PlanFeature {
    key: string;
    limit: string;
    name: string;
    used: number;
}

export interface UserPlan {
    username: string;
    name: string;
    email: string;
    plan: string;
    planCreatedDate: string;
    planExpiryDate: string;
    planExpired: boolean;
    planFeatures: PlanFeature[];
}





// Get All Plans
export const AllPlans = () => {

    return useQuery({

        queryKey: ["allplans"],
        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const response = await GetAllPlans(headers);

                return response.data;

            } catch (err) {

                console.error("Error fetching all plans:", err);
                throw new Error("Failed to fetch all plans");

            }
        },

    });

}



// Get  User Plans
export const UserPlans = () => {

    return useQuery({

        queryKey: ["userplans"],
        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const response = await GetUserPlans(headers);

                return response.data;

            } catch (err) {

                console.error("Error fetching User plans:", err);
                throw new Error("Failed to fetch User plans");

            }
        },

    });

}





// Get Plan Usage
export const PlanUsage = () => {

    return useQuery<UserPlan>({

        queryKey: ["planUsage"],
        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const response = await GetPlanUsage(headers);

                return response.data;

            } catch (err) {

                console.error("Error fetching Plan Usage:", err);
                throw new Error("Failed to fetch Plan Usage");

            }
        },

    });

}