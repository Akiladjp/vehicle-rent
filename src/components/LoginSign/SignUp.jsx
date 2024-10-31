import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgwallpaper from "../../assets/loginBackground.jpg";
import axios from "axios";
import Alert from "../../alert/Alert";

export const SignUp = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [password, setPassword] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/signup`, {
        name,
        email,
        mobile,
        password,
      });
      console.log(name, email, mobile, password);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Email Already Exist");
        setShowAlert(true);
      } else {
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
        setShowAlert(true);
      }

      console.log(error);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    setErrorMessage("");
  };

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
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 flex justify-center">
            Register
          </h1>
          <form className="" onSubmit={handleRegister}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffee58]"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffee58]"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffee58]"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 relative">
              <input
                type={show === true ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffee58]"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value="Register"
                className="w-full p-3 bg-[#ffee58] text-black rounded-md hover:bg-[#ffdd44] transition duration-200 font-bold"
              />
            </div>
          </form>

          {showAlert && <Alert message={errorMessage} onClose={closeAlert} />}

          <p className="mt-4 text-gray-700 flex gap-1 justify-center">
            Already have an Account{" "}
            <Link
              to="/"
              className="text-blue-500 hover:underline focus:outline-none font-bold"
              onClick={() => {}}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
