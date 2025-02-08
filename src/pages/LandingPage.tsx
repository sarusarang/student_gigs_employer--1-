import Hero from "../components/Landing/Hero";
// import JobPostForm from "../components/Landing/JobPostForm";
import WhatMakesBetter from "../components/Landing/WhatMakesBetter";

const LandingPage = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="container mx-auto px-56 pt-10">
        {/* <JobPostForm /> */}
      </div>
      <div>
        <WhatMakesBetter/>
      </div>
    </div>
  );
};

export default LandingPage;
