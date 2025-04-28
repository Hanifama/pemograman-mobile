import React, { useEffect, useState } from "react";
import axios from "axios";

interface MahasiswaType {
  id: string;
  nama: string;
  nim: string;
  kelas: string;
  points: string;
}

const LatihanAPImahasiswa: React.FC = () => {
  const [data, setData] = useState<MahasiswaType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://mmc-clinic.com/dipa/api/mhs.php")
      .then((response) => {
        setData(response.data.data); 
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal memuat data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-blue-100">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-100">
        <p className="text-xl font-semibold text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-slate-700 tracking-wide text-center">
        Daftar Mahasiswa
      </h1>
      <p className="mb-8 text-center text-sm text-gray-500">
        Created by Harist Fadlilah - 232605005
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-indigo-300 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">{item.nama}</h2>
            <hr className="mb-4 border-gray-300" />
            <p className="text-gray-600 mb-2">
              <span className="font-medium text-slate-700">NIM:</span> {item.nim}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium text-slate-700">Kelas:</span> {item.kelas}
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-slate-700">Points:</span> {item.points}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatihanAPImahasiswa;
