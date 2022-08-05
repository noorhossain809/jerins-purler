import React, { useState } from "react";
import Navbars from "../common/Navbars";
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {GoogleSign, login, user} = useAuth();
  const [loginData, setLoginData] = useState({});
  console.log(user)

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData}
    newLoginData[field] = value;
    setLoginData(newLoginData)
    // console.log(newLoginData);
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    login(loginData.email, loginData.password)
   console.log('login', loginData)
  
  }

  const handleGoogleSignIn = () => {
    GoogleSign()
  }
  return (
    <div>
      <Navbars />
      <div className="container mx-auto">
        <div className="grid justify-items-center mt-20 ">
          
          
          <div className="border-2 border-gray-400 rounded p-12">
            <form onSubmit={handleSignIn}>
              <div className="space-y-10">
                
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
                <button
                type="submit"
                value="submit"
                  className="bg-[#F63E7B] text-white font-[poppins] text-base font-light block py-3 w-96 rounded tracking-wide text-base font-normal"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="font-[poppins] text-center mt-2 text-base">Don’t have an account? <Link to="/register" className="text-[#F63E7B] underline">Register</Link></p>
          </div>
          <div className="flex gap-2 mt-2">
            <span>___________________________</span>
            <p className="mt-2 font-[poppins] font-medium">Or</p>
            <span>___________________________</span>

          </div>
          {
            user?.email && <p className="text-gray-900">User Login Successfully</p>
          }
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

export default Login;
