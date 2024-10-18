import React, { useEffect } from "react";
import { VisitPlaceCom } from "../components/VisitPlaceCom";

export const VisitPlaces = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Book Your Vehicle
        </h1>
      </div>
      <div>
        <VisitPlaceCom />
      </div>
    </div>
  );
};
