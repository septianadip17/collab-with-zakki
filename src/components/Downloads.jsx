import React from "react";

const Downloads = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="https://storage.googleapis.com/a1aa/image/7jerZsiMg22QK5IyOczLp7cNGznpcE-Txbe9MqovJDA.jpg"
              alt="Three people holding various products"
              className="w-full max-w-sm"
              width="300"
              height="300"
            />
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-green-800">Sudah Saatnya</h2>
            <h2 className="text-3xl font-bold text-green-800">
              Berkontribusi Dukung
            </h2>
            <h2 className="text-3xl font-bold text-green-800">
              Produk UMKM Lokal
            </h2>
            <p className="mt-4 text-gray-700">
              Pesan beragam kebutuhan pengadaan produk perusahaan dari UMKM
              Lokal dengan mudah dan cepat
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-green-800">
                Download Sekarang
              </h3>
              <div className="flex justify-center md:justify-start mt-4">
                <a href="#" className="mr-4">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/GSpWHE8DLEp3bmP9Jcbkho_LU046Alp_PFJipv7yogQ.jpg"
                    alt="Download on the App Store"
                    width="150"
                    height="50"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/BUXO8qWZkcU11AUxubCl_0kyIou4jeqI7_V-lOX7JeM.jpg"
                    alt="Get it on Google Play"
                    width="150"
                    height="50"ß
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
