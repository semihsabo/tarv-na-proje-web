import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";          // admin/manual-ads dizininden bir üstteki Sidebar
import Topbar  from "@/components/Topbar"; // alias yoksa ../components/Topbar yap

export default function ManualAdsLandingPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Sağ taraf: Topbar + içerik */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-6">Manual Ad Creation</h1>

          {/* Ad platform selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Meta */}
            <div
              onClick={() => router.push("/admin/manual-ads/meta")}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-lg cursor-pointer transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Meta Ads</h2>
                <span className="w-3 h-3 rounded-full bg-blue-500" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Create Facebook and Instagram ads with full manual control. Configure campaigns, ad sets, and creatives like Meta Ads Manager.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                Create Meta Ad →
              </button>
            </div>

            {/* Google */}
            <div
              onClick={() => router.push("/admin/manual-ads/google")}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-lg cursor-pointer transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Google Ads</h2>
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Build Search, Display, and Performance Max campaigns with professional‑level controls and targeting options.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm">
                Create Google Ad →
              </button>
            </div>
          </div>

          {/* Manual Mode Features */}
          <div className="bg-white border rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-4">Manual Mode Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <Feature title="🛠️ Full Control"       desc="Configure every aspect of your campaigns without AI assistance." />
              <Feature title="🎯 Professional Interface" desc="Interface designed for experienced advertisers and agencies." />
              <Feature title="📌 Advanced Targeting"   desc="Access to all targeting options and campaign optimization settings." />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Feature = ({ title, desc }) => (
  <div>
    <h4 className="font-medium mb-1">{title}</h4>
    <p>{desc}</p>
  </div>
);
