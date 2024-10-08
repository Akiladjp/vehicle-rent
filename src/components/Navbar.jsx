import React from "react";
import logo from "../assets/logo.png";
import { FaHeart } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const navLinks = [
        {
            title:'Home',
            link:'/'
        },
        {
            title:'Rent Car',
            link:'/rentcar'
        },
        {
            title:'Booking',
            link:'/booking'
        },
        {
            title:'Visit Places',
            link:'/visitplace'
        },
        {
            title:'List your car',
            link:'/listcar'
        },
    ]

  return (
    <div className="fixed z-50 w-[100%] bg-[#FFEA00] shadow-md">
      <div className="flex justify-between w-[100%]">
        <div className="w-[40%]">
          <img src={logo} alt="" className="w-36"/>
        </div>
        <div className="flex w-[40%] justify-between">
          <div className="flex items-center gap-10">
            {
                navLinks.map((data, index) => (
                    <ul key={index} className="hover:underline underline-offset-8">
                        <li><Link to={data.link}>{data.title}</Link></li>
                    </ul>
                ))
            }
          </div>
          <div className="flex items-center gap-8 mr-4">
            <Link to="/wishlist"><FaHeart size={28} className="text-[#2F2F2F] hover:text-[#5f5f5f] active:scale-95"/></Link>
            <Link to="/customecare"><RiCustomerService2Fill size={28} className="text-[#2F2F2F] hover:text-[#5f5f5f] active:scale-95"/></Link>
            <Link to="/login"><button className="text-white bg-[#2F2F2F] text-[18px] px-3 py-1 rounded-md hover:bg-[#5f5f5f] active:scale-95">Login</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
