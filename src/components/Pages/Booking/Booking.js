import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import card from "../../../assets/Image_Icon/Icon/credit-card 1.png";
import paypal from "../../../assets/Image_Icon/Icon/image 17.png";

const Booking = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-200 h-20 w-full">
      <div className="flex justify-between px-6">
        <h2 className="p-6 text-xl font-medium font-[poppins] tracking-wide">
          Book
        </h2>
        <h2 className="p-6 text-base font-medium font-[poppins] tracking-wide">
          Pro Rasel
        </h2>
      </div>
      <div className="bg-red-50 p-4 h-screen min-h-full w-max">
      <div className="px-10 pt-6">
        
        <div className="mt-10 space-y-4">
          <input
            type="text"
            disabled
            name="name"
            placeholder="Anika Ahmed"
            className="py-3 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block md:w-[30rem] shadow-sm md:text-base font-medium text-gray-900  sm:text-sm border-gray-300 rounded"
          />
          <input
            type="text"
            disabled
            name="name"
            placeholder="Anika@gmail.com"
            className="py-3 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block md:w-[30rem] shadow-sm md:text-base font-medium text-gray-900  sm:text-sm border-gray-300 rounded"
          />
          <input
            type="text"
            disabled
            name="name"
            placeholder="Anti Age Face Treatment"
            className="py-3 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block md:w-[30rem] shadow-sm font-medium text-gray-900 md:text-base sm:text-sm border-gray-300 rounded"
          />
              <p className="font-[poppins] text-base tracking-wide font-medium leading-4 pt-8 text-gray-500">Pay with</p>
         <div className="md:flex items-center gap-10 ">
         <div className="flex items-center space-x-4">
            <input
              onClick={() => setOpen(!open)}
              id="remember-me"
              name="remember-me"
              type="radio"
              className="w-6 h-6 accent-pink-500 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <div className="flex items-center space-x-2">
              <img src={card} alt="" className="w-8 h-auto" />
              <p className="font-[poppins] text-base tracking-wide font-medium leading-8">
                Creadit Card
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <input
              onClick={() => setOpen(!open)}
              
              id="remember-me"
              name="remember-me"
              type="radio"
              className="w-6 h-6 accent-pink-500 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <div className="flex items-center space-x-2">
              <img src={paypal} alt="" className="w-8 h-auto" />
              <p className="font-[poppins] text-base tracking-wide font-medium leading-8">
              Paypal
              </p>
            </div>
          </div>
         </div>
         <div className="space-y-2">
         <input
            type="text"
            
            name="name"
            placeholder="Card Number"
            className="py-4 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block md:w-[30rem] shadow-sm md:text-base font-normal text-gray-900  sm:text-sm border-gray-300 rounded"
          />
          <div className="md:flex items-center md:space-x-3">
          <input
            type="text"
            
            name="name"
            placeholder="Card Number"
            className="py-4 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block w-[14rem] shadow-sm md:text-base font-normal text-gray-900  sm:text-sm border-gray-300 rounded"
          />
          <input
            type="text"
            
            name="name"
            placeholder="Card Number"
            className="py-4 mt-1 px-2 focus:ring-indigo-500 font-[Poppins] focus:border-indigo-500 bg-white block w-[15rem] shadow-sm md:text-base font-normal text-gray-900  sm:text-sm border-gray-300 rounded"
          />
          </div>
          <div className="md:flex items-center gap-6 pt-6">
            <p className="font-[poppins] text-base tracking-wide font-medium leading-8">Your Service  charged will be <span className="font-bold">$1000</span></p>
            <button 
                className="bg-[#F63E7B] text-white text-base font-[Poppins] font-light block py-4 px-16 rounded-md tracking-wide text-base font-normal"
                >
                Pay
                </button>
          </div>
         </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Booking;
