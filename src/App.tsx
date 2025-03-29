import { ReactNode, Suspense, lazy } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";
import MainLoader from "./components/Common/MainLoader";
import ProtectedDashboard from "./components/Protected/ProtectedDashBoard";



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
const PlanUsage = lazy(() => import("./pages/PlanUsage"));
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



// Lazy Load Component Wrapper
const LazyLoad = ({ Component }: { Component: React.ComponentType }) => (
  <Suspense fallback={<MainLoader />}>
    <Component />
  </Suspense>
);





function App() {


  return (


    <Suspense fallback={<MainLoader />}>


      <Routes>


        {/* Auth Routes */}
        <Route path="/auth" element={<LazyLoad Component={Auth} />} />
        <Route path="*" element={<LazyLoad Component={NotFound} />} />
        <Route path="/dashboard" element={<ProtectedDashboard> <LazyLoad Component={DashBoard} /> </ProtectedDashboard>} />


        {/* Main Layout Routes */}
        <Route element={<LazyLoad Component={Layout} />}>

          <Route path="/" element={<LazyLoad Component={Landing} />} />
          <Route path="/postjob" element={<LazyLoad Component={JobPost} />} />
          <Route path="/findtalent" element={<LazyLoad Component={StudentFilter} />} />
          <Route path="/contact" element={<LazyLoad Component={Contact} />} />
          <Route path="/termscondition" element={<LazyLoad Component={Terms} />} />
          <Route path="/privacypolicy" element={<LazyLoad Component={Privacy} />} />
          <Route path="/refundpolicy" element={<LazyLoad Component={Refund} />} />
          <Route path="/loginterms" element={<LazyLoad Component={LoginTerms} />} />


          {/* Protected Routes */}
          <Route
            path="/planusage"
            element={
              <ProtectedRoute>
                <LazyLoad Component={PlanUsage} />
              </ProtectedRoute>
            }
          />


          <Route
            path="/employerprofile"
            element={
              <ProtectedRoute>
                <LazyLoad Component={UserProfile} />
              </ProtectedRoute>
            }
          />


          <Route
            path="/studentprofile/:id"
            element={
              <ProtectedRoute>
                <LazyLoad Component={StudentProfile} />
              </ProtectedRoute>
            }
          />


          <Route
            path="/plans"
            element={
              <ProtectedRoute>
                <LazyLoad Component={Plans} />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>

      {/* Notifications */}
      <Toaster position="top-center" />
    </Suspense>
  );
}

export default App;
