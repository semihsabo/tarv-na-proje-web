import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Dosya yolunu kendi yapına göre ayarla

export default function SettingsPage() {
  const [timezone, setTimezone] = useState("Eastern Time (ET)");
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("System");
  const [tips, setTips] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [compactView, setCompactView] = useState(false);

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Information */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Profile Information</h2>
            <div className="mb-4">
              <button className="text-blue-600 font-medium mb-2">Upload New Photo</button>
              <button className="text-red-600 font-medium ml-4">Remove Photo</button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border rounded px-3 py-2"
                defaultValue="John"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border rounded px-3 py-2"
                defaultValue="Doe"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded px-3 py-2"
                defaultValue="john@company.com"
              />
              <textarea
                placeholder="Bio"
                className="w-full border rounded px-3 py-2"
                defaultValue="Professional with 5+ years of experience in advertising campaigns."
              />
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Preferences</h2>

            <label className="block mb-2 font-medium">Timezone</label>
            <select
              className="w-full border rounded px-3 py-2 mb-4"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option>Eastern Time (ET)</option>
              <option>Central European Time (CET)</option>
              <option>GMT</option>
            </select>

            <label className="block mb-2 font-medium">Language</label>
            <select
              className="w-full border rounded px-3 py-2 mb-4"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Turkish</option>
            </select>

            <label className="block mb-2 font-medium">Theme</label>
            <div className="flex gap-2 mb-6">
              {["Light", "Dark", "System"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`px-4 py-2 rounded border ${
                    theme === t ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Show performance tips</span>
                <input
                  type="checkbox"
                  checked={tips}
                  onChange={() => setTips(!tips)}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Auto-refresh data</span>
                <input
                  type="checkbox"
                  checked={autoRefresh}
                  onChange={() => setAutoRefresh(!autoRefresh)}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Compact view</span>
                <input
                  type="checkbox"
                  checked={compactView}
                  onChange={() => setCompactView(!compactView)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
