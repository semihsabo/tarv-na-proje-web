import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";

export default function GoogleAdsContentSelection() {
  const router = useRouter();
  const { platform } = router.query;

  const [websiteURL, setWebsiteURL] = useState("");
  const [headline1, setHeadline1] = useState("");
  const [headline2, setHeadline2] = useState("");
  const [headline3, setHeadline3] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");

  const canContinue =
    websiteURL.trim().length > 0 &&
    headline1.trim().length > 0 &&
    description1.trim().length > 0;

  const handleContinue = () => {
    router.push(
      `/admin/create-ad/budget?platform=${platform}&goal=google`
    );
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-8 bg-[#fefbff]">
        <div className="max-w-4xl mx-auto bg-white rounded shadow p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Google Ads</h2>
          <p className="mb-8 text-center text-gray-600 text-sm sm:text-base">
            Set up your Google Ads campaign with website URL and ad copy
          </p>

          {/* Website URL */}
          <section className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">🌐</span> Website to Advertise
            </h3>
            <input
              type="url"
              placeholder="https://your-website.com"
              value={websiteURL}
              onChange={(e) => setWebsiteURL(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </section>

          {/* Headlines */}
          <section className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Headlines</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Headline 1 *"
                maxLength={30}
                value={headline1}
                onChange={(e) => setHeadline1(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Headline 2"
                maxLength={30}
                value={headline2}
                onChange={(e) => setHeadline2(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Headline 3"
                maxLength={30}
                value={headline3}
                onChange={(e) => setHeadline3(e.target.value)}
                className="sm:col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Descriptions */}
          <section className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Descriptions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <textarea
                placeholder="Description 1 *"
                maxLength={90}
                value={description1}
                onChange={(e) => setDescription1(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Description 2"
                maxLength={90}
                value={description2}
                onChange={(e) => setDescription2(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </section>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href={`/admin/create-ad/content-selection?platform=${platform}`}
              className="text-blue-600 hover:underline"
            >
              ← Back to Content Selection
            </Link>

            <button
              disabled={!canContinue}
              onClick={handleContinue}
              className="w-full sm:w-auto bg-green-600 text-white font-semibold px-6 py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition"
            >
              Continue to Budget →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
