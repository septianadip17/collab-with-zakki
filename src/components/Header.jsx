import React from "react";

const Header = () => {
  return (
    <div className="bg-[#137958] w-full min-h-[469px] text-white flex justify-center px-4 py-10">
      <div className="flex flex-col items-center justify-center text-center max-w-[1080px] w-full">
        {/* Judul */}
        <div className="flex items-center justify-center w-full max-w-[1043px] px-4">
          <h1
            className="text-[28px] font-bold leading-[42px] tracking-tight 
                        sm:text-[32px] sm:leading-[46px] 
                        md:text-[36px] md:leading-[50px] 
                        lg:text-[44px] lg:leading-[70px] 
                        xl:text-[54px] xl:leading-[92.5px]"
          >
            IKUT MEMAJUKAN KREATOR <br />
            UMKM INDONESIA BERSAMA KAMI
          </h1>
        </div>

        {/* Paragraf */}
        <div className="flex items-center justify-center w-full max-w-[1082px] px-4 mt-6">
          <p
            className="text-[16px] leading-[24px] text-justify 
                        sm:text-[18px] sm:leading-[26px] 
                        md:text-[20px] md:leading-[28px] 
                        lg:text-[22px] lg:leading-[30px]"
          >
            Ecodoe merupakan pusat penghubung antara UMKM lokal dengan
            perusahaan yang membutuhkan pengadaan produk dengan mudah dan cepat
            sesuai permintaan. Melalui satu platform yang terintegrasi, Ecodoe
            membantu UMKM bertumbuh dan berinovasi di era digital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
