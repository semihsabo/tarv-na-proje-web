// components/home/FeaturesGrid.js
export default function FeaturesGrid() {
  const features = [
    { title: 'Campaign Builder', text: 'Launch ads in minutes with guided workflows.' },
    { title: 'AI Copywriting',   text: 'Generate high-converting ad copy instantly.' },
    { title: 'Creative Insights',text: 'Identify top-performing creatives with AI.' },
    { title: 'Budget Optimizer', text: 'Automatically shift spend to best ads.' },
  ]

  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Platform Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {features.map(({ title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-gray-100 p-10 h-full
                         shadow-sm hover:shadow transition"
            >
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-gray-600 text-sm mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
