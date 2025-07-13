import React, { useState } from "react";
import { FaTachometerAlt, FaBars, FaRegImages } from "react-icons/fa";
import { useRouter } from "next/router";
import { MdOutline3DRotation, MdOutlineMarkEmailRead, MdOutlinePayment } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { RiUserLine, RiTruckLine, RiImageEditFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import { logout } from "@/redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "next-auth/react";
import { RiCouponLine } from "react-icons/ri";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    dispatch(logout());
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden p-4 bg-gray-100 flex items-center">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-900 text-xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`w-64 flex flex-col fixed lg:static transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="px-6 py-4">
          <img src="/images/tarvina_logo.jpeg" className="w-20 h-20" />
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 px-4">
          <li>
              <button
                onClick={() => router.push("/admin")}
                className={`flex items-center p-2 w-full text-left rounded-lg ${
                  router.pathname === "/admin-panel/product"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-500 hover:text-white"
                }`}
              >
                <CiBoxList className="mr-3 w-5 h-5" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => router.push("/admin/campaigns")}
                className={`flex items-center p-2 w-full text-left rounded-lg ${
                  router.pathname === "/admin-panel/order"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-500 hover:text-white"
                }`}
              >
                <HiOutlineShoppingBag className="mr-3 w-5 h-5" />
                Campaigns
              </button>
            </li>
            <li>
              <button
                onClick={() => router.push("/admin/createad")}
                className={`flex items-center p-2 w-full text-left rounded-lg ${
                  router.pathname === "/admin/createad"
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-500 hover:text-white"
                }`}
              >
                <RiUserLine className="mr-3 w-5 h-5" />
                Create Ad
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
