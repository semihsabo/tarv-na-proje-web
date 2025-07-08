// components/home/DemoVideo.js
import { Play } from 'lucide-react'

export default function DemoVideo() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f7f9fc] to-[#f7f9fc]/60">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">See Tarvina AI in Action</h2>
        <p className="mt-4 text-gray-600">
          Watch how our AI creates and optimizes campaigns in real-time
        </p>

        {/* video placeholder */}
        <div
          className="relative mt-16 rounded-lg overflow-hidden shadow-xl
                     bg-gradient-to-br from-indigo-500/60 to-fuchsia-600/60
                     aspect-video" // 16:9 oran için
        >
          {/* süs ışık efekti */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_40%)]"></div>

          {/* play button */}
          <button
            className="absolute inset-0 m-auto flex items-center gap-3 px-6 py-3
                       border border-white/60 rounded bg-white/10 backdrop-blur
                       text-white hover:bg-white/20 transition"
          >
            <Play size={18} strokeWidth={2} />
            <span className="font-medium">See Tarvina AI in action</span>
          </button>
        </div>
      </div>
    </section>
  )
}
