import React, { useState } from "react";
import control from "../../assets/Image_Icon/Icon/control.png";
import logo from "../../assets/Image_Icon/Group 33092.png";
import cart from "../../assets/Image_Icon/Icon/Group.png";
import book from "../../assets/Image_Icon/Icon/Group 1360.png";
import review from "../../assets/Image_Icon/Icon/Group 1368.png";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineAccountBook, AiOutlineUserAdd } from "react-icons/ai";
import { RiAddFill } from "react-icons/ri";
import { BiUserPlus } from "react-icons/bi";
import { TbLayoutGrid } from "react-icons/tb";
import { Link, Outlet, useRouteMatch } from "react-router-dom";

const Sidebar = (props) => {
  const { window } = props;
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: cart },
    { title: "Inbox", src: book },
    { title: "Accounts", src: review, gap: true },
  ];
  // let { url } = useRouteMatch();
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="flex ">
      <div
      
        className={`${
          open ? "w-60" : "w-20"
        }  bg-gray-200 h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src={control}
          alt=""
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt=""
            className={`cursor-pointer duration-500 w-28 ${
              open && "rotate-[360deg]"
            }`}
          />
          
        </div>
       
        <div className="pt-6">
        
          <div className="space-y-2">
            <Link to="/dashboard">
              <button className="flex rounded-md p-2 cursor-pointer focus:text-red-500 items-center gap-x-3">
                <FiShoppingCart className="w-6 h-6 text-gray-900 hover:text-red-500 focus:text-red-500" />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-slate-900 font-medium text-xl hover:text-red-500`}
                >
                  Book
                </span>
              </button>
            </Link>

            <Link to="/dashboard/bookingList">
            <button className="flex rounded-md p-2 cursor-pointer hover:text-red-500 items-center gap-x-3">
              <AiOutlineAccountBook className="w-6 h-6 hover:text-red-500" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-slate-900 font-medium text-xl hover:text-red-500`}
              >
                Booking list
              </span>
            </button>
            </Link>
           <Link to="/dashboard/review">
           <button className="flex rounded-md p-2 cursor-pointer hover:text-red-500 items-center gap-x-3">
              <MdOutlineRateReview className="w-6 h-6 hover:text-red-500" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-slate-900 font-medium text-xl hover:text-red-500`}
              >
                Review
              </span>
            </button>
           </Link>
           <Link to="/dashboard/addService">
           <button className="flex rounded-md p-2 cursor-pointer hover:text-red-500 items-center gap-x-3">
              <RiAddFill className="w-6 h-6  hover:text-red-500" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-slate-900 font-medium text-xl hover:text-red-500`}
              >
                Add Service
              </span>
            </button>
           </Link>
           <Link to="/dashboard/makeAdmin">
           <button className="flex rounded-md p-2 cursor-pointer hover:text-red-500 items-center gap-x-3">
              <BiUserPlus className="w-6 h-6  hover:text-red-500" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-slate-900 font-medium text-xl hover:text-red-500`}
              >
                Make Admin
              </span>
            </button>
           </Link>
           <Link to="/dashboard/manageService">
           <button className="flex rounded-md p-2 cursor-pointer hover:text-red-500 items-center gap-x-3">
              <TbLayoutGrid className="w-6 h-6  hover:text-red-500" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-slate-900 font-medium text-xl hover:text-red-500`}
              >
                Manage Service
              </span>
            </button>
           </Link>
          </div>
        </div>
      </div>
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
