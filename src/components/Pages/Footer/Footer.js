import React from 'react';
import map from '../../../assets/Image_Icon/Icon/map-pin-2-fill.png'
import facebook from '../../../assets/Image_Icon/Icon/Vector.png'
import instagram from '../../../assets/Image_Icon/Icon/Vector-1.png'
import linkedin from '../../../assets/Image_Icon/Icon/Vector-2.png'
import youtube from '../../../assets/Image_Icon/Icon/Vector-3.png'

const Footer = () => {
    return (
        <div className='bg-[#F63E7B]'>
           <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-6 gap-4 py-16">
                <div className="md:col-start-1 md:col-end-3">
                    <div className="flex gap-2 md:p-6">
                    <img src={map} className="w-6 h-6 text-center mt-3" alt="" />
                    <p className='text-white font-[Poppins] font-normal leading-6 md:text-base tracking-wider'>H#000 (0th Floor), Road #00, <br /> New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                    </div>
                    
                </div>
                <div>
                    <h3 className='text-white font-[Poppins] font-semibold text-xl leading-8 tracking-wider'>Company</h3>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white mt-4'>About</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>Project</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>Our Team</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>Team Condition</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>Submit Listing</h4>
                </div>
                <div>
                    <h3 className='text-white font-[Poppins] font-semibold text-xl leading-8 tracking-wider'>Quick Links</h3>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white mt-4'>Quick Links</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>Rentals</h4>
                    <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>Sales</h4>
                     <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>Contact</h4>
                     <h4 className='text-base font-[Poppins] font-normal leading-8 tracking-wider text-white'>Our blog</h4>
                </div>
                <div className='md:col-end-7 md:col-span-2 space-y-4'>
                    <h3 className='text-white font-[Poppins] font-semibold text-xl leading-8 tracking-wider'>About Us</h3>
                    <p className="text-sm tracking-wider leading-7 font-[Poppins] font-normal text-[#D8D8D8] text-left">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum <br />  duis laoreet maecenas. Feugiat 
                    </p>
                    <div className='flex gap-6 '>
                    <img src={facebook} className="w-6 h-6 text-center " alt="" />
                    <img src={instagram} className="w-6 h-6 text-center" alt="" />
                    <img src={linkedin} className="w-6 h-6 text-center" alt="" />
                    <img src={youtube} className="w-8 h-6 text-center" alt="" />
                    </div>
              </div>
            </div>
           </div> 
        </div>
    );
};

export default Footer;