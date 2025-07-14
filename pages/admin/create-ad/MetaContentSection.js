import { useRouter } from 'next/router';

export default function ContentSelectionPage() {
  const { platform } = useRouter().query;

  const posts = [
    {
      id: 1,
      type: 'Image',
      title: '🌟 New summer collection is here! Discover lightweight fabrics...',
      stats: { likes: 245, comments: 18, shares: 12, views: '3.2K' },
      date: 'Jan 15, 2024',
      performance: 'High Performance',
      color: 'bg-[#f3f4f6]',
      icon: '/icons/image.svg'
    },
    {
      id: 2,
      type: 'Video',
      title: '✨ Behind the scenes of our latest photoshoot...',
      stats: { likes: 189, comments: 24, shares: 8, views: '2.8K' },
      date: 'Jan 12, 2024',
      performance: 'Good Performance',
      color: 'bg-[#fdf2f8]',
      icon: '/icons/viedo.png'
    },
    {
      id: 3,
      type: 'Carousel',
      title: '👆 Swipe to see our top 5 bestsellers this month!',
      stats: { likes: 156, comments: 31, shares: 15, views: '4.1K' },
      date: 'Jan 10, 2024',
      performance: 'Promoted',
      color: 'bg-[#f0f9ff]',
      icon: '/icons/carousel.png'
    },
    {
      id: 4,
      type: 'Image',
      title: '🟡 Customer spotlight! Sarah from Istanbul shares her journey...',
      stats: { likes: 98, comments: 12, shares: 6, views: '1.9K' },
      date: 'Jan 8, 2024',
      performance: 'Good Performance',
      color: 'bg-[#fef9ef]',
      icon: '/icons/image.tiktok.png'
    },
    {
      id: 5,
      type: 'Text',
      title: '🚀 New update is live!',
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

  return (
    <div className="p-8 bg-[#f5f6fa] min-h-screen">
      <h2 className="text-2xl font-bold text-[#4064AC] mb-1 flex items-center gap-2">
        <img src="/icons/facebook.png" className="w-6 h-6" />
        Meta
      </h2>
      <p className="text-gray-500 mb-6">Select a post from your Facebook or Instagram to promote</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border`}>
            <div className={`p-4 ${post.color}`}>
              <div className="flex justify-between items-start text-sm">
                <span className="flex items-center gap-1 text-xs text-gray-700 font-medium">
                  <img src={post.icon} alt="icon" className="w-4 h-4" />
                  {post.type}
                </span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeColor[post.performance]}`}>
                  {post.performance}
                </span>
              </div>
              <div className="h-36 flex items-center justify-center text-gray-300 mt-4 mb-2">
                <span className="text-sm">[Image Placeholder]</span>
              </div>
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
        ))}
      </div>
    </div>
  );
}
