import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="w-full px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 border-b bg-white sticky top-0 z-30">
      {/* Sol: Arama */}
      <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1 sm:px-3 w-full max-w-xs sm:max-w-md mx-auto sm:mx-0">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search campaigns..."
          className="bg-transparent focus:outline-none text-sm w-full"
        />
      </div>

      {/* Sağ: İkonlar */}
      <div className="flex items-center justify-end gap-3 sm:gap-4 mt-2 sm:mt-0">
        <FaBell className="text-gray-500 cursor-pointer hover:text-black text-lg sm:text-base" />
        <FaUserCircle className="text-gray-600 text-2xl" />
      </div>
    </div>
  );
}
