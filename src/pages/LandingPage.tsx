import Hero from "../components/Landing/Hero";
import Howto from "../components/Landing/Howto";
import PopluarCategory from "../components/Landing/PopluarCategory";

const LandingPage = () => {



  return (


    <main className="w-full h-full">


      {/* Hero */}
      <div>
        <Hero />
      </div>


      <div>

        <PopluarCategory />

      </div>


      <div>
        <Howto />
      </div>



    </main>


  )



};

export default LandingPage;
