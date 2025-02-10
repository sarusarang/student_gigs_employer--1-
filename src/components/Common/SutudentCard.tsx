import { Link } from "react-router-dom";




interface Designer {
    name: string;
    jobtitle: string;
    salary: string;
    experience: string;
    skills: string[];
    imageUrl: string;
}




export default function SutudentCard({ name, jobtitle, salary, experience, skills, imageUrl }: Designer) {



    return (


        <>

            <section className="flex flex-col items-center justify-center">


                <div className="relative border border-gray-200 bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-xs w-full">

                    {/* Featured Star */}
                    <div className="absolute top-0 left-0">
                        <div className="bg-yellow-400 p-2 rounded-tl-lg rounded-br-lg">
                            <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>


                    {/* Profile Image */}
                    <div className="flex flex-col items-center">


                        <img
                            src={imageUrl}
                            alt="Profile"
                            loading="lazy"
                            className="w-20 h-20 rounded-full mb-4 object-cover"
                        />


                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                        <p className="text-gray-500 mb-4">{jobtitle}</p>


                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                            {skills.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm bg-emerald-50 text-emerald-600 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>


                        {/* Details */}
                        <div className="w-full flex justify-center gap-10 mb-6">
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-gray-500 text-sm mb-1">Salary:</p>
                                <p className="font-semibold">{salary}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-gray-500 text-sm mb-1">Experience:</p>
                                <p className="font-semibold">{experience}</p>
                            </div>
                        </div>


                        {/* Buttons */}
                        <div className="flex gap-2 w-full">
                            <Link to={'/studentprofile'} className="w-full">
                                <button className="flex-1 w-full hover:cursor-pointer bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
                                    Profile
                                </button>
                            </Link>
                        </div>


                    </div>


                </div>



            </section>


        </>



    )



}
