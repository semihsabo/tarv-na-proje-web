import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import Sidebar from "./Sidebar"; // Dosya yolunu kendi yapına göre ayarla

export default function AnalyticsPage() {
  const metrics = [
    { label: "Total Clicks", value: "19.9K", change: "+8.2% from last period" },
    { label: "Total Spend", value: "$2.991", change: "-2.1% from last period" },
    { label: "Conversions", value: "600", change: "+15.3% from last period" },
    { label: "Click Rate", value: "3.0%", change: "" },
    { label: "Cost Per Click", value: "$0.15", change: "" },
    { label: "Cost Per Mille", value: "$7.50", change: "" },
    { label: "Conversion Rate", value: "3.01%", change: "" },
  ];

  const impressionsData = [
    { date: "Jan 4", impressions: 8200, conversions: 16, clicks: 320 },
    { date: "Jan 6", impressions: 12200, conversions: 24, clicks: 600 },
    { date: "Jan 8", impressions: 16200, conversions: 32, clicks: 810 },
    { date: "Jan 10", impressions: 14200, conversions: 20, clicks: 740 },
    { date: "Jan 12", impressions: 15800, conversions: 30, clicks: 770 },
    { date: "Jan 14", impressions: 17200, conversions: 38, clicks: 820 },
  ];

  const revenueSpendData = [
    { date: "Jan 1", revenue: 600, spend: 120 },
    { date: "Jan 4", revenue: 750, spend: 140 },
    { date: "Jan 7", revenue: 980, spend: 160 },
    { date: "Jan 10", revenue: 1050, spend: 180 },
    { date: "Jan 12", revenue: 1150, spend: 190 },
    { date: "Jan 14", revenue: 1300, spend: 200 },
  ];

  const hourlyPerformanceData = Array.from({ length: 24 }).map((_, i) => ({
    hour: `${i.toString().padStart(2, "0")}:00`,
    performance: Math.floor(Math.random() * 100) + 20,
  }));

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-md bg-white flex flex-col"
            >
              <span className="text-sm text-gray-500">{metric.label}</span>
              <span className="text-xl font-semibold">{metric.value}</span>
              {metric.change && (
                <span className="text-xs text-green-500 mt-1">{metric.change}</span>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Impressions vs Conversions vs Clicks</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={impressionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impressions" fill="#8884d8" />
                <Bar dataKey="conversions" fill="#82ca9d" />
                <Bar dataKey="clicks" fill="#a78bfa" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Revenue vs Spend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueSpendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#22c55e" />
                <Line type="monotone" dataKey="spend" stroke="#ef4444" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Performance by Hour</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={hourlyPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="performance" stroke="#60a5fa" fill="#bfdbfe" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
