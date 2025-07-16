import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";

export default function MetaAdsPage() {
  const [useAI, setUseAI] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 px-4 sm:px-6 md:px-10 py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Create Meta Ad Manually</h1>
            <p className="text-sm text-gray-500">
              Configure your Facebook and Instagram campaign with full control
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
              🔵 Meta Platform
            </span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={useAI}
                onChange={() => setUseAI(!useAI)}
              />
              <span className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition-all ${useAI ? "bg-blue-500" : ""}`}>
                <span className={`bg-white w-4 h-4 rounded-full shadow-md transform ${useAI ? "translate-x-5" : ""}`}></span>
              </span>
              <span className="text-sm text-gray-600">Use AI to Auto-Fill Fields</span>
            </label>
          </div>
        </div>

        {/* Form (blurs if AI active) */}
        <div className={`${useAI ? "blur-sm pointer-events-none select-none" : ""} space-y-8`}>
          {/* Campaign Settings */}
          <section className="p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">📅 Campaign Settings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input className="input h-12" placeholder="Campaign Name" />
              <select className="input h-12">
                <option>Select buying type</option>
                <option>Auction</option>
                <option>Reach and Frequency</option>
              </select>
              <select className="input h-12 sm:col-span-2">
                <option>Select campaign objective</option>
                <option>Awareness</option>
                <option>Traffic</option>
              </select>
            </div>
          </section>

          {/* Ad Set Configuration */}
          <section className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-6">🎯 Ad Set Configuration</h2>

            {/* Budget & Schedule */}
            <div className="mb-8">
              <label className="block text-base font-medium text-gray-800 mb-2">💰 Budget & Schedule</label>
              <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="budget" className="accent-blue-600" />
                  Daily Budget
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="budget" className="accent-blue-600" />
                  Lifetime Budget
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input className="input h-12" placeholder="Budget Amount (₺)" />
                <input className="input h-12" placeholder="Start Date" />
                <input className="input h-12" placeholder="End Date" />
              </div>
            </div>

            {/* Audience Targeting */}
            <div className="mb-8">
              <label className="block text-base font-medium text-gray-800 mb-2">🎯 Audience Targeting</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input className="input h-12" placeholder="Select Locations" />
                <input className="input h-12" placeholder="Select Languages" />
              </div>
              <input className="input h-12 mb-4" placeholder="Age Range: 18 - 65" readOnly />
              <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-700">
                <label className="flex items-center gap-2"><input type="radio" name="gender" className="accent-blue-600" /> All</label>
                <label className="flex items-center gap-2"><input type="radio" name="gender" className="accent-blue-600" /> Male</label>
                <label className="flex items-center gap-2"><input type="radio" name="gender" className="accent-blue-600" /> Female</label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="input h-12" placeholder="Interests & Behaviors" />
                <input className="input h-12" placeholder="Custom Audience ID (optional)" />
              </div>
            </div>
          </section>

          {/* Placements */}
          <section className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-6">📍 Placements</h2>
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-700">
              <input type="checkbox" defaultChecked className="accent-blue-600" />
              <label>Automatic Placements (Recommended)</label>
            </div>
            <select className="input h-12">
              <option>Select optimization goal</option>
              <option>Conversions</option>
              <option>Link Clicks</option>
              <option>Impressions</option>
            </select>
          </section>

          {/* Ad Creative */}
          <section className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-6">🎨 Ad Creative</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <select className="input h-12">
                <option>Select Facebook page</option>
              </select>
              <select className="input h-12">
                <option>Select Instagram account</option>
              </select>
              <select className="input h-12 sm:col-span-2">
                <option>Select ad format</option>
                <option>Single Image</option>
                <option>Carousel</option>
                <option>Video</option>
              </select>
            </div>

            <div className="border-2 border-dashed rounded-lg p-6 text-center text-gray-500 mb-6">
              <p className="mb-1">Upload Creative</p>
              <label htmlFor="creative" className="cursor-pointer inline-block mt-2 px-4 py-2 border border-gray-300 rounded text-sm text-gray-700">
                Choose File
              </label>
              <input id="creative" type="file" className="hidden" />
              <p className="text-xs mt-1 text-gray-400">PNG, JPG, MP4 up to 10MB</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input className="input h-12" placeholder="Headline (max 40 chars)" />
              <select className="input h-12">
                <option>Select CTA</option>
                <option>Shop Now</option>
                <option>Learn More</option>
                <option>Sign Up</option>
              </select>
            </div>

            <textarea className="input text-base mb-4" rows={3} placeholder="Primary Text" />
            <textarea className="input text-base mb-4" rows={2} placeholder="Description (Optional)" />
            <input className="input h-12 text-base" placeholder="Destination URL" />
          </section>

          {/* Save Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
            <button className="w-full sm:w-auto px-4 py-2 border rounded text-sm text-gray-600">Save as Draft</button>
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition">Launch Campaign</button>
          </div>
        </div>

        {/* AI Dialog */}
        {useAI && (
          <Dialog open={true} onClose={() => setUseAI(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 space-y-4 shadow-xl">
                <Dialog.Title className="font-bold text-lg">What is this campaign about?</Dialog.Title>
                <input className="input w-full" placeholder="Product, category, or goal" />
                <input className="input w-full" placeholder="Target audience (optional)" />
                <select className="input w-full">
                  <option>Tone of ad</option>
                  <option>Formal</option>
                  <option>Casual</option>
                </select>
                <div className="border border-dashed border-gray-300 p-4 rounded-lg text-center">
                  <p className="text-gray-500 text-sm mb-2">Upload Product Image (Optional)</p>
                  <input type="file" className="hidden" id="productImage" />
                  <label htmlFor="productImage" className="cursor-pointer inline-block px-4 py-2 border border-gray-300 rounded text-sm">
                    Upload Image
                  </label>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                </div>
                <div className="flex justify-end gap-4">
                  <button onClick={() => setUseAI(false)} className="px-4 py-2 bg-white border border-gray-300 rounded text-gray-700">
                    Cancel
                  </button>
                  <button onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      setUseAI(false);
                    }, 1500);
                  }} className="px-4 py-2 bg-black text-white rounded">
                    Generate with AI
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-40">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white px-6 py-4 rounded-lg shadow text-sm">
              <p className="font-medium">Generating AI suggestions...</p>
              <p className="text-gray-500">Analyzing your campaign objective and business type</p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
