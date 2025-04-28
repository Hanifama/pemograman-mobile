import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-xl rounded-lg w-full max-w-2xl">
        <h1 className="text-6xl font-extrabold text-teal-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">
          Halaman Ini Sedang Dalam Pengembangan
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          Kami sedang mengerjakan sesuatu yang hebat! Harap kembali lagi nanti.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Kembali ke Beranda
          </a>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          <p>Terima kasih telah mengunjungi website kami.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
