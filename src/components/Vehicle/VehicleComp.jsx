import React from "react";

export const VehicleComp = (props) => {
  return (
    <div>
      <div className="w-[320px] h-[400px] bg-[#ffee58] m-4 border-2 border-black rounded-lg py-4">
        <div className="h-[180px]">
          <div className="h-[180px] flex items-center justify-center">
            <img
              src={props.image}
              alt=""
              className="w-44 h-full object-contain"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[22px] ml-2">{props.car_name}</h1>
          <p className="text-[14px] ml-2">
            *Additional charge applies when hiring a driver.
          </p>
          <div className="flex justify-center">
            <div className="mt-6 text-[18px]">
              <div className="flex gap-[65px]">
                <p>0 - 100Km </p>
                <p>: {props.price1} / 1Km</p>
              </div>
              <div className="flex gap-5">
                <p>100Km - 200Km </p>
                <p>: {props.price2} / 1km</p>
              </div>
              <div className="flex gap-[74px]">
                <p>200Km &lt; </p>
                <p>: {props.price3} / 1km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
