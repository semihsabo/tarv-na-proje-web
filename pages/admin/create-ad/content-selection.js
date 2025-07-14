import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const mockContent = {
  meta: [
    { id: 1, type: 'Image', title: 'Summer Collection', stats: '3.2K Views', badge: 'High Performance' },
    { id: 2, type: 'Video', title: 'Natural Lighting Reel', stats: '2.8K Views', badge: 'Good Performance' },
    { id: 3, type: 'Carousel', title: 'Top 5 Bestsellers', stats: '4.1K Views', badge: 'Promoted' }
  ],
  google: [
    { id: 1, type: 'Search Ad', title: 'Keyword Campaign', stats: 'CTR 6.4%' },
    { id: 2, type: 'Display Banner', title: 'Homepage Banner', stats: 'Impressions: 12K' }
  ],
  tiktok: [
    { id: 1, type: 'In-Feed Video', title: 'Dance Challenge', stats: '1.1M Views', badge: 'Trending' },
    { id: 2, type: 'Spark Ad', title: 'Makeup Tips', stats: '600K Views' }
  ]
};

export default function ContentSelectionPage() {
  const router = useRouter();
  const { platform } = router.query;

  const [content, setContent] = useState([]);

  useEffect(() => {
    if (platform && mockContent[platform]) {
      setContent(mockContent[platform]);
    }
  }, [platform]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Content Selection</h1>
      <p className="mb-6 text-gray-600">
        Selected Platform: <strong className="capitalize">{platform}</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-4 hover:shadow-md transition">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">{item.type}</span>
              {item.badge && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="font-semibold text-gray-800">{item.title}</div>
            <div className="text-sm text-gray-500 mt-1">{item.stats}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
