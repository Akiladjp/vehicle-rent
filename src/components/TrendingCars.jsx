import React from "react";
import { VehicleComp } from "./Vehicle/VehicleComp";
import trendingCars from "../assets/documents/TrendingCars.js";
import { Link } from "react-router-dom";

export const TrendingCars = () => {
  return (
    <div className="mb-[200px]">
      <div className="flex justify-center mt-20">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Our Best Cabs
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-16">
          {trendingCars.map((data, index) => (
            <div key={index}>
                <VehicleComp
                  image={data.car_image}
                  car_name={data.car_name}
                  price={data.price1}
                  location={data.location}
                  driver={data.driver}
                />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <Link to="/rentcar">
          <button className="px-4 py-2 bg-[#ffed47] rounded-lg shadow-md hover:underline hover:underline-offset-4 hover:bg-[#ffdd43] active:scale-95">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};
