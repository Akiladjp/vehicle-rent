import React from "react";
import logo from "../assets/logo.png";
import { FaHeart } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

export const Navbar = () => {

    const navLinks = [
        {
            title:'Home',
            link:'#'
        },
        {
            title:'Rent Car',
            link:'#'
        },
        {
            title:'Booking',
            link:'#'
        },
        {
            title:'Visit Places',
            link:'#'
        },
        {
            title:'List your car',
            link:'#'
        },
    ]

  return (
    <div className="fixed w-[100%] bg-[#FFEA00] shadow-md">
      <div className="flex justify-between w-[100%]">
        <div className="w-[40%]">
          <img src={logo} alt="" className="w-36"/>
        </div>
        <div className="flex w-[40%] justify-between">
          <div className="flex items-center gap-10">
            {
                navLinks.map((data, index) => (
                    <ul key={index} className="hover:underline underline-offset-8">
                        <li><a href={data.link}>{data.title}</a></li>
                    </ul>
                ))
            }
          </div>
          <div className="flex items-center gap-8 mr-4">
            <FaHeart size={28} className="text-[#2F2F2F] hover:text-[#5f5f5f] active:scale-95"/>
            <RiCustomerService2Fill size={28} className="text-[#2F2F2F] hover:text-[#5f5f5f] active:scale-95"/>
            <button className="text-white bg-[#2F2F2F] text-[18px] px-3 py-1 rounded-md hover:bg-[#5f5f5f] active:scale-95">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};