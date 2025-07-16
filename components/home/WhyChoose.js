export default function WhyChoose() {
  const items = [
    {
      title: 'One-Click AI Campaigns',
      text: 'Let our AI create high-converting campaigns instantly based on your goals and audience.',
      icon: '📈',
      color: 'bg-blue-600'
    },
    {
      title: 'Advanced Analytics & ROAS Insights',
      text: 'Track performance in real-time and automatically optimize for maximum return on ad spend.',
      icon: '📊',
      color: 'bg-violet-600'
    },
    {
      title: 'Multi-Platform Support',
      text: 'Manage Meta, Google, and TikTok ads from one unified dashboard with seamless integration.',
      icon: '🌐',
      color: 'bg-green-600'
    },
    {
      title: 'Manual Override Anytime',
      text: 'Full flexibility to let AI handle everything or take manual control when you need it.',
      icon: '⚙️',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Why Choose Tarvina AI?</h2>
        <p className="text-center max-w-2xl mx-auto mt-4 text-gray-600">
          Everything you need to dominate digital advertising with the power of artificial intelligence
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {items.map(({ title, text, icon, color }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center rounded-xl shadow-sm border border-gray-100
                         bg-white p-6 md:p-8 hover:shadow-md transition"
            >
              <div
                className={`${color} text-white text-2xl h-14 w-14 flex items-center
                            justify-center rounded-lg mb-6`}
              >
                {icon}
              </div>

              <h3 className="font-semibold text-base md:text-lg leading-tight">{title}</h3>
              <p className="text-gray-600 text-sm mt-3">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
