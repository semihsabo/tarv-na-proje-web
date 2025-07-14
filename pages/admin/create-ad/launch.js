import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function GoogleAdsContentSelection() {
  const router = useRouter();
  const { platform } = router.query;

  const [websiteURL, setWebsiteURL] = useState("");
  const [headline1, setHeadline1] = useState("");
  const [headline2, setHeadline2] = useState("");
  const [headline3, setHeadline3] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");

  // Zorunlu alanlar doluysa devam et butonu aktif olsun
  const canContinue =
    websiteURL.trim().length > 0 &&
    headline1.trim().length > 0 &&
    description1.trim().length > 0;

  const handleContinue = () => {
    router.push(
      `/admin/create-ad/budget?platform=${platform}&goal=google`
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Google Ads</h2>
      <p className="mb-8 text-center text-gray-700">
        Set up your Google Ads campaign with website URL and ad copy
      </p>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-2xl">🌐</span> Website to Advertise
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

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Headlines</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Headline 1 *"
            maxLength={30}
            value={headline1}
            onChange={(e) => setHeadline1(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Headline 2"
            maxLength={30}
            value={headline2}
            onChange={(e) => setHeadline2(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Headline 3"
            maxLength={30}
            value={headline3}
            onChange={(e) => setHeadline3(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Descriptions</h3>
        <div className="space-y-4">
          <textarea
            placeholder="Description 1 *"
            maxLength={90}
            value={description1}
            onChange={(e) => setDescription1(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Description 2"
            maxLength={90}
            value={description2}
            onChange={(e) => setDescription2(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      <div className="flex justify-between items-center">
        <Link
          href={`/admin/create-ad/content-selection?platform=${platform}`}
          className="text-blue-600 hover:underline"
        >
          ← Back to Content Selection
        </Link>

        <button
          disabled={!canContinue}
          onClick={handleContinue}
          className={`bg-green-600 text-white font-semibold px-6 py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed transition`}
        >
          Continue to Budget →
        </button>
      </div>
    </div>
  );
}
