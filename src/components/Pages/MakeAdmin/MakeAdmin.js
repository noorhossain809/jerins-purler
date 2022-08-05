import React from 'react';

const MakeAdmin = () => {
    return (
        <div className="bg-gray-200 h-20 w-full">
      <div className="flex justify-between px-6">
        <h2 className="p-6 text-xl font-medium font-[poppins] tracking-wide">
          Make Admin
        </h2>
        <h2 className="p-6 text-base font-medium font-[poppins] tracking-wide">
          Sufi Ahmed
        </h2>
      </div>
      <div className="bg-red-50 p-4  h-screen min-h-full">
        <div className="p-6">
          <form action="" className="space-y-4">
            <div className="py-16 shadow-lg bg-white p-6 rounded-lg md:w-3/6">
              <div className="md:flex gap-2">
                <div>
                  <h3 className="font-[poppins] font-medium text-base tracking-wide">
                    Email
                  </h3>
                  <input
                    type="name"
                    required
                    name="name"
                    placeholder="jon@gamil.com"
                    className="py-4 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block md:w-[30rem] shadow-sm md:text-base font-light text-gray-900 border sm:text-sm border-gray-300 rounded"
                  />
                </div>
                <button className="bg-[#F63E7B] text-white text-base font-[Poppins] font-light block h-14 md:mt-7 mt-2 px-16 rounded-md tracking-wide text-base font-normal">
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

export default MakeAdmin;