import React from "react";

const Achievement = () => {
  const data = [
    {
      icon: "https://openui.fly.dev/openui/24x24.svg?text=👤",
      alt: "UMKM Tergabung",
      value: ">1.000",
      label: "UMKM Tergabung",
    },
    {
      icon: "https://openui.fly.dev/openui/24x24.sßvg?text=🎁",
      alt: "Ragam Produk",
      value: ">240",
      label: "Ragam Produk UMKM",
    },
    {
      icon: "https://openui.fly.dev/openui/24x24.svg?text=🛒",
      alt: "Produk Terjual",
      value: ">500.000 pcs",
      label: "Produk UMKM Kreator Terjual",
    },
    {
      icon: "https://openui.fly.dev/openui/24x24.svg?text=📈",
      alt: "Permintaan Pengadaan",
      value: ">50 JUTA",
      label: "Permintaan Pengadaan Produk UMKM",
    },
    {
      icon: "https://openui.fly.dev/openui/24x24.svg?text=💳",
      alt: "Transaksi",
      value: ">10 Miliar",
      label: "Transaksi untuk UMKM",
    },
    {
      icon: "https://openui.fly.dev/openui/24x24.svg?text=📍",
      alt: "Kota di Indonesia",
      value: "10",
      label: "Kota di Indonesia",
    },
    {
      icon: "https://openui.fly.dev/openui/24x24.svg?text=🏭",
      alt: "Perusahaan Ikut",
      value: ">12.000",
      label: "Perusahaan Ikut Mendukung UMKM",
    },
    {
      icon: "https://openui.fly.dev/openui/24x24.svg?text=💰",
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
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achievement;
