import { useRouter } from "next/router";
import { useState } from "react";
import Sidebar from "../Sidebar";

export default function BudgetPage() {
  const router = useRouter();
  const { platform, goal } = router.query;

  const [budgetType, setBudgetType] = useState("daily");
  const [amount, setAmount] = useState(0);
  const [duration, setDuration] = useState(7);

  const totalCost = amount && duration ? amount * duration : 0;

  function handleLaunchCampaign() {
    // Kampanya kaydı burada yapılabilir (API vs.)
    // Sonrasında admin ana sayfasına yönlendiriyoruz:
    router.push("/admin");
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-8 bg-[#fefbff]">
        <div className="max-w-4xl mx-auto bg-white rounded shadow p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Set Budget & Duration
          </h2>

          <section className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Website to Advertise</h3>
            <input
              type="url"
              placeholder="https://your-website.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </section>

          <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 sm:p-6 rounded shadow-sm">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-purple-600">$</span> Budget Configuration
              </h3>
              <select
                value={budgetType}
                onChange={(e) => setBudgetType(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option value="daily">Daily Budget</option>
                <option value="total">Total Budget</option>
              </select>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full mt-4 border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="border p-4 sm:p-6 rounded shadow-sm">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-purple-600">📅</span> Campaign Duration
              </h3>
              <input
                type="number"
                min={1}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <div className="mt-4 bg-purple-100 p-4 rounded text-purple-700">
                <div className="text-xl sm:text-2xl font-bold">{totalCost} TL</div>
                <div className="text-sm">{amount} TL/day × {duration} days</div>
              </div>
            </div>
          </section>

          <section className="border p-4 sm:p-6 rounded shadow-sm mb-8">
            <h3 className="font-semibold mb-4">Estimated Performance</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-semibold">
              <div>
                <div>15K-25K</div>
                <div className="text-sm font-normal">Reach</div>
              </div>
              <div>
                <div>900-1.5K</div>
                <div className="text-sm font-normal">Clicks</div>
              </div>
              <div>
                <div>2.0-2.5%</div>
                <div className="text-sm font-normal">CTR</div>
              </div>
              <div>
                <div>0.8-1.2 TL</div>
                <div className="text-sm font-normal">Cost/Click</div>
              </div>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => router.back()}
              className="text-blue-600 hover:underline"
            >
              ← Back to Content Selection
            </button>

            <button
              onClick={handleLaunchCampaign}
              className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
            >
              Launch Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
