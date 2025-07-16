import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  FaSearch, FaPlus, FaEye, FaChartBar, FaDownload, FaSyncAlt,
} from "react-icons/fa";

import Sidebar from "./Sidebar";          // Sidebar aynı klasörde
import Topbar  from "@/components/Topbar"; // Topbar alias (gerekiyorsa yolu değiştir)

const campaigns = [
  { id: 1, platform: "Facebook", name: "Holiday Special", budget: 3000, budgetType: "Lifetime", spend: 0, roas: "0.0x", purchases: 0, atc: 0, clicks: 0, startDate: "25.06.2024", endDate: "25.07.2024", performance: "Low" },
  { id: 2, platform: "Google",  name: "Retargeting Campaign", budget: 90,  budgetType: "Daily",    spend: 945, roas: "7.2x", purchases: 78, atc: 145, clicks: 567, startDate: "10.06.2024", endDate: "10.07.2024", performance: "High" },
  { id: 3, platform: "TikTok",   name: "Back to School",      budget: 120, budgetType: "Daily",    spend: 1650,roas: "5.1x", purchases: 145,atc: 289, clicks: 1600,startDate: "05.06.2024", endDate: "05.07.2024", performance: "High" },
  { id: 4, platform: "Facebook", name: "Influencer Collab",    budget: 200, budgetType: "Daily",    spend: 2100,roas: "3.2x", purchases: 98, atc: 234, clicks: 1400,startDate: "01.06.2024", endDate: "20.06.2024", performance: "Medium" },
  { id: 5, platform: "Google",   name: "Summer Sale 2024",     budget: 150, budgetType: "Daily",    spend: 1847,roas: "4.2x", purchases: 186,atc: 342, clicks: 1200,startDate: "01.06.2024", endDate: "30.06.2024", performance: "High" },
  { id: 6, platform: "TikTok",   name: "Launch Campaign",      budget: 5000,budgetType: "Lifetime", spend: 3200,roas: "3.8x", purchases: 312,atc: 567, clicks: 1900,startDate: "28.05.2024", endDate: "15.07.2024", performance: "High" },
  { id: 7, platform: "Facebook", name: "Flash Sale",           budget: 70,  budgetType: "Daily",    spend: 580, roas: "2.6x", purchases: 45, atc: 110, clicks: 400, startDate: "01.07.2024", endDate: "10.07.2024", performance: "Medium" },
  { id: 8, platform: "Google",   name: "Brand Awareness",      budget: 800, budgetType: "Lifetime", spend: 600, roas: "1.9x", purchases: 22, atc: 70,  clicks: 220, startDate: "15.06.2024", endDate: "30.07.2024", performance: "Low" },
];

export default function Campaigns() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleCreateCampaign = () => router.push("/admin/create-ad");

  /* --------- filtered list (simple search) --------- */
  const filtered = campaigns.filter(c => `${c.name} ${c.id}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="flex min-h-screen">
      <Sidebar />

      {/* Sağ kolon: Topbar + sayfa */}
      <div className="flex-1 flex flex-col bg-[#fefbff]">
        <Topbar />

        <div className="flex-1 p-6 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Campaign Management</h1>
            <div className="flex items-center gap-3">
              <IconBtn icon={<FaDownload />} />
              <IconBtn icon={<FaSyncAlt />} />
              <button
                onClick={handleCreateCampaign}
                className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-90"
              >
                <FaPlus className="mr-2" /> Create Campaign
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KPI title="Total Conversions" value="975" subtitle="+8.2% from last month" icon={<FaEye />} />
            <KPI title="Average ROAS" value="4.0x" subtitle="-2.1% from last month" icon={<FaChartBar />} />
            <KPI title="Active Campaigns" value="5" subtitle="of 8 total campaigns" icon={<FaEye />} />
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow mb-4 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-2 flex-1 min-w-[220px]">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns or IDs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>

            <input type="date" className="border rounded px-2 py-1 text-sm" />
            <input type="date" className="border rounded px-2 py-1 text-sm" />

            <div className="flex gap-2">
              {['All','Meta','Google','TikTok'].map(tag=>(
                <button key={tag} className={`px-3 py-1 rounded-full text-xs ${tag==='All' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}>{tag}</button>
              ))}
            </div>

            <select className="text-sm border px-2 py-1 rounded">
              <option>All Status</option>
              <option>Active</option>
              <option>Paused</option>
            </select>

            <button className="text-sm text-gray-600 hover:text-black whitespace-nowrap">
              Show Advanced Filters
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow px-8 py-6 mb-20">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600 font-semibold whitespace-nowrap">
                <tr>
                  {['Platform','Campaign Name','Budget','Total Spend','ROAS','Conversions','Dates','Performance','Actions'].map(h=>(
                    <th key={h} className="px-4 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(c=>(
                  <tr key={c.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-5"><img src={`/icons/${c.platform.toLowerCase()}.png`} alt={c.platform} className="w-5 h-5"/></td>
                    <td className="px-6 py-5 space-y-1">
                      <p className="font-medium">{c.name}</p>
                      <span className="text-xs text-gray-400">ID: {c.id}</span>
                    </td>
                    <td className="px-6 py-5">₺{c.budget} <span className="text-xs text-gray-500">/ {c.budgetType}</span></td>
                    <td className="px-6 py-5">₺{c.spend}</td>
                    <td className="px-6 py-5">
                      <span>{c.roas}</span>
                    </td>
                    <td className="px-6 py-5 space-y-1 text-xs text-gray-600">
                      <p className="text-green-600 font-medium">🛒 {c.purchases} purchases</p>
                      <p>🧺 {c.atc} ATC</p>
                      <p>📈 {c.clicks} clicks</p>
                    </td>
                    <td className="px-6 py-5 text-xs">
                      <p>Start: {c.startDate}</p>
                      <p>End: {c.endDate}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        c.performance==='High' ? 'bg-green-100 text-green-700' :
                        c.performance==='Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-600'}`}>{c.performance}</span>
                    </td>
                    <td className="px-6 py-5">
                      <button className="text-gray-500 hover:text-gray-700">...</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

/* KPI kartı */
function KPI({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
      <div className="text-purple-600 text-lg">{icon}</div>
      <div>
        <h2 className="text-sm text-gray-500">{title}</h2>
        <p className="text-2xl font-bold mt-1">{value}</p>
        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

const IconBtn = ({ icon }) => (
  <button className="p-2 text-gray-600 hover:text-black">{icon}</button>
);
