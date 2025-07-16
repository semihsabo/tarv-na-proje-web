export default function Integrations() {
  const logos = ['Meta', 'Google', 'TikTok', 'LinkedIn'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Connect Your Favorite Channels
        </h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 transition hover:scale-105"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
