import Link from "next/link";
import { FaTachometerAlt, FaClipboardList, FaCalendarAlt, FaChartBar, FaPuzzlePiece, FaDollarSign, FaCog, FaSignOutAlt, FaAd } from "react-icons/fa";
import { useRouter } from "next/router";

// SidebarLink component örnek
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

export default function Sidebar({ isOpen = true }) {
  const router = useRouter();

  // Aktif route kontrolü
  const isActive = (path) => router.pathname === path;

  return (
    <aside className={`h-screen flex flex-col bg-white border-r w-[72px] md:w-64 transition-all duration-200 shadow-sm`}>
      {/* Logo ve üst */}
      <div className="flex items-center px-4 h-16 shrink-0">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white text-2xl">
          ⚡
        </span>
        {isOpen && (
          <div className="ml-3">
            <div className="text-lg font-bold bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Tarvina
            </div>
            <div className="text-xs text-gray-400">AI Advertising Platform</div>
          </div>
        )}
      </div>

      {/* + Create Campaign */}
      {isOpen && (
        <div className="px-4 py-2">
          <button className="w-full bg-black text-white font-medium py-2 rounded shadow hover:bg-gray-800 transition">
            + Create Campaign
          </button>
        </div>
      )}

      {/* Main menu */}
      {isOpen && <div className="px-5 mt-3 mb-1 text-xs text-gray-400 font-semibold">Main Menu</div>}

      <nav className="flex-1 flex flex-col gap-1">
        <SidebarLink
          href="/admin"
          icon={<FaTachometerAlt className="text-base" />}
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
        <SidebarLink
          href="#"
          icon={<FaClipboardList className="text-base" />}
          label="Manual Ads"
          active={false}
          isOpen={isOpen}
        />
        <SidebarLink
          href="/admin/calendar"
          icon={<FaCalendarAlt className="text-base" />}
          label="Calendar"
          active={isActive("/admin/calendar")}
          isOpen={isOpen}
        />
        <SidebarLink
          href="/admin/analytics"
          icon={<FaChartBar className="text-base" />}
          label="Analytics"
          active={isActive("/admin/analytics")}
          isOpen={isOpen}
        />
        <SidebarLink
          href="/admin/integrations"
          icon={<FaPuzzlePiece className="text-base" />}
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

        {/* Settings ÇİZGİNİN ÜSTÜNDE */}
        <div className="mt-auto flex flex-col">
          <SidebarLink
            href="/admin/settings"
            icon={<FaCog className="text-base" />}
            label="Settings"
            active={isActive("/admin/settings")}
            isOpen={isOpen}
          />

          {/* Çizgi */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Kullanıcı info ve diğerleri */}
          {isOpen && (
            <>
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
            </>
          )}
        </div>
      </nav>
    </aside>
  );
}
