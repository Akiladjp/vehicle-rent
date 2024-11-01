import React, { useState } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfile({ ...profile, [id]: value });
  };

  const handleEdit = () => {
    // Add edit functionality
  };

  const handleSave = () => {
    // Add save functionality
    console.log("Profile saved:", profile);
  };

  const handleLogout = () => {
    // Add logout functionality
    console.log("Logged out");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-lg w-full shadow-lg rounded-xl p-8 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          User Profile
        </h2>

        <div className="flex justify-center mb-4">
          <div className="relative group">
            <img
              src="profile-placeholder.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-[#ffee58] shadow-md"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-300 flex items-center justify-center">
              <button className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Change
              </button>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-none shadow-inner focus:ring-4 focus:ring-[#ffee58] focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-none shadow-inner focus:ring-4 focus:ring-[#ffee58] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-none shadow-inner focus:ring-4 focus:ring-[#ffee58] focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="relative">
            <textarea
              id="address"
              value={profile.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-none shadow-inner focus:ring-4 focus:ring-[#ffee58] focus:outline-none"
              rows="3"
              placeholder="Enter your address"
            />
          </div>
        </form>

        {/* Buttons positioned in different areas for a unique layout */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleEdit}
            className="py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none transition duration-300 w-1/3"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="py-2 text-white bg-[#ffee58] rounded-lg hover:bg-yellow-400 shadow-lg transition duration-300 focus:outline-none w-1/3"
          >
            Save
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={handleLogout}
            className="py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 shadow-lg transition duration-300 focus:outline-none w-1/2"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
