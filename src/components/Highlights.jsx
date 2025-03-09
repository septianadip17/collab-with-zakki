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
    title: "Pusat Pengadaan Produk Berkualitas dari Kreator UMKM Lokal",
    description:
      "Telah tersedia 240 macam produk dari Kreator UMKM yang bisa perusahan Anda pesan dalam jumlah banyak dengan pelayanan cepat.",
    buttonText: "Pesan Produk UMKM",
    buttonLink: "#",
    align: "right",
  },
  {
    image: aMan,
    title: "Kreator UMKM Naik Kelas!",
    description:
      "Bergabunglah bersama Kami untuk menjadi Kreator UMKM Ecodoe. Anda akan mendapatkan akses proyek pengadaan produk senilai ratusan juta, pendanaan usaha hingga 50 juta, pendampingan branding produk, perluasan pasar, manajemen sumber daya manusia, pengurusan izin usaha, dan tergabung dalam Inkubator UMKM.",
    buttonText: "Gabung Jadi Kreator",
    buttonLink: "#",
    align: "left",
  },
];

const HighlightItem = ({ image, title, subtitle, description, buttonText, buttonLink, align }) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <div
        className={`relative p-6 md:p-12 text-white max-w-[90%] md:max-w-[50%] ${
          align === "right" ? "ml-auto text-right" : "mr-auto text-left"
        }`}
      >
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-lg md:text-2xl italic mt-2">{subtitle}</p>}
        <p className="text-sm md:text-base mt-4">{description}</p>
        <a href={buttonLink} className="mt-4 inline-block bg-[#147959] text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base">
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