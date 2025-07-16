import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Ready to boost your ad performance?
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90">
          Start your free demo and see the power of AI for yourself.
        </p>
        <div>
          <Link
            href="/request-demo"
            className="inline-block bg-white text-purple-700 px-6 sm:px-8 py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-purple-100 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
