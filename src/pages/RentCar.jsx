import React, { useEffect } from "react";
import { VehicleComp } from "../components/Vehicle/VehicleComp";
import AllCars from "../assets/documents/AllCars.js";

export const RentCar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 mb-12">
      <div className="flex justify-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Book Your Vehicle
        </h1>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};
