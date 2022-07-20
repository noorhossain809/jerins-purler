import React from 'react';
import skin from '../../../assets/Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const ScreenCare = () => {
    return (
        <div className="bg-red-50">
            <div className="container mx-auto pt-10">
                <div className='grid grid-cols-12 gap-24 p-16'>
                    <div className="col-span-6 ">
                        <img src={skin} alt="" />

                    </div>
                    <div className="col-span-5 space-y-8">
                        <h2 className="text-3xl font-bold tracking-wide">Let us handle your <br /> screen <span className="text-pink-600">Professionally</span>.</h2>
                        <p className="text-left text-sm font-normal text-gray-400 tracking-wide">With well written codes, we  build amazing apps for all <br />  platforms, mobile and web  apps in general.Lorem <br /> ipsum dolor sit amit consectetur adipisicing  elit sit.  <br /> Inventore perferendis dolore eos officiis culpa <br />   voluptatem dolor laborum sint optio minima.</p>
                        <div className='flex gap-12'>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-extrabold text-pink-500 tracking-wide">500+</h1>
                                <h5 className="text-sm text-gray-900 font-medium tracking-wide">Happy Customer</h5>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-extrabold text-pink-500 tracking-wide">16+</h1>
                                <h5 className="text-sm text-gray-900 font-medium tracking-wide">Total Services</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ScreenCare;