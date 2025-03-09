import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "BERANDA",
    "TENTANG KAMI",
    "UMKM",
    "PORTOFOLIO",
    "PRODUK",
    "BLOG",
    "KARIR",
    "KONTAK",
  ];

  return (
    <nav className=" lg:p-6 flex items-center justify-between lg:justify-around shadow-md bg-white w-full z-50 relative top-0">
      {/* Logo */}
      <div className="flex-1 flex lg:justify-end w-1/5">
        <img
          src={logo}
          alt="Ecodoe Logo"
          className="h-16 p-2 object-contain cursor-pointer"
        />
      </div>

      {/* Desktop Menu */}
      <div className="flex w-4/5">
        <ul className="hidden lg:flex items-center justify-around flex-1 gap-x-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-700 hover:bg-gray-200 px-3 py-2 rounded cursor-pointer transition-colors text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden w-auto p-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md p-4 transition-all duration-300 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-700 text-sm hover:bg-gray-200 px-3 py-2 rounded cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
