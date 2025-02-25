import React from "react";
import logo from "../assets/ecodoe-logo.png";

const Navbar = () => {
  return (
    <nav className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <ul className="flex space-x-6 mx-auto">
          <li>
            <img src={logo} alt="Ecodoe Logo" className="h-10" />
          </li>
          <li className="hover:text-gray-700 cursor-pointer">BERANDA</li>
          <li className="hover:text-gray-700 cursor-pointer">TENTANG KAMI</li>
          <li className="hover:text-gray-700 cursor-pointer">UMKM</li>
          <li className="hover:text-gray-700 cursor-pointer">PORTOFOLIO</li>
          <li className="hover:text-gray-700 cursor-pointer">PRODUK</li>
          <li className="hover:text-gray-700 cursor-pointer">BLOG</li>
          <li className="hover:text-gray-700 cursor-pointer">KARIR</li>
          <li className="hover:text-gray-700 cursor-pointer">KONTAK</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
