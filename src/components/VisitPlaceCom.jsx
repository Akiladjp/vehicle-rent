import React from "react";
import VisitPlaces from "../assets/documents/VisitPlaces.js";

export const VisitPlaceCom = () => {
  return (
    <div className="mt-12 flex flex-col space-y-10">
  {VisitPlaces.map((data, index) => (
    <div
      key={index}
      className="flex border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-[80%] mx-auto"
    >
      <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-slate-300 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"></div>
      <div className="ml-8 flex flex-col justify-center space-y-4">
        <div className="flex items-center space-x-3">
          <p className="text-2xl font-extrabold text-gray-700">{data.no}.</p>
          <h1 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
            {data.place}
          </h1>
        </div>
        <div>
          <p className="text-gray-600 text-lg leading-relaxed">{data.description}</p>
        </div>
        <div>
          <a 
            href="#" 
            className="text-blue-500 font-bold underline-offset-4 underline hover:text-blue-700 transition-colors duration-300"
          >
            View Location
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};
