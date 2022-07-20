import React from 'react';
import beauty from '../../../assets/Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Appointment = () => {
    return (
        <div className='bg-red-50'>
           <div className="container mx-auto px-10">
           <div className="grid grid-cols-12 gap-4 justify-items-end ">
                <div className="col-span-5 mt-10 space-y-8">
                <h1 className="text-5xl subpixel-antialiased font-bold uppercase tracking-wide">Beauty Salon <br /> for every women</h1>
                <p className="text-base tracking-wide font-medium text-slate-500 text-left">Lorem ipsum dolor sit consectetur adipisicing <br /> elit. Inventore perferendis dolore eos officiis culpa <br /> voluptatem dolor laborum sint optio minima.</p>
                <button 
                className="bg-pink-500 text-white text-base font-light block py-2 px-3 rounded-md tracking-wide text-base font-normal"
                >
                Get an Appointment
                </button>
                </div>
                <div className="col-span-7 p-8">
                <img
                className=""  width="384" height="512"
                src={beauty} alt="" />
                </div>
            </div>
           </div>

        </div>
    );
};

export default Appointment;