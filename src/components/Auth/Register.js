import React from 'react';
import Navbars from '../common/Navbars';

const Register = () => {
    return (
        <div>
            <Navbars />
            <div className='container mx-auto'>
                <div className='grid justify-items-center mt-10 '>
                    <div className="border-2 border-gray-300 p-4">
                    <form action="#">
                        <div className='space-y-6'>
                        <input
                        type="text"
                    
                        name="name"
                        placeholder='First Name'
                        id="first-name"
                        autoComplete="given-name"
                        className=" mt-1 focus:ring-none peer focus:outline-none w-80 border-b  md:text-base sm:text-sm  "
                      />
                      <br />
                        <input
                        type="text"
                    
                        name="name"
                        placeholder='First Name'
                        id="first-name"
                        autoComplete="given-name"
                        className=" mt-1  focus:ring-none peer focus:outline-none w-80 border-b  md:text-base sm:text-sm  "
                      />
                      <br />
                        <input
                        type="text"
                    
                        name="name"
                        placeholder='First Name'
                        id="first-name"
                        autoComplete="given-name"
                        className=" mt-1 focus:ring-none peer focus:outline-none w-80 border-b  md:text-base sm:text-sm  "
                      />
                    
                        </div>

                    </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;