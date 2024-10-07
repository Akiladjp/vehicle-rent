import React, { useState } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import profilePic1 from "../assets/profile1.jpg";
import profilePic2 from "../assets/profile2.jpg";
import profilePic3 from "../assets/profile3.jpg";
import profilePic4 from "../assets/profile4.jpg";
import profilePic5 from "../assets/profile5.jpg";
import { motion } from "framer-motion";

export const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const tLength = 5; // Total number of testimonials

  const sample = [
    {
      name: "Sarah Lee",
      description:
        "Amazing experience! The car was spotless, and the rental process was smooth and quick. I rented a car for a business trip, and Ceylon Auto Rentals delivered exceptional service. The staff went above and beyond to make sure everything was perfect. Highly recommended!",
      profilePic: profilePic1,
    },
    {
      name: "David Martin",
      description:
        "Excellent service! The vehicle was in pristine condition, and the staff was very accommodating. Booking was easy, and the car drove beautifully throughout my road trip. Ceylon Auto Rentals exceeded my expectations, and I’ll be using their service again.",
      profilePic: profilePic2,
    },
    {
      name: "Jessica Roberts",
      description:
        "I had a great experience with Ceylon Auto Rentals! The car was well-maintained, and the pickup and drop-off were hassle-free. The team was friendly and made the whole process stress-free. I'll definitely return for my next trip!",
      profilePic: profilePic3,
    },
    {
      name: "Michael Johnson",
      description:
        "The best car rental service I’ve ever used! The vehicle was perfect for my needs, and the rental process was simple and quick. The staff at Ceylon Auto Rentals was professional and made sure everything was well-coordinated. Will definitely rent again!",
      profilePic: profilePic4,
    },
    {
      name: "Emily Davis",
      description:
        "Fantastic experience from start to finish! The booking process was straightforward, and the car was in top-notch condition. The team was very responsive and helpful, making my weekend getaway even more enjoyable. Highly recommend Ceylon Auto Rentals!",
      profilePic: profilePic5,
    },
  ];

  const handleNext = () => {
    setSelected((prev) => (prev + 1) % tLength); // Cycle to the next testimonial
  };

  const handlePrev = () => {
    setSelected((prev) => (prev - 1 + tLength) % tLength); // Cycle to the previous testimonial
  };

  // Animation for image zoom
  const imageZoomAnimation = {
    initial: { scale: 1.2 }, // Starts zoomed in
    animate: { scale: 1 },   // Zooms out to normal size
    exit: { scale: 1.2 },    // Zooms in when leaving
    transition: { duration: 0.5 },
  };

  // Animation for name and description
  const textAnimation = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex flex-col mx-auto mt-40 mb-32">
      <div className="flex justify-center my-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Happy Customers
        </h2>
      </div>

      <div className="w-[60%] bg-[#FFEA00] flex mx-auto h-[300px] rounded-lg mb-8">
        {/* Testimonial section */}
        <div className="w-[35%] flex justify-center items-center">
          {/* Image section */}
          <motion.div
            className="bg-white w-[200px] h-[200px] rounded-full overflow-hidden flex justify-center items-center"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={imageZoomAnimation}
          >
            <motion.img
              src={sample[selected].profilePic}
              alt={sample[selected].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="w-[65%]">
          {/* Name and description */}
          <motion.div
            key={selected} // Ensures animation applies on change
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textAnimation}
          >
            <h1 className="mt-12 font-bold text-[24px]">{sample[selected].name}</h1>
            <p className="mt-4 w-[90%]">{sample[selected].description}</p>
          </motion.div>
          
          {/* Arrows */}
          <div className="flex gap-4 h-20 w-[90%] justify-end relative">
            <div className="absolute bottom-0 right-0 flex gap-4">
              <BsFillTriangleFill
                className="-rotate-90 transform transition-all duration-300 hover:scale-125 cursor-pointer"
                size={24}
                onClick={handlePrev}
              />
              <BsFillTriangleFill
                className="rotate-90 transform transition-all duration-300 hover:scale-125 cursor-pointer"
                size={24}
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
