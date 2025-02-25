import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
import MainLoader from "./components/Common/MainLoader";



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

        <Route path="/employerprofile" element={<ProtectedRoute> <UserProfile /> </ProtectedRoute>} />

        <Route path="/auth" element={<Auth />} />

        <Route path="/findtalent" element={<StudentFilter />} />

        <Route path="/studentprofile/:id" element={<StudentProfile />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<ProtectedRoute> <DashBoard /> </ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />

      </Routes>


      {!Hide && <Footer />}

      <Toaster position="top-center" />

    </Suspense>


  )
}

export default App;
