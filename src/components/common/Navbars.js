/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../assets/Image_Icon/Group 33092.png'
import { Link } from 'react-router-dom'




const Navbars = () => {
    return (
        <Disclosure as="nav" className='bg-red-50 py-2'>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">

                            <div className="flex-1 flex  sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-10 w-auto mt-5"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>

                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-12 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                {/* Profile dropdown */}
                                <Menu as="div" className="">
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4 mt-5">
                                            <Link to="/home">
                                                <a
                                                    className="text-gray-900 font-[Poppins] hover:text-gray-700
                                                    px-3 py-3 text-base tracking-wide font-semibold hover:bg-gray-300 rounded-md"
                                                >
                                                    Home
                                                </a>
                                            </Link>
                                            <Link to="/home">
                                                <a
                                                    className="text-gray-900 hover:text-gray-700
                                                    px-3 py-3 text-base tracking-wide font-[Poppins] font-semibold hover:bg-gray-300 rounded-md "
                                                >
                                                    Our Portfolio
                                                </a>
                                            </Link>
                                            <Link to="/home">
                                                <a
                                                    className="text-gray-900 hover:text-gray-700
                                                    px-3 py-3 text-base font-[Poppins] font-semibold tracking-wide hover:bg-gray-300 rounded-md "
                                                >
                                                    Our Team
                                                </a>
                                            </Link>
                                            <Link to="/home">
                                                <a
                                                    className="text-gray-900 hover:text-gray-700
                                                    px-3 py-3 text-base font-[Poppins] font-semibold tracking-wide hover:bg-gray-300 rounded-md "
                                                >
                                                    Contact Us
                                                </a>
                                            </Link>
                                            <Link to="/home">
                                                <a
                                                    className="bg-[#F63E7B] text-white
                                                    px-10 py-3 rounded-md tracking-wide text-base font-normal"
                                                >
                                                    Login
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="grid justify-items-end pr-2">
                        <div className="px-2 w-48 pt-2 pb-3 bg-gray-900   ">
                           
                           <div className="flex flex-col space-y-2 text-center">
                           <Link to="/home">
                           <Disclosure.Button
                             as="a"
                              className='bg-white text-gray-900
                             block px-3 py-2 rounded-md text-base font-medium'
                             >
                               Home
                             </Disclosure.Button>
                           </Link>
                           <Link to="/home">
                           <Disclosure.Button
                             as="a"
                              className='bg-white text-gray-900
                                   block px-3 py-2 rounded-md text-base font-medium'
                             >
                               Home
                             </Disclosure.Button>
                           </Link>
                           <Link to="/home">
                           <Disclosure.Button
                             as="a"
                              className='bg-white text-gray-900
                                   block px-3 py-2 rounded-md text-base font-medium'
                             >
                               Our Portfolio
                             </Disclosure.Button>
                           </Link>
                           <Link to="/home">
                           <Disclosure.Button
                             as="a"
                              className='bg-white text-gray-900
                                   block px-3 py-2 rounded-md text-base font-medium'
                             >
                               Our Team
                             </Disclosure.Button>
                           </Link>
                           <Link to="/home">
                           <Disclosure.Button
                             as="a"
                              className='bg-white text-gray-900
                                   block px-3 py-2 rounded-md text-base font-medium'
                             >
                               Contact Us
                             </Disclosure.Button>
                             
                           </Link>
                           <Link to="/home">
                           <Disclosure.Button
                             as="a"
                             className="bg-pink-500 text-white text-center
                             block py-2 rounded-md tracking-wide text-base font-normal"
                             >
                               Login
                             </Disclosure.Button>

                           </Link>
                           </div>
                       
                   </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbars;