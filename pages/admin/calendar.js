import React, { useState } from "react";
import FullCalendar      from "@fullcalendar/react";
import dayGridPlugin      from "@fullcalendar/daygrid";
import interactionPlugin  from "@fullcalendar/interaction";

import Sidebar from "./Sidebar";          // ← Sidebar aynı klasörde
import Topbar  from "@/components/Topbar"; // ← Topbar’ın yolunu yapına göre güncelle

import { Dialog } from "@headlessui/react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { HiOutlineClock, HiSparkles } from "react-icons/hi2";
import { FaFacebookF, FaGoogle, FaTiktok } from "react-icons/fa6";

export default function CalendarPage() {
  /* ---------- state & data ---------- */
  const [events] = useState([
    { title: "Meta Ad 1",   date: "2025-07-14", platform: "meta"   },
    { title: "Google Ad 1", date: "2025-07-18", platform: "google" },
  ]);

  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [isAICampaigns,    setIsAICampaigns]    = useState(false);
  const [showSuggestions,  setShowSuggestions]  = useState(false);
  const [isModalOpen,      setIsModalOpen]      = useState(false);
  const [selectedDate,     setSelectedDate]     = useState("");
  const [modalStep,        setModalStep]        = useState("main");

  const filteredEvents =
    selectedPlatform === "all"
      ? events
      : events.filter((e) => e.platform === selectedPlatform);

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setModalStep("main");
    setIsModalOpen(true);
  };

  /* ---------- layout ---------- */
  return (
    <main className="flex min-h-screen">
      <Sidebar />

      {/* Sağ taraf: Topbar + içerik */}
      <div className="flex-1 flex flex-col bg-white">
        {/* TOPBAR */}
        <Topbar />

        {/* Sayfa içeriği */}
        <div className="flex-1 px-10 py-8 overflow-auto">
          <h1 className="text-3xl font-bold mb-1">AI Campaign Calendar</h1>
          <p className="text-sm text-gray-500 mb-6">
            Manage your AI‑powered advertising campaigns across all platforms
          </p>

          {/* Calendar Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            {/* Sol: View & Platform */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">View:</span>
              {["Month", "Week", "Day"].map((v) => (
                <button
                  key={v}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    v === "Month" ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {v}
                </button>
              ))}

              <span className="ml-4 text-sm font-medium">Platform:</span>
              {["all", "meta", "google", "tiktok"].map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPlatform(p)}
                  className={`px-3 py-1 rounded-full text-sm border capitalize transition ${
                    selectedPlatform === p
                      ? "bg-purple-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {p === "all" ? "All" : p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>

            {/* Sağ: Toggle & Ay */}
            <div className="flex items-center gap-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={isAICampaigns} onChange={() => setIsAICampaigns(!isAICampaigns)} />
                Show only AI campaigns
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={showSuggestions} onChange={() => setShowSuggestions(!showSuggestions)} />
                Show AI suggestions
              </label>
              <div className="flex items-center gap-2">
                <FaChevronLeft className="cursor-pointer text-gray-500 hover:text-black" />
                <span className="font-semibold text-gray-800">July 2025</span>
                <FaChevronRight className="cursor-pointer text-gray-500 hover:text-black" />
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={filteredEvents.map((e) => ({ ...e, color: "#9333ea" }))}
              height="auto"
              dateClick={handleDateClick}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl border">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-base font-semibold flex items-center gap-2">
                📅 Schedule for{" "}
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </Dialog.Title>
              <button onClick={() => setIsModalOpen(false)}>
                <FaTimes className="text-gray-400 hover:text-black" />
              </button>
            </div>

            {/* Step 1 — Main */}
            {modalStep === "main" && (
              <>
                <p className="text-sm text-gray-500 mb-4">
                  Choose how you'd like to schedule a campaign for this date
                </p>
                <div className="space-y-3">
                  <OptionBtn
                    onClick={() => setModalStep("attach")}
                    icon={<HiOutlineClock className="text-blue-500 text-lg" />}
                    title="Attach Existing Campaign"
                    subtitle="Schedule one of your draft campaigns"
                  />
                  <OptionBtn
                    onClick={() => setModalStep("ai")}
                    icon={<HiSparkles className="text-purple-500 text-lg" />}
                    title="Let AI Suggest a Campaign"
                    subtitle="Get AI‑powered campaign recommendations"
                    purple
                  />
                </div>
              </>
            )}

            {/* Step 2 — Attach */}
            {modalStep === "attach" && (
              <>
                <BackBtn onClick={() => setModalStep("main")} />
                <CampaignList />
              </>
            )}

            {/* Step 3 — AI Suggest */}
            {modalStep === "ai" && (
              <>
                <BackBtn onClick={() => setModalStep("main")} />
                <AISuggestion />
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
}

/* ---------- Yardımcı alt bileşenler ---------- */

const OptionBtn = ({ onClick, icon, title, subtitle, purple }) => (
  <button
    onClick={onClick}
    className={`w-full border border-dashed px-4 py-3 rounded-lg flex items-center gap-3 text-sm
      ${purple ? "bg-purple-50 hover:bg-purple-100 border-gray-300" : "bg-gray-50 hover:bg-gray-100 border-gray-300"}`}
  >
    {icon}
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-gray-500">{subtitle}</div>
    </div>
  </button>
);

const BackBtn = ({ onClick }) => (
  <button onClick={onClick} className="text-sm text-gray-500 hover:underline mb-4">
    ← Back
  </button>
);

const CampaignList = () => (
  <div className="space-y-3">
    {[
      { name: "Winter Collection Launch", price: "₺1.500", badge: true },
      { name: "Mobile App Promotion",     price: "₺2.000", badge: false },
      { name: "Influencer Collaboration", price: "₺800",   badge: false },
    ].map((c) => (
      <div key={c.name} className="p-4 rounded-lg border hover:shadow flex justify-between">
        <div>
          <div className="font-semibold">{c.name}</div>
          <div className="text-xs text-gray-500">{c.price}</div>
        </div>
        {c.badge && (
          <span className="text-purple-600 text-xs font-medium">AI Recommended</span>
        )}
      </div>
    ))}
    <div className="bg-purple-50 p-3 rounded-lg text-sm text-purple-600">
      💡 AI recommends this day based on audience engagement patterns and seasonal trends
    </div>
  </div>
);

const AISuggestion = () => (
  <div className="p-4 rounded-lg border border-gray-300">
    <div className="flex items-center gap-2 mb-2">
      <FaTiktok className="text-red-500" />
      <div>
        <div className="font-semibold">Trending Challenge Participation</div>
        <div className="text-xs text-gray-500">Tiktok • ₺600 Budget</div>
      </div>
    </div>
    <div className="text-sm mb-2">
      <strong>Creative Concept:</strong> <br /> User‑generated video with trending audio
    </div>
    <div className="text-sm mb-3">
      <strong>Targeting Strategy:</strong> <br /> Gen Z audience interested in lifestyle & fashion
    </div>
    <div className="bg-purple-50 p-3 rounded-lg text-sm text-purple-600">
      💡 <strong>Why this suggestion?</strong> <span className="text-xs text-purple-500">78% confidence</span>
      <br /> Trending hashtag alignment with your brand values
    </div>
    <div className="flex justify-end gap-3 mt-4">
      <button className="px-4 py-1.5 text-sm bg-black text-white rounded-md">Accept</button>
      <button className="px-4 py-1.5 text-sm border border-gray-300 rounded-md">Edit</button>
    </div>
  </div>
);
