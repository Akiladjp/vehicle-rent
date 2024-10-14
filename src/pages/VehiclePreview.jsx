import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const VehiclePreview = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div>
      <div className="pt-32 mb-16 flex flex-col">
        {/* Title Section */}
        <div className="flex justify-center mb-8">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Book Your Vehicle
          </h1>
        </div>

        {/* Vehicle Preview Section */}
        <div className="flex justify-center gap-32 px-6 mt-20">
          {/* Image Slider */}
          <div className="flex flex-col">
            <div className="flex mb-4 gap-6">
              <div className="flex items-center gap-1">
                <FaLocationDot /> <p>Ella, Srilanka</p>
              </div>
              <div className="flex items-center gap-1">
                <IoMdStar color="[#ffe030]" /> <p className="mt-1">12</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[400px] h-[400px] bg-[#D9D9D9] rounded-sm shadow-sm"></div>
              <div className="flex flex-col gap-5">
                <div className="w-[120px] h-[120px] bg-[#D9D9D9] rounded-sm shadow-sm"></div>
                <div className="w-[120px] h-[120px] bg-[#D9D9D9] rounded-sm shadow-sm"></div>
                <div className="w-[120px] h-[120px] bg-[#D9D9D9] rounded-sm shadow-sm"></div>
              </div>
            </div>
            <div className="flex mt-12 items-center gap-3">
              <div className="bg-[#D9D9D9] rounded-full h-12 w-12"></div>
              <p className="text-lg">Owner : Mr. A.K. Dissanayaka</p>
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="w-[400px] mt-11">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800 underline underline-offset-4">
                Vehicle Details
              </h2>
            </div>
            <div className="mt-6">
              <table className="text-md text-gray-700 w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Brand:</td>
                    <td className="py-2">Toyota KDH</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Transmission:</td>
                    <td className="py-2">Automatic</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Engine:</td>
                    <td className="py-2">3.0L Diesel</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Seat Count:</td>
                    <td className="py-2">8</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Color:</td>
                    <td className="py-2">White</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Mileage:</td>
                    <td className="py-2">50,000 KM</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-2">Price:</td>
                    <td className="py-2">0.50$ per 1KM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* booking section */}

      <div className="w-[40%] mx-auto p-6 rounded-md border border-black my-12 mt-40">
        <div className="flex flex-col ">
          <div className="flex mb-4 justify-center gap-16">
            {/* From Date Section */}
            <div className="">
              <p className="text-gray-700 mb-1">From:</p>
              <div className="relative">
                <FaCalendarCheck className="absolute top-3 left-2 text-black" />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full p-2 pl-10 bg-gray-200 border border-gray-300 rounded-md"
                  placeholderText="Select a date"
                />
              </div>
            </div>

            {/* To Date Section */}
            <div className="">
              <p className="text-gray-700 mb-1">To:</p>
              <div className="relative">
                <FaCalendarCheck className="absolute top-3 left-2 text-gray-500" />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setEndDate(date)}
                  className="w-full p-2 pl-10 bg-gray-200 border border-gray-300 rounded-md"
                  placeholderText="Select a date"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-4 ml-[72px] mt-4">
            <p className="text-gray-700">With Driver:</p>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="h-5 w-5 border-gray-300 rounded focus:ring-gray-500"
            />
          </div>
        </div>

        {/* Checkbox Section */}

        {/* Book Now Button */}
        <div className="flex justify-center">
          <button className="bg-[#ffed47] py-2 px-3 rounded-md shadow-sm hover:bg-[#ffdd47] active:scale-95">
            Book Now
          </button>
        </div>
      </div>

      {/* feedback section */}
      <div></div>
    </div>
  );
};
