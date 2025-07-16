import { Fragment } from 'react'
import {
  SparklesIcon,
  ChartBarIcon,
  CubeIcon,
  ClockIcon,
  CheckIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Automation',
    description:
      'Set up, launch and manage entire campaigns with zero manual work—our AI does it all for you.',
    icon: SparklesIcon,
  },
  {
    name: 'Advanced Optimization',
    description:
      'Continuously tune bids and budgets to maximize ROI across Meta, Google & TikTok.',
    icon: ChartBarIcon,
  },
  {
    name: 'Cross-Platform Integrations',
    description:
      'Connect in one click to Facebook, Instagram, Google Ads, TikTok Ads and more.',
    icon: CubeIcon,
  },
  {
    name: 'Real-Time Analytics',
    description:
      'Live dashboards and insights let you track performance and pivot instantly.',
    icon: ClockIcon,
  },
  {
    name: 'Custom Campaign Templates',
    description:
      'Use our library of proven templates—or build your own—with a few clicks.',
    icon: CheckIcon,
  },
  {
    name: 'Priority Support',
    description:
      'Get 24/7 access to our expert team via live-chat, email or phone.',
    icon: LifebuoyIcon,
  },
]

const integrations = [
  { key: 'M', label: 'Meta Ads', color: 'bg-blue-500' },
  { key: 'G', label: 'Google Ads', color: 'bg-red-500' },
  { key: 'T', label: 'TikTok Ads', color: 'bg-black' },
  { key: 'S', label: 'Shopify', color: 'bg-green-500' },
  { key: 'W', label: 'WooCommerce', color: 'bg-purple-500' },
  { key: 'Z', label: 'Zapier', color: 'bg-orange-500' },
]

const whyChoose = [
  { icon: ClockIcon, title: 'Save 20+ Hours/Week', text: 'Automate campaign creation and optimization tasks', color: 'bg-green-500' },
  { icon: ChartBarIcon, title: '3x Better ROAS', text: 'AI optimization delivers superior return on ad spend', color: 'bg-blue-500' },
  { icon: SparklesIcon, title: '10K+ Happy Users', text: 'Trusted by businesses of all sizes worldwide', color: 'bg-purple-500' },
  { icon: LifebuoyIcon, title: 'Enterprise Security', text: 'Bank-level security for your advertising data', color: 'bg-orange-500' },
]

export default function Features() {
  return (
    <Fragment>
      {/* HERO */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-medium shadow mb-6">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.828 10.172a4 4 0 01-5.656 0 4 4 0 015.656 0zM10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
            Powerful Features
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Everything You Need to <span className="text-blue-500">Dominate Digital</span> <span className="text-purple-600">Advertising</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Discover the comprehensive suite of AI-powered tools designed to transform your advertising strategy and maximize your ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l18-12v24z" />
              </svg>
              Start Free Trial
            </button>
            <button className="bg-white text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ name, description, icon: Icon }) => (
            <div key={name} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col">
              <Icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Tarvina AI Works</h2>
          <p className="text-gray-600 mb-12">
            Our AI-powered platform simplifies complex advertising tasks into automated workflows
          </p>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Connect Your Accounts',
                text: 'Securely link your advertising accounts from Meta, Google, and TikTok.',
                color: 'bg-blue-500'
              },
              {
                step: '2',
                title: 'AI Creates Your Campaigns',
                text: 'AI analyzes your business and creates optimized campaigns.',
                color: 'bg-purple-500'
              },
              {
                step: '3',
                title: 'Monitor & Optimize',
                text: 'Track performance in real-time and let AI optimize for better results.',
                color: 'bg-pink-500'
              }
            ].map(({ step, title, text, color }) => (
              <div key={step} className="flex flex-col items-center px-4 text-center">
                <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4`}>{step}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Seamless Integrations</h2>
          <p className="text-gray-600 mb-12">Connect with all your favorite platforms and tools</p>
          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map(({ key, label, color }) => (
              <div key={key} className="flex flex-col items-center">
                <div className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-2`}>{key}</div>
                <span className="text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Tarvina AI?</h2>
          <p className="text-gray-600 mb-12">
            Join thousands of businesses that have transformed their advertising with our platform
          </p>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {whyChoose.map(({ icon: Icon, title, text, color }) => (
              <div key={title} className="flex flex-col items-center px-4">
                <Icon className={`${color} w-10 h-10 mb-4 text-white rounded-2xl p-2`} />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-center">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to experience the future of advertising?</h2>
          <p className="mb-8">Start your 14-day free trial today and see why thousands trust Tarvina AI.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition">
              Start Free Trial
            </button>
            <button className="border border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition">
              Contact Sales
            </button>
          </div>
          <p className="mt-4 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </Fragment>
  )
}
