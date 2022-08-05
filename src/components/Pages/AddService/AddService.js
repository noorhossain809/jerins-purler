import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const AddService = () => {
  return (
    <div className="bg-gray-200 h-20 w-full">
      <div className="flex justify-between px-6">
        <h2 className="p-6 text-xl font-medium font-[poppins] tracking-wide">
          Add service
        </h2>
        <h2 className="p-6 text-base font-medium font-[poppins] tracking-wide">
          Sufi Ahmed
        </h2>
      </div>
      <div className="bg-red-50 p-4  h-screen min-h-full">
        <div className="p-6">
          <form action="" className="space-y-4">
            <div className="space-y-4 shadow-lg bg-white p-6 rounded-lg md:w-3/6 w-full">
              <div className="md:flex gap-2">
                <div>
                  <h3 className="font-[poppins] font-medium text-base tracking-wide">
                    Service Title
                  </h3>
                  <input
                    type="name"
                    required
                    name="name"
                    placeholder="Enter title"
                    className="py-4 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block md:w-[30rem] shadow-sm md:text-base font-medium text-gray-900 border sm:text-sm border-gray-300 rounded"
                  />
                </div>
                <div>
                  <h3 className="font-[poppins] font-medium text-base tracking-wide">
                    Image
                  </h3>
                  <div className="flex relative gap-4 ">
                    <AiOutlineCloudUpload className="w-6 h-6 absolute inline-block mt-5 ml-2 text-[#F63E7B]" />
                    <label htmlFor="Upload image">
                      <span className="sr-only">Choose profile photo</span>

                      <input
                        type="file"
                        name="file"
                        placeholder="Upload image"
                        className="py-2 mt-1 pl-10 focus:ring-indigo-500 file:font-[Poppins] focus:border-indigo-500 file:bg-red-100 file:rounded-full file:text-[#F63E7B] hover:file:bg-red-200 file:border-0 block w-44 file:shadow-sm md:text-base font-medium text-gray-900 border sm:text-sm border-gray-300 rounded file:mr-4 file:py-2 file:px-4"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="md:flex gap-4">
                <div>
                  <h3 className="font-[poppins] font-medium text-base tracking-wide">
                    Description
                  </h3>
                  <textarea
                    type="text"
                    name="text"
                    placeholder="Enter Designation"
                    className="focus:ring-indigo-500 px-2 font-[Poppins] font-medium focus:border-indigo-500  form-textarea w-full md:w-[30rem] h-28 py-2 shadow-sm md:text-base border sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <button className="bg-[#F63E7B] text-white text-base font-[Poppins] font-light block h-16 md:mt-10 px-16 rounded-md tracking-wide text-base font-normal">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
