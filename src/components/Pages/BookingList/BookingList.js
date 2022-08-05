import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import icon1 from '../../../assets/Image_Icon/Icon/Group 1373.png';
import icon2 from '../../../assets/Image_Icon/Icon/Group 1372.png';

const BookingList = () => {
    return (
        <div className="bg-gray-200 h-20 w-full">
            <div className="flex justify-between px-4">
            <h2 className="p-6 text-xl font-medium font-[poppins] tracking-wide">Service List</h2>
            <h2 className="p-6 text-base font-medium font-[poppins] tracking-wide">Pro Rasel</h2>
            </div>
           <div className="bg-red-50 p-4  h-screen min-h-full">
           
            <div className="md:flex gap-4 mt-4">
            <div className="shadow-xl bg-white transition duration-700 ease-in-out space-y-6 p-6 w-96 rounded-lg">
                    <div className="flex justify-between">
                        <img className="w-12 h-12" src={icon1} alt="" />
                        <button 
                className="bg-[#FFE3E3] text-[#F63E7B] font-[Poppins] py-2 px-6 rounded-md tracking-wider text-base font-normal"
                >
                Pending
                </button>
                    </div>
                    <div>
                    <h4  className="text-base font-[Poppins] text-left font-semibold tracking-wide text-cyan-900 ">Anti age face treatment</h4>
                    <p className="text-left font-[Poppins] text-sm font-light text-gray-400 tracking-wide">Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor do amet sint. Velit officia <br /> consequat duis enim velit mollit.</p>
                    </div>
                </div>
            <div className="shadow-xl bg-white transition duration-700 ease-in-out space-y-6 p-6 w-96 rounded-lg ">
                    <div className="flex justify-between">
                        <img className="w-12 h-12" src={icon2} alt="" />
                        <button 
                className="bg-[#C6FFE0] text-[#009444] font-[Poppins] py-1 px-6 rounded-md tracking-wider text-base font-normal"
                >
                Done
                </button>
                    </div>
                    <div>
                    <h4  className="text-base font-[Poppins] text-left font-semibold tracking-wide text-cyan-900 ">Skin Care Treatment</h4>
                    <p className="text-left font-[Poppins] text-sm font-light text-gray-400 tracking-wide">Amet minim mollit non deserunt ullamco est <br /> sit aliqua dolor do amet sint. Velit officia <br /> consequat duis enim velit mollit.</p>
                    </div>
                </div>

            </div>
           </div>
        </div>
    );
};

export default BookingList;



// import { LockClosedIcon } from '@heroicons/react/solid'

// export default function Example() {
//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-gray-50">
//         <body class="h-full">
//         ```
//       */}
     
//     </>
//   )
// }