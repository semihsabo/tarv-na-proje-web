import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";

export default function TikTokContentSelection() {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
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

  const handleSelect = (id) => {
    setSelectedVideoId(id);
    setUploadedVideo(null); // Kart seçilince upload sıfırlansın
  };

  const handleUploadChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      alert("Only video files are allowed.");
      return;
    }
    if (file.size > 40 * 1024 * 1024) {
      alert("Video size must be less than 40MB.");
      return;
    }
    setUploadedVideo(file);
    setSelectedVideoId(null); // Yüklenirse kart seçimi sıfırlansın
  };

  const handleContinue = () => {
    if (selectedVideoId || uploadedVideo) {
      router.push(
        `/admin/create-ad/budget?platform=tiktok` +
        (selectedVideoId ? `&videoId=${selectedVideoId}` : "") +
        (uploadedVideo ? `&uploaded=1` : "")
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

          {/* Video Kartları */}
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

          {/* Upload a New Video Alanı */}
          <div className="mt-12 w-full">
            <div className="w-full border-2 border-dashed border-gray-300 rounded-xl py-10 px-6 flex flex-col items-center justify-center bg-white hover:border-gray-400 transition">
              <div className="flex flex-col items-center mb-4">
                <div className="bg-gray-100 rounded-full p-3 mb-2">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                      stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-gray-700 text-lg mb-1">Upload a New Video</div>
                <div className="text-gray-500 text-sm text-center mb-2">
                  Create fresh content specifically for your campaign
                </div>
              </div>
              <label
                className="w-full flex flex-col sm:flex-row items-center gap-4 cursor-pointer"
                htmlFor="tiktok-upload"
              >
                <input
                  type="file"
                  accept="video/*"
                  id="tiktok-upload"
                  className="hidden"
                  onChange={handleUploadChange}
                />
                <span className="flex-1 text-gray-500">
                  {uploadedVideo ? (
                    <span className="text-green-600 font-semibold">{uploadedVideo.name}</span>
                  ) : (
                    "Choose video file..."
                  )}
                </span>
                <span
                  className="inline-flex items-center px-6 py-2 rounded-lg bg-gray-800 text-white font-semibold shadow hover:bg-black transition"
                >
                  <svg className="mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                  Upload Video
                </span>
              </label>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleContinue}
              disabled={!selectedVideoId && !uploadedVideo}
              className={`w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow-lg
                transition-opacity duration-300 ${
                  selectedVideoId || uploadedVideo
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
