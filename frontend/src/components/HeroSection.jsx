import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/heroImage1.png';
import image2 from '../assets/heroImage2.png';

export const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#FFEA00] flex justify-between pt-48 pb-8 font-poppins">
        
        {/* Left Image */}
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={image1}
            alt=""
            className="w-[600px] transform transition-all duration-300 hover:scale-105"
          />
        </motion.div>
        
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.h2
            className="text-[48px] font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Rent a Car or Earn with Yours
          </motion.h2>
          <motion.h1
            className="text-[64px] font-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            All in One Place!
          </motion.h1>
        </motion.div>
        
        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={image2}
            alt=""
            className="w-[600px] mt-6 transform transition-all duration-300 hover:scale-105"
          />
        </motion.div>
        
      </div>
    </div>
  );
};
