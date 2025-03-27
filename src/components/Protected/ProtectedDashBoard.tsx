import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/Context/AuthContext";

const ProtectedDashboard = ({ children }: { children: React.ReactNode }) => {


    const location = useLocation();


    // To check if the user is authenticated
    const { isAuthenticated, plan, isPlanExpired } = useAuth()


    useEffect(() => {
        if (!isAuthenticated) {
            toast.error("Please log in to access DashBoard.");
        } else if (isPlanExpired) {
            toast.error("Your plan has expired. Renew to access DashBoard.");
        } else if (plan?.company_dashboard_analytics?.toLowerCase() !== "yes") {
            toast.error("Your current plan does not allow to access DashBoard. Upgrade to access DashBoard.");
        }
    }, [isAuthenticated, isPlanExpired, plan]);


    // Redirect to /auth if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/auth" />;
    }


    // Redirect to /plans if the plan is expired or does not allow Dashboard
    if (isPlanExpired || plan?.company_dashboard_analytics?.toLowerCase() !== "yes") {
        return <Navigate to="/plans" state={{ from: location }} />;
    }


    return children;

};

export default ProtectedDashboard;
