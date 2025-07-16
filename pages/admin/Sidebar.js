import React, { useState } from "react";
import {
  FaClipboardList, FaAd, FaChartLine, FaDollarSign, FaCog, FaSignOutAlt,
  FaCalendarAlt, FaPlug, FaChevronLeft, FaChevronRight, FaBullseye,
  FaChevronDown, FaChevronUp,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [manualOpen, setManualOpen] = useState(false);
  const router = useRouter();
  const isActive = (path) => router.pathname.startsWith(path);

  return (
    <div
      className={`
        ${isOpen ? "w-52" : "w-16"}
        bg-white text-black h-screen p-4 flex flex-col border-r border-gray-200 transition-all duration-300 relative
      `}
    >
      {/* Logo */}
      <div className="flex items-center mb-3">
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

      {/* Create Campaign Button */}
      {isOpen && (
        <div className="mb-3">
          <Link href="/admin/create-ad">
            <div className="bg-black text-white px-3 py-1.5 rounded-md text-xs hover:bg-gray-800 transition inline-block cursor-pointer">
              + Create Campaign
            </div>
          </Link>
        </div>
      )}

      {/* Main Menu başlığı */}
      {isOpen && (
        <p className="text-[11px] text-gray-400 mb-2 tracking-wide pl-1">Main Menu</p>
      )}

      {/* Menü */}
      <nav className="flex-1">
        <ul className="flex flex-col gap-0.5">
          <SidebarLink
            href="/admin"
            icon={<FaClipboardList className="text-base" />}
            label="Dashboard"
            active={isActive("/admin")}
            isOpen={isOpen}
          />
          <SidebarLink
            href="/admin/campaigns"
            icon={<FaClipboardList className="text-base" />}
            label="Campaigns"
            active={isActive("/admin/campaigns")}
            isOpen={isOpen}
          />
          <SidebarLink
            href="/admin/create-ad"
            icon={<FaAd className="text-base" />}
            label="Create Ad"
            active={isActive("/admin/create-ad")}
            isOpen={isOpen}
          />

          {/* Manual Ads Dropdown */}
          <li>
            <button
              onClick={() => {
                router.push("/admin/manual-ads");
                setManualOpen(!manualOpen);
              }}
              className={`w-full flex items-center justify-between text-gray-700 hover:bg-gray-100 p-2 rounded-md text-sm transition
                ${isActive("/admin/manual-ads") ? "bg-gray-100 font-semibold" : ""}`}
            >
              <div className="flex items-center">
                <FaCog className="text-base" />
                {isOpen && <span className="ml-3">Manual Ads</span>}
              </div>
              {isOpen && (manualOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />)}
            </button>
            {manualOpen && isOpen && (
              <div className="pl-7 mt-0.5 space-y-0.5">
                <SidebarLink
                  href="/admin/manual-ads/meta"
                  icon={<FaBullseye className="mr-2" />}
                  label="Meta Ads"
                  active={isActive("/admin/manual-ads/meta")}
                  isOpen={isOpen}
                  compact
                />
                <SidebarLink
                  href="/admin/manual-ads/google"
                  icon={<FaBullseye className="mr-2" />}
                  label="Google Ads"
                  active={isActive("/admin/manual-ads/google")}
                  isOpen={isOpen}
                  compact
                />
              </div>
            )}
          </li>

          <SidebarLink
            href="/admin/calendar"
            icon={<FaCalendarAlt className="text-base" />}
            label="Calendar"
            active={isActive("/admin/calendar")}
            isOpen={isOpen}
          />
          <SidebarLink
            href="/admin/analytics"
            icon={<FaChartLine className="text-base" />}
            label="Analytics"
            active={isActive("/admin/analytics")}
            isOpen={isOpen}
          />
          <SidebarLink
            href="/admin/integrations"
            icon={<FaPlug className="text-base" />}
            label="Integrations"
            active={isActive("/admin/integrations")}
            isOpen={isOpen}
          />
          <SidebarLink
            href="/admin/billing"
            icon={<FaDollarSign className="text-base" />}
            label="Billing"
            active={isActive("/admin/billing")}
            isOpen={isOpen}
          />
        </ul>
      </nav>

      {/* Settings & User - Tam Alta Footer */}
      <div className="mt-auto flex flex-col justify-end pt-4">
        <div className="border-t border-gray-100 mb-2" />
        <SidebarLink
          href="/admin/settings"
          icon={<FaCog className="text-base" />}
          label="Settings"
          active={isActive("/admin/settings")}
          isOpen={isOpen}
        />
        {isOpen && (
          <>
            <div className="flex items-center space-x-2 mt-3 mb-1">
              <div className="bg-gray-300 rounded-full h-7 w-7 flex items-center justify-center text-[10px] font-bold">
                JD
              </div>
              <div>
                <p className="text-xs font-semibold">John Doe</p>
                <p className="text-[10px] text-gray-500">john@company.com</p>
              </div>
            </div>
            <button className="text-purple-600 text-xs mb-2 hover:underline">Upgrade Plan</button>
          </>
        )}
        <Link href="/logout">
          <div className="flex items-center text-red-500 hover:text-red-400 cursor-pointer text-xs mt-2 mb-1">
            <FaSignOutAlt className="text-sm" />
            {isOpen && <span className="ml-2">Logout</span>}
          </div>
        </Link>
      </div>

      {/* Sidebar Aç-Kapa Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100"
      >
        {isOpen ? <FaChevronLeft size={12} /> : <FaChevronRight size={12} />}
      </button>
    </div>
  );
};

function SidebarLink({ href, icon, label, active, isOpen, compact }) {
  return (
    <li>
      <Link href={href}>
        <div
          className={`
            flex items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors cursor-pointer text-sm
            ${active ? "bg-gray-100 font-semibold" : ""}
            ${compact ? "text-xs py-1" : ""}
          `}
        >
          {icon}
          {isOpen && (
            <span className={`ml-3 ${compact ? "text-xs" : ""}`}>{label}</span>
          )}
        </div>
      </Link>
    </li>
  );
}

export default Sidebar;
