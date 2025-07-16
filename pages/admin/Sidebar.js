import React, { useState } from 'react';
import {
  FaClipboardList, FaAd, FaChartLine, FaDollarSign, FaCog, FaSignOutAlt,
  FaCalendarAlt, FaPlug, FaChevronLeft, FaChevronRight, FaBullseye,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [manualOpen, setManualOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname.startsWith(path);

  return (
    <div
      className={`
        ${isOpen ? 'w-64' : 'w-16'}
        bg-white text-black min-h-screen p-4 flex flex-col border-r border-gray-200
        transition-all duration-300 relative
      `}
    >
      {/* Logo */}
      <div className="flex items-center mb-4">
        <div className="bg-purple-600 text-white rounded-full p-2">
          <FaPlug size={16} />
        </div>
        {isOpen && (
          <div className="ml-2">
            <h2 className="text-base font-bold text-purple-700">Tarvina</h2>
            <p className="text-[10px] text-gray-500 whitespace-nowrap">AI Advertising Platform</p>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="mb-4">
          <Link href="/admin/create-ad">
            <div className="bg-black text-white px-3 py-1.5 rounded-md text-xs hover:bg-gray-800 transition inline-block">
              + Create Campaign
            </div>
          </Link>
        </div>
      )}

      {isOpen && <p className="text-xs text-gray-500 mb-3">Main Menu</p>}

      <ul className="flex flex-col space-y-1">
        {[
          { href: '/admin', icon: FaClipboardList, label: 'Dashboard' },
          { href: '/admin/campaigns', icon: FaClipboardList, label: 'Campaigns' },
          { href: '/admin/create-ad', icon: FaAd, label: 'Create Ad' },
          { href: '/admin/calendar', icon: FaCalendarAlt, label: 'Calendar' },
          { href: '/admin/analytics', icon: FaChartLine, label: 'Analytics' },
          { href: '/admin/integrations', icon: FaPlug, label: 'Integrations' },
          { href: '/admin/billing', icon: FaDollarSign, label: 'Billing' },
          { href: '/admin/settings', icon: FaCog, label: 'Settings' },
        ].map(({ href, icon: Icon, label }) => (
          <li key={href}>
            <Link href={href}>
              <div className={`flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md text-sm cursor-pointer transition
              ${isActive(href) ? 'bg-gray-100 font-semibold' : ''}`}>
                <Icon className="text-base" />
                {isOpen && <span className="ml-3">{label}</span>}
              </div>
            </Link>
          </li>
        ))}

        {/* Manual Ads */}
        <li>
          <button
            onClick={() => setManualOpen(!manualOpen)}
            className="w-full flex items-center justify-between text-gray-700 hover:bg-gray-100 p-2 rounded-md text-sm transition"
          >
            <div className="flex items-center">
              <FaCog className="text-base" />
              {isOpen && <span className="ml-3">Manual Ads</span>}
            </div>
            {isOpen && (manualOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />)}
          </button>
          {manualOpen && isOpen && (
            <div className="pl-6 mt-1 space-y-1">
              <Link href="/admin/manual-ads/meta">
                <div className={`flex items-center text-sm text-gray-700 hover:underline cursor-pointer
                  ${isActive("/admin/manual-ads/meta") ? "font-semibold" : ""}`}>
                  <FaBullseye className="mr-2" />
                  Meta Ads
                </div>
              </Link>
              <Link href="/admin/manual-ads/google">
                <div className={`flex items-center text-sm text-gray-700 hover:underline cursor-pointer
                  ${isActive("/admin/manual-ads/google") ? "font-semibold" : ""}`}>
                  <FaBullseye className="mr-2" />
                  Google Ads
                </div>
              </Link>
            </div>
          )}
        </li>
      </ul>

      {/* Footer */}
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

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100 z-10"
      >
        {isOpen ? <FaChevronLeft size={12} /> : <FaChevronRight size={12} />}
      </button>
    </div>
  );
};

export default Sidebar;
