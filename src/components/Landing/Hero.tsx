import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Telescope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {



  const [activeIndex, setActiveIndex] = useState(0);


  // Slides
  const slides = [
    {
      image: "https://img.freepik.com/free-photo/boss-approving-congratulating-young-successful-employee_155003-32602.jpg?uid=R148571391&ga=GA1.1.193612807.1732337220&semt=ais_hybrid",
      title: "Hire Student Talent",
      description: "Connect with skilled students ready to contribute",
    },
    {
      image: "https://img.freepik.com/free-photo/smiling-young-businessman_1098-778.jpg?uid=R148571391&ga=GA1.1.193612807.1732337220&semt=ais_hybrid",
      title: "Hire Student Talent",
      description: "Connect with skilled students ready to contribute",
    }
  ]


  return (


    <main className="w-full h-screen">


      <div className='pt-0 sm:pt-0 h-[100vh]'>



        <div className="relative w-full h-full">



          <div className="absolute inset-0">


            {/* Slider */}
            <div className="relative w-full h-[105%]">

              <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-full"
              >

                {slides.map((slide, index) => (

                  <SwiperSlide key={index}>

                    <div className="relative w-full h-full">

                      <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        loading='lazy'
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40" />

                      <AnimatePresence mode="wait">

                        {activeIndex === index && (

                          // display text
                          <div className="absolute sm:top-72 sm:left-16 top-56 left-5  text-white">

                            <motion.h1
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5 }}
                              className="sm:text-5xl text-3xl font-bold mb-4 max-w-2xl"
                            >
                              {slide.title}
                            </motion.h1>

                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="sm:text-xl text-md text-gray-200"
                            >
                              {slide.description}
                            </motion.p>

                            <motion.button
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="mt-8 px-8 py-3 flex justify-center items-center bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition-colors"
                            >
                              <Link to="/findtalent" className='flex items-center'> Explore <Telescope size={20} className="ml-2" /></Link>
                            </motion.button>

                          </div>

                        )}
                      </AnimatePresence>


                    </div>


                  </SwiperSlide>


                ))}


              </Swiper>

              {/* Slider dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-white' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Curved bottom section */}
            <div className="relative w-full h-[15%]">
              <div className="absolute -top-12 w-full overflow-hidden z-20">
                <svg
                  viewBox="0 0 1440 320"
                  className="w-full h-24"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>


          </div>
        </div>

      </div>

    </main>
  );
};

export default Hero;
