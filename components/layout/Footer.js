// components/layout/Footer.js
import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-gray-300">
      {/* üstte ince gradyan şerit */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />

      <div className="container max-w-7xl mx-auto py-16 grid md:grid-cols-5 gap-12">
        {/* Logo + açıklama + e-posta */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6 select-none">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white">
              ⚡
            </span>
            <span className="text-xl font-semibold text-white">Tarvina AI</span>
          </Link>

          <p className="text-sm leading-relaxed mb-8">
            AI-powered advertising platform that helps businesses create, optimize, and
            scale their campaigns across Meta, Google, and TikTok.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md bg-[#161b22] px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-2 text-sm font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Link sütunları */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/">Integrations</Link></li>
            <li><Link href="/">API</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/">Careers</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Documentation</Link></li>
            <li><Link href="/">Help Center</Link></li>
            <li><Link href="/">Community</Link></li>
            <li><Link href="/">Status</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Privacy Policy</Link></li>
            <li><Link href="/">Terms of Service</Link></li>
            <li><Link href="/">Cookie Policy</Link></li>
            <li><Link href="/">GDPR</Link></li>
          </ul>
        </div>
      </div>

      {/* alt bar */}
      <div className="border-t border-[#161b22]">
        <div className="container max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Tarvina AI. All rights reserved.
          </p>

          {/* sosyal ikonlar */}
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white">
              <Twitter size={18} />
            </Link>
            <Link href="/" className="hover:text-white">
              <Github size={18} />
            </Link>
            <Link href="/" className="hover:text-white">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
