// pages/admin/manual-ads/google.js

import { useState } from "react";
import Sidebar from '../Sidebar';



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

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-[#fefbff] p-6 overflow-auto">
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-6">Create Google Ad Manually</h1>

          <div className="space-y-10">
            {/* Campaign Settings */}
            <section>
              <h2 className="text-lg font-semibold mb-4">📊 Campaign Settings</h2>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Campaign Name" value={campaignName} onChange={e => setCampaignName(e.target.value)} className="input" />
                <input placeholder="Campaign Type" value={campaignType} onChange={e => setCampaignType(e.target.value)} className="input" />
                <input placeholder="Locations" value={locations} onChange={e => setLocations(e.target.value)} className="input" />
                <input placeholder="Languages" value={languages} onChange={e => setLanguages(e.target.value)} className="input" />
                <input placeholder="Daily Budget ($)" value={dailyBudget} onChange={e => setDailyBudget(e.target.value)} className="input" />
                <input placeholder="Bidding Strategy" value={biddingStrategy} onChange={e => setBiddingStrategy(e.target.value)} className="input" />
              </div>
            </section>

            {/* Ad Group Settings */}
            <section>
              <h2 className="text-lg font-semibold mb-4">👥 Ad Group Settings</h2>
              <input placeholder="Ad Group Name" value={adGroupName} onChange={e => setAdGroupName(e.target.value)} className="input mb-4" />
              <textarea placeholder="Keywords (comma-separated)" value={keywords} onChange={e => setKeywords(e.target.value)} className="textarea" />
            </section>

            {/* Ad Creative */}
            <section>
              <h2 className="text-lg font-semibold mb-4">🎨 Ad Creative</h2>

              {/* URLs */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input placeholder="Final URL" value={finalURL} onChange={e => setFinalURL(e.target.value)} className="input" />
                <input placeholder="Path 1" value={path1} onChange={e => setPath1(e.target.value)} className="input" />
                <input placeholder="Path 2" value={path2} onChange={e => setPath2(e.target.value)} className="input" />
              </div>

              {/* Headlines */}
              <div className="mb-4 space-y-2">
                <h3 className="font-semibold">Headlines (3-15 required)</h3>
                {headlines.map((headline, index) => (
                  <input
                    key={index}
                    placeholder={`Headline ${index + 1}`}
                    value={headline}
                    onChange={e => handleHeadlineChange(index, e.target.value)}
                    className="input"
                  />
                ))}
              </div>

              {/* Descriptions */}
              <div className="mb-4 space-y-2">
                <h3 className="font-semibold">Descriptions (2-4 required)</h3>
                {descriptions.map((desc, index) => (
                  <textarea
                    key={index}
                    placeholder={`Description ${index + 1}`}
                    value={desc}
                    onChange={e => handleDescriptionChange(index, e.target.value)}
                    className="textarea"
                  />
                ))}
              </div>

              {/* Ad Extensions */}
              <div className="space-y-2">
                <h3 className="font-semibold">Ad Extensions (Optional)</h3>
                {sitelinks.map((link, index) => (
                  <div key={index} className="grid grid-cols-2 gap-2">
                    <input placeholder="Sitelink text" value={link.text} onChange={e => handleSitelinkChange(index, "text", e.target.value)} className="input" />
                    <input placeholder="Sitelink URL" value={link.url} onChange={e => handleSitelinkChange(index, "url", e.target.value)} className="input" />
                  </div>
                ))}
                <input placeholder="Callouts (comma separated)" value={callouts} onChange={e => setCallouts(e.target.value)} className="input" />
                <input placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="input" />
              </div>
            </section>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Save as Draft</button>
              <button className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">Launch Campaign</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
