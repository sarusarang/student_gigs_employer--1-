import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetOnlineTalent, GetHomeSlider, GetLocations, GetSingleTalent, PostNewJobTitle, GetJobTitle } from "../Services/AllApi";





// Get Online Talent
export const OnlineTalentCategory = () => {

    return useQuery({

        queryKey: ["OnlineTalentCategory"],

        queryFn: async () => {

            try {

                const Response = await GetOnlineTalent()

                return Response.data

            } catch (err) {

                console.log(err);

            }

        },
        staleTime: 1000 * 60 * 10,

    })

}





// Get Home Slider
export const HomeSlider = () => {

    return useQuery({

        queryKey: ["HomeSlider"],

        queryFn: async () => {

            try {

                const Response = await GetHomeSlider()

                return Response.data

            } catch (err) {

                console.log(err);

            }

        },

    })

}


// Get All Locations
export const AllLocations = (search: string) => {

    return useQuery({

        queryKey: ["AllLocations", search],

        queryFn: async () => {

            try {

                const response = await GetLocations(search);

                return response.data.features.map((location: any) => {

                    const properties = location.properties;
                    const coordinates = location.geometry.coordinates;

                    const city = properties.city || properties.name || "";
                    const state = properties.state || "";
                    const country = properties.country || "";
                    const postalCode = properties.postcode || ""; // Fetching postal code

                    return {
                        value: `${coordinates[1]},${coordinates[0]}`, // lat,lng format
                        label: [city, state, country, postalCode].filter(Boolean).join(", "), // Removing empty values
                    };

                });


            } catch (err) {
                console.error("Error fetching locations:", err);
                return [];
            }
        },
    });
};


// Get Single Talent
export const SingleTalent = (id: string) => {

    return useQuery({

        queryKey: ["SingleTalent", id],
        initialData: [],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")


                if (!token) {
                    throw new Error("Authentication token not found");
                }

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetSingleTalent(id, headers)

                return Response.data

            } catch (err) {

                console.log(err);

            }
        },

    })

}






// Get job tittles
export const JObTittles = () => {

    return useQuery({

        queryKey: ["jobtittles"],

        queryFn: async () => {

            try {

                const Response = await GetJobTitle()

                return Response.data

            } catch (err) {

                console.log(err);

            }

        },
        staleTime: 1000 * 60 * 10,

    })

}




// Post new JobTittle
export const PostJobTittle = () => {

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async (job_title: string) => {

            try {

                const Response = await PostNewJobTitle(job_title)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },

        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["jobtittles"] });

        },
        onError: (error) => {
            console.error("Failed to Resister User:", error);
            queryclient.invalidateQueries({ queryKey: ["jobtittles"] });
        },


    })

}