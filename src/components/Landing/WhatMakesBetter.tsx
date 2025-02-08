const WhatMakesBetter = () => {
  return (
    <div className="container mx-auto px-36">
      <div>
        <div className="pb-10">
          <h1 className="text-3xl font-semibold ">
            What Makes StudentGigs Better?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="items-center">
            <img
              src="https://img.freepik.com/free-vector/choosing-best-candidate-concept_52683-43377.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
              alt=""
              className=""
            />
            <h1 className="text-center pb-5 text-2xl font-semibold text-gray-800 ">
              Simple Hiring
            </h1>
            <p className="text-center text-lg font-medium">
              Receives calls from qualified candidates in under an hour of
              posting a job
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/organic-flat-feedback-concept_52683-62653.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
              alt=""
            />
            <h1 className="text-center pb-5 text-2xl font-semibold text-gray-800 ">
              Intelligent Recommendations
            </h1>
            <p className="text-center text-lg font-medium">
              Receives calls from qualified candidates in under an hour of
              posting a job
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/organic-flat-design-customer-support_23-2148887076.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
              alt=""
            />
            <h1 className="text-center pb-5 text-2xl font-semibold text-gray-800 ">
              Customer Support
            </h1>
            <p className="text-center text-lg font-medium">
              Receives calls from qualified candidates in under an hour of
              posting a job
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesBetter;
