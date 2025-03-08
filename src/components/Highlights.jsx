import React from "react";
import aMan from "../assets/a-man.jpeg";
import grandMa from "../assets/grandma.jpeg";
import taylorMan from "../assets/taylor-man.jpeg";
import manAboutUs from "../assets/man-about-us.jpeg";

const highlightsData = [
  {
    image: manAboutUs,
    title: "Dari UMKM untuk Indonesia",
    subtitle: "\"Ekonomi Gotong Royong\"",
    description:
      "Ecodoe akan membawa Kreator UMKM Indonesia naik kelas dengan menghubungkan ke klien B2B, membuka akses pinjaman dana modal usaha, promosi produk dan perluasan pasar, pengurusan dokumen legalitas usaha, dan pelatihan dalam UMKM Inkubator.",
    buttonText: "Tentang Kami",
    buttonLink: "#",
    align: "right",
  },
  {
    image: grandMa,
    title: "Jadilah Pahlawan UMKM dan Bangga Buatan Indonesia",
    description:
      "Dukung Kreator UMKM lokal dengan mengajukan pengadaan produk dan jasa untuk perusahaan Anda bersama Kami.",
    buttonText: "Ikut Dukung",
    buttonLink: "#",
    align: "left",
  },
  {
    image: taylorMan,
    title: "Dari UMKM untuk Indonesia",
    subtitle: "\"Ekonomi Gotong Royong\"",
    description:
      "Ecodoe akan membawa Kreator UMKM Indonesia naik kelas dengan menghubungkan ke klien B2B, membuka akses pinjaman dana modal usaha, promosi produk dan perluasan pasar, pengurusan dokumen legalitas usaha, dan pelatihan dalam UMKM Inkubator.",
    buttonText: "Tentang Kami",
    buttonLink: "#",
    align: "right",
  },
  {
    image: aMan,
    title: "Jadilah Pahlawan UMKM dan Bangga Buatan Indonesia",
    description:
      "Dukung Kreator UMKM lokal dengan mengajukan pengadaan produk dan jasa untuk perusahaan Anda bersama Kami.",
    buttonText: "Ikut Dukung",
    buttonLink: "#",
    align: "left",
  },
];

const HighlightItem = ({ image, title, subtitle, description, buttonText, buttonLink, align }) => {
  return (
    <div className="relative mt-8">
      <img alt={title} className="w-full h-auto" src={image} />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8 ${
          align === "right" ? "items-end text-right" : "items-start"
        }`}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="text-white text-xl md:text-2xl italic mt-2">{subtitle}</p>}
        <p className="text-white mt-4 max-w-lg">{description}</p>
        <a href={buttonLink} className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const Highlights = () => {
  return (
    <div className="mx-auto">
      {highlightsData.map((item, index) => (
        <HighlightItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Highlights;
