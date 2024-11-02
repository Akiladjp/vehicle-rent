import React, { useState } from "react";
import axios from "axios";

export const AddCar = () => {
  const [mainImage, setMainImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([null, null, null]);

  const [brand, setBrand] = useState("");
  const [engine, setEngine] = useState("");
  const [fuel, setFuel] = useState("");
  const [seat, setSeat] = useState();
  const [color, setColor] = useState("");
  const [driver, setDriver] = useState("");
  const [price, setPrice] = useState();
  const [transmission, setTransmission] = useState("");

  const handleSeat = (e) => {
    const value = parseInt(e.target.value, 10);
    setSeat(isNaN(value) ? 0 : Math.max(value, 0));
  };

  const handlePrice = (e) => {
    const value = parseInt(e.target.value, 10);
    setPrice(isNaN(value) ? 0 : Math.max(value, 0));
  };

  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMainImage(URL.createObjectURL(file));
    }
  };

  const handleThumbnailUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newThumbnails = [...thumbnails];
      newThumbnails[index] = URL.createObjectURL(file);
      setThumbnails(newThumbnails);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/addVehicle`,
        {
          brand,
          engine,
          transmission,
          seat,
          price,
          fuel,
          color,
          driver,
        }
      );

      console.log("Vehicle added successfully:", response.data);
    } catch (error) {
      console.log("Error is", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a Car</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {/* Images Section */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="w-[400px] h-[400px] bg-[#D9D9D9] rounded-sm shadow-sm flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleMainImageUpload}
                className="absolute opacity-0 w-[400px] h-[400px] cursor-pointer"
              />
              {mainImage ? (
                <img
                  src={mainImage}
                  alt="Main Preview"
                  className="object-cover w-full h-full rounded-sm"
                />
              ) : (
                <span className="text-gray-500">
                  Click to upload main image
                </span>
              )}
            </div>

            <div className="flex flex-col gap-5">
              {thumbnails.map((thumbnail, index) => (
                <div
                  key={index}
                  className="w-[120px] h-[120px] bg-[#D9D9D9] rounded-sm shadow-sm flex items-center justify-center relative"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleThumbnailUpload(index, e)}
                    className="absolute opacity-0 w-[120px] h-[120px] cursor-pointer"
                  />
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      className="object-cover w-full h-full rounded-sm"
                    />
                  ) : (
                    <span className="text-gray-500">Upload</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Vehicle brand and model"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:border-[#ffed47]"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <input
              type="text"
              placeholder="Auto / manual"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:border-[#ffed47]"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
            />
            <input
              type="text"
              placeholder="Engine capacity"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:border-[#ffed47]"
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
            />
            <input
              type="text"
              placeholder="Petrol / diesel / hybrid / electric"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:border-[#ffed47]"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
            />
            <input
              type="number"
              placeholder="Seat count"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:border-[#ffed47]"
              value={seat}
              onChange={handleSeat}
            />
            <input
              type="text"
              placeholder="Vehicle color"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:border-[#ffed47]"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:border-[#ffed47]"
              value={price}
              onChange={handlePrice}
            />
            <input
              type="text"
              placeholder="Driver status (have / haven't)"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:border-[#ffed47]"
              value={driver}
              onChange={(e) => setDriver(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center gap-8">
            <button
              type="button"
              className="w-24 px-4 py-2 border-2 border-[#ffed47] rounded-lg shadow-md hover:underline hover:underline-offset-4 active:scale-95"
            >
              Edit
            </button>
            <button
              type="submit"
              className="w-24 px-4 py-2 bg-[#ffed47] rounded-lg shadow-md hover:underline hover:underline-offset-4 hover:bg-[#ffdd43] active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
