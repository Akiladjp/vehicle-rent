import React, { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.jpg";
import ax from "../assets/ax.webp";
import { MdCopyright } from "react-icons/md";

export const Footer = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  return (
    <div className="bg-[#f2e24e] flex shadow-md pb-8">
      <div className="w-full flex flex-col justify-center">
        <div className="flex justify-center flex-col mt-4">
          {/* logo and brand section */}
          <h2 className="flex justify-center uppercase font-bold text-[24px]">
            ceylon auto rentals
          </h2>
          <p className="flex justify-center">
            srilanka's largest car rental service
          </p>
          <img src={logo} alt="" className="w-64 mt-8 flex mx-auto" />
        </div>
        <div className="grid grid-cols-4 w-[80%] mx-auto">
          {/* content */}
          <div className="mt-16 ml-16">
            {/* links */}
            <h2 className="font-bold text-[20px]">Quick links</h2>
            <ul className="mt-2">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/rentcar">
                <li>Rent a Car</li>
              </a>
              <a href="/booking">
                <li>Bookings</li>
              </a>
              <a href="/listcar">
                <li>List your Car</li>
              </a>
              <a href="/aboutus">
                <li>About Us</li>
              </a>
            </ul>
          </div>

          {/* Social media icons */}
          <div className="mt-16 ml-16">
            <h2 className="font-bold text-[20px]">Follow us</h2>
            <div className="flex mt-4 gap-5">
              <IoLogoWhatsapp size={24} />
              <FaFacebook size={24} />
              <RiInstagramFill size={24} />
              <MdEmail size={24} />
            </div>
            <div className="flex gap-2 mt-12">
              <img src={visa} alt="" className="w-12" />
              <img src={mastercard} alt="" className="w-12" />
              <img src={ax} alt="" className="w-12" />
            </div>
          </div>

          {/* Map section */}
          <div className="mt-16">
            <h2 className="font-bold text-[20px]">Our Location</h2>
            <MapContainer
              center={[6.8471, 79.9286]} // Maharagama, Colombo
              zoom={13}
              scrollWheelZoom={false}
              className="h-64 w-full rounded-lg shadow-md mt-4"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[6.8471, 79.9286]}>
                <Popup>Maharagama, Colombo, Sri Lanka</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Location details */}
          <div className="mt-16 flex flex-col ml-64 text-[16px] w-48">
            <h2 className="font-bold text-[20px] mb-4">Contact Us</h2>
            <div className="flex items-center gap-2 ">
              <FaPhoneAlt />
              <p>011 1231234</p>
            </div>
            <div className="flex gap-2 mt-4">
              <FaLocationDot className="mt-1" />
              <div>
                <p>No:15,</p>
                <p>John Doe Street,</p>
                <p>Maharagama, Colombo.</p>
                <p>Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 items-center gap-2">
          {/* Brading and policy */}
          <MdCopyright />
          <h2 className="">
            Designed by <a href="#" className="uppercase font-bold underline underline-offset-4">codeweave technologies</a>
          </h2>
        </div>
      </div>
    </div>
  );
};
