import React, { useState } from "react";
 import Sidebar from "./Sidebar";   // ⬅️ senin eski yolu korudum
import Topbar   from "@/components/Topbar";    // ⬅️ Topbar’ı getiriyoruz

export default function SettingsPage() {
  const [timezone,    setTimezone]    = useState("Eastern Time (ET)");
  const [language,    setLanguage]    = useState("English");
  const [theme,       setTheme]       = useState("System");
  const [tips,        setTips]        = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [compactView, setCompactView] = useState(false);

  return (
    <main className="flex min-h-screen">
      <Sidebar />

      {/* Topbar + içerik aynı kolonda */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* ⬇️ Topbar artık ekranda görünecek */}
        <Topbar />

        {/* Sayfa içeriği */}
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Profile Information */}
            <section>
              <h2 className="font-semibold text-lg mb-4">Profile Information</h2>

              <div className="mb-4">
                <button className="text-blue-600 font-medium mr-4">Upload New Photo</button>
                <button className="text-red-600 font-medium">Remove Photo</button>
              </div>

              <div className="space-y-4">
                <input  defaultValue="John"  className="w-full border rounded px-3 py-2" placeholder="First Name" />
                <input  defaultValue="Doe"   className="w-full border rounded px-3 py-2" placeholder="Last Name"  />
                <input  defaultValue="john@company.com" className="w-full border rounded px-3 py-2" type="email" placeholder="Email" />
                <textarea defaultValue="Professional with 5+ years of experience in advertising campaigns."
                          className="w-full border rounded px-3 py-2" placeholder="Bio"/>
              </div>
            </section>

            {/* Preferences */}
            <section>
              <h2 className="font-semibold text-lg mb-4">Preferences</h2>

              {/* Timezone */}
              <label className="block mb-2 font-medium">Timezone</label>
              <select value={timezone} onChange={(e)=>setTimezone(e.target.value)}
                      className="w-full border rounded px-3 py-2 mb-4">
                <option>Eastern Time (ET)</option>
                <option>Central European Time (CET)</option>
                <option>GMT</option>
              </select>

              {/* Language */}
              <label className="block mb-2 font-medium">Language</label>
              <select value={language} onChange={(e)=>setLanguage(e.target.value)}
                      className="w-full border rounded px-3 py-2 mb-4">
                <option>English</option>
                <option>Turkish</option>
              </select>

              {/* Theme */}
              <label className="block mb-2 font-medium">Theme</label>
              <div className="flex gap-2 mb-6">
                {["Light","Dark","System"].map(t=>(
                  <button key={t} onClick={()=>setTheme(t)}
                          className={`px-4 py-2 rounded border ${theme===t? "bg-black text-white":"bg-white"}`}>
                    {t}
                  </button>
                ))}
              </div>

              {/* Toggles */}
              {[["Show performance tips", tips, setTips],
                ["Auto‑refresh data",    autoRefresh, setAutoRefresh],
                ["Compact view",         compactView, setCompactView]].map(([label,val,set])=>(
                <div key={label} className="flex justify-between items-center mb-4">
                  <span>{label}</span>
                  <input type="checkbox" checked={val} onChange={()=>set(!val)} />
                </div>
              ))}
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
