import React, { useState } from "react";
import Navbars from "../common/Navbars";
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "", 
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const {register, GoogleSign} = useAuth();


  const handleInputChange = (e) => {
       let isFieldValid = true;
       if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
       }

       if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length > 6;
        const isPasswordHasValid = /\d{1}/.test(e.target.value); 
        isFieldValid = isPasswordValid && isPasswordHasValid;
       }

       if(isFieldValid){
        const newUserInfo = { ...loginData };
        newUserInfo[e.target.name] = e.target.value;
        setLoginData(newUserInfo);
        // console.log(newUserInfo)

       }
  }

 // form Submit

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if(newUser && user.email && user.password){

    // }
    register(loginData.email, loginData.password, loginData.name);
 
   
  }

  // GoogleSign
  const handleGoogleSignIn = () => {
    GoogleSign()
  }

  return (
    <div>
      <Navbars />
      <div className="container mx-auto">
        <div className="grid justify-items-center mt-12 ">
          <div className="border-2 border-gray-400 rounded p-12">
            <form onSubmit={handleFormSubmit} className="space-y-10">
              
                <input
                  type="text"
                  name="name"
                  onBlur={handleInputChange}
                  placeholder="First Name"
                  id="first-name"
                  autoComplete="given-name"
                  className="pb-2 mt-1 focus:ring-none peer focus:outline-none w-96 border-b border-b-gray-400  md:text-base sm:text-sm  "
                />
                <br />
                <input
                  type="text"
                  name="name"
                  onBlur={handleInputChange}
                  placeholder="Last Name"
                  id="first-name"
                  autoComplete="given-name"
                  className="pb-2 mt-1  focus:ring-none peer focus:outline-none w-96 border-b border-b-gray-400 md:text-base sm:text-sm  "
                />
                <br />
                <input
                  type="text"
                  name="email"
                  onBlur={handleInputChange}
                  placeholder="Username or Email"
                  id="first-name"
                  autoComplete="given-name"
                  className="pb-2 mt-1 focus:ring-none peer focus:outline-none w-96 border-b border-b-gray-400 md:text-base sm:text-sm  "
                />
                <br />
                <input
                  type="text"
                  name="password"
                  onBlur={handleInputChange}
                  placeholder="Password"
                  id="first-name"
                  autoComplete="given-name"
                  className="pb-2 mt-1 focus:ring-none peer focus:outline-none w-96 border-b border-b-gray-400 md:text-base sm:text-sm  "
                />
                <br />
                <input
                  type="text"
                  name="password"
                  onBlur={handleInputChange}
                  placeholder="Confirm Password"
                  id="first-name"
                  autoComplete="given-name"
                  className="pb-2 mt-1 focus:ring-none peer focus:outline-none w-96 border-b border-b-gray-400 md:text-base sm:text-sm  "
                />
                <button
                 value="submit"
                 type="submit"
                  className="bg-[#F63E7B] text-white font-[poppins] text-base font-light block py-3 w-96 rounded tracking-wide text-base font-normal"
                >
                  Create an account
                </button>
             
            </form>
            <p className="font-[poppins] text-center mt-2 text-base">Already have an account? <Link to="/login" className="text-[#F63E7B] underline">Login</Link></p>
          </div>
          <div className="flex gap-2 mt-2">
            <span>___________________________</span>
            <p className="mt-2 font-[poppins] font-medium">Or</p>
            <span>___________________________</span>

          </div>
         <div className="flex border rounded-full py-2 mt-6 ">
         <BsFacebook className="ml-2 text-4xl text-indigo-600" />
         <button
                
                className=" font-[poppins] text-base w-96 tracking-wide font-medium"
              >
                Continue with Facebook
              </button>
         </div>
         <div className="flex border rounded-full py-2 mt-6">
         <FcGoogle className="ml-2 text-4xl" />
         <button
                onClick={handleGoogleSignIn}
                className=" font-[poppins] text-base w-96 tracking-wide font-medium"
              >
                Continue with Google
              </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
