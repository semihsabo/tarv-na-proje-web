import { Play } from 'lucide-react'

export default function DemoVideo() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#f7f9fc] to-[#f7f9fc]/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          See Tarvina AI in Action
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Watch how our AI creates and optimizes campaigns in real-time.
        </p>

        {/* Video Placeholder */}
        <div
          className="relative mt-16 rounded-xl overflow-hidden shadow-xl
                     bg-gradient-to-br from-indigo-500/60 to-fuchsia-600/60
                     aspect-video"
        >
          {/* Işık efekti */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_40%)]" />

          {/* Play butonu */}
          <button
            className="absolute inset-0 m-auto flex items-center gap-3 px-6 py-3
                       border border-white/60 rounded-md bg-white/10 backdrop-blur
                       text-white hover:bg-white/20 transition duration-300"
          >
            <Play size={20} strokeWidth={2} />
            <span className="font-medium text-sm sm:text-base">
              See Tarvina AI in action
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
