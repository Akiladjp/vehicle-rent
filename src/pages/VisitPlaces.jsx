import React, { useEffect } from "react";
import { VisitPlaceCom } from "../components/VisitPlaceCom";

export const VisitPlaces = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <VisitPlaceCom />
    </div>
  );
};
