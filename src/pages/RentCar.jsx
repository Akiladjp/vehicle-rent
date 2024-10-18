import React, { useEffect } from "react";
import { VehicleComp } from "../components/Vehicle/VehicleComp";
import AllCars from "../assets/documents/AllCars.js";

export const RentCar = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 mb-12">
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Book Your Vehicle
        </h1>
        <div className="absolute top-0 right-40">
          <div className="relative">
            <input
              type="text"
              className="border rounded-md py-2 px-4 focus:outline-none focus:ring-2 pr-28"
              placeholder="Search City..."
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 hover:text-black focus:outline-none rounded-md bg-[#ffe030]">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="my-12 grid grid-cols-4 gap-16">
          {AllCars.map((data, index) => (
            <VehicleComp
              key={index}
              image={data.car_image}
              car_name={data.car_name}
              driver={data.driver}
              price={data.price1}
              location={data.location}
              rating={data.rating}
              isFavorite={true}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="flex items-center px-6 py-2 text-gray-600 hover:text-black focus:outline-none rounded-md bg-[#ffe030] mx-2 hover:bg-[#ffcf30]">
          Prev Page
        </button>
        <span className="mx-4 text-gray-600 text-lg bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center font-bold">1</span>
        <button className="flex items-center px-6 py-2 text-gray-600 hover:text-black focus:outline-none rounded-md bg-[#ffe030] mx-2 hover:bg-[#ffcf30]">
          Next Page
        </button>
      </div>
    </div>
  );
};
