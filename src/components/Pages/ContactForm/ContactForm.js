import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-red-50">
            <div className="container mx-auto mt-10 py-5">
            <h1 className="md:text-3xl text-center font-[Poppins] font-bold tracking-wide">Let us handle your <br /> project, professionally</h1>
           <form action="#" className='space-y-6'>
           <div className="grid md:grid-cols-12 gap-6 md:mx-80 mt-16  justify-items-center">
            <div className="md:col-span-6 ">
                    
                      <input
                        type="text"
                    
                        name="name"
                        placeholder='First Name'
                        id="first-name"
                        autoComplete="given-name"
                        className="py-3 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm md:text-base sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="md:col-span-6">
                     
                      <input
                        type="text"
                        name="name"
                        placeholder='Last Name'
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 px-2 py-3 focus:border-indigo-500 block w-80 shadow-sm md:text-base sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
            </div>
           <div className="grid md:grid-cols-12 gap-6 md:mx-80  justify-items-center">
            <div className="md:col-span-6 ">
                    
                      <input
                        type="email"
                    
                        name="email"
                        placeholder='Email'
                        id="first-name"
                        autoComplete="given-name"
                        className="py-3 mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-80 shadow-sm md:text-base sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="md:col-span-6">
                     
                      <input
                        type="number"
                        name="number"
                        placeholder='Phone Number'
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 px-2 py-3 focus:border-indigo-500 block w-80 shadow-sm md:text-base sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                
            </div>
            <div className="md:mx-80 grid justify-items-center">
                 <textarea 
                        type="text"
                        name="text"
                        placeholder='Your Message'
                        className="focus:ring-indigo-500 px-2  focus:border-indigo-500  form-textarea sm:w-full w-80 h-28 py-2 shadow-sm md:text-base sm:text-sm border-gray-300 rounded-md"
                      />
                 </div>
                 <div className='grid justify-items-center'>
                 <button 
                className="bg-[#F63E7B] text-white text-base font-[Poppins] font-light block py-3 px-8 rounded-md tracking-wide text-base font-normal"
                >
                Send Message
                </button>
                 </div>
                 
           </form>
            </div>
        </div>
    );
};

export default ContactForm;