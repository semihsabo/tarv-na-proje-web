import React from "react";
import { FaDownload, FaExclamationCircle } from "react-icons/fa";

import Sidebar from "./Sidebar";         // ← Sidebar aynı klasörde
import Topbar  from "@/components/Topbar"; // ← Topbar yolunu yapına göre ayarla

export default function BillingPage() {
  /* ---------------- MOCK DATA --------------- */
  const invoices = [
    { id: "INV‑2024‑006", date: "01.06.2024", amount: "$4.250", campaigns: "12 campaigns", status: "Paid" },
    { id: "INV‑2024‑005", date: "01.05.2024", amount: "$3.890", campaigns: "10 campaigns", status: "Paid" },
  ];

  /* ---------------- LAYOUT ------------------ */
  return (
    <main className="flex min-h-screen">
      <Sidebar />

      {/* Sağ taraf: Topbar + içerik */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* TOPBAR */}
        <Topbar />

        {/* Sayfa içeriği */}
        <div className="flex-1 p-4 sm:p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-4">Billing & Usage</h1>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-sm text-gray-500">Current Plan</h2>
              <p className="text-lg font-bold">Professional</p>
              <p className="text-xs text-gray-400">Next billing: 01.07.2024</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-sm text-gray-500">Monthly Spend</h2>
              <p className="text-lg font-bold">$4.250</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-black h-2.5 rounded-full" style={{ width: "85%" }} />
              </div>
              <p className="text-xs text-gray-400 mt-1">of $5.000 limit</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-sm text-gray-500">Payment Method</h2>
              <p className="text-lg font-bold">************4242</p>
              <p className="text-xs text-gray-400">Visa ending in 4242</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-sm text-gray-500">Status</h2>
              <p className="text-green-600 font-semibold text-lg">Active</p>
              <p className="text-xs text-gray-400">All systems operational</p>
            </div>
          </div>

          {/* Alert */}
          <div className="bg-yellow-100 border border-yellow-300 p-4 rounded flex flex-col md:flex-row justify-between gap-3 mb-6">
            <div className="flex items-start gap-2 text-yellow-800 text-sm">
              <FaExclamationCircle className="mt-1 text-yellow-600" />
              <span>
                You've used 85% of your monthly ad‑spend limit. Consider upgrading your plan to avoid campaign interruptions.
              </span>
            </div>
            <button className="bg-white text-yellow-800 border border-yellow-500 px-4 py-1 rounded hover:bg-yellow-200 text-sm whitespace-nowrap">
              Upgrade Plan
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="bg-black text-white px-4 py-2 rounded text-sm">Update Payment</button>
            <button className="bg-white border px-4 py-2 rounded flex items-center gap-1 text-sm">
              <FaDownload /> Download Invoice
            </button>
          </div>

          {/* Billing History Table */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h2 className="text-lg font-bold mb-4">Billing History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-gray-500 whitespace-nowrap">
                  <tr>
                    {["Invoice", "Date", "Amount", "Campaigns", "Status", "Actions"].map(h=>(
                      <th key={h} className="px-4 py-2">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {invoices.map(inv=>(
                    <tr key={inv.id} className="border-t">
                      <td className="px-4 py-2 font-medium">{inv.id}</td>
                      <td className="px-4 py-2">{inv.date}</td>
                      <td className="px-4 py-2">{inv.amount}</td>
                      <td className="px-4 py-2">{inv.campaigns}</td>
                      <td className="px-4 py-2">
                        <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs">
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <FaDownload className="cursor-pointer text-gray-600 hover:text-black" />
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
