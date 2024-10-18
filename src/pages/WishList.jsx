import React, { useEffect, useState } from "react";
import { VehicleComp } from "../components/Vehicle/VehicleComp";
import WishListDoc from "../assets/documents/WishList.js";

export const WishList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
        Wish List
      </h1>
      <div className="flex justify-center">
        <div className="my-12 grid grid-cols-4 gap-16">
        {WishListDoc.map((data, index) => (
          <div className="">
            <VehicleComp
              key={index}
              image={data.car_image}
              car_name={data.car_name}
              driver={data.driver}
              price={data.price1}
              location={data.location}
              rating={data.rating}
              isFavorite={false}
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};
