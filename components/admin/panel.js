import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: <CiBoxList className="mr-3 w-5 h-5" />,
  },
  {
    label: "Campaigns",
    path: "/admin/campaigns",
    icon: <HiOutlineShoppingBag className="mr-3 w-5 h-5" />,
  },
  {
    label: "Create Ad",
    path: "/admin/createad",
    icon: <RiUserLine className="mr-3 w-5 h-5" />,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Aktif path kontrol
  const isActive = (path) => router.pathname === path;

  // Mobile sidebar kapatma (overlay’e tıklanınca)
  const handleOverlayClick = () => setIsSidebarOpen(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Toggle Button */}
      <div className="fixed z-40 top-0 left-0 bg-gray-100 lg:hidden w-full flex items-center p-4 border-b">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-900 text-2xl"
          aria-label="Open Sidebar"
        >
          <FaBars />
        </button>
        <img src="/images/tarvina_logo.jpeg" className="w-10 h-10 ml-4" alt="Tarvina Logo" />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg border-r flex flex-col transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:shadow-none`}
      >
        {/* Logo */}
        <div className="px-6 py-4 flex items-center">
          <img src="/images/tarvina_logo.jpeg" className="w-16 h-16" alt="Tarvina Logo" />
          <span className="ml-3 font-extrabold text-lg text-purple-700 hidden lg:inline-block">
            Tarvina Admin
          </span>
        </div>
        {/* Menü */}
        <nav className="flex-1 mt-4">
          <ul className="space-y-2 px-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => {
                    setIsSidebarOpen(false);
                    router.push(item.path);
                  }}
                  className={`flex items-center p-2 w-full text-left rounded-lg transition
                    ${isActive(item.path)
                      ? "bg-orange-500 text-white font-bold"
                      : "hover:bg-orange-500 hover:text-white text-gray-700"}
                  `}
                >
                  {item.icon}
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content alanı */}
      <div className="flex-1 ml-0 lg:ml-64 mt-16 lg:mt-0 bg-gray-50 min-h-screen">
        {/* Buraya children veya sayfa içeriğin gelecek */}
      </div>
    </div>
  );
};

export default Sidebar;
