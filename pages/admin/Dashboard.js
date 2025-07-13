import React from 'react';
import { FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      {/* Ana içerik başlığı */}
      <h1 className="text-3xl font-semibold mb-4">Admin Paneli</h1>
      <h2 className="text-2xl font-semibold mb-4">Hoşgeldiniz, Admin</h2>

      {/* Kampanya Verileri */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-600">Toplam Kullanıcı</h3>
          <p className="text-2xl text-gray-800">2,500</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-600">Aktif Siparişler</h3>
          <p className="text-2xl text-gray-800">320</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-yellow-600">Gelir</h3>
          <p className="text-2xl text-gray-800">$5,000</p>
        </div>
      </div>

      {/* Kampanyalar Tablosu */}
      <div className="bg-white mt-8 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Kampanyalar</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Kampanya</th>
              <th className="p-2 text-left">Durum</th>
              <th className="p-2 text-left">Bütçe</th>
              <th className="p-2 text-left">Harcanan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Kampanya 1</td>
              <td className="p-2 text-green-500">Aktif</td>
              <td className="p-2">$2,500</td>
              <td className="p-2">$1,847</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Kampanya 2</td>
              <td className="p-2 text-yellow-500">Beklemede</td>
              <td className="p-2">$5,000</td>
              <td className="p-2">$3,200</td>
            </tr>
            <tr>
              <td className="p-2">Kampanya 3</td>
              <td className="p-2 text-red-500">Durduruldu</td>
              <td className="p-2">$1,800</td>
              <td className="p-2">$1,200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
