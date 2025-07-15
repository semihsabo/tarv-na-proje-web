import { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from "../Sidebar";

export default function MetaContentSelection() {
  const router = useRouter();
  const [selectedPostId, setSelectedPostId] = useState(null);

  const posts = [
    {
      id: 1,
      type: 'Image',
      title: '🌟 New summer collection is here! Discover lightweight fabrics and vibrant colors perfect for the season.',
      stats: { likes: 245, comments: 18, shares: 12, views: '3.2K' },
      date: 'Jan 15, 2024',
      performance: 'High Performance',
      color: 'bg-[#f3f4f6]',
      icon: '/icons/image.svg'
    },
    {
      id: 2,
      type: 'Video',
      title: '✨ Behind the scenes of our latest photoshoot. Watch how we create magic with natural lighting.',
      stats: { likes: 189, comments: 24, shares: 8, views: '2.8K' },
      date: 'Jan 12, 2024',
      performance: 'Good Performance',
      color: 'bg-[#fdf2f8]',
      icon: '/icons/video.png'
    },
    {
      id: 3,
      type: 'Carousel',
      title: '👆 Swipe to see our top 5 bestsellers this month! From casual day looks to elegant evening wear.',
      stats: { likes: 156, comments: 31, shares: 15, views: '4.1K' },
      date: 'Jan 10, 2024',
      performance: 'Promoted',
      color: 'bg-[#f0f9ff]',
      icon: '/icons/carousel.png'
    },
    {
      id: 4,
      type: 'Image',
      title: '🟡 Customer spotlight! Sarah from Istanbul shares how our pieces helped her feel confident at her job.',
      stats: { likes: 98, comments: 12, shares: 6, views: '1.9K' },
      date: 'Jan 8, 2024',
      performance: 'Good Performance',
      color: 'bg-[#fef9ef]',
      icon: '/icons/image.tiktok.png'
    },
    {
      id: 5,
      type: 'Text',
      title: '🚀 New update is live! Check out the latest features we just rolled out.',
      stats: { likes: 56, comments: 7, shares: 2, views: '980' },
      date: 'Jan 6, 2024',
      performance: 'Average Performance',
      color: 'bg-[#f3f4f6]',
      icon: '/icons/text.png'
    }
  ];

  const badgeColor = {
    'High Performance': 'bg-green-100 text-green-700',
    'Good Performance': 'bg-yellow-100 text-yellow-700',
    'Promoted': 'bg-blue-100 text-blue-700',
    'Average Performance': 'bg-gray-100 text-gray-700'
  };

  const handleSelect = (id) => {
    setSelectedPostId(id);
  };

  const handleContinue = () => {
    if (!selectedPostId) return;
    router.push(`/admin/create-ad/budget?platform=meta&postId=${selectedPostId}`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-[#f5f6fa]">
        <h2 className="text-2xl font-bold text-[#4064AC] mb-1 flex items-center gap-2">
          <img src="/icons/facebook.png" className="w-6 h-6" alt="Meta icon" />
          Meta
        </h2>
        <p className="text-gray-500 mb-6">
          Select a post from your Facebook or Instagram to promote
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const isSelected = selectedPostId === post.id;

            return (
              <div
                key={post.id}
                onClick={() => handleSelect(post.id)}
                className={`cursor-pointer rounded-xl overflow-hidden shadow-md transition-all border
                  ${isSelected ? 'border-purple-500 bg-purple-100' : 'border-transparent bg-white'}
                  hover:shadow-xl`}
              >
                <div className={`p-4 ${post.color} relative`}>
                  <div className="flex justify-between items-start text-sm">
                    <span className="flex items-center gap-1 text-xs text-gray-700 font-medium">
                      <img src={post.icon} alt={`${post.type} icon`} className="w-4 h-4" />
                      {post.type}
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeColor[post.performance]}`}>
                      {post.performance}
                    </span>
                  </div>
                  <div className="h-36 flex items-center justify-center text-gray-300 mt-4 mb-2">
                    <span className="text-sm">[Image Placeholder]</span>
                  </div>
                  {isSelected && (
                    <div className="absolute bottom-2 right-2 w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      ✓
                    </div>
                  )}
                </div>

                <div className="px-4 pb-4">
                  <div className="text-sm text-gray-800 font-medium line-clamp-2">{post.title}</div>
                  <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-3">
                    <span>❤️ {post.stats.likes}</span>
                    <span>💬 {post.stats.comments}</span>
                    <span>🔁 {post.stats.shares}</span>
                    <span>👀 {post.stats.views}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{post.date}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => window.history.back()}
            className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
          >
            Back to Platform Selection
          </button>
          <button
            disabled={!selectedPostId}
            className={`rounded px-6 py-2 text-white font-semibold
              ${selectedPostId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'}`}
            onClick={handleContinue}
          >
            Continue to Budget
          </button>
        </div>
      </div>
    </div>
  );
}
