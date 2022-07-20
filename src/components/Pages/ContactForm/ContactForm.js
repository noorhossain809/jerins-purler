import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-red-50">
            <div className="container mx-auto mt-10 py-5">
            <h1 className="text-3xl text-center font-extrabold tracking-wide">Let us handle your <br /> project, professionally</h1>
           <form action="#">
           <div className="grid grid-cols-12 gap-6 mx-80 mt-16 justify-items-center">
            <div className="col-span-6 ">
                    
                      <input
                        type="text"
                    
                        name="name"
                        placeholder='First Name'
                        id="first-name"
                        autoComplete="given-name"
                        className="py-3 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-72 shadow-sm md:text-base sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                     
                      <input
                        type="text"
                        name="name"
                        placeholder='Last Name'
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 px-2 py-3 focus:border-indigo-500 block w-72 shadow-sm md:text-base sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
            </div>
           </form>
            </div>
        </div>
    );
};

export default ContactForm;