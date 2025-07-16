import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-gray-300 text-sm">
      {/* Üst çizgi */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Logo ve açıklama */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-2 select-none">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white">
              ⚡
            </span>
            <span className="text-xl font-semibold text-white">Tarvina AI</span>
          </Link>
          <p className="leading-relaxed">
            AI-powered advertising platform that helps businesses create, optimize, and
            scale their campaigns across Meta, Google, and TikTok.
          </p>

          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md bg-[#161b22] px-4 py-2 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-2 font-medium text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Link sütunları */}
        {[
          {
            heading: 'Product',
            links: ['Features', 'Pricing', 'Integrations', 'API']
          },
          {
            heading: 'Company',
            links: ['About', 'Blog', 'Careers', 'Contact']
          },
          {
            heading: 'Resources',
            links: ['Documentation', 'Help Center', 'Community', 'Status']
          },
          {
            heading: 'Legal',
            links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
          }
        ].map((col, idx) => (
          <div key={idx}>
            <h4 className="mb-4 font-semibold text-white">{col.heading}</h4>
            <ul className="space-y-2">
              {col.links.map((text) => (
                <li key={text}>
                  <Link href="/" className="hover:underline text-gray-400 hover:text-white transition">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Alt bar */}
      <div className="border-t border-[#161b22]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Tarvina AI. All rights reserved.
          </p>

          <div className="flex gap-4 text-gray-400">
            <Link href="/" className="hover:text-white transition"><Twitter size={18} /></Link>
            <Link href="/" className="hover:text-white transition"><Github size={18} /></Link>
            <Link href="/" className="hover:text-white transition"><Linkedin size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
