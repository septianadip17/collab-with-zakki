import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import footerLogo from "../assets/logo-footer.png";

const navLinks = [
  {
    title: "TENTANG",
    links: [
      "Tentang Ecodoe",
      "Kreator UMKM",
      "Portofolio",
      "Testimoni",
      "Kontak",
    ],
  },
  {
    title: "PRODUK",
    links: ["Corporate Gift", "Seminar Kit", "Hampers", "Seragam"],
  },
  {
    title: "KARIR",
    links: ["Lowongan", "Nilai dan Budaya"],
  },
  {
    title: "UMKM",
    links: ["Pendampingan", "Perizinan", "Pendanaan", "Pengadaan Produk"],
  },
  {
    title: "LAINNYA",
    links: ["Blog", "FAQ", "Privacy Policy"],
  },
];

const socialIcons = [
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaFacebook />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#147958] text-white font-sans py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo & Contact */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={footerLogo}
              alt="Ecodoe logo"
              className="mb-4 w-[214px] h-[64px]"
            />
            <p className="mb-4 text-sm">
              Jl Bukit Duri Tanjakan, Tanjakan DLM XV No. 50 RT.04/RW.08 Bukit
              Duri, Tebet, South Jakarta - Indonesia. 12840
            </p>
            <p className="mb-4 flex items-center">
              <FaPhoneAlt className="mr-2" /> (+6221) 21383994
            </p>
            <button className="bg-white hover:bg-gray-100 text-green-700 py-2 px-4 rounded-full flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Petunjuk Arah
            </button>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-between">
            {navLinks.map((section, index) => (
              <div key={index} className="w-1/2 md:w-1/5 mb-6 md:mb-0">
                <h3 className="font-bold mb-4">{section.title}</h3>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx} className="mb-2">
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10 text-center">
          <h3 className="font-bold mb-4 text-lg">
            Berlangganan Ecodoe melalui Email
          </h3>
          <p className="mb-4 text-base">
            Dapatkan info dan promo menarik dari Ecodoe yang akan dikirimkan
            langsung ke email Anda
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="tuliskan alamat email Anda"
              className="p-2 rounded-full text-gray-700 w-1/3 text-center mr-2"
            />
            <button className="bg-white text-green-700 py-2 px-4 rounded-full">
              Langganan
            </button>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 flex flex-wrap justify-center items-center text-center">
          <p className="text-sm md:text-base m-4">
            ECODOE © 2021 PT. ECODOE WIDYA CANDIA INTERNASIONAL
          </p>
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.link} className="text-xl">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
