import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
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

        {/* Masaüstü Menü */}
        <ul className="hidden md:flex items-center gap-10">
          <li><Link href="/features" className="text-gray-600 hover:text-gray-900 transition">Features</Link></li>
          <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</Link></li>
          <li><Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</Link></li>
        </ul>

        {/* Butonlar (masaüstü) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            Login
          </Link>
          <Link
            href="/request-demo"
            className="px-4 py-2 rounded text-white bg-gradient-to-r from-fuchsia-500 to-purple-600
                       hover:to-fuchsia-500 transition"
          >
            Request Demo
          </Link>
        </div>

        {/* Hamburger Menü (mobil) */}
        <button
          className="md:hidden ml-auto text-gray-600 text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobil Açılır Menü */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col divide-y divide-gray-200">
            <li><Link href="/features" className="block px-6 py-4 text-gray-700">Features</Link></li>
            <li><Link href="/pricing" className="block px-6 py-4 text-gray-700">Pricing</Link></li>
            <li><Link href="/blog" className="block px-6 py-4 text-gray-700">Blog</Link></li>
            <li><Link href="/login" className="block px-6 py-4 text-gray-700">Login</Link></li>
            <li>
              <Link
                href="/request-demo"
                className="block px-6 py-4 text-white bg-gradient-to-r from-fuchsia-500 to-purple-600"
              >
                Request Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
