import { Star } from "lucide-react";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PopluarCategory() {



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };


    const services = [
        {
            title: "Wordpress Development",
            img: "https://jobstack-shreethemes.vercel.app/static/media/03.c538ca3b9bc8f2a5378d.jpg",
        },
        { title: "Audio & Video Editing", img: "https://jobstack-shreethemes.vercel.app/static/media/01.505f19f275234d37ae32.jpg" },
        { title: "Admin & Customer Support", img: "https://jobstack-shreethemes.vercel.app/static/media/02.b483e9502d81d8a68583.jpg" },
        { title: "UX/UI Designer", img: "https://jobstack-shreethemes.vercel.app/static/media/03.c538ca3b9bc8f2a5378d.jpg" },
        { title: "Digital Marketing", img: "https://jobstack-shreethemes.vercel.app/static/media/06.296e0ddb4aa6faa9d579.jpg" },

    ];


    return (




        <>




            <div className="px-2 md:px-32  py-20">

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

                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center justify-center sm:justify-start text-center">Popluar Categories <Star color="#FFD700" className="ms-2 sm:mt-2 mt-0" size={30} /></h2>

                    <p className=" text-slate-500 mb-5 text-center sm:text-justify max-w-xl px-2 sm:px-0">
                        Explore hiring categories such as full-time roles, part-time & freelance work, internships & entry-level positions,
                        and remote & hybrid opportunities to find the right talent for your business.
                    </p>



                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        focusOnSelect={true}
                        keyBoardControl={true}
                        transitionDuration={5000}
                        swipeable={true}
                        slidesToSlide={1}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px "
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="relative rounded-lg mx-2 overflow-hidden shadow-lg hover:scale-105 duration-300"
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full  h-auto object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-end justify-center">
                                    <p className="text-white font-semibold text-lg pb-10 hover:scale-105 duration-300">
                                        {service.title}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </Carousel>

                </AnimatedContent>

            </div >




        </>





    )





}
