import React from 'react';

const Analytics = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Analitikler</h1>

      {/* Filtreler ve tarih aralığı seçimi */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <select className="p-2 border rounded-md">
            <option>Tüm Platformlar</option>
            <option>Meta</option>
            <option>Google Ads</option>
            <option>TikTok</option>
          </select>
          <select className="p-2 border rounded-md">
            <option>İzlenimler</option>
            <option>Dönüşümler</option>
            <option>Harcamalar</option>
          </select>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          Gelişmiş Filtreler
        </button>
      </div>

      {/* Analitik Veriler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Toplam Tıklama Sayısı</h3>
          <p className="text-2xl text-green-600">19,9 bin</p>
          <p className="text-sm text-green-500">Son döneme göre %8,2 artış</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Toplam Harcama</h3>
          <p className="text-2xl text-red-600">2.991 dolar</p>
          <p className="text-sm text-red-500">Geçen döneme göre %2,1 azalış</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Dönüşümler</h3>
          <p className="text-2xl text-purple-600">600</p>
          <p className="text-sm text-purple-500">Son döneme göre %15,3 artış</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Dönüşüm Oranı</h3>
          <p className="text-2xl text-orange-600">3,01%</p>
        </div>
      </div>

      {/* Grafik veya detaylı veri bölümü */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Gelir ve Harcama</h2>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-lg font-semibold">Gelir</p>
            <p className="text-xl">$10,000</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Toplam Harcama</p>
            <p className="text-xl">$8,500</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold">Kâr</p>
            <p className="text-xl text-green-600">$1,500</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Yatırım Getirisi (ROI)</p>
            <p className="text-xl text-blue-600">1.5x</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
