import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Router
import SkillSelector from "./components/Landing/API/Skills";

const Landing = lazy(() => import("./pages/LandingPage"));
const Navbar = lazy(() => import("./components/Header/Navbar"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Loader = lazy(() => import("./components/Loader/Loader"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/" element={<SkillSelector />} /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
