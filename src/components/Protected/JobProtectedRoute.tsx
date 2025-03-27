import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, ComponentType } from "react";
import { GetProfile } from "../../Hooks/UserProfile";
import { useAuth } from "../../Context/AuthContext";
import ProfileModal from "../Common/ProfileModal";
import toast from "react-hot-toast";


// Define prop types for the wrapped component
type WrappedComponentProps = {
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
};



export const withProtectedRoute = <P extends WrappedComponentProps>(
    WrappedComponent: ComponentType<P>,
    targetRoute: string
) => {
    return function ProtectedComponent(props: P) {



        // Get Profile data
        const { data, isLoading, refetch , isFetching , isSuccess } = GetProfile();


        // check if authenticated
        const { isAuthenticated } = useAuth();


        // get location
        const navigate = useNavigate();
        const location = useLocation();



        // profile modal
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [pendingNavigation, setPendingNavigation] = useState(false);



        useEffect(() => {

            if (pendingNavigation && data?.is_exist) {
                navigate(targetRoute);
                setPendingNavigation(false);
            }

        }, [data, pendingNavigation, navigate, targetRoute]);




        const handleModalClose = async () => {
            await refetch();
            setIsModalOpen(false);
        };


        const handleClick = (e: React.MouseEvent) => {

            e.preventDefault();

            if (!isAuthenticated) {
                navigate("/auth", { state: { from: location } });
                return;
            }

            if ( isLoading || isFetching) return;


            if (data && !data.is_exist && isSuccess) {

                toast.error("Please Complete Your Profile");

                setTimeout(() => {
                    setIsModalOpen(true);
                    setPendingNavigation(true);
                }, 3000);

                return;
            }

            navigate(targetRoute);
        }

        

        return (
            <>
                <div onClick={handleClick}>
                    <WrappedComponent {...props} />
                </div>

                <ProfileModal
                    title="Complete Your Profile"
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                />
            </>
        );
    };
};