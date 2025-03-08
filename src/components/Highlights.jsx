import React from "react";

const Highlights = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* First Section */}
      <div className="relative">
        <img
          alt="A man working on a craft project"
          className="w-full h-auto"
          height="600"
          src="https://storage.googleapis.com/a1aa/image/xO9uQGuoYNo-ilYHRyh74aYqRhZOTYxAZdocXcdVyf0.jpg"
          width="1200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-end p-8 text-right">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Dari UMKM untuk Indonesia
          </h1>
          <p className="text-white text-xl md:text-2xl italic mt-2">
            "Ekonomi Gotong Royong"
          </p>
          <p className="text-white mt-4 max-w-lg">
            Ecodoe akan membawa Kreator UMKM Indonesia naik kelas dengan
            menghubungkan ke klien B2B, membuka akses pinjaman dana modal usaha,
            promosi produk dan perluasan pasar, pengurusan dokumen legalitas
            usaha, dan pelatihan dalam UMKM Inkubator.
          </p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full">
            Tentang Kami
          </button>
        </div>
      </div>
      {/* Second Section */}
      <div className="relative mt-8">
        <img
          alt="Women working on craft projects"
          className="w-full h-auto"
          height="600"
          src="https://storage.googleapis.com/a1aa/image/DqCHqHa_JqNcVr6j1xSXkqrFlQCAW_gEWfL_qnZU0gc.jpg"
          width="1200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Jadilah Pahlawan UMKM dan Bangga Buatan Indonesia
          </h1>
          <p className="text-white mt-4 max-w-lg">
            Dukung Kreator UMKM lokal dengan mengajukan pengadaan produk dan
            jasa untuk perusahaan Anda bersama Kami.
          </p>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full">
            Ikut Dukung
          </button>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
