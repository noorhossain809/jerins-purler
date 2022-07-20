import React from 'react';
import icon1 from '../../../assets/Image_Icon/Icon/Group 1373.png';
import icon2 from '../../../assets/Image_Icon/Icon/Group 1372.png';
import icon3 from '../../../assets/Image_Icon/Icon/Group 1374.png'

const Services = () => {
    return (
        <div className="container mx-auto mt-10 my-5">
            <h1 className="text-3xl text-center font-extrabold tracking-wide">Our Awesome <span className='text-pink-600'>Services</span></h1>
            <div className='grid grid-cols-3 gap-8 py-6 justify-items-center mt-10 px-10'>
                <div className="hover:shadow-2xl space-y-1 p-12 rounded-lg">
                    <div className="flex justify-center">
                        <img className="w-16 h-18" src={icon1} alt="" />
                    </div>
                    <h4 className="text-base text-center font-bold tracking-wide text-cyan-900 ">Anti age face treatment</h4>
                    <h5 className='text-base font-bold text-center tracking-normal text-pink-600'>$199</h5>
                    <p className="text-center text-sm font-medium text-gray-400 tracking-wide">We craft stunning and amazing <br /> web UI, using a well drafted UX <br /> to fit your product.</p>
                </div>
                <div className="hover:shadow-2xl space-y-1 p-12 rounded-lg">
                    <div className="flex justify-center">
                        <img className="w-16 h-18" src={icon2} alt="" />
                    </div>
                    <h4 className="text-base text-center font-bold tracking-wide text-cyan-900 ">Hair Color & Styleing</h4>
                    <h5 className='text-base font-bold text-center tracking-normal text-pink-600'>$99</h5>
                    <p className="text-center text-sm font-medium text-gray-400 tracking-wide">Amazing flyers, social media <br /> posts and brand representations<br /> that would make your brand <br /> stand out.</p>
                </div>
                <div className="hover:shadow-2xl shadow-rounded-lg space-y-1 p-12 rounded-lg">
                    <div className="flex justify-center">
                        <img className="w-16 h-18" src={icon3} alt="" />
                    </div>
                    <h4 className="text-base text-center font-bold tracking-wide text-cyan-900 ">Skin Care Treatment</h4>
                    <h5 className='text-base font-bold text-center tracking-normal text-pink-600'>$299</h5>
                    <p className="text-center text-sm font-medium text-gray-400 tracking-wide">With well written codes, we <br /> build amazing apps for all <br /> platforms, mobile and web <br /> apps in general.</p>
                </div>


            </div>
            <div className="flex justify-center">
                <button
                    className="bg-pink-500 text-white text-base font-light block py-2 px-6 rounded tracking-wide"
                >
                    Explore more
                </button>
            </div>
        </div>
    );
};

export default Services;