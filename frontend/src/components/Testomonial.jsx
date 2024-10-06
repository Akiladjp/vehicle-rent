import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import profilePic from "../assets/profilePic.jpeg";

export const Testomonial = () => {
  return (
    <div className="flex flex-col mx-auto my-12 mb-32">
      <div className="flex justify-center my-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Happy Cutomers
        </h2>
      </div>
      <div className="w-[60%] bg-[#FFEA00] flex mx-auto h-[300px] rounded-lg">
        {/* testomonial section */}
        <div className="w-[35%] flex justify-center items-center">
          {/* image section */}
          <div className="bg-white w-[200px] h-[200px] rounded-full overflow-hidden flex justify-center items-center">
            <img
              src={profilePic}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-[65%]">
          {/* content */}
          <div className="">
            {/* description */}
            <h1 className="mt-12 font-bold text-[24px]">Marry Angle</h1>
            <p className="mt-4 w-[90%]">
              “ Fantastic service! The car was in excellent condition, and the
              booking process was incredibly easy. I needed a vehicle for a
              weekend getaway, and Ceylon Auto Rentals provided the perfect
              option. The staff was friendly and professional, making the
              experience seamless from start to finish. I’ll definitely be
              renting again! ”
            </p>
          </div>
          <div className="flex gap-4 h-20 w-[90%] justify-end relative">
            {/* arrows */}
            <div className="absolute bottom-0 right-0 flex gap-4">
              <BsFillTriangleFill className="-rotate-90 transform transition-all duration-300 hover:scale-125" size={24} />
              <BsFillTriangleFill className="rotate-90 transform transition-all duration-300 hover:scale-125"  size={24}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
