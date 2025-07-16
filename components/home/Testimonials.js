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
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Trusted by Growing Businesses
        </h2>
        <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
          See how companies are scaling their advertising with Tarvina AI
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map(({ quote, name, role, metric }) => (
            <div
              key={name}
              className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow transition"
            >
              {/* yıldızlar */}
              <div className="text-amber-400 text-xl mb-4">★★★★★</div>

              <p className="italic text-sm md:text-base leading-relaxed mb-6">
                &quot;{quote}&quot;
              </p>

              {/* kişi bilgisi */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base">{name}</h4>
                  <span className="text-xs text-gray-500">{role}</span>
                </div>
              </div>

              {/* metrik etiketi */}
              <span className="inline-block mt-5 px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                {metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
