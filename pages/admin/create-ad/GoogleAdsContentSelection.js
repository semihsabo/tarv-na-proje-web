import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Sidebar from "../Sidebar"; // Eğer path farklıysa düzelt

export default function GoogleAdsContentSelection() {
  const router = useRouter();
  const { platform } = router.query;

  const [campaignGoal, setCampaignGoal] = useState("search");
  const [websiteURL, setWebsiteURL] = useState("");
  const [headlines, setHeadlines] = useState(["", "", ""]);
  const [descriptions, setDescriptions] = useState(["", ""]);

  const campaignGoals = [
    {
      id: "search",
      title: "Search Ads",
      description: "Show ads when people search for your products or services.",
      recommended: true,
      disabled: false,
    },
    {
      id: "display",
      title: "Display Ads",
      description: "Reach people with visual ads across millions of websites.",
      recommended: false,
      disabled: false,
    },
    {
      id: "performance",
      title: "Performance Max",
      description: "AI-powered campaigns across all Google channels.",
      recommended: true,
      disabled: false,
    },
    {
      id: "app",
      title: "App Promotion",
      description: "Drive app installs and engagement.",
      recommended: false,
      disabled: false,
    },
    {
      id: "video",
      title: "Video Ads",
      description: "Reach audiences on YouTube and video partners.",
      recommended: false,
      disabled: true,
    },
  ];

  const canContinue =
    websiteURL.trim().length > 0 &&
    headlines[0].trim().length > 0 &&
    descriptions[0].trim().length > 0;

  const handleContinue = () => {
    router.push(
      `/admin/create-ad/budget?platform=${platform || "google"}&goal=${campaignGoal}&websiteURL=${encodeURIComponent(
        websiteURL
      )}`
    );
  };

  return (
    <div className="flex min-h-screen bg-[#f4f8fb]">
      <Sidebar />
      <main className="flex-1 flex justify-center items-start py-10 px-2 sm:px-8">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-0 sm:p-0">
          {/* Header */}
          <section className="flex flex-col items-center px-6 py-8 border-b border-[#eef1f4]">
            <img
              src="/icons/google.png"
              alt="Google Ads"
              className="w-12 h-12 mb-2"
            />
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              Google Ads
            </div>
            <div className="text-blue-600 font-medium mb-1">Search & Display Network</div>
            <div className="text-gray-500 text-sm">
              Set up your Google Ads campaign with website URL and ad copy
            </div>
          </section>

          {/* Campaign Goal */}
          <section className="px-6 py-8 border-b border-[#eef1f4]">
            <div className="font-semibold text-lg mb-3 text-gray-800 flex items-center gap-2">
              <span className="text-blue-700">●</span> Campaign Goal
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {campaignGoals.map((goal) => (
                <button
                  key={goal.id}
                  disabled={goal.disabled}
                  onClick={() => setCampaignGoal(goal.id)}
                  className={`
                    group border flex flex-col items-start rounded-xl p-5 transition-all duration-150
                    text-left shadow-sm
                    ${campaignGoal === goal.id
                      ? "border-blue-500 ring-2 ring-blue-100 bg-blue-50"
                      : "border-[#e5e7eb] bg-white"}
                    ${goal.disabled
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:border-blue-400 hover:shadow-md cursor-pointer"}
                  `}
                >
                  <div className="flex w-full items-center justify-between mb-1">
                    <div className={`font-medium text-base ${goal.disabled ? "text-gray-400" : "text-gray-900"}`}>
                      {goal.title}
                    </div>
                    {goal.recommended && !goal.disabled && (
                      <span className="bg-green-100 border border-green-200 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-md">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className={`text-sm ${goal.disabled ? "text-gray-400" : "text-gray-600"}`}>
                    {goal.description}
                  </div>
                  {goal.disabled && (
                    <div className="text-xs text-gray-400 mt-1">Coming Soon</div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Website URL */}
          <section className="px-6 py-8 border-b border-[#eef1f4]">
            <div className="font-semibold text-lg mb-3 text-gray-800 flex items-center gap-2">
              <span className="text-blue-700">●</span> Website to Advertise
            </div>
            <div className="relative">
              <input
                type="url"
                placeholder="https://your-website.com"
                value={websiteURL}
                onChange={(e) => setWebsiteURL(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {websiteURL.trim() && (
                <a
                  href={websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-3 top-2.5 text-blue-500 hover:text-blue-700"
                  tabIndex={-1}
                  title="Open URL"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l7-7zm2.121 2.122L9.414 9.414l-2.829-2.828L11.586 1.586a1 1 0 011.414 0l1.414 1.415a1 1 0 010 1.414z"/>
                  </svg>
                </a>
              )}
            </div>
          </section>

          {/* Headlines */}
          <section className="px-6 py-8 border-b border-[#eef1f4]">
            <div className="font-semibold text-lg mb-3 text-gray-800 flex items-center gap-2">
              <span className="text-blue-700">●</span> Headlines
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {headlines.map((headline, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Headline {idx + 1}{idx === 0 && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <input
                    type="text"
                    value={headline}
                    maxLength={30}
                    onChange={e => {
                      const newHeadlines = [...headlines];
                      newHeadlines[idx] = e.target.value;
                      setHeadlines(newHeadlines);
                    }}
                    placeholder={`Enter headline ${idx + 1}...`}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="text-xs text-gray-400 text-right">{headline.length}/30</div>
                </div>
              ))}
            </div>
          </section>

          {/* Descriptions */}
          <section className="px-6 py-8">
            <div className="font-semibold text-lg mb-3 text-gray-800 flex items-center gap-2">
              <span className="text-blue-700">●</span> Descriptions
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {descriptions.map((desc, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description {idx + 1}{idx === 0 && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  <textarea
                    value={desc}
                    maxLength={90}
                    onChange={e => {
                      const newDescriptions = [...descriptions];
                      newDescriptions[idx] = e.target.value;
                      setDescriptions(newDescriptions);
                    }}
                    placeholder={`Enter description ${idx + 1}...`}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                  />
                  <div className="text-xs text-gray-400 text-right">{desc.length}/90</div>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation Buttons */}
          <div className="px-6 pb-8 pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href={`/admin/create-ad/content-selection?platform=${platform || "google"}`}
              className="text-blue-600 hover:underline text-base"
            >
              ← Back to Platform Selection
            </Link>

            <button
              disabled={!canContinue}
              onClick={handleContinue}
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition text-base"
            >
              Continue to Budget →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
