import React from "react";
import localaris from "../assets/localaris.png";
import appStore from "../assets/app-store.png";
import googlePlay from "../assets/google-play.png";

const Downloads = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="mx-auto flex flex-col md:flex-row items-center max-w-6xl">
        <div className="flex-1 flex justify-center">
          <img
            src={localaris}
            alt="Three people holding various products"
            className="lg:w-auto lg:h-auto"
          />
        </div>

        <div className="flex-1 p-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-2xl md:text-6xl font-bold text-green-800 leading-normal">
            Sudah Saatnya Berkontribusi Dukung Produk UMKM Lokal
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Pesan beragam kebutuhan pengadaan produk perusahaan dari UMKM Lokal
            dengan mudah dan cepat.
          </p>

          <div className="mt-6">
            <h3 className="text-lg md:text-xl font-bold text-green-800">
              Download Sekarang
            </h3>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="#">
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  className="w-40 h-12"
                />
              </a>
              <a href="#">
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="w-40 h-12"
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
