import React from "react";
import card3 from "../assets/card-3.svg";
import cartAdd from "../assets/cart-add.svg";
import coin from "../assets/coin-2.svg";
import factory from "../assets/factory.svg";
import gift from "../assets/gift.svg";
import handTruck from "../assets/hand-truck.svg";
import location from "../assets/location.svg";
import userAdd from "../assets/user-add.svg";


const Achievement = () => {
  const data = [
    {
      icon: userAdd,
      alt: "UMKM Tergabung",
      value: ">1.000",
      label: "UMKM Tergabung",
    },
    {
      icon: gift,
      alt: "Ragam Produk",
      value: ">240",
      label: "Ragam Produk UMKM",
    },
    {
      icon: location,
      alt: "Kota di Indonesia",
      value: "10",
      label: "Kota di Indonesia",
    },
    {
      icon: handTruck,  
      alt: "Produk Terjual",
      value: ">500.000 pcs",
      label: "Produk UMKM Kreator Terjual",
    },
    {
      icon: cartAdd,
      alt: "Permintaan Pengadaan",
      value: ">50 JUTA",
      label: "Permintaan Pengadaan Produk UMKM",
    },
    {
      icon: factory,  
      alt: "Perusahaan Ikut",
      value: ">12.000",
      label: "Perusahaan Ikut Mendukung UMKM",
    },
    {
      icon: card3,
      alt: "Transaksi",
      value: ">10 Miliar",
      label: "Transaksi untuk UMKM",
    },
    {
      icon: coin,
      alt: "Peningkatan Pendapatan",
      value: ">600%",
      label: "Peningkatan Pendapatan per UMKM",
    },
  ];

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img src={item.icon} alt={item.alt} />
            <div className="mx-auto">
              <h3 className="text-2xl font-bold text-primary">{item.value}</h3>
              <p className="text-muted-foreground text-gray-400 text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achievement;
