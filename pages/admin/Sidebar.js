import React, { useState } from 'react';
import {
  FaClipboardList,
  FaAd,
  FaChartLine,
  FaDollarSign,
  FaCog,
  FaSignOutAlt,
  FaCalendarAlt,
  FaPlug,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  return (
    <div
      className={`$${
        isOpen ? 'w-64' : 'w-20'
      } bg-white text-black h-screen p-4 flex flex-col border-r border-gray-200 transition-all duration-300 relative`}
    >
      {/* Üst Logo & Platform adı */}
      <div className="flex items-center mb-4">
        <div className="bg-purple-600 text-white rounded-full p-2">
          <FaPlug size={16} />
        </div>
        {isOpen && (
          <div className="ml-2">
            <h2 className="text-base font-bold text-purple-700">Tarvina</h2>
            <p className="text-[10px] text-gray-500">AI Advertising Platform</p>
          </div>
        )}
      </div>

      {/* Üst + Create Campaign */}
        {isOpen && (
            <div className="mb-4">
              <Link href="/admin/create-ad">
              <div className="bg-black text-white px-3 py-1.5 rounded-md text-xs hover:bg-gray-800 transition-colors duration-300 inline-block cursor-pointer">
                  + Create Campaign
                      </div>
                </Link>
                </div>
          )}


      {/* Main Menu Label */}
      {isOpen && <p className="text-xs text-gray-500 mb-3">Main Menu</p>}

      {/* Menu Items */}
      <ul className="flex flex-col space-y-1">
        <li>
          <Link href="/admin" replace={router.pathname === "/admin"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaClipboardList className="text-base" />
              {isOpen && <span className="ml-3">Dashboard</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/campaigns" replace={router.pathname === "/admin/campaigns"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaClipboardList className="text-base" />
              {isOpen && <span className="ml-3">Campaigns</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/create-ad" replace={router.pathname === "/admin/create-ad"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaAd className="text-base" />
              {isOpen && <span className="ml-3">Create Ad</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/manual-ads" replace={router.pathname === "/admin/manual-ads"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaClipboardList className="text-base" />
              {isOpen && <span className="ml-3">Manual Ads</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/calendar" replace={router.pathname === "/admin/calendar"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaCalendarAlt className="text-base" />
              {isOpen && <span className="ml-3">Calendar</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/analytics" replace={router.pathname === "/admin/analytics"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaChartLine className="text-base" />
              {isOpen && <span className="ml-3">Analytics</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/integrations" replace={router.pathname === "/admin/integrations"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaPlug className="text-base" />
              {isOpen && <span className="ml-3">Integrations</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/billing" replace={router.pathname === "/admin/billing"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaDollarSign className="text-base" />
              {isOpen && <span className="ml-3">Billing</span>}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/settings" replace={router.pathname === "/admin/settings"}>
            <div className="flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm">
              <FaCog className="text-base" />
              {isOpen && <span className="ml-3">Settings</span>}
            </div>
          </Link>
        </li>
      </ul>

      {/* Kullanıcı Bilgisi & Logout */}
      <div className="mt-auto flex flex-col">
        {isOpen && (
          <div className="border-t border-gray-200 pt-3">
            <div className="flex items-center space-x-2 mb-1">
              <div className="bg-gray-300 rounded-full h-7 w-7 flex items-center justify-center text-[10px] font-bold">JD</div>
              <div>
                <p className="text-xs font-semibold">John Doe</p>
                <p className="text-[10px] text-gray-500">john@company.com</p>
              </div>
            </div>
            <button className="text-purple-600 text-xs mb-2 hover:underline">Upgrade Plan</button>
          </div>
        )}
        <Link href="/logout">
          <div className="flex items-center text-red-500 hover:text-red-400 cursor-pointer text-xs mt-2">
            <FaSignOutAlt className="text-sm" />
            {isOpen && <span className="ml-2">Logout</span>}
          </div>
        </Link>
      </div>

      {/* Aç/Kapa Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100"
      >
        {isOpen ? <FaChevronLeft size={12} /> : <FaChevronRight size={12} />}
      </button>
    </div>
  );
};

export default Sidebar;