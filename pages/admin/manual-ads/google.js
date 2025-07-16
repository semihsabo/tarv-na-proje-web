import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";

export default function GoogleManualAd() {
  const [campaignName, setCampaignName] = useState("");
  const [campaignType, setCampaignType] = useState("");
  const [locations, setLocations] = useState("");
  const [languages, setLanguages] = useState("");
  const [dailyBudget, setDailyBudget] = useState("100");
  const [biddingStrategy, setBiddingStrategy] = useState("");

  const [adGroupName, setAdGroupName] = useState("");
  const [keywords, setKeywords] = useState("");

  const [finalURL, setFinalURL] = useState("");
  const [path1, setPath1] = useState("");
  const [path2, setPath2] = useState("");

  const [headlines, setHeadlines] = useState(["", "", ""]);
  const [descriptions, setDescriptions] = useState(["", ""]);

  const [sitelinks, setSitelinks] = useState([{ text: "", url: "" }]);
  const [callouts, setCallouts] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [aiOpen, setAiOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiInput, setAiInput] = useState({ product: "", audience: "", tone: "Formal" });

  const handleHeadlineChange = (index, value) => {
    const newHeadlines = [...headlines];
    newHeadlines[index] = value;
    setHeadlines(newHeadlines);
  };

  const handleDescriptionChange = (index, value) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
  };

  const handleSitelinkChange = (index, field, value) => {
    const newSitelinks = [...sitelinks];
    newSitelinks[index][field] = value;
    setSitelinks(newSitelinks);
  };

  const handleGenerateSuggestions = () => {
    setLoading(true);
    setTimeout(() => {
      setHeadlines(["High-quality shoes", "Fast delivery", "Big discounts"]);
      setDescriptions(["Buy the best shoes online.", "Free returns and fast delivery."]);
      setLoading(false);
      setAiOpen(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white relative">
      <Sidebar />
      <div className="flex-1 px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold">Create Google Ad Manually</h1>
            <p className="text-sm text-gray-500">
              Build your Search, Display, or Performance Max campaign with full control
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              🟢 Google Ads
            </span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                onChange={(e) => setAiOpen(e.target.checked)}
              />
              <span className="relative inline-block w-10 h-5 bg-gray-300 rounded-full">
                <span
                  className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transition-transform ${
                    aiOpen ? "translate-x-5" : ""
                  }`}
                ></span>
              </span>
              <span className="text-sm">Use AI to Auto-Fill Fields</span>
            </label>
          </div>
        </div>

        {/* FORM */}
        <div className="space-y-8">
          {/* Campaign Settings */}
          <div className="rounded-xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">🧠 Campaign Settings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Campaign Name" value={campaignName} onChange={e => setCampaignName(e.target.value)} />
              <select className="input" value={campaignType} onChange={e => setCampaignType(e.target.value)}>
                <option>Select campaign type</option>
              </select>
            </div>

            <h3 className="font-semibold mt-6 mb-2">🌐 Networks & Targeting</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <label className="flex gap-2 items-center">
                <input type="checkbox" /> Include Google search partners
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" /> Include Display Network
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Select target locations" value={locations} onChange={e => setLocations(e.target.value)} />
              <input className="input" placeholder="Select languages" value={languages} onChange={e => setLanguages(e.target.value)} />
            </div>

            <h3 className="font-semibold mt-6 mb-2">💰 Budget & Bidding</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Daily Budget (₺)" value={dailyBudget} onChange={e => setDailyBudget(e.target.value)} />
              <select className="input" value={biddingStrategy} onChange={e => setBiddingStrategy(e.target.value)}>
                <option>Select bidding strategy</option>
              </select>
            </div>
          </div>

          {/* Ad Group */}
          <div className="rounded-xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">👥 Ad Group Settings</h2>
            <input className="input mb-4" placeholder="Ad Group Name" value={adGroupName} onChange={e => setAdGroupName(e.target.value)} />
            <textarea className="textarea" placeholder="Enter keywords (one per line or comma-separated)" value={keywords} onChange={e => setKeywords(e.target.value)}></textarea>
          </div>

          {/* Ad Creative */}
          <div className="rounded-xl border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">🎨 Ad Creative</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <input className="input" placeholder="Final URL" value={finalURL} onChange={e => setFinalURL(e.target.value)} />
              <input className="input" placeholder="Path 1 (Optional)" value={path1} onChange={e => setPath1(e.target.value)} />
              <input className="input" placeholder="Path 2 (Optional)" value={path2} onChange={e => setPath2(e.target.value)} />
            </div>

            {/* Headlines */}
            <div className="mb-4 space-y-2">
              <h3 className="font-semibold">Headlines (3-15 required)</h3>
              {headlines.map((headline, index) => (
                <input key={index} className="input" placeholder={`Headline ${index + 1}`} value={headline} onChange={e => handleHeadlineChange(index, e.target.value)} />
              ))}
            </div>

            {/* Descriptions */}
            <div className="mb-4 space-y-2">
              <h3 className="font-semibold">Descriptions (2-4 required)</h3>
              {descriptions.map((desc, index) => (
                <textarea key={index} className="textarea" placeholder={`Description ${index + 1}`} value={desc} onChange={e => handleDescriptionChange(index, e.target.value)}></textarea>
              ))}
            </div>

            {/* Extensions */}
            <div className="space-y-2">
              <h3 className="font-semibold">Ad Extensions (Optional)</h3>
              {sitelinks.map((link, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input className="input" placeholder="Link text" value={link.text} onChange={e => handleSitelinkChange(index, "text", e.target.value)} />
                  <input className="input" placeholder="Link URL" value={link.url} onChange={e => handleSitelinkChange(index, "url", e.target.value)} />
                </div>
              ))}
              <input className="input" placeholder="Callouts (comma-separated)" value={callouts} onChange={e => setCallouts(e.target.value)} />
              <input className="input" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button className="w-full sm:w-auto px-6 py-2 rounded border border-gray-300">Save as Draft</button>
            <button className="w-full sm:w-auto px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition">
              Launch Campaign
            </button>
          </div>
        </div>
      </div>

      {/* AI Loading */}
      {loading && (
        <div className="absolute top-10 right-10 z-40 bg-white p-4 shadow rounded-xl border border-gray-200">
          <span className="animate-spin inline-block mr-2 border-2 border-t-2 border-gray-300 rounded-full w-4 h-4"></span>
          <span className="text-sm">Generating AI suggestions...</span>
        </div>
      )}

      {/* AI Modal */}
      {aiOpen && !loading && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-[90%] max-w-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">AI Context for Google Ads</h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
              To generate more relevant Google ad suggestions, please provide some context about your campaign.
            </p>
            <input
              className="input mb-4"
              placeholder="Product/Service"
              value={aiInput.product}
              onChange={(e) => setAiInput({ ...aiInput, product: e.target.value })}
            />
            <input
              className="input mb-4"
              placeholder="Target Audience"
              value={aiInput.audience}
              onChange={(e) => setAiInput({ ...aiInput, audience: e.target.value })}
            />
            <select
              className="input mb-6"
              value={aiInput.tone}
              onChange={(e) => setAiInput({ ...aiInput, tone: e.target.value })}
            >
              <option>Formal</option>
              <option>Casual</option>
              <option>Professional</option>
            </select>
            <button
              className="bg-black text-white w-full py-3 rounded hover:bg-gray-800 transition"
              onClick={handleGenerateSuggestions}
            >
              Generate Suggestions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
