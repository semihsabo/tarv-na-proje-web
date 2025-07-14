import { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar'; // Sidebar aynı klasördeyse bu şekilde import et

export default function CreateAd() {
  const [selected, setSelected] = useState('google');
  const router = useRouter();

  const handleNext = () => {
    router.push(`/admin/create-ad/content-selection?platform=${selected}`);
  };

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-[#fefbff] flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow">
          {/* Başlık ve ilerleme */}
          <div className="text-sm font-medium text-gray-500 mb-2">Step 1 of 4</div>
          <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
            <div className="h-1 bg-purple-500 rounded-full" style={{ width: '25%' }} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Platform</h1>
          <p className="text-gray-500 mb-6">Where do you want to advertise?</p>

          {/* Options */}
          <div className="space-y-4">
            {[
              {
                id: 'meta',
                title: 'Meta',
                subtitle: 'Facebook & Instagram',
                tags: ['Feed Posts', 'Stories', 'Reels', 'Marketplace'],
                icon: '/icons/facebook.png',
              },
              {
                id: 'google',
                title: 'Google Ads',
                subtitle: 'Search & Display',
                tags: ['Search Ads', 'Display Network', 'YouTube', 'Shopping'],
                icon: '/icons/google.png',
              },
              {
                id: 'tiktok',
                title: 'TikTok',
                subtitle: 'Video-first platform',
                tags: ['In-Feed Video', 'Spark Ads', 'TopView', 'Brand Takeover'],
                icon: '/icons/tiktok.png',
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`cursor-pointer border rounded-lg p-4 transition duration-150 ${
                  selected === item.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.icon} alt={item.title} className="w-10 h-10" />
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.subtitle}</div>
                    </div>
                  </div>
                  {selected === item.id && (
                    <div className="text-purple-600 font-bold text-xl">✓</div>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

CreateAd.showNavbar = false;
CreateAd.showFooter = false;
