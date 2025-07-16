import React, { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";

export default function FacebookContentSelection() {
  const [selectedContentId, setSelectedContentId] = useState(null);
  const router = useRouter();

  // Örnek içerik verisi
  const contents = [
    {
      id: 1,
      title: "Product Launch Post",
      description: "Introducing our newest product to the market!",
      image: "/icons/ayakkabı.png", // Görsel yolu (public klasöründe olmalı)
      date: "July 16, 2024",
    },
    {
      id: 2,
      title: "Brand Awareness",
      description: "Our brand, your story. Discover more.",
      image: "/icons/piramit.png",
      date: "July 10, 2024",
    },
    {
      id: 3,
      title: "Summer Sale",
      description: "Get 40% off on all items. Limited time offer!",
      image: "/icons/summer.png",
      date: "July 4, 2024",
    },
    {
      id: 4,
      title: "Giveaway Campaign",
      description: "Enter now to win amazing prizes!",
      image: "/icons/camp.png",
      date: "June 27, 2024",
    },
  ];

  // Devam butonunda yönlendirme
  const handleContinue = () => {
    if (selectedContentId) {
      router.push("/admin/billing");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Facebook Content Selection</h1>
        <p className="mb-8 text-gray-600">Choose a Facebook post to promote as an ad.</p>

        {/* 4 lü grid kutucuklar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contents.map((content) => (
            <div
              key={content.id}
              onClick={() => setSelectedContentId(content.id)}
              className={`
                cursor-pointer bg-white rounded-xl border transition shadow
                flex flex-col overflow-hidden
                ${selectedContentId === content.id
                  ? "border-4 border-purple-600 shadow-lg"
                  : "border-gray-200"}
              `}
              style={{ minHeight: 320 }}
            >
              <div className="h-48 w-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {content.image ? (
                  <img
                    src={content.image}
                    alt={content.title}
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <span className="text-gray-400">No Image</span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h2 className="font-semibold text-base mb-2">{content.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{content.description}</p>
                <span className="mt-auto text-xs text-gray-400">{content.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Devam butonu */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleContinue}
            disabled={!selectedContentId}
            className={`
              w-full sm:w-auto bg-purple-600 text-white font-semibold px-6 py-3 rounded shadow-lg
              transition-opacity duration-300
              ${selectedContentId ? "opacity-100 hover:bg-purple-700" : "opacity-50 cursor-not-allowed"}
            `}
          >
            Continue to Billing →
          </button>
        </div>
      </div>
    </div>
  );
}
