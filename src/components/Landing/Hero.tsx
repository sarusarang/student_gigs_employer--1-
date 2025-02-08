const Hero = () => {
  return (
    <div className="container mx-auto md:px-44 md:pt-10 px-5 bg-orange-600/5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center relative -top-4 ">
          <div className="pt-30 md:pt-0">
            <h1 className="text-5xl font-semibold text-[#161C2D] leading-tight ">
              Start Building <br /> Your{" "}
              <span className="text-[#059669]"> Dream Career</span> <br /> with
              StudentGigs
            </h1>
          </div>
          <div>
            <p className="pt-5 font-xl leading-8 text-gray-500">
              Find Jobs,Employment and Career Opportunities.Some of the
              Companies we've helped recruit excellent applicants over the years
            </p>
          </div>
          <div className=" bg-white flex justify-between p-3 mt-10 rounded-sm">
            <div className="bg-gray-100 w-2/3 rounded-sm flex">
              <input
                type="text"
                placeholder="Search Your Keywords"
                className="pl-3"
              />
            </div>
            <div className="w-1/3 rounded-sm">
              <button className="bg-[#059669] text-white py-3 w-full hover:bg-[#059646] hover:scale-105 duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative -top-20 md:top-0">
          <div className="bg-white p-4 rounded-lg md:h-30 h-40 md:w-[350px] shadow-lg relative z-1 top-50 left-20 hover:translate-y-4 duration-300">
            <p className="w-full font-semibold pb-2">5K+ Candidates Got Job</p>
            <div className="flex pb-2">
              <img
                className="rounded-full w-10 h-10 p-1 bg-white shadow-md relative "
                src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
              />
              <img
                className="rounded-full w-10 h-10 p-1 bg-white shadow-md relative -left-2"
                src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
              />
              <img
                className="rounded-full w-10 h-10 p-1 bg-white shadow-md relative -left-4"
                src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
              />
              <img
                className="rounded-full w-10 h-10 p-1 bg-white shadow-md relative -left-6 hidden md:block"
                src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
              />
              {/* <img
                className="rounded-full w-10 h-10 p-1 bg-white shadow-md relative -left-8"
                src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
              /> */}
              {/* <div className="rounded-full w-10 h-10 font-bold text-white  bg-green-500 shadow-md relative -left-8">
                +
              </div> */}
            </div>
          </div>
          <img
            src="https://jobstack-shreethemes.vercel.app/static/media/hero.d093ca4a46aa2af2bca3.png"
            alt="no image"
            className="w-[70%]  justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
