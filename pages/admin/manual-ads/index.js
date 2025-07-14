import { useRouter } from "next/router";
import { FaBolt } from "react-icons/fa";
import Sidebar from "../Sidebar";  // Sidebar'ın bulunduğu yere göre yolunu kontrol et

export default function ManualAdsPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Manual Ads</h1>
          <button
            onClick={() => router.push("/admin/manual-ads/create")}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm"
          >
            + Create Manual Ad
          </button>
        </div>

        {/* Açıklama Kutusu */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex items-start gap-3">
          <FaBolt className="text-yellow-500 mt-1" size={20} />
          <div>
            <p className="font-semibold text-gray-800">
              This section is for manually created campaigns.
            </p>
            <p className="text-gray-600 text-sm">
              You can enter ad data manually and track performance independently.
            </p>
          </div>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Meta Ads Card */}
          <div className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Meta Ads</h2>
              <div className="w-5 h-5 bg-blue-100 text-blue-600 text-xs flex items-center justify-center rounded-full">
                ◎
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Run Facebook and Instagram ads with full manual control. Configure campaigns, ad sets, and ads like in Meta Ads Manager.
            </p>
            <button
              onClick={() => router.push("/admin/manual-ads/create?platform=meta")}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 flex items-center justify-center gap-2"
            >
              Create Meta Ad <FaBolt />
            </button>
          </div>

          {/* Google Ads Card */}
          <div className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Google Ads</h2>
              <div className="w-5 h-5 bg-green-100 text-green-600 text-xs flex items-center justify-center rounded-full">
                ◎
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Build Search, Display, and Performance Max campaigns with professional-level controls and targeting options.
            </p>
            <button
              onClick={() => router.push("/admin/manual-ads/create?platform=google")}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 flex items-center justify-center gap-2"
            >
              Create Google Ad <FaBolt />
            </button>
          </div>
        </div>

        {/* Henüz oluşturulmamış uyarısı */}
        <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
          No manual ads created yet.
        </div>
      </div>
    </main>
  );
}
