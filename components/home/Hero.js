
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container text-center space-y-6">
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
          AI‑Powered Advertising Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">
          Manage Your Ads Like a Pro — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Powered by AI</span> ⚡
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Create, optimize, and scale your ads on Meta and Google in minutes, not weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/request-demo"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded font-medium"
          >
            Start Free Demo
          </Link>
          <Link
            href="/request-demo"
            className="border border-gray-300 px-8 py-3 rounded font-medium hover:bg-gray-100"
          >
            Book a Live Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
