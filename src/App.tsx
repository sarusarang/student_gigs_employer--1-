import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
import MainLoader from "./components/Common/MainLoader";
import ProtectedDashboard from "./components/Protected/ProtectedDashBoard";



const Landing = lazy(() => import("./pages/LandingPage"));
const Navbar = lazy(() => import("./components/Common/Navbar"));
const Footer = lazy(() => import("./components/Common/Footer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const JobPost = lazy(() => import("./pages/JobPost"));
const Auth = lazy(() => import("./pages/Auth"));
const StudentFilter = lazy(() => import("./pages/StudentFilter"));
const StudentProfile = lazy(() => import("./pages/StudentProfile"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const Contact = lazy(() => import("./pages/Contact"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Plans = lazy(() => import("./pages/Plans"));
const PlanUsage = lazy(() => import("./pages/PlanUsage"));
const LoginTerms = lazy(() => import("./pages/LoginTerms"));
const Terms = lazy(() => import("./pages/Terms"));
const Refund = lazy(() => import("./pages/Refund"));
const Privacy = lazy(() => import("./pages/Privacy"));



function App() {


  // To get the current path
  const location = useLocation()


  // To check if the user is authenticated
  const { isAuthenticated } = useAuth()



  // To hide the header and footer
  const [Hide, SetHide] = useState(false)




  // To hide the header and footer
  useEffect(() => {

    if (location.pathname === "/auth" || location.pathname === "/dashboard") {
      SetHide(true)
    }
    else {

      SetHide(false)

    }

  }, [location])




  // Protected Route Component
  const ProtectedRoute = ({ children }: any) => {

    return isAuthenticated ? children : <Navigate to="/auth" state={{ from: location }} />

  };



  return (


    <Suspense fallback={<MainLoader />}>


      {!Hide && <Navbar />}


      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/postjob" element={<JobPost />} />

        <Route path="/auth" element={<Auth />} />

        <Route path="/findtalent" element={<StudentFilter />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/termscondition" element={<Terms />} />

        <Route path="/privacypolicy" element={<Privacy />} />

        <Route path="/refundpolicy" element={<Refund />} />

        <Route path="/loginterms" element={<LoginTerms />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/planusage" element={<ProtectedRoute><PlanUsage /></ProtectedRoute>} />

        <Route path="/employerprofile" element={<ProtectedRoute> <UserProfile /> </ProtectedRoute>} />

        <Route path="/dashboard" element={<ProtectedDashboard> <DashBoard /> </ProtectedDashboard>} />

        <Route path="/studentprofile/:id" element={<ProtectedRoute><StudentProfile /></ProtectedRoute>} />

        <Route path="/plans" element={<ProtectedRoute><Plans /></ProtectedRoute>} />

      </Routes>


      {!Hide && <Footer />}

      <Toaster position="top-center" />

    </Suspense>


  )
}

export default App;
