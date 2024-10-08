import React, { useState } from "react";

export const LoginSign = () => {

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Login</h1>
        <form className="bg-white shadow-md rounded-lg px-8 py-6 max-w-sm w-full">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffee58]"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Your password"
              className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffee58]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="submit"
              value="Login"
              className="w-full p-3 bg-[#ffee58] text-black rounded-md hover:bg-[#ffdd44] transition duration-200 font-bold"
            />
          </div>
        </form>

        <p className="mt-4 text-gray-700">
          Create an Account{" "}
          <button className="text-blue-500 hover:underline focus:outline-none" onClick={()=>setSwitchPage(!switchPage)}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
};
