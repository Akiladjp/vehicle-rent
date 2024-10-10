import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lvtbt5a", "template_wjy7sfb", form.current, {
        publicKey: "YmAsgO3AHp8lnb-aP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="flex justify-center mt-20 mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Send Your Message
        </h2>
      </div>
      <div className="w-[60%] bg-[#FFEA00] pb-12 pt-8 flex flex-col mx-auto h-auto rounded-lg shadow-lg">
        <div className="w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-center p-8 space-y-6"
          >
            <div className="w-full">
              <div className="relative w-[80%] mx-auto">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full p-3 pr-20 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="submit"
                  value="Send"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="10"
                className="w-[80%] p-3 border border-gray-300 rounded-md mx-auto flex text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </form>
        </div>
        <div className="flex mt-4 gap-5 justify-center">
          <IoLogoWhatsapp size={28} className="hover:scale-110 hover:text-[#666666]"/>
          <FaFacebook size={26} className="hover:scale-110 hover:text-[#666666]"/>
          <RiInstagramFill size={28} className="hover:scale-110 hover:text-[#666666]"/>
          <MdEmail size={30} className="hover:scale-110 hover:text-[#666666]"/>
        </div>
      </div>
    </div>
  );
};
