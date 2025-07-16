import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

// Bu bileşen tüm admin sayfalarının üst kısmında yer alan Topbar (üst menü) çubuğudur.
export default function Topbar() {
  return (
    <div className="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-30">
      
      {/* Sol tarafta arama alanı */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-full max-w-md">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search campaigns..."
          className="bg-transparent focus:outline-none text-sm w-full"
        />
      </div>

      {/* Sağ tarafta ikonlar (bildirim ve kullanıcı) */}
      <div className="flex items-center gap-4">
        {/* Bildirim simgesi */}
        <FaBell className="text-gray-500 cursor-pointer hover:text-black" />

        {/* Kullanıcı simgesi */}
        <FaUserCircle className="text-gray-600 text-2xl" />
      </div>
    </div>
  );
}
