// components/home/Testimonials.js
export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'We scaled our ROAS 3x using Tarvina AI! The automation saved us 20+ hours per week.',
      name: 'Sarah Chen',
      role: 'Marketing Director, TechStart Inc.',
      metric: '3x ROAS increase',
    },
    {
      quote:
        'The AI-generated campaigns outperformed our manual ones by 150%. Incredible results!',
      name: 'Mike Rodriguez',
      role: 'Growth Manager, E-commerce Plus',
      metric: '17M+ impressions',
    },
    {
      quote:
        'Setup time went from weeks to minutes. Tarvina AI is a game-changer for our agency.',
      name: 'Emma Thompson',
      role: 'Agency Owner, Digital Boost',
      metric: '12× faster setup',
    },
  ]

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Trusted by Growing Businesses
        </h2>
        <p className="text-center mt-4 text-gray-600">
          See how companies are scaling their advertising with Tarvina AI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map(({ quote, name, role, metric }) => (
            <div
              key={name}
              className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow transition"
            >
              {/* yıldızlar */}
              <div className="text-amber-400 text-xl mb-4">★★★★★</div>

              <p className="italic leading-relaxed mb-8">&quot;{quote}&quot;</p>

              {/* kişi bilgisi */}
              <div className="flex items-center gap-4">
                {/* varsayılan avatar (isteyene <img> koyabilirsin) */}
                <div className="h-12 w-12 rounded-full bg-gray-200" />

                <div>
                  <h4 className="font-semibold">{name}</h4>
                  <span className="text-xs text-gray-500">{role}</span>
                </div>
              </div>

              {/* metrik etiketi */}
              <span className="inline-block mt-6 px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                {metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
