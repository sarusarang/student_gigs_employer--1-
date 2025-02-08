import React, { useState } from "react";

const JobPostForm: React.FC = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    qualification: "",
    salaryMin: "",
    salaryMax: "",
    hideSalary: false,
    jobType: "Full Time",
    jobLocation: "",
    hiringProcess: {
      faceToFace: false,
      writtenTest: false,
      telephonic: false,
      groupDiscussion: false,
      virtualInterview: false,
      walkIn: false,
    },
    workFromHome: false,
    contractJob: false,
    email: "",
    password: "",
    jobDescription: "", 
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const { name, value, type } = target;

    let checked;
    if (target instanceof HTMLInputElement) {
      checked = target.checked;
    } else {
      checked = false; 
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleHiringProcessChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      hiringProcess: {
        ...prev.hiringProcess,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto p-4 ">
      <div className="bg-gradient-to-l from-green-500 to-green-700 mb-5">
        <h1 className="text-3xl font-bold mb-4 text-center text-white p-4">
          Job Application Form
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 shadow-sm p-8 rounded-lg bg-orange-600/5"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Title*
          </label>
          <input
            title="Job Title"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Qualification / Eligibility*
          </label>
          <select
            title="Qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select Qualification</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Salary (Min)*
            </label>
            <input
              type="number"
              title="Monthly Salary (Min)"
              name="salaryMin"
              value={formData.salaryMin}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Salary (Max)
            </label>
            <input
              type="number"
              title="Monthly Salary (Max)"
              name="salaryMax"
              value={formData.salaryMax}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="hideSalary"
              checked={formData.hideSalary}
              onChange={handleChange}
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              Hide salary to applicants
            </span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Type*
          </label>
          <select
            name="jobType"
            title="Job Type"
            value={formData.jobType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          >
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Location*
          </label>
          <input
            type="text"
            title="Job Location"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hiring Process*
          </label>
          <div className="mt-2 space-y-2">
            {[
              { name: "faceToFace", label: "Face to Face" },
              { name: "writtenTest", label: "Written-test" },
              { name: "telephonic", label: "Telephonic" },
              { name: "groupDiscussion", label: "Group Discussion" },
              { name: "virtualInterview", label: "Virtual Interview" },
              { name: "walkIn", label: "Walk in" },
            ].map((option) => (
              <label key={option.name} className="flex items-center">
                <input
                  type="checkbox"
                  name={option.name}
                  checked={
                    formData.hiringProcess[
                      option.name as keyof typeof formData.hiringProcess
                    ]
                  }
                  onChange={handleHiringProcessChange}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Description*
          </label>
          <textarea
            name="jobDescription"
            title="Job Description"
            value={formData.jobDescription}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            rows={4}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="workFromHome"
              checked={formData.workFromHome}
              onChange={handleChange}
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              This Job has work from home option
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="contractJob"
              checked={formData.contractJob}
              onChange={handleChange}
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              This Job is Contract Jobs
            </span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email*
          </label>
          <input
            type="email"
            title="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password*
          </label>
          <input
            type="password"
            title="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
