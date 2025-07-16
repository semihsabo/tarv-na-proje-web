import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Sidebar from "../Sidebar";

export default function GoogleAdsContentSelection() {
  const router = useRouter();
  const { platform } = router.query;

  const [campaignGoal, setCampaignGoal] = useState("display");
  const [websiteURL, setWebsiteURL] = useState("");

  const campaignGoals = [
    {
      id: "search",
      title: "Search Ads",
      description: "Show ads when people search for your products or services",
      recommended: true,
      disabled: false,
    },
    {
      id: "display",
      title: "Display Ads",
      description: "Reach people with visual ads across millions of websites",
      recommended: false,
      disabled: false,
    },
    {
      id: "performance",
      title: "Performance Max",
      description: "AI-powered campaigns across all Google channels",
      recommended: true,
      disabled: false,
    },
    {
      id: "app",
      title: "App Promotion",
      description: "Drive app installs and engagement",
      recommended: false,
      disabled: false,
    },
    {
      id: "video",
      title: "Video Ads",
      description: "Reach audiences on YouTube and video partners",
      recommended: false,
      disabled: true,
    },
  ];

  const canContinue = websiteURL.trim().length > 0;

  const handleContinue = () => {
    router.push(
      `/admin/create-ad/launch?platform=${platform}&goal=${campaignGoal}&websiteURL=${encodeURIComponent(
        websiteURL
      )}`
    );
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-8 bg-[#fefbff]">
        <div className="max-w-5xl mx-auto bg-white rounded shadow p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Google Ads Campaign Setup
          </h2>

          {/* Campaign Goal */}
          <section className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Campaign Goal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {campaignGoals.map((goal) => (
                <button
                  key={goal.id}
                  disabled={goal.disabled}
                  onClick={() => setCampaignGoal(goal.id)}
                  className={`border rounded p-4 text-left transition-all duration-200 ease-in-out ${
                    campaignGoal === goal.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-300 bg-white"
                  } ${
                    goal.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer hover:shadow-md"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{goal.title}</span>
                    {goal.recommended && (
                      <span className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{goal.description}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Website to Advertise */}
          <section className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Website to Advertise
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

          {/* Navigation Buttons */}
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
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
            >
              Continue to Launch →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
