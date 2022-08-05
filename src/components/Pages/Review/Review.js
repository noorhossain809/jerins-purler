import React from "react";

const Review = () => {
  return (
    <div className="bg-gray-200 h-20 w-full">
      <div className="flex justify-between px-6">
        <h2 className="p-6 text-xl font-medium font-[poppins] tracking-wide">
          Review
        </h2>
        <h2 className="p-6 text-base font-medium font-[poppins] tracking-wide">
          Pro Rasel
        </h2>
      </div>
      <div className="bg-red-50 p-4  h-screen min-h-full">
        <div className="p-6">
          <form action="" className="space-y-4">
            <input
              type="name"
              required
              name="name"
              placeholder="Your Name"
              className="py-3 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block md:w-[30rem] shadow-sm md:text-base font-medium text-gray-900  sm:text-sm border-gray-300 rounded"
            />
            <input
              type="name"
              required
              name="name"
              placeholder="Company’s name, Designation"
              className="py-3 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block md:w-[30rem] shadow-sm md:text-base font-medium text-gray-900  sm:text-sm border-gray-300 rounded"
            />
            <textarea
              type="text"
              name="text"
              placeholder="Description"
              className="focus:ring-indigo-500 px-2 font-[Poppins] font-medium focus:border-indigo-500  form-textarea w-full md:w-[30rem] h-28 py-2 shadow-sm md:text-base sm:text-sm border-gray-300 rounded-md"
            />
             <button 
                className="bg-[#F63E7B] text-white text-base font-[Poppins] font-light block py-4 px-16 rounded-md tracking-wide text-base font-normal"
                >
                Submit
                </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
