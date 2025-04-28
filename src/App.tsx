import { ReactNode, Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
import MainLoader from "./components/Common/MainLoader";
import ProtectedDashboard from "./components/Protected/ProtectedDashBoard";
import LoginModal from "./components/LoginModal/Loginmodal";



// Lazy Loaded Components
const Layout = lazy(() => import("./pages/Layout"));
const Landing = lazy(() => import("./pages/LandingPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const JobPost = lazy(() => import("./pages/JobPost"));
const Auth = lazy(() => import("./pages/Auth"));
const StudentFilter = lazy(() => import("./pages/StudentFilter"));
const StudentProfile = lazy(() => import("./pages/StudentProfile"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const Contact = lazy(() => import("./pages/Contact"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Plans = lazy(() => import("./pages/Plans"));
const PlanUsage = lazy(() => import("./pages/Usage"));
const LoginTerms = lazy(() => import("./pages/LoginTerms"));
const Terms = lazy(() => import("./pages/Terms"));
const Refund = lazy(() => import("./pages/Refund"));
const Privacy = lazy(() => import("./pages/Privacy"));




// Protected Route Wrapper
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated ? children : <Navigate to="/auth" state={{ from: location }} />;
};





function App() {



  // Authentication
  const { isAuthenticated } = useAuth();


  // Login Modal
  const [isOpen, setIsOpen] = useState(false);



  // Login Modal Open 
  useEffect(() => {

    if (!isAuthenticated && !sessionStorage.getItem("loginModalShown")) {

      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("loginModalShown", "true");
      }, 10000);

      return () => clearTimeout(timer);

    }

  }, [isAuthenticated]);




  return (

    <>

      <Suspense fallback={<MainLoader />}>


        <Routes>


          {/* Auth Routes */}
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />


          {/* Protected Dashboard */}
          <Route path="/dashboard" element={<ProtectedDashboard> <DashBoard /> </ProtectedDashboard>} />



          {/* Main Layout Routes */}
          <Route element={<Layout />}>

            <Route path="/" element={<Landing />} />
            <Route path="/postjob" element={<JobPost />} />
            <Route path="/findtalent" element={<StudentFilter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termscondition" element={<Terms />} />
            <Route path="/privacypolicy" element={<Privacy />} />
            <Route path="/refundpolicy" element={<Refund />} />
            <Route path="/loginterms" element={<LoginTerms />} />


            {/* Protected Routes */}
            <Route
              path="/planusage"
              element={
                <ProtectedRoute>
                  <PlanUsage />
                </ProtectedRoute>
              }
            />


            <Route
              path="/employerprofile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />


            <Route
              path="/studentprofile/:id"
              element={
                <ProtectedRoute>
                  <StudentProfile />
                </ProtectedRoute>
              }
            />


            <Route
              path="/plans"
              element={
                <ProtectedRoute>
                  <Plans />
                </ProtectedRoute>
              }
            />

          </Route>

        </Routes>

      </Suspense>

      {/* Notifications */}
      <Toaster position="top-center" />


      {/* Login Modal */}
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />


    </>

  );
}

export default App;
