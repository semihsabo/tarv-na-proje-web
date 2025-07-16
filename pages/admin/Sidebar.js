import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaTachometerAlt, FaClipboardList, FaCalendarAlt, FaChartBar, FaPuzzlePiece,
  FaDollarSign, FaCog, FaSignOutAlt, FaAd, FaChevronRight, FaBars
} from "react-icons/fa";
import { useRouter } from "next/router";

// SidebarLink component
function SidebarLink({ href, icon, label, active, isOpen }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`flex items-center gap-2 px-4 py-2 rounded transition
          ${active ? "bg-gray-100 text-purple-700 font-bold" : "text-gray-700 hover:bg-gray-50"}
          ${isOpen ? "" : "justify-center"}
        `}
      >
        {icon}
        {isOpen && <span>{label}</span>}
      </a>
    </Link>
  );
}

export default function Sidebar({ isOpen: openProp = true }) {
  const router = useRouter();
  const [manualAdsOpen, setManualAdsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Route'a göre alt menü aç
  const isActive = (path) => router.pathname === path;
  const isManualAdsActive = router.pathname.startsWith("/admin/manual-ads");

  useEffect(() => {
    if (isManualAdsActive) setManualAdsOpen(true);
  }, [router.pathname]);

  // Desktop: daima açık, Mobile: hamburger ile açılır
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  const isOpen = isDesktop ? true : sidebarOpen;

  // Hamburger Menü
  useEffect(() => {
    const handleResize = () => setSidebarOpen(false); // ekran büyüyünce sidebar otomatik kapansın
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Hamburger sadece mobilde (lg altında) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow rounded-full p-2"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars className="text-2xl text-purple-600" />
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 inset-y-0 left-0
          bg-white border-r shadow-sm flex flex-col
          w-64
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-200
          lg:static lg:translate-x-0
        `}
        style={{ height: "100vh" }}
      >
        {/* Logo ve üst */}
        <div className="flex items-center px-4 h-16 shrink-0">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white text-2xl">
            ⚡
          </span>
          <div className="ml-3">
            <div className="text-lg font-bold bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Tarvina
            </div>
            <div className="text-xs text-gray-400">AI Advertising Platform</div>
          </div>
        </div>

        {/* + Create Campaign */}
        <div className="px-4 py-2">
          <button className="w-full bg-black text-white font-medium py-2 rounded shadow hover:bg-gray-800 transition">
            + Create Campaign
          </button>
        </div>

        <div className="px-5 mt-3 mb-1 text-xs text-gray-400 font-semibold">Main Menu</div>

        <nav className="flex-1 flex flex-col gap-1">
          <SidebarLink
            href="/admin"
            icon={<FaTachometerAlt className="text-base" />}
            label="Dashboard"
            active={isActive("/admin")}
            isOpen={true}
          />
          <SidebarLink
            href="/admin/campaigns"
            icon={<FaClipboardList className="text-base" />}
            label="Campaigns"
            active={isActive("/admin/campaigns")}
            isOpen={true}
          />
          <SidebarLink
            href="/admin/create-ad"
            icon={<FaAd className="text-base" />}
            label="Create Ad"
            active={isActive("/admin/create-ad")}
            isOpen={true}
          />

          {/* Manual Ads - Açılır Menü */}
          <div className="relative">
            <button
              type="button"
              className={`
                flex items-center gap-2 px-4 py-2 rounded transition w-full
                ${isManualAdsActive || manualAdsOpen ? "bg-gray-100 text-purple-700 font-bold" : "text-gray-700 hover:bg-gray-50"}
              `}
              onClick={() => setManualAdsOpen((v) => !v)}
            >
              <FaClipboardList className="text-base" />
              <span>Manual Ads</span>
              <span className={`ml-auto transition-transform ${manualAdsOpen ? "rotate-90" : ""}`}>
                <FaChevronRight />
              </span>
            </button>
            {/* ALT MENÜLER */}
            {manualAdsOpen && (
              <div className="ml-8 flex flex-col">
                <Link href="/admin/manual-ads/google" legacyBehavior>
                  <a className={`px-4 py-1 text-sm rounded ${isActive("/admin/manual-ads/google") ? "bg-purple-100 font-bold text-purple-700" : "text-gray-700 hover:bg-gray-100"}`}>Google Ads</a>
                </Link>
                <Link href="/admin/manual-ads/meta" legacyBehavior>
                  <a className={`px-4 py-1 text-sm rounded ${isActive("/admin/manual-ads/meta") ? "bg-purple-100 font-bold text-purple-700" : "text-gray-700 hover:bg-gray-100"}`}>Meta Ads</a>
                </Link>
              </div>
            )}
          </div>

          <SidebarLink
            href="/admin/calendar"
            icon={<FaCalendarAlt className="text-base" />}
            label="Calendar"
            active={isActive("/admin/calendar")}
            isOpen={true}
          />
          <SidebarLink
            href="/admin/analytics"
            icon={<FaChartBar className="text-base" />}
            label="Analytics"
            active={isActive("/admin/analytics")}
            isOpen={true}
          />
          <SidebarLink
            href="/admin/integrations"
            icon={<FaPuzzlePiece className="text-base" />}
            label="Integrations"
            active={isActive("/admin/integrations")}
            isOpen={true}
          />
          <SidebarLink
            href="/admin/billing"
            icon={<FaDollarSign className="text-base" />}
            label="Billing"
            active={isActive("/admin/billing")}
            isOpen={true}
          />

          {/* Settings ÇİZGİNİN ÜSTÜNDE */}
          <div className="mt-auto flex flex-col">
            <SidebarLink
              href="/admin/settings"
              icon={<FaCog className="text-base" />}
              label="Settings"
              active={isActive("/admin/settings")}
              isOpen={true}
            />
            {/* Çizgi */}
            <div className="border-t border-gray-100 my-2"></div>
            <div className="flex items-center gap-3 px-4 py-1">
              <div className="rounded-full bg-gray-300 h-9 w-9 flex items-center justify-center text-base font-bold">
                JD
              </div>
              <div>
                <div className="font-bold text-black text-sm">John Doe</div>
                <div className="text-xs text-gray-500">john@company.com</div>
                <div className="text-xs text-purple-600 cursor-pointer hover:underline">Upgrade Plan</div>
              </div>
            </div>
            <Link href="/logout" legacyBehavior>
              <a className="flex items-center gap-2 text-red-500 hover:text-red-400 cursor-pointer text-xs font-medium px-4 py-2">
                <FaSignOutAlt className="text-base" />
                Logout
              </a>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
