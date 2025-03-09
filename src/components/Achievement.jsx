import React from "react";
import card3 from "../assets/card-3.svg";
import cartAdd from "../assets/cart-add.svg";
import coin from "../assets/coin-2.svg";
import factory from "../assets/factory.svg";
import gift from "../assets/gift.svg";
import handTruck from "../assets/hand-truck.svg";
import location from "../assets/location.svg";
import userAdd from "../assets/user-add.svg";

const achievements = [
  { icon: userAdd, value: ">1.000", label: "UMKM Tergabung" },
  { icon: gift, value: ">240", label: "Ragam Produk UMKM" },
  { icon: location, value: "10", label: "Kota di Indonesia" },
  { icon: handTruck, value: ">500.000 pcs", label: "Produk UMKM Kreator Terjual" },
  { icon: cartAdd, value: ">50 JUTA", label: "Permintaan Pengadaan Produk UMKM" },
  { icon: factory, value: ">12.000", label: "Perusahaan Ikut Mendukung UMKM" },
  { icon: card3, value: ">10 Miliar", label: "Transaksi untuk UMKM" },
  { icon: coin, value: ">600%", label: "Peningkatan Pendapatan per UMKM" },
];

const Achievement = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 p-8">
      {achievements.map((item, index) => (
        <div key={index} className=" flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 text-center md:text-left">
          <img src={item.icon} alt={item.label} className="w-12 h-12" />
          <div>
            <h3 className="text-2xl font-bold text-primary">{item.value}</h3>
            <p className="text-gray-500 text-sm">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
