// components/layout/Navbar.js
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container max-w-7xl mx-auto flex items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 select-none">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg
                           bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white">
            ⚡
          </span>
          <span className="text-xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-purple-600
                           bg-clip-text text-transparent">
            Tarvina AI
          </span>
        </Link>

        {/* Orta menü (masaüstü) */}
        <ul className="mx-auto hidden md:flex items-center gap-14">
          <li><Link href="/features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
          <li><Link href="/pricing"  className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
          <li><Link href="/blog"     className="text-gray-600 hover:text-gray-900">Blog</Link></li>
        </ul>

        {/* Sağ aksiyon butonları */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-5 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/request-demo"
            className="px-5 py-2 rounded text-white bg-gradient-to-r from-fuchsia-500 to-purple-600
                       hover:to-fuchsia-600 transition-colors"
          >
            Request Demo
          </Link>
        </div>

        {/* Hamburger (mobil) */}
        <button
          className="md:hidden ml-auto text-gray-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobil açılır menü */}
        {open && (
          <div className="absolute left-0 top-full w-full bg-white shadow md:hidden">
            <ul className="flex flex-col divide-y divide-gray-200">
              <li><Link href="/features"  className="block px-6 py-4 text-gray-600">Features</Link></li>
              <li><Link href="/pricing"   className="block px-6 py-4 text-gray-600">Pricing</Link></li>
              <li><Link href="/blog"      className="block px-6 py-4 text-gray-600">Blog</Link></li>
              <li><Link href="/login"     className="block px-6 py-4 text-gray-600">Login</Link></li>
              <li><Link href="/request-demo" className="block px-6 py-4 text-white
                                                       bg-gradient-to-r from-fuchsia-500 to-purple-600">
                Request Demo
              </Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
