import React from "react";
import { FaCarSide } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";

export const WhyUs = () => {
  const whyus = [
    {
      title: "Quality Vehicles",
      description:
        "We take pride in our diverse fleet of well-maintained vehicles, ensuring you enjoy a safe and comfortable ride. Each car is regularly inspected and serviced, giving you peace of mind as you explore the beautiful landscapes of Sri Lanka.",
      icon: <FaCarSide />,
    },
    {
      title: "Affordable Rates",
      description:
        "Enjoy competitive pricing with no hidden fees! We offer transparent and flexible rental options to fit your budget. With special discounts and packages for longer rentals, you can enjoy your trip without breaking the bank.",
      icon: <RiMoneyDollarCircleFill />,
    },
    {
      title: " Exceptional Customer Service",
      description:
        "Our dedicated support team is here for you 24/7, ready to assist with any questions or concerns. Whether you need help with booking, vehicle selection, or roadside assistance, we are committed to providing you with an outstanding rental experience every step of the way.",
      icon: <RiCustomerService2Line />,
    },
  ];

  return (
    <div className="py-16 relative overflow-hidden mt-8">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600">
          Discover the benefits of renting with us
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {whyus.map((data, index) => (
            <div
              key={index}
              className="relative group  bg-gradient-to-b from-white to-[#ffffe8] rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Circular Icon Background */}
              <div className="absolute -top-8 -left-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-4 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <div className="text-5xl text-white">{data.icon}</div>
              </div>

              <div className="pt-12">
                <h1 className="text-2xl font-extrabold text-gray-900 mb-3">
                  {data.title}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute bottom-0 right-0 h-12 w-12 bg-yellow-200 opacity-50 rounded-full transform translate-x-6 translate-y-6"></div>
              <div className="absolute bottom-0 left-0 h-8 w-8 bg-yellow-400 opacity-75 rounded-full transform -translate-x-4 translate-y-4"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-yellow-100 opacity-40 rounded-full blur-2xl transform translate-x-24 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 h-40 w-40 bg-yellow-300 opacity-30 rounded-full blur-3xl transform -translate-x-16 translate-y-16"></div>
      </div>
    </div>
  );
};
