import React from "react";
import Sidebar from "./Sidebar";          // aynı klasör
import Topbar  from "@/components/Topbar"; // alias (gerekiyorsa yol değiştir)
import { useRouter } from "next/router";   // EKLEDİK

export default function DashboardPage() {
  const router = useRouter();             // EKLEDİK
  const metrics = [
    { label: "Total Spend",   value: "$12,847", change: "+12.5%", desc: "This month",            color: "text-green-500" },
    { label: "ROI",           value: "324%",    change: "+8.2%",  desc: "Return on investment", color: "text-green-500" },
    { label: "Impressions",   value: "2.4M",    change: "+15.3%", desc: "Total impressions",    color: "text-green-500" },
    { label: "Clicks",        value: "48.2K",   change: "-2.1%",  desc: "Total clicks",        color: "text-red-500" },
  ];

  const recentCampaigns = [
    {
      name: "Summer Sale 2024", platform: "Meta",   status: "Active", budget: "$2,500", spent: "$1,847", impressions: "245K", ctr: "5.1%", progress: 74,
    },
    {
      name: "Product Launch",    platform: "Google", status: "Active", budget: "$5,000", spent: "$3,200", impressions: "890K", ctr: "2.1%", progress: 64,
    },
  ];

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      {/* Sağ taraf: Topbar + içerik */}
      <div className="flex-1 flex flex-col bg-[#fefbff]">
        {/* TOPBAR */}
        <Topbar />

        {/* İçerik */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Başlık + CTA */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button
              className="bg-black text-white px-4 py-2 rounded hover:opacity-90 text-sm"
              onClick={() => router.push("/admin/create-ad")}
            >
              + Create Campaign
            </button>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((m,i)=>(
              <div key={i} className="bg-white p-4 rounded shadow">
                <div className="text-sm text-gray-500">{m.label}</div>
                <div className="text-2xl font-semibold">{m.value}</div>
                <div className={`text-xs ${m.color}`}>{m.change} <span className="text-gray-400">{m.desc}</span></div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Create New Campaign','View Analytics','Schedule Campaigns'].map(txt=>(
                <button key={txt} className="border p-4 rounded text-center hover:bg-gray-50 text-sm">{txt}</button>
              ))}
            </div>
          </div>

          {/* Recent Campaigns */}
          <div className="bg-white p-4 rounded shadow mb-20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Campaigns</h2>
              <button className="text-sm text-gray-600 hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 whitespace-nowrap">
                  <tr>{['Campaign','Platform','Status','Budget','Spent','Impressions','CTR','Progress'].map(h=>(<th key={h} className="py-2 px-4">{h}</th>))}</tr>
                </thead>
                <tbody>
                  {recentCampaigns.map((c,i)=>(
                    <tr key={i} className="border-t">
                      <td className="py-2 px-4 font-medium">{c.name}</td>
                      <td className="px-4">{c.platform}</td>
                      <td className="px-4"><span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">{c.status}</span></td>
                      <td className="px-4">{c.budget}</td>
                      <td className="px-4">{c.spent}</td>
                      <td className="px-4">{c.impressions}</td>
                      <td className="px-4">{c.ctr}</td>
                      <td className="px-4 w-40">
                        <div className="bg-gray-200 rounded-full h-2"><div className="bg-black h-2 rounded-full" style={{width:`${c.progress}%`}}/></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
