import vehicleModels from "../models/vehicleModels.js";

export const addVehicle = async (req, res) => {
  const newCar = new vehicleModels(req.body);
  
  try {
    const { brand, engine, transmission, seat, price, fuel, color, driver } =
      newCar;

    if (
      !brand ||
      !engine ||
      !transmission ||
      !seat ||
      !price ||
      !fuel ||
      !color ||
      !driver
    ) {
      res.status(400).json({ message: "All fields are required" });
    }

    const saveCar = await newCar.save();
    res
      .status(201)
      .json({ message: "New car added successfully", car: saveCar });
  } catch (error) {
    console.error("Error adding vehicle:", error);
    res.status(400).json({ message: "Error in add vehicle" });
  }
};
