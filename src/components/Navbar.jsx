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
    <nav className="p-6 flex items-center justify-between shadow-md bg-white w-full z-50 relative top-0">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <div className="items-center justify-center">

        <img
          src={logo}
          alt="Ecodoe Logo"
          className="h-16 object-contain cursor-pointer"
        />
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-center gap-x-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="hover:text-gray-700 hover:bg-gray-200 px-3 py-2 rounded cursor-pointer transition-colors text-lg"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md p-4 transition-all duration-300 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-700 hover:bg-gray-200 px-3 py-2 rounded cursor-pointer transition-colors"
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
