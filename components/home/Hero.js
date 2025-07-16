import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container max-w-7xl mx-auto px-6 text-center space-y-6">
        {/* Badge */}
        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
          AI‑Powered Advertising Platform
        </span>

        {/* Başlık */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-5xl mx-auto">
          Manage Your Ads Like a Pro —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            Powered by AI
          </span>{' '}
          ⚡
        </h1>

        {/* Açıklama */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Create, optimize, and scale your ads on Meta and Google in minutes, not weeks.
        </p>

        {/* CTA Butonları */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            href="/request-demo"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium text-sm sm:text-base hover:opacity-90 transition"
          >
            Start Free Demo
          </Link>
          <Link
            href="/request-demo"
            className="border border-gray-300 px-8 py-3 rounded-lg font-medium text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition"
          >
            Book a Live Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
