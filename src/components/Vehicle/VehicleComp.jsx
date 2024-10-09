import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const VehicleComp = (props) => {
  const [addFav, setAddFav] = useState(true);
  const handleFavourite = () => {
    setAddFav((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="w-[320px] h-[400px] m-4 border-2 border-black rounded-lg py-4 transition-transform duration-300 cursor-pointer">
        <div className="h-[180px]">
          <div className="h-[180px] flex items-center justify-center">
            <img
              src={props.image}
              alt=""
              className="w-44 h-full object-contain"
            />
          </div>
        </div>
        <div className="ml-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[22px]">{props.car_name}</h1>
            <div className="flex mr-4 mb-2 gap-1">
              <FaRegStar size={16} className="" />
              <p className="text-[12px]">(12)</p>
            </div>
          </div>
          <p className="text-[14px]">{props.driver}</p>
          <div className="flex">
            <div className="mt-3 text-[18px]">
              <div className="flex flex-col gap-y-2 text-[14px]">
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <p>{props.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillDollarCircle />
                  <p>{props.price} per 1KM without driver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link to="#">
            <button className="bg-[#ffed47] py-2 px-3 rounded-md shadow-sm hover:bg-[#ffdd47] active:scale-95">
              Book Now
            </button>
          </Link>
        </div>
        <div className="absolute top-3 right-8">
          <FaHeart
            size={20}
            onClick={handleFavourite}
            className={`${
              addFav ? "text-[#2f2f2f]" : "text-[#e42f2f]"
            } hover:scale-110`}
          />
        </div>
      </div>
    </div>
  );
};
