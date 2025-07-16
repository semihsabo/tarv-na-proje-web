export default function FeaturesGrid() {
  const features = [
    { title: 'Campaign Builder', text: 'Launch ads in minutes with guided workflows.' },
    { title: 'AI Copywriting', text: 'Generate high-converting ad copy instantly.' },
    { title: 'Creative Insights', text: 'Identify top-performing creatives with AI.' },
    { title: 'Budget Optimizer', text: 'Automatically shift spend to best ads.' },
  ]

  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Platform Highlights
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
          Powerful AI tools to simplify, scale, and optimize your ad campaigns.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map(({ title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-gray-100 p-8 sm:p-10 h-full
                         shadow-sm hover:shadow-md transition duration-300 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
