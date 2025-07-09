// pages/blog.js
import React from 'react'
import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
  BoltIcon,
  Squares2X2Icon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  ChartBarSquareIcon,
  UserIcon,
  CalendarDaysIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

/* -------- MOCK DATA -------- */
const featured = {
  title: 'The Complete Guide to AI-Powered Facebook Advertising in 2024',
  tag: 'AI Advertising',
  excerpt:
    'Discover how artificial intelligence is revolutionizing Facebook advertising and learn the strategies top marketers use to achieve 300% better ROAS.',
  author: 'Sarah Chen',
  date: 'December 15, 2024',
  readTime: '12 min read',
  href: '/blog/ai-facebook-advertising-2024',
  image: 'https://kzmq3qo0hytc6cema1rl.lite.vusercontent.net/blog/featured-fb-ai.jpg'
}

const categories = [
  { title: 'AI Advertising', count: 12, icon: BoltIcon, href: '/blog/category/ai-advertising' },
  { title: 'Google Ads', count: 8, icon: Squares2X2Icon, href: '/blog/category/google-ads' },
  { title: 'Meta Ads', count: 10, icon: ArrowTrendingUpIcon, href: '/blog/category/meta-ads' },
  { title: 'Analytics', count: 6, icon: ChartPieIcon, href: '/blog/category/analytics' },
  { title: 'Creative Strategy', count: 5, icon: MagnifyingGlassIcon, href: '/blog/category/creative-strategy' },
  { title: 'Industry Insights', count: 7, icon: ChartBarSquareIcon, href: '/blog/category/industry-insights' }
]

const articles = [
  {
    title: 'How to Optimize Google Ads with AI: A Step-by-Step Guide',
    tag: 'Google Ads',
    excerpt:
      'Learn how to leverage AI tools to improve your Google Ads performance and reduce cost per acquisition by up to 40%.',
    author: 'Mike Rodriguez',
    date: 'December 12, 2024',
    readTime: '8 min read',
    href: '/blog/optimize-google-ads-with-ai',
    image: 'https://kzmq3qo0hytc6cema1rl.lite.vusercontent.net/blog/performance-max.jpg'
  },
  {
    title: "TikTok Advertising Trends: What's Working in 2024",
    tag: 'TikTok Ads',
    excerpt:
      'Explore the latest TikTok advertising trends and discover creative strategies that are driving engagement and conversions.',
    author: 'Emma Thompson',
    date: 'December 10, 2024',
    readTime: '6 min read',
    href: '/blog/tiktok-ads-trends-2024',
    image: 'https://kzmq3qo0hytc6cema1rl.lite.vusercontent.net/blog/tiktok-spark-ads.jpg'
  },
  {
    title: 'ROI Tracking: Measuring Success Across Multiple Ad Platforms',
    tag: 'Analytics',
    excerpt:
      'Master the art of cross-platform ROI tracking and learn how to attribute conversions accurately across Meta, Google, and TikTok.',
    author: 'David Kim',
    date: 'December 8, 2024',
    readTime: '10 min read',
    href: '/blog/roi-tracking-multi-platform',
    image: 'https://kzmq3qo0hytc6cema1rl.lite.vusercontent.net/blog/meta-advantage.jpg'
  }
]

export default function Blog() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-r from-indigo-50 to-white py-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700">
              <BoltIcon className="w-4 h-4" />
              Tarvina AI Blog
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Master{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              AI-Powered
            </span>{' '}
            Advertising
          </h1>
          <p className="text-gray-600 mb-10">
            Stay ahead of the curve with expert insights, strategies, and tutorials on AI-powered advertising across Meta,
            Google, and TikTok platforms.
          </p>

          <div className="relative mx-auto max-w-xl">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles…"
              className="w-full border border-gray-200 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
        </div>
      </section>

      {/* ---------- FEATURED ARTICLE ---------- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Article</h2>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <img src={featured.image} alt={featured.title} className="w-full h-80 object-cover" />
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {featured.tag}
              </span>
              <h3 className="text-2xl font-bold mb-4">{featured.title}</h3>
              <p className="text-gray-600 mb-6">{featured.excerpt}</p>

              <div className="flex items-center text-gray-500 text-sm gap-x-6 mb-6">
                <div className="flex items-center gap-x-1">
                  <UserIcon className="w-4 h-4" />
                  {featured.author}
                </div>
                <div className="flex items-center gap-x-1">
                  <CalendarDaysIcon className="w-4 h-4" />
                  {featured.date}
                </div>
                <div className="flex items-center gap-x-1">
                  <ClockIcon className="w-4 h-4" />
                  {featured.readTime}
                </div>
              </div>

              <Link
                href={featured.href}
                className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:from-indigo-600 hover:to-purple-600 transition"
              >
                Read Full Article
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BROWSE BY CATEGORY ---------- */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
          <p className="text-gray-600 mb-12">Find articles tailored to your specific interests and needs</p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="bg-white rounded-2xl shadow p-8 flex flex-col items-center hover:shadow-lg transition"
            >
              <cat.icon className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold mb-1">{cat.title}</h3>
              <p className="text-gray-500 text-sm">{cat.count} articles</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- LATEST ARTICLES ---------- */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
          <p className="text-gray-600 mb-12">Stay updated with the latest trends and strategies in AI advertising</p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {articles.map((post) => (
            <article
              key={post.href}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition"
            >
              <Link href={post.href} className="block group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition"
                />
              </Link>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.tag}
                </span>
                <h3 className="text-lg font-semibold mb-3 leading-snug">
                  <Link href={post.href} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-x-6 text-xs text-gray-500 mt-auto">
                  <div className="flex items-center gap-x-1">
                    <UserIcon className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-x-1">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-x-1">
                    <ClockIcon className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- SUBSCRIBE CTA ---------- */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white/10 backdrop-blur-sm p-12 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
            <p className="text-indigo-100 mb-10">
              Get the latest AI advertising insights, strategies, and platform updates
              <br />
              delivered to your inbox weekly.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                /* <— Mailchimp / Supabase entegrasyonun burada —> */
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:w-72 px-5 py-3 rounded-full text-white placeholder-white/70 bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition"
              >
                Subscribe Now
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </form>

            <p className="text-indigo-200 text-xs mt-6">No spam, unsubscribe anytime</p>
          </div>
        </div>
      </section>
    </main>
  )
}
