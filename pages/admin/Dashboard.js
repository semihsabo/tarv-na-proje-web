import React from "react";
import Sidebar from "./Sidebar";

export default function DashboardPage() {
  const metrics = [
    { label: "Total Spend", value: "$12,847", change: "+12.5%", desc: "This month", color: "text-green-500" },
    { label: "ROI", value: "324%", change: "+8.2%", desc: "Return on investment", color: "text-green-500" },
    { label: "Impressions", value: "2.4M", change: "+15.3%", desc: "Total impressions", color: "text-green-500" },
    { label: "Clicks", value: "48.2K", change: "-2.1%", desc: "Total clicks", color: "text-red-500" },
  ];

  const recentCampaigns = [
    {
      name: "Summer Sale 2024",
      platform: "Meta",
      status: "Active",
      budget: "$2,500",
      spent: "$1,847",
      impressions: "245K",
      ctr: "5.1%",
      progress: 74,
    },
    {
      name: "Product Launch Campaign",
      platform: "Google",
      status: "Active",
      budget: "$5,000",
      spent: "$3,200",
      impressions: "890K",
      ctr: "2.1%",
      progress: 64,
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-black text-white px-4 py-2 rounded">+ Create Campaign</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <div className="text-sm font-medium text-gray-500">{item.label}</div>
            <div className="text-2xl font-semibold">{item.value}</div>
            <div className={`text-xs ${item.color}`}>{item.change} <span className="text-gray-400">{item.desc}</span></div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="border p-4 rounded text-center hover:bg-gray-50">+ Create New Campaign</button>
          <button className="border p-4 rounded text-center hover:bg-gray-50">📈 View Analytics</button>
          <button className="border p-4 rounded text-center hover:bg-gray-50">👁 Schedule Campaigns</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Campaigns</h2>
          <button className="text-sm text-gray-600 hover:underline">View All</button>
        </div>
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr>
              <th className="py-2">Campaign</th>
              <th>Platform</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Spent</th>
              <th>Impressions</th>
              <th>CTR</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {recentCampaigns.map((camp, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 font-medium">{camp.name}</td>
                <td>{camp.platform}</td>
                <td><span className="text-green-600 bg-green-100 text-xs px-2 py-1 rounded">{camp.status}</span></td>
                <td>{camp.budget}</td>
                <td>{camp.spent}</td>
                <td>{camp.impressions}</td>
                <td>{camp.ctr}</td>
                <td>
                  <div className="bg-gray-200 rounded-full w-full h-2">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: `${camp.progress}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
} 