import React, { useState } from "react";
import logo from "../assets/ecodoe-logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 border-gray-300 p-4">
      <div className="sticky container mx-auto flex items-center justify-between">
        {/* Menu Items */}
        <ul className={`
          md:flex md:space-x-6 md:items-center md:justify-between md:w-full
          absolute top-16 left-0 w-full bg-white p-4 shadow-md md:static md:bg-transparent md:p-0
          ${isOpen ? "block" : "hidden"}
        `}>
          <li className="md:mr-6">
            <img src={logo} alt="Ecodoe Logo" className="h-12" />
          </li>
          {[
            "BERANDA",
            "TENTANG KAMI",
            "UMKM",
            "PORTOFOLIO",
            "PRODUK",
            "BLOG",
            "KARIR",
            "KONTAK",
          ].map((item, index) => (
            <li key={index} className="hover:text-gray-700 cursor-pointer py-2 md:py-0">
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;