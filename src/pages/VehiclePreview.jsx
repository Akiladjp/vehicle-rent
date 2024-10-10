import React, { useEffect } from "react";

export const VehiclePreview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 mb-16">
      {/* Title Section */}
      <div className="flex justify-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Book Your Vehicle
        </h1>
      </div>

      {/* Vehicle Preview Section */}
      <div className="flex justify-center gap-12 px-6 mt-20">
        {/* Image Slider */}
        <div className="flex gap-6">
          <div className="w-[400px] h-[400px] bg-slate-200 rounded-lg shadow-md"></div>
          <div className="flex flex-col gap-5">
            <div className="w-[120px] h-[120px] bg-slate-200 rounded-md shadow-md"></div>
            <div className="w-[120px] h-[120px] bg-slate-200 rounded-md shadow-md"></div>
            <div className="w-[120px] h-[120px] bg-slate-200 rounded-md shadow-md"></div>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="w-[400px]">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 underline underline-offset-4">
              Vehicle Details
            </h2>
          </div>
          <div className="mt-6">
            <table className="text-md text-gray-700 w-full">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold py-2">Brand:</td>
                  <td className="py-2">Toyota KDH</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Transmission:</td>
                  <td className="py-2">Automatic</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Engine:</td>
                  <td className="py-2">3.0L Diesel</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Seat Count:</td>
                  <td className="py-2">8</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Color:</td>
                  <td className="py-2">White</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Mileage:</td>
                  <td className="py-2">50,000 KM</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2">Price:</td>
                  <td className="py-2">0.50$ per 1KM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7">
            <button className="bg-[#ffed47] py-2 px-4 rounded-md shadow-sm hover:bg-[#ffdd47] active:scale-95">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
