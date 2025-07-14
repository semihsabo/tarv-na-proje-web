import React from "react";
import { FaFacebookF, FaGoogle, FaSync, FaCogs, FaUnlink, FaGlobe } from "react-icons/fa";
import Sidebar from "./Sidebar"; // Dosya yolunu kendi yapına göre ayarla

export default function IntegrationsPage() {
  const connectedPlatforms = 2;
  const totalPlatforms = 4;

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Integrations</h1>
              <p className="text-gray-600 text-sm mt-1">
                Connect your advertising platforms and manage integrations
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded hover:bg-gray-50 text-sm">
                <FaGlobe /> API Documentation
              </button>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm">
                + Add Webhook
              </button>
            </div>
          </div>

          <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded text-sm">
            <strong>Action Required:</strong> You have {totalPlatforms - connectedPlatforms} platform(s) not connected. Connect them to maximize your advertising reach and performance tracking.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="text-xl font-semibold">{connectedPlatforms}/{totalPlatforms}</div>
              <div className="text-gray-500 text-sm">Connected Platforms</div>
              <div className="text-xs text-gray-400">{totalPlatforms - connectedPlatforms} remaining</div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="text-xl font-semibold">2</div>
              <div className="text-gray-500 text-sm">Active Webhooks</div>
              <div className="text-xs text-gray-400">Real-time notifications</div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="text-xl font-semibold">1h ago</div>
              <div className="text-gray-500 text-sm">Last Sync</div>
              <div className="text-xs text-gray-400">All platforms synced</div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="text-xl font-semibold">2.4K</div>
              <div className="text-gray-500 text-sm">API Calls</div>
              <div className="text-xs text-gray-400">This month</div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Advertising Platforms</h2>

            <div className="space-y-4">
              {["Meta Business", "Google Ads"].map((platform, idx) => (
                <div key={platform} className="bg-white p-4 rounded shadow border">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600 text-lg">
                        {idx === 0 ? <FaFacebookF /> : <FaGoogle />}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 flex items-center gap-2">
                          {platform} <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Connected</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {idx === 0
                            ? "Connect your Facebook and Instagram business accounts"
                            : "Manage your Google Ads campaigns and performance"}
                        </p>
                        {idx === 0 && (
                          <>
                            <p className="text-xs text-gray-500 mt-1">Account: john.doe@company.com</p>
                            <p className="text-xs text-gray-400">Last sync: 2 hours ago</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {["Facebook Ads", "Instagram Ads", "Audience Insights", "Pixel Tracking"].map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-gray-100 border rounded px-2 py-0.5 text-gray-700"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 px-3 py-1 text-sm border rounded text-gray-700 hover:bg-gray-100">
                        <FaSync /> Sync
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1 text-sm border rounded text-gray-700 hover:bg-gray-100">
                        <FaCogs /> Settings
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1 text-sm border rounded text-red-600 hover:bg-red-100">
                        <FaUnlink /> Disconnect
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
