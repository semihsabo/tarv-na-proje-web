import React, { useState } from "react";
import {
  FaFacebookF, FaGoogle, FaSync, FaCogs, FaUnlink, FaGlobe, FaExclamationCircle,
  FaTrashAlt, FaCopy, FaRedo, FaLink, FaKey
} from "react-icons/fa";
import { Dialog } from "@headlessui/react";

import Sidebar from "./Sidebar";
import Topbar from "@/components/Topbar";

export default function IntegrationsPage() {
  const connectedPlatforms = 2;
  const totalPlatforms = 4;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [events, setEvents] = useState({ spend: true, conversions: true, errors: false });

  const [webhooks, setWebhooks] = useState([
    { url: "https://webhook.site/1234abcd", events: ["spend", "conversions"] },
    { url: "https://hooks.zapier.com/hooks/catch/xxxx", events: ["errors"] },
  ]);
  const [apiKey, setApiKey] = useState("sk-test-c3d5fa145612abcd88b9");
  const [showKey, setShowKey] = useState(false);

  const resetModal = () => {
    setWebhookUrl("");
    setEvents({ spend: true, conversions: true, errors: false });
  };
  const handleAddWebhook = () => {
    if (webhookUrl) {
      setWebhooks([
        ...webhooks,
        {
          url: webhookUrl,
          events: Object.entries(events)
            .filter(([_, v]) => v)
            .map(([k]) => k),
        },
      ]);
    }
    setIsModalOpen(false);
    resetModal();
  };
  const handleDeleteWebhook = (url) => {
    setWebhooks(webhooks.filter((wh) => wh.url !== url));
  };
  const handleRegenerateKey = () => {
    setApiKey("sk-test-" + Math.random().toString(36).slice(2, 18));
  };

  return (
    <main className="flex min-h-screen bg-gradient-to-tr from-gray-50 via-white to-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 py-8 space-y-8">

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <FaLink className="text-purple-500" /> Integrations
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Connect your advertising platforms and manage integrations.
              </p>
            </div>
            <div className="flex gap-3 mt-2 sm:mt-0">
              <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 text-sm">
                <FaGlobe /> API Documentation
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-900 text-sm"
              >
                + Add Webhook
              </button>
            </div>
          </div>

          {/* ALERT */}
          <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 px-4 py-3 rounded-lg flex items-start gap-2 shadow-sm">
            <FaExclamationCircle className="mt-1 text-yellow-600" />
            <span>
              <strong>Action Required:</strong> You have {totalPlatforms - connectedPlatforms} platform(s) not connected.
            </span>
          </div>

          {/* 1: Advertising Platforms */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FaFacebookF className="text-purple-400" />
              <h2 className="text-xl font-semibold text-gray-800">Advertising Platforms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {['Meta Business', 'Google Ads'].map((p, i) => (
                <PlatformCard key={p} platform={p} isMeta={i === 0} />
              ))}
            </div>
          </section>

          {/* 2: KPI Cards */}
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <SummaryCard title="Connected Platforms" value={`${connectedPlatforms}/${totalPlatforms}`} subtitle={`${totalPlatforms - connectedPlatforms} remaining`} />
              <SummaryCard title="Active Webhooks" value={webhooks.length} subtitle="Real-time notifications" />
              <SummaryCard title="Last Sync" value="1h ago" subtitle="All platforms synced" />
              <SummaryCard title="API Calls" value="2.4K" subtitle="This month" />
            </div>
          </section>

          {/* 3: Webhook Endpoints */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FaLink className="text-blue-400" />
              <h2 className="text-xl font-semibold text-gray-800">Webhook Endpoints</h2>
            </div>
            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-semibold">Endpoints</div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs px-3 py-1 rounded bg-black text-white hover:bg-gray-900"
                >
                  + Add Endpoint
                </button>
              </div>
              {webhooks.length === 0 ? (
                <p className="text-gray-500 text-sm">No webhook endpoints registered.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="text-xs text-gray-400">
                      <tr>
                        <th className="px-3 py-2 text-left">URL</th>
                        <th className="px-3 py-2 text-left">Events</th>
                        <th className="px-3 py-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {webhooks.map((wh, idx) => (
                        <tr key={wh.url + idx} className="border-t">
                          <td className="px-3 py-2 font-mono break-all">{wh.url}</td>
                          <td className="px-3 py-2">
                            {wh.events.map((e) => (
                              <span key={e} className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-xs mr-1">{e}</span>
                            ))}
                          </td>
                          <td className="px-3 py-2 text-right">
                            <button
                              onClick={() => handleDeleteWebhook(wh.url)}
                              className="text-red-600 hover:text-red-900 text-base"
                            >
                              <FaTrashAlt />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>

          {/* 4: API Access */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FaKey className="text-indigo-400" />
              <h2 className="text-xl font-semibold text-gray-800">API Access</h2>
            </div>
            <div className="bg-white rounded-xl shadow p-6 border max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono bg-gray-100 px-3 py-2 rounded text-sm">
                  {showKey ? apiKey : "••••••••••••••••••••••••"}
                </span>
                <button
                  onClick={() => setShowKey((v) => !v)}
                  className="text-xs px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                >
                  {showKey ? "Hide" : "Show"}
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(apiKey)}
                  className="text-xs px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-700 flex items-center gap-1"
                >
                  <FaCopy /> Copy
                </button>
                <button
                  onClick={handleRegenerateKey}
                  className="text-xs px-3 py-1 rounded bg-white border hover:bg-gray-100 flex items-center gap-1"
                >
                  <FaRedo /> Regenerate
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Use this API key to authenticate your integration requests. Keep it secret!
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Webhook Modal */}
      <Dialog open={isModalOpen} onClose={() => { setIsModalOpen(false); resetModal(); }} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl">
            <Dialog.Title className="text-lg font-semibold mb-3">Add New Webhook</Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Webhook URL</label>
                <input
                  type="url"
                  value={webhookUrl}
                  onChange={e => setWebhookUrl(e.target.value)}
                  placeholder="https://example.com/webhook"
                  className="w-full border rounded px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Events to Subscribe</label>
                {[
                  { key: 'spend', label: 'Spend updates' },
                  { key: 'conversions', label: 'Conversion events' },
                  { key: 'errors', label: 'Error notifications' },
                ].map(ev => (
                  <label key={ev.key} className="flex items-center gap-2 text-sm mb-1">
                    <input type="checkbox" checked={events[ev.key]} onChange={() => setEvents({ ...events, [ev.key]: !events[ev.key] })} />
                    {ev.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => { setIsModalOpen(false); resetModal(); }}
                className="px-4 py-2 border border-gray-300 rounded text-sm"
              >Cancel</button>
              <button
                disabled={!webhookUrl}
                onClick={handleAddWebhook}
                className="px-4 py-2 bg-black text-white rounded text-sm disabled:opacity-40"
              >Add Webhook</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
}

/* ------- helper components ------- */
const SummaryCard = ({ title, value, subtitle }) => (
  <div className="bg-white p-4 rounded shadow">
    <div className="text-xl font-semibold">{value}</div>
    <div className="text-gray-500 text-sm">{title}</div>
    {subtitle && <div className="text-xs text-gray-400">{subtitle}</div>}
  </div>
);

const PlatformCard = ({ platform, isMeta }) => (
  <div className="bg-white p-4 rounded-xl shadow border flex items-center gap-4">
    <div className="flex items-center gap-3">
      <div className="text-blue-600 text-lg">
        {isMeta ? <FaFacebookF /> : <FaGoogle />}
      </div>
      <div>
        <div className="font-semibold flex gap-2 items-center">{platform}
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Connected</span>
        </div>
        <p className="text-sm text-gray-600">
          {isMeta
            ? "Connect your Facebook and Instagram business accounts"
            : "Manage your Google Ads campaigns and performance"}
        </p>
      </div>
    </div>
    <div className="flex gap-2 ml-auto">
      <ActionBtn label="Sync" icon={<FaSync />} />
      <ActionBtn label="Settings" icon={<FaCogs />} />
      <ActionBtn label="Disconnect" icon={<FaUnlink />} danger />
    </div>
  </div>
);

const ActionBtn = ({ label, icon, danger }) => (
  <button className={`flex items-center gap-1 px-3 py-1 text-sm border rounded ${danger ? 'text-red-600 hover:bg-red-100' : 'text-gray-700 hover:bg-gray-100'}`}>
    {icon} {label}
  </button>
);
