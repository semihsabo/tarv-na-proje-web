// components/home/BigCTA.js
import Link from 'next/link'
import { Rocket, User } from 'lucide-react'

export default function BigCTA() {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Hafif blur arka plan ışığı */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]"></div>

      <div className="container mx-auto max-w-4xl px-6 sm:px-8 relative">
        <div className="rounded-2xl px-6 sm:px-10 md:px-12 py-12 sm:py-14 md:py-16 bg-white/10 backdrop-blur-md shadow-2xl text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Ready to transform your ad workflows?
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/90">
            Join thousands of businesses already using Tarvina AI to scale their advertising and maximize ROI.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-medium px-6 sm:px-8 py-3 sm:py-3 rounded-md shadow hover:bg-indigo-50 transition"
            >
              <Rocket size={18} /> <span className="text-sm sm:text-base">Start Free Demo</span>
            </Link>

            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center gap-2 border border-white/70 text-white font-medium px-6 sm:px-8 py-3 sm:py-3 rounded-md hover:bg-white/10 transition"
            >
              <User size={18} /> <span className="text-sm sm:text-base">Book a Live Demo</span>
            </Link>
          </div>

          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/80">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
