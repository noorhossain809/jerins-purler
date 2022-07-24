import React from 'react';
import ellips1 from '../../../assets/Image_Icon/Image/Ellipse 90.png'
import ellips2 from '../../../assets/Image_Icon/Image/Ellipse 91.png'
import ellips3 from '../../../assets/Image_Icon/Image/Ellipse 92.png'
import star from '../../../assets/Image_Icon/Icon/Group 33040.png'

const Testimonials = () => {
    return (
        <div className="container mx-auto mt-10 my-5">
            <h1 className="md:text-3xl font-[Poppins] text-center font-bold tracking-wide">Testimonials</h1>
            <div className="grid md:grid-cols-3 gap-10 py-6 justify-items-center mt-10 px-10">
                <div className="shadow-lg p-6 space-y-6 rounded-md">
                <div className="flex gap-6">
                <img className="w-16 h-16" src={ellips1} alt="" />
                <div className="mt-1">
                <h4 className="text-lg text-center font-[Poppins] font-semibold tracking-wide text-cyan-900 ">Nash Patrik</h4> 
                <h5 className="text-sm text-gray-900 font-[Poppins] font-medium tracking-wide">CEO, Manpol</h5>   
                
                </div>
                    </div>
                   <div className="space-y-6">
                   <p className="text-sm tracking-wider leading-7 font-[Poppins] font-light text-slate-500 text-left">Lorem ipsum dolor sit consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa voluptatem dolor laborum sint optio minima ipsum dolor sit consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa.</p>
                    <div className='flex gap-1'>
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    </div>
                   </div>
                </div>
                <div className="shadow-lg p-6 space-y-6 rounded-md">
                <div className="flex gap-6">
                <img className="w-16 h-16" src={ellips2} alt="" />
                <div className="mt-1">
                <h4 className="text-lg text-center font-[Poppins] font-semibold tracking-wide text-cyan-900 ">Mirriam Barrom</h4> 
                <h5 className="text-sm text-gray-900 font-[Poppins] font-medium tracking-wide">CEO, Manpol</h5>   
                </div>
                    </div>
                    <div className="space-y-6">
                   <p className="text-sm tracking-wider leading-7 font-[Poppins] font-light text-slate-500 text-left">Lorem ipsum dolor sit consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa  voluptatem dolor laborum sint optio minima ipsum dolor sit consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa.</p>
                    <div className='flex gap-1'>
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    </div>
                   </div>
                </div>
                <div className="shadow-lg p-6 space-y-6 rounded-md">
                <div className="flex gap-6">
                <img className="w-16 h-16" src={ellips3} alt="" />
                <div className="mt-1">
                <h4 className="text-lg text-center font-[Poppins] font-semibold tracking-wide text-cyan-900 ">Bria Malone</h4> 
                <h5 className="text-sm text-gray-900 font-[Poppins] font-medium tracking-wide">CEO, Manpol</h5>   
                </div>
                    </div>
                    <div className="space-y-6">
                   <p className="text-sm tracking-wider leading-7 font-[Poppins] font-light text-slate-500 text-left">Lorem ipsum dolor sit consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa  voluptatem dolor laborum sint optio minima ipsum dolor sit consectetur adipisicing elit. Inventore perferendis dolore eos officiis culpa.</p>
                    <div className='flex gap-1'>
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    <img src={star} className="w-4 h-4" alt="" />
                    </div>
                   </div>
                </div>
               
            </div>
        </div>
    );
};

export default Testimonials;