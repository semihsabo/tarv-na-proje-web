// pages/admin/manual-ads/meta.js

import React, { useState } from "react";
import Sidebar from "../Sidebar"; // veya "../components/Sidebar" yapına göre kontrol et

export default function MetaAdsPage() {
  const [campaignName, setCampaignName] = useState("");
  const [buyingType, setBuyingType] = useState("");
  const [objective, setObjective] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [locations, setLocations] = useState("");
  const [languages, setLanguages] = useState("");
  const [ageRange, setAgeRange] = useState([18, 65]);
  const [gender, setGender] = useState("All");
  const [interests, setInterests] = useState("");
  const [audienceId, setAudienceId] = useState("");
  const [facebookPage, setFacebookPage] = useState("");
  const [instagramAccount, setInstagramAccount] = useState("");
  const [adFormat, setAdFormat] = useState("");
  const [creative, setCreative] = useState(null);
  const [headline, setHeadline] = useState("");
  const [cta, setCta] = useState("");
  const [primaryText, setPrimaryText] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 max-w-5xl mx-auto bg-white rounded shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Meta Ad Manually
        </h2>

        <div className="space-y-8">
          {/* Campaign Settings */}
          <section>
            <h3 className="text-xl font-semibold mb-4">📋 Campaign Settings</h3>
            <input type="text" placeholder="Campaign Name" className="input" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} />
            <select className="input" value={buyingType} onChange={(e) => setBuyingType(e.target.value)}>
              <option>Select buying type</option>
            </select>
            <select className="input" value={objective} onChange={(e) => setObjective(e.target.value)}>
              <option>Select campaign objective</option>
            </select>
          </section>

          {/* Ad Set Configuration */}
          <section>
            <h3 className="text-xl font-semibold mb-4">🧩 Ad Set Configuration</h3>
            <div className="mb-4">
              <label className="block font-medium">Budget & Schedule</label>
              <input type="number" className="input" placeholder="Budget Amount ($)" value={budget} onChange={(e) => setBudget(e.target.value)} />
              <input type="text" className="input" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <input type="text" className="input" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Audience Targeting</label>
              <input type="text" className="input" placeholder="Select locations" value={locations} onChange={(e) => setLocations(e.target.value)} />
              <input type="text" className="input" placeholder="Select languages" value={languages} onChange={(e) => setLanguages(e.target.value)} />
              <input type="text" className="input" placeholder="Age Range" value={`${ageRange[0]} - ${ageRange[1]}`} readOnly />
              <div className="flex items-center gap-4 mt-2">
                <label><input type="radio" name="gender" value="All" checked={gender === "All"} onChange={(e) => setGender(e.target.value)} /> All</label>
                <label><input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male</label>
                <label><input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female</label>
              </div>
              <input type="text" className="input" placeholder="Interests & Behaviors" value={interests} onChange={(e) => setInterests(e.target.value)} />
              <input type="text" className="input" placeholder="Custom Audience ID" value={audienceId} onChange={(e) => setAudienceId(e.target.value)} />
            </div>
          </section>

          {/* Ad Creative */}
          <section>
            <h3 className="text-xl font-semibold mb-4">🎨 Ad Creative</h3>
            <input type="text" className="input" placeholder="Facebook Page" value={facebookPage} onChange={(e) => setFacebookPage(e.target.value)} />
            <input type="text" className="input" placeholder="Instagram Account" value={instagramAccount} onChange={(e) => setInstagramAccount(e.target.value)} />
            <input type="text" className="input" placeholder="Ad Format" value={adFormat} onChange={(e) => setAdFormat(e.target.value)} />
            <input type="file" onChange={(e) => setCreative(e.target.files[0])} className="input" />
            <input type="text" className="input" placeholder="Headline" value={headline} onChange={(e) => setHeadline(e.target.value)} />
            <select className="input" value={cta} onChange={(e) => setCta(e.target.value)}>
              <option>Select CTA</option>
            </select>
            <textarea className="input" placeholder="Primary Text" value={primaryText} onChange={(e) => setPrimaryText(e.target.value)} />
            <textarea className="input" placeholder="Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="url" className="input" placeholder="Destination URL" value={url} onChange={(e) => setUrl(e.target.value)} />
          </section>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button className="px-6 py-2 rounded border">Save as Draft</button>
            <button className="px-6 py-2 rounded bg-blue-600 text-white">Launch Campaign</button>
          </div>
        </div>
      </div>
    </div>
  );
}
