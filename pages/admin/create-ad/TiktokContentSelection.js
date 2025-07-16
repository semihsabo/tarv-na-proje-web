import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";

export default function TikTokContentSelection() {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const router = useRouter();

  const videos = [
    {
      id: 1,
      title: "Summer Fashion Haul 2024",
      description:
        "Get ready for summer with these amazing pieces! Which one is your favorite? This collection features the latest trends, vibrant colors, and lightweight fabrics perfect for the hot season.",
      views: "125K",
      likes: "8.9K",
      shares: 450,
      comments: 320,
      date: "Jan 14",
      duration: "45s",
      performance: "High Performance",
      performanceColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      title: "5 Ways to Style One Dress",
      description:
        "One dress, endless possibilities! Save this for your next outfit crisis. Learn how to create multiple looks with a single dress using accessories and layering.",
      views: "67K",
      likes: "4.2K",
      shares: 180,
      comments: 150,
      date: "Jan 12",
      duration: "30s",
      performance: "Good Performance",
      performanceColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      title: "Behind the Scenes: Photoshoot",
      description:
        "Ever wondered what happens behind the camera? Here's a sneak peek! See the preparation, lighting setups, and the team working hard to capture the perfect shots.",
      views: "34K",
      likes: "2.1K",
      shares: 95,
      comments: 80,
      date: "Jan 10",
      duration: "60s",
      performance: "Good Performance",
      performanceColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 4,
      title: "Sustainable Fashion Tips",
      description:
        "Small changes, big impact! Here's how to build a sustainable wardrobe. Learn about eco-friendly materials and how to shop consciously.",
      views: "28K",
      likes: "1.8K",
      shares: 120,
      comments: 65,
      date: "Jan 8",
      duration: "40s",
      performance: "Average Performance",
      performanceColor: "bg-gray-100 text-gray-700",
    },
  ];

  const handleSelect = (id) => setSelectedVideoId(id);

  const handleContinue = () => {
    if (selectedVideoId) {
      router.push(
        `/admin/create-ad/budget?platform=tiktok&videoId=${selectedVideoId}`
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-8 bg-[#f5f6fa] relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">TikTok</h2>
          <p className="mb-6 text-gray-700 text-sm sm:text-base">
            Choose a video from your TikTok account to turn into an ad
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {videos.map((video) => {
              const isSelected = selectedVideoId === video.id;
              return (
                <div
                  key={video.id}
                  onClick={() => handleSelect(video.id)}
                  className={`cursor-pointer bg-white rounded-lg shadow-md border transition-all flex flex-col relative
                    ${
                      isSelected
                        ? "border-4 border-black shadow-xl"
                        : "border-transparent"
                    }`}
                >
                  <div
                    className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${video.performanceColor}`}
                  >
                    {video.performance}
                  </div>

                  <div className="bg-gray-300 h-48 sm:h-56 flex items-center justify-center relative">
                    {!isSelected && (
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center absolute cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="black"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.752 11.168l-6.518-3.75A.75.75 0 007 8.25v7.5a.75.75 0 001.234.624l6.518-3.75a.75.75 0 000-1.296z"
                          />
                        </svg>
                      </div>
                    )}
                    {isSelected && (
                      <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center absolute">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="white"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold mb-2 text-base sm:text-lg">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {video.description}
                    </p>

                    <div className="flex text-xs text-gray-600 gap-4 mb-2 flex-wrap">
                      <span>👁 {video.views}</span>
                      <span>❤️ {video.likes}</span>
                      <span>🔁 {video.shares}</span>
                      <span>💬 {video.comments}</span>
                    </div>

                    <div className="text-xs text-gray-500 mt-auto">{video.date}</div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black text-white rounded px-3 py-1 text-xs">
                    {video.duration}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleContinue}
              disabled={!selectedVideoId}
              className={`w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow-lg
              transition-opacity duration-300 ${
                selectedVideoId
                  ? "opacity-100 hover:bg-blue-700"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Continue to Budget →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
