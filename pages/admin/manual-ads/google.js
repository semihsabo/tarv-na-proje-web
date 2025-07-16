import { useState } from "react";
import Sidebar from "../Sidebar";

export default function GoogleManualAd() {
  // State'ler
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

  // AI modal inputları
  const [aiInput, setAiInput] = useState({
    product: "",
    audience: "",
    tone: "Formal",
    productImage: null,
  });

  // Yardımcı fonksiyonlar
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

  const handleAddSitelink = () => setSitelinks([...sitelinks, { text: "", url: "" }]);
  const handleAddHeadline = () => setHeadlines([...headlines, ""]);
  const handleAddDescription = () => setDescriptions([...descriptions, ""]);

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
    <div className="flex min-h-screen bg-[#fafbfc]">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center px-4 sm:px-12 py-10">
        <div className="w-full max-w-5xl">

          {/* Sayfa Başlığı ve AI Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create Google Ad Manually</h1>
              <p className="text-base text-gray-600 mt-1">
                Build your Search, Display, or Performance Max campaign with full control
              </p>
            </div>
            <div className="flex items-center gap-5">
              <span className="bg-green-100 text-green-700 font-semibold px-4 py-1 rounded-full text-sm flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>Google Ads
              </span>
              <label className="flex items-center gap-3 cursor-pointer text-base">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={aiOpen}
                  onChange={e => setAiOpen(e.target.checked)}
                />
                <span className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition-all ${aiOpen ? "bg-green-400" : ""}`}>
                  <span className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${aiOpen ? "translate-x-6" : ""}`}></span>
                </span>
                <span className="text-gray-700 select-none">Use AI to Auto-Fill Fields</span>
              </label>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-12">

            {/* Campaign Settings */}
            <section className="rounded-3xl bg-white border border-gray-300 shadow-md p-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-blue-600 text-3xl">🧩</span>
                <h2 className="font-extrabold text-xl text-gray-900 tracking-tight">Campaign Settings</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Campaign Name</label>
                  <input
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter campaign name"
                    value={campaignName}
                    onChange={e => setCampaignName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Campaign Type</label>
                  <select
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={campaignType}
                    onChange={e => setCampaignType(e.target.value)}
                  >
                    <option value="">Select campaign type</option>
                    <option>Search</option>
                    <option>Display</option>
                    <option>Performance Max</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Networks & Targeting</label>
                  <div className="flex flex-col gap-3 mb-3 text-sm text-gray-700">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="accent-green-500" />
                      Include Google search partners
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="accent-green-500" />
                      Include Display Network
                    </label>
                  </div>
                  <input
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Select target locations"
                    value={locations}
                    onChange={e => setLocations(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Languages</label>
                  <input
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Select languages"
                    value={languages}
                    onChange={e => setLanguages(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Daily Budget (₺)</label>
                  <input
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="100"
                    value={dailyBudget}
                    onChange={e => setDailyBudget(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Bidding Strategy</label>
                  <select
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    value={biddingStrategy}
                    onChange={e => setBiddingStrategy(e.target.value)}
                  >
                    <option value="">Select bidding strategy</option>
                    <option>Maximize Clicks</option>
                    <option>Target CPA</option>
                    <option>Target ROAS</option>
                    <option>Manual CPC</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Ad Group Settings */}
            <section className="rounded-3xl bg-white border border-gray-300 shadow-md p-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-purple-600 text-3xl">👥</span>
                <h2 className="font-extrabold text-xl text-gray-900 tracking-tight">Ad Group Settings</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Ad Group Name</label>
                  <input
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter ad group name"
                    value={adGroupName}
                    onChange={e => setAdGroupName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Keywords</label>
                  <textarea
                    className="textarea w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter keywords (one per line or comma-separated)"
                    value={keywords}
                    onChange={e => setKeywords(e.target.value)}
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Ad Creative */}
            <section className="rounded-3xl bg-white border border-gray-300 shadow-md p-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-pink-600 text-3xl">🎨</span>
                <h2 className="font-extrabold text-xl text-gray-900 tracking-tight">Ad Creative</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Final URL</label>
                  <input
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="https://your-website.com"
                    value={finalURL}
                    onChange={e => setFinalURL(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Path 1 (Optional)</label>
                  <input
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="products"
                    value={path1}
                    onChange={e => setPath1(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 text-sm">Path 2 (Optional)</label>
                  <input
                    className="input w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="category"
                    value={path2}
                    onChange={e => setPath2(e.target.value)}
                  />
                </div>
              </div>

              {/* Headlines */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Headlines <span className="text-sm text-gray-400">(3-15 required)</span></h3>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                    onClick={handleAddHeadline}
                  >
                    + Add Headline
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {headlines.map((headline, idx) => (
                    <input
                      key={idx}
                      className="input rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder={`Headline ${idx + 1}`}
                      value={headline}
                      onChange={e => handleHeadlineChange(idx, e.target.value)}
                    />
                  ))}
                </div>
              </div>

              {/* Descriptions */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Descriptions <span className="text-sm text-gray-400">(2-4 required)</span></h3>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                    onClick={handleAddDescription}
                  >
                    + Add Description
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {descriptions.map((desc, idx) => (
                    <textarea
                      key={idx}
                      className="textarea rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      placeholder={`Description ${idx + 1}`}
                      value={desc}
                      onChange={e => handleDescriptionChange(idx, e.target.value)}
                      rows={3}
                    />
                  ))}
                </div>
              </div>

              {/* Extensions */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Ad Extensions <span className="text-sm text-gray-400">(Optional)</span></h3>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                    onClick={handleAddSitelink}
                  >
                    + Add Sitelink
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {sitelinks.map((link, idx) => (
                    <div key={idx} className="flex gap-4">
                      <input
                        className="input flex-1 rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Link text"
                        value={link.text}
                        onChange={e => handleSitelinkChange(idx, "text", e.target.value)}
                      />
                      <input
                        className="input flex-1 rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Link URL"
                        value={link.url}
                        onChange={e => handleSitelinkChange(idx, "url", e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="input rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Callouts (comma-separated)"
                    value={callouts}
                    onChange={e => setCallouts(e.target.value)}
                  />
                  <input
                    className="input rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Butonlar */}
            <div className="flex flex-col sm:flex-row justify-end gap-6 mt-12">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                Launch Campaign
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Loading Ekranı */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10">
          <div className="bg-white p-6 rounded-lg shadow border flex items-center gap-4">
            <span className="animate-spin inline-block border-2 border-t-2 border-gray-300 rounded-full w-6 h-6"></span>
            <span className="text-lg font-medium text-gray-700">Generating AI suggestions...</span>
          </div>
        </div>
      )}

      {/* AI Modal */}
      {aiOpen && !loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-gray-200 px-10 py-10 flex flex-col items-center">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
              What is this campaign about?
            </h2>
            <div className="w-full flex flex-col gap-6">
              <input
                className="input w-full h-12 text-base rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Product/Service"
                value={aiInput.product}
                onChange={e => setAiInput({ ...aiInput, product: e.target.value })}
              />
              <input
                className="input w-full h-12 text-base rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Target Audience"
                value={aiInput.audience}
                onChange={e => setAiInput({ ...aiInput, audience: e.target.value })}
              />
              <select
                className="input w-full h-12 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
                value={aiInput.tone}
                onChange={e => setAiInput({ ...aiInput, tone: e.target.value })}
              >
                <option>Formal</option>
                <option>Casual</option>
                <option>Professional</option>
              </select>

              {/* Upload Image */}
              <label
                htmlFor="productImage"
                className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center gap-3 text-gray-500 hover:border-green-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 12a4 4 0 01-8 0M12 12V8m0 0l-3 3m3-3l3 3"
                  />
                </svg>
                <span className="text-sm font-semibold">Upload Image</span>
                <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
                {aiInput.productImage && (
                  <p className="text-green-600 mt-2 truncate max-w-full">{aiInput.productImage.name}</p>
                )}
              </label>
              <input
                type="file"
                id="productImage"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={e => setAiInput({ ...aiInput, productImage: e.target.files[0] })}
              />
            </div>
            <div className="w-full flex justify-between gap-6 mt-10">
              <button
                type="button"
                onClick={() => setAiOpen(false)}
                className="flex-1 h-12 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleGenerateSuggestions}
                className="flex-1 h-12 rounded-lg bg-black text-white font-semibold hover:bg-black/90 transition"
              >
                Generate with AI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
