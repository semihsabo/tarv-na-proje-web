
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
      <div className="container space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Ready to boost your ad performance?</h2>
        <p className="max-w-2xl mx-auto text-lg">Start your free demo and see the power of AI for yourself.</p>
        <Link href="/request-demo" className="bg-white text-purple-700 px-8 py-3 rounded font-semibold">
          Get Started
        </Link>
      </div>
    </section>
  )
}
