import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white font-sans py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img
              src="https://storage.googleapis.com/a1aa/image/o7eWrWu2pHWh6bmzr_oNq376JUF508w--daRvVZ5oyI.jpg"
              alt="Ecodoe logo"
              className="mb-4"
              width="100"
              height="100"
            />
            <p className="mb-4">Jl Bukit Duri Tanjakan, Tanjakan DLM XV No. 50 RT.04/RW.08 Bukit Duri, Tebet, South Jakarta - Indonesia. Indonesia 12840</p>
            <p className="mb-4 flex items-center"><FaPhoneAlt className="mr-2" /> (+6221) 21383994</p>
            <button className="bg-white text-green-700 py-2 px-4 rounded-full flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Petunjuk Arah
            </button>
          </div>
          
          <div className="w-full md:w-3/4 flex flex-wrap justify-between">
            <div className="w-1/2 md:w-1/5 mb-6 md:mb-0">
              <h3 className="font-bold mb-4">TENTANG</h3>
              <ul>
                <li className="mb-2"><a href="#">Tentang Ecodoe</a></li>
                <li className="mb-2"><a href="#">Kreator UMKM</a></li>
                <li className="mb-2"><a href="#">Portofolio</a></li>
                <li className="mb-2"><a href="#">Testimoni</a></li>
                <li className="mb-2"><a href="#">Kontak</a></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/5 mb-6 md:mb-0">
              <h3 className="font-bold mb-4">PRODUK</h3>
              <ul>
                <li className="mb-2"><a href="#">Corporate Gift</a></li>
                <li className="mb-2"><a href="#">Seminar Kit</a></li>
                <li className="mb-2"><a href="#">Hampers</a></li>
                <li className="mb-2"><a href="#">Seragam</a></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/5 mb-6 md:mb-0">
              <h3 className="font-bold mb-4">KARIR</h3>
              <ul>
                <li className="mb-2"><a href="#">Lowongan</a></li>
                <li className="mb-2"><a href="#">Nilai dan Budaya</a></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/5 mb-6 md:mb-0">
              <h3 className="font-bold mb-4">UMKM</h3>
              <ul>
                <li className="mb-2"><a href="#">Pendampingan</a></li>
                <li className="mb-2"><a href="#">Perizinan</a></li>
                <li className="mb-2"><a href="#">Pendanaan</a></li>
                <li className="mb-2"><a href="#">Pengadaan Produk</a></li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/5 mb-6 md:mb-0">
              <h3 className="font-bold mb-4">LAINNYA</h3>
              <ul>
                <li className="mb-2"><a href="#">Blog</a></li>
                <li className="mb-2"><a href="#">FAQ</a></li>
                <li className="mb-2"><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="font-bold mb-4">Berlangganan Ecodoe melalui Email</h3>
          <p className="mb-4">Dapatkan info dan promo menarik dari Ecodoe yang akan dikirimkan langsung ke email Anda</p>
          <div className="flex justify-center">
            <input type="email" placeholder="tuliskan alamat email Anda" className="p-2 rounded-l-full text-gray-700" />
            <button className="bg-white text-green-700 py-2 px-4 rounded-r-full">Langganan</button>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p>ECODOE © 2021 PT. ECODOE WIDYA CANDIA INTERNASIONAL</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="mx-2 text-xl"><FaInstagram /></a>
            <a href="#" className="mx-2 text-xl"><FaTwitter /></a>
            <a href="#" className="mx-2 text-xl"><FaFacebook /></a>
            <a href="#" className="mx-2 text-xl"><FaYoutube /></a>
            <a href="#" className="mx-2 text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
