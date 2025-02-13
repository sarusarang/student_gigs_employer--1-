import { withProtectedRoute } from "./JobProtectedRoute";
import { BriefcaseBusiness } from "lucide-react";

const PostJobButton = () => {
    return (
        <button className="hover:cursor-pointer flex items-center gap-x-2 bg-blue-500 ms-2 text-white font-semibold text-md px-20 py-2  hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            Post Job <BriefcaseBusiness size={18} />
        </button>
    );
};

export default withProtectedRoute(PostJobButton, "/postjob");
