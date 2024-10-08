import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import bgwallpaper from "../../assets/loginBackground.jpg";

export const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgwallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-sm w-full bg-opacity-70">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 flex justify-center">Login</h1>
          <form className="">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffee58]"
                required
              />
            </div>
            <div className="mb-6 relative">
              <input
                type={show === true ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffee58]"
                required
              />
              <div className="absolute top-5 right-4">
                {show === true ? (
                  <FaRegEye onClick={() => setShow(!show)} />
                ) : (
                  <FaRegEyeSlash onClick={() => setShow(!show)} />
                )}
              </div>
            </div>
            <div className="mb-4">
              <input
                type="submit"
                value="Login"
                className="w-full p-3 bg-[#ffee58] text-black rounded-md hover:bg-[#ffdd44] transition duration-200 font-bold"
              />
            </div>
          </form>

          <p className="mt-4 text-gray-700 flex gap-1 justify-center">
            Create an Account{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline focus:outline-none font-bold"
              onClick={() => {}}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
