import React from 'react';
import skin from '../../../assets/Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ScreenCare = () => {
    return (
        <div className="bg-red-50">
            <div className="container mx-auto pt-10 px-6">
                <div className='grid md:grid-cols-12 gap-24 md:p-16 md:justify-center'>
                    <div className="md:col-span-6 ">
                        <img src={skin} alt="" />

                    </div>
                    <div className="md:col-span-5 space-y-8">
                       <div className="space-y-8 ">
                       <h2 className="md:text-3xl sm:text-lg font-[Poppins] font-semibold tracking-wide">Let us handle your <br /> screen <span className="text-[#F63E7B]">Professionally</span>.</h2>
                        <p className="text-left md:text-sm font-[Poppins] font-light text-gray-400 tracking-wide">With well written codes, we  build amazing apps for all <br />  platforms, mobile and web  apps in general.Lorem <br /> ipsum dolor sit amit consectetur adipisicing  elit sit.  <br /> Inventore perferendis dolore eos officiis culpa <br />   voluptatem dolor laborum sint optio minima.</p>
                        <div className='flex gap-12'>
                            <div className="space-y-2">
                                <h1 className="md:text-3xl font-[Poppins] font-bold text-[#F63E7B] tracking-wide">500+</h1>
                                <h5 className="text-sm text-gray-900 font-[Poppins] font-normal tracking-wide">Happy Customer</h5>
                            </div>
                            <div className="space-y-2">
                                <h1 className="md:text-3xl font-[Poppins] font-bold text-[#F63E7B] tracking-wide">16+</h1>
                                <h5 className="text-sm text-gray-900 font-[Poppins] font-normal tracking-wide">Total Services</h5>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ScreenCare;