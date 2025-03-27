import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedContent from "./AnimatedContent/AnimatedContent";


interface Step {
  id: number;
  title: string;
  description: string;
  icon: () => JSX.Element;
  bgColor: string;
  herf: string;
}



export default function Howto() {




  // Define the steps
  const steps: Step[] = [


    {
      id: 1,
      title: "Sign Up Or Login",
      description: "Quick, Easy, Setup",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      ),
      bgColor: "bg-orange-400",
      herf: '/auth'
    },
    {
      id: 2,
      title: "Personalized Assistance",
      description: "Our executive will contact you for personalized support.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      bgColor: "bg-blue-500",
      herf: '/'
    },
    {
      id: 3,
      title: "Access 30K+ Gig Workers",
      description: "Get access to a vast pool of gig workers and hire the best talent.",
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bgColor: "bg-red-400",
      herf: '/findtalent'
    },


  ];


  return (

    <>

      <div className="max-w-6xl mx-auto px-4 pb-8">


        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity={true}
          scale={1.1}
          threshold={0.2}
          delay={200}
        >


          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">Get Started Now!</h1>
            <p className="text-xl text-gray-600">Simple. Efficient. Get Started in Minutes!</p>
          </div>


          <div className="flex flex-col md:flex-row justify-center items-center mb-12">
            {steps.map((step: Step) => (
              <div
                key={step.id}
                className={`${step.bgColor} opacity-90 -mb-8 sm:mt-0 sm:-ms-8 rounded-full p-8 text-white text-center w-full md:w-80 aspect-square flex flex-col items-center justify-center transition-transform hover:scale-105`}
              >
                <div className="mb-4">
                  {<step.icon />}
                </div>
                <h3 className="font-bold mb-2">#{step.id} {step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>


          <div className="text-center flex justify-center items-center">
            <Link to={'/findtalent'}>
              <button className="bg-pink-500 flex items-center hover:cursor-pointer text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors">
                Hire Students Now <GraduationCap className="inline-block ml-2" />
              </button>
            </Link>
          </div>

        </AnimatedContent>

      </div>


    </>



  )




}

