import React, { useEffect } from "react";
import { AddCar } from "../components/AddCar";

export const ListCars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32">
      <div>
        <AddCar />
      </div>
    </div>
  );
};
