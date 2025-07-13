import React from 'react';
import { FaUsers, FaClipboardList, FaAd, FaChartLine, FaDollarSign, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-2xl font-semibold text-center mb-8">Tarvina AI</h2> {/* Sidebar başlığı */}
      <ul className="space-y-4">
        <li>
          <a href="/admin/dashboard" className="flex items-center text-lg hover:text-gray-400">
            <FaClipboardList className="mr-2" /> Dashboard
          </a>
        </li>
        <li>
          <a href="/admin/campaigns" className="flex items-center text-lg hover:text-gray-400">
            <FaClipboardList className="mr-2" /> Kampanyalar
          </a>
        </li>
        <li>
          <a href="/admin/create-ad" className="flex items-center text-lg hover:text-gray-400">
            <FaAd className="mr-2" /> Reklam Oluştur
          </a>
        </li>
        <li>
          <a href="/admin/analytics" className="flex items-center text-lg hover:text-gray-400">
            <FaChartLine className="mr-2" /> Analitikler
          </a>
        </li>
        <li>
          <a href="/admin/billing" className="flex items-center text-lg hover:text-gray-400">
            <FaDollarSign className="mr-2" /> Faturalama
          </a>
        </li>
        <li>
          <a href="/admin/settings" className="flex items-center text-lg hover:text-gray-400">
            <FaCog className="mr-2" /> Ayarlar
          </a>
        </li>
      </ul>

      <div className="absolute bottom-5 left-5">
        <a href="/logout" className="flex items-center text-lg text-red-500 hover:text-red-400">
          <FaSignOutAlt className="mr-2" /> Çıkış
        </a>
      </div>
    </div>
  );
};

export default Sidebar;  