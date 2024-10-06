import React from "react";
import BlinkBlur from "react-loading-indicators";
import { Audio } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div>
      {/* <BlinkBlur color="#32cd32" size="medium" text="" textColor="" /> */}
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
