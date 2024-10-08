import React from "react";
import { VehicleComp } from "../components/Vehicle/VehicleComp";
import ToyotaPrius from "../assets/cars/ToyotaPrius.png";
import { UploadCheck } from "../components/UploadCheck";

export const RentCar = () => {
  return (
    <div className="pt-32">
      <div className="flex justify-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Book Your Vehicle
        </h1>
      </div>
      <div className="my-12">
        <VehicleComp
          image={ToyotaPrius}
          car_name="Toyota Prius"
          price1="0.50$"
          price2="0.70$"
          price3="1.00$"
        />
      </div>
      <div>
        <UploadCheck/>
      </div>
    </div>
  );
};
