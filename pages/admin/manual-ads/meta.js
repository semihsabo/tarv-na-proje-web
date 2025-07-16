import React, { useState } from "react";
import Sidebar from "../Sidebar";

export default function MetaAdsPage() {
  // State'ler
  const [campaignName, setCampaignName] = useState("");
  const [buyingType, setBuyingType] = useState("");
  const [campaignObjective, setCampaignObjective] = useState("");

  const [budgetType, setBudgetType] = useState("daily");
  const [budgetAmount, setBudgetAmount] = useState(100);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [locations, setLocations] = useState("");
  const [languages, setLanguages] = useState("");

  // Age range as [min, max]
  const [ageRange, setAgeRange] = useState([18, 65]);
  const minAge = 18;
  const maxAge = 65;

  const [gender, setGender] = useState("all");

  const [interests, setInterests] = useState("");
  const [customAudienceID, setCustomAudienceID] = useState("");

  const [autoPlacement, setAutoPlacement] = useState(true);
  const [optimizationGoal, setOptimizationGoal] = useState("");

  const [facebookPage, setFacebookPage] = useState("");
  const [instagramAccount, setInstagramAccount] = useState("");
  const [adFormat, setAdFormat] = useState("");

  const [creativeFile, setCreativeFile] = useState(null);
  const [headline, setHeadline] = useState("");
  const [cta, setCta] = useState("");
  const [primaryText, setPrimaryText] = useState("");
  const [description, setDescription] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");

  // AI Modal State
  const [aiOpen, setAiOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiInput, setAiInput] = useState({ product: "", audience: "", tone: "Formal", productImage: null });

  // Age slider change handler
  const handleAgeChange = (e) => {
    const value = Number(e.target.value);
    setAgeRange([minAge, value]);
  };

  // File input handler
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setCreativeFile(e.target.files[0]);
    } else {
      setCreativeFile(null);
    }
  };

  // AI Image input handler
  const handleAiImageChange = (e) => {
    if (e.target.files.length > 0) {
      setAiInput({ ...aiInput, productImage: e.target.files[0] });
    } else {
      setAiInput({ ...aiInput, productImage: null });
    }
  };

  // Generate AI suggestions (simulated)
  const handleGenerateSuggestions = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAiOpen(false);
      // Burada AI ile gelen verileri set et
      // Örneğin setHeadline, setPrimaryText gibi
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-10 overflow-auto relative">

        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Create Meta Ad Manually</h1>
            <p className="text-gray-600 mt-1">
              Configure your Facebook and Instagram campaign with full control
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              🔵 Meta Platform
            </span>

            <label className="flex items-center gap-2 cursor-pointer text-sm select-none">
              <input
                type="checkbox"
                className="hidden"
                checked={aiOpen}
                onChange={e => setAiOpen(e.target.checked)}
              />
              <span className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition-all ${aiOpen ? "bg-blue-500" : ""}`}>
                <span className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${aiOpen ? "translate-x-5" : ""}`}></span>
              </span>
              <span className="text-gray-600">Use AI to Auto-Fill Fields</span>
            </label>
          </div>
        </div>

        {/* Campaign Settings */}
        <section className="mb-8 bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold text-xl mb-6">📅 Campaign Settings</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Campaign Name"
              className="input h-12"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              disabled={aiOpen}
            />
            <select
              className="input h-12"
              value={buyingType}
              onChange={(e) => setBuyingType(e.target.value)}
              disabled={aiOpen}
            >
              <option value="">Select buying type</option>
              <option value="auction">Auction</option>
              <option value="reach">Reach and Frequency</option>
            </select>
            <select
              className="input h-12 sm:col-span-2"
              value={campaignObjective}
              onChange={(e) => setCampaignObjective(e.target.value)}
              disabled={aiOpen}
            >
              <option value="">Select campaign objective</option>
              <option value="awareness">Awareness</option>
              <option value="traffic">Traffic</option>
            </select>
          </div>
        </section>

        {/* Ad Set Configuration */}
        <section className="mb-8 bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="font-semibold text-lg mb-6">🎯 Ad Set Configuration</h2>

          <div className="mb-8">
            <label className="block font-medium mb-2">💰 Budget & Schedule</label>
            <div className="flex gap-6 mb-4 text-gray-700 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="budget"
                  value="daily"
                  checked={budgetType === "daily"}
                  onChange={() => setBudgetType("daily")}
                  className="accent-blue-600"
                  disabled={aiOpen}
                />
                Daily Budget
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="budget"
                  value="lifetime"
                  checked={budgetType === "lifetime"}
                  onChange={() => setBudgetType("lifetime")}
                  className="accent-blue-600"
                  disabled={aiOpen}
                />
                Lifetime Budget
              </label>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Budget Amount (₺)"
                className="input h-12"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
                min={0}
                disabled={aiOpen}
              />
              <input
                type="date"
                className="input h-12"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
                disabled={aiOpen}
              />
              <input
                type="date"
                className="input h-12"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
                disabled={aiOpen}
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block font-medium mb-2">🎯 Audience Targeting</label>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Select Locations"
                className="input h-12"
                value={locations}
                onChange={(e) => setLocations(e.target.value)}
                disabled={aiOpen}
              />
              <input
                type="text"
                placeholder="Select Languages"
                className="input h-12"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                disabled={aiOpen}
              />
            </div>

            <label className="font-semibold mb-1 block">
              Age Range: {ageRange[0]} - {ageRange[1]}
            </label>
            <input
              type="range"
              min={minAge}
              max={maxAge}
              value={ageRange[1]}
              onChange={handleAgeChange}
              className="w-full h-2 rounded-lg accent-blue-600 mb-4"
              disabled={aiOpen}
            />

            <div className="flex gap-8 mb-4 text-gray-700">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="all"
                  checked={gender === "all"}
                  onChange={() => setGender("all")}
                  className="accent-blue-600"
                  disabled={aiOpen}
                />
                All
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                  className="accent-blue-600"
                  disabled={aiOpen}
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                  className="accent-blue-600"
                  disabled={aiOpen}
                />
                Female
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Interests & Behaviors"
                className="input h-12"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                disabled={aiOpen}
              />
              <input
                type="text"
                placeholder="Custom Audience ID (optional)"
                className="input h-12"
                value={customAudienceID}
                onChange={(e) => setCustomAudienceID(e.target.value)}
                disabled={aiOpen}
              />
            </div>
          </div>
        </section>

        {/* Placements */}
        <section className="mb-8 bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="font-semibold text-lg mb-6">📍 Placements</h2>
          <div className="flex items-center gap-3 mb-4 text-gray-700 text-sm">
            <input
              type="checkbox"
              checked={autoPlacement}
              onChange={() => setAutoPlacement(!autoPlacement)}
              className="accent-blue-600"
              disabled={aiOpen}
            />
            <label>Automatic Placements (Recommended)</label>
          </div>
          <select
            className="input h-12"
            value={optimizationGoal}
            onChange={(e) => setOptimizationGoal(e.target.value)}
            disabled={aiOpen}
          >
            <option value="">Select optimization goal</option>
            <option value="conversions">Conversions</option>
            <option value="link_clicks">Link Clicks</option>
            <option value="impressions">Impressions</option>
          </select>
        </section>

        {/* Ad Creative */}
        <section className="rounded-2xl bg-gray-50 p-6">
          <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
            <span>🎨</span> Ad Creative
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <select
              className="input h-12"
              value={facebookPage}
              onChange={(e) => setFacebookPage(e.target.value)}
              disabled={aiOpen}
            >
              <option value="" disabled>
                Select Facebook page
              </option>
              {/* options */}
            </select>
            <select
              className="input h-12"
              value={instagramAccount}
              onChange={(e) => setInstagramAccount(e.target.value)}
              disabled={aiOpen}
            >
              <option value="" disabled>
                Select Instagram account
              </option>
              {/* options */}
            </select>
          </div>

          <select
            className="input h-12 mb-6 w-full"
            value={adFormat}
            onChange={(e) => setAdFormat(e.target.value)}
            disabled={aiOpen}
          >
            <option value="" disabled>
              Select ad format
            </option>
            <option>Single Image</option>
            <option>Carousel</option>
            <option>Video</option>
          </select>

          <div className="border-2 border-dashed rounded-lg p-8 text-center text-gray-500 mb-6">
            <p className="mb-2">Upload Creative</p>
            <label
              htmlFor="creativeFile"
              className="px-4 py-2 border rounded cursor-pointer bg-white hover:bg-gray-100 transition inline-block"
            >
              Choose File
            </label>
            <input
              id="creativeFile"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              disabled={aiOpen}
            />
            {creativeFile && (
              <p className="mt-2 text-green-600 font-medium">{creativeFile.name}</p>
            )}
            <p className="text-xs mt-1 text-gray-400">PNG, JPG, MP4 up to 10MB</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Headline (max 40 chars)"
              className="input h-12 col-span-2"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              disabled={aiOpen}
            />
            <select
              className="input h-12"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              disabled={aiOpen}
            >
              <option value="" disabled>
                Select CTA
              </option>
              <option>Shop Now</option>
              <option>Learn More</option>
              <option>Sign Up</option>
            </select>
          </div>

          <textarea
            className="input mb-4 p-3 w-full resize-none"
            rows={4}
            placeholder="Primary Text"
            value={primaryText}
            onChange={(e) => setPrimaryText(e.target.value)}
            disabled={aiOpen}
          />

          <textarea
            className="input mb-4 p-3 w-full resize-none"
            rows={2}
            placeholder="Description (Optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={aiOpen}
          />

          <input
            type="text"
            placeholder="Destination URL"
            className="input h-12 w-full"
            value={destinationUrl}
            onChange={(e) => setDestinationUrl(e.target.value)}
            disabled={aiOpen}
          />
        </section>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
          <button className="w-full sm:w-auto px-4 py-2 border rounded text-sm text-gray-600">
            Save as Draft
          </button>
          <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition">
            Launch Campaign
          </button>
        </div>

        {/* AI Modal */}
        {aiOpen && !loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl border border-gray-100 px-8 py-8 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-4 tracking-tight">
                What is this campaign about?
              </h2>

              <div className="w-full flex flex-col gap-4 my-4">
                <input
                  className="input w-full h-12 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
                  placeholder="Product, category, or campaign goal *"
                  value={aiInput.product}
                  onChange={e => setAiInput({ ...aiInput, product: e.target.value })}
                  required
                />
                <input
                  className="input w-full h-12 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
                  placeholder="Target audience (optional)"
                  value={aiInput.audience}
                  onChange={e => setAiInput({ ...aiInput, audience: e.target.value })}
                />
                <select
                  className="input w-full h-12 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={aiInput.tone}
                  onChange={e => setAiInput({ ...aiInput, tone: e.target.value })}
                >
                  <option value="">Select tone</option>
                  <option value="Formal">Formal</option>
                  <option value="Casual">Casual</option>
                  <option value="Energetic">Energetic</option>
                  <option value="Friendly">Friendly</option>
                  <option value="Persuasive">Persuasive</option>
                </select>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center mt-4">
                  <label htmlFor="productImage" className="cursor-pointer flex flex-col items-center gap-2">
                    <svg width={38} height={38} fill="none" viewBox="0 0 24 24">
                      <rect width={24} height={24} fill="#F3F4F6" rx={12} />
                      <path d="M12 16V8M12 8l-3 3m3-3l3 3" stroke="#a0aec0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-gray-700 font-medium">Upload Image</span>
                    <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
                  </label>
                  <input
                    id="productImage"
                    type="file"
                    accept="image/png, image/jpeg"
                    className="hidden"
                    onChange={handleAiImageChange}
                  />
                  {aiInput.productImage && (
                    <div className="mt-2 text-sm text-green-600 font-medium">{aiInput.productImage.name}</div>
                  )}
                </div>
              </div>

              <div className="w-full flex justify-between gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setAiOpen(false)}
                  className="flex-1 h-12 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold transition hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleGenerateSuggestions}
                  className="flex-1 h-12 rounded-lg bg-black text-white font-semibold transition hover:bg-gray-800"
                >
                  Generate with AI
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-40">
            <div className="bg-white px-6 py-4 rounded-lg shadow text-sm">
              <p className="font-medium">Generating AI suggestions...</p>
              <p className="text-gray-500">Analyzing your campaign objective and business type</p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
