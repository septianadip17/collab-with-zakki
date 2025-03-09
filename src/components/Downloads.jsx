import React from "react";
import localaris from "../assets/localaris.png";
import appStore from "../assets/app-store.png";
import googlePlay from "../assets/google-play.png";

const Downloads = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={localaris}
            alt="Three people holding various products"
            className="w-full max-w-md"
            width="300"
            height="300"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-green-800 leading-tight">
            Sudah Saatnya Berkontribusi Dukung Produk UMKM Lokal
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Pesan beragam kebutuhan pengadaan produk perusahaan dari UMKM Lokal
            dengan mudah dan cepat.
          </p>

          {/* Download Section */}
          <div className="mt-6">
            <h3 className="text-lg md:text-xl font-bold text-green-800">
              Download Sekarang
            </h3>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#">
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  width="140"
                  height="45"
                />
              </a>
              <a href="#">
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  width="140"
                  height="45"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
