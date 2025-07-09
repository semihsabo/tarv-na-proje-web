// pages/pricing.js

import { useState } from 'react'

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  const plans = [
    {
      name: 'Starter',
      desc: 'Perfect for small businesses getting started with AI advertising',
      monthly: 49,
      yearly: 49 * 12 * 0.8,
      features: [
        'Up to 5 active campaigns',
        'Meta & Google Ads integration',
        'Basic AI campaign creation',
        'Standard analytics dashboard',
        'Email support'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      desc: 'Ideal for growing businesses that need advanced AI features',
      monthly: 149,
      yearly: 149 * 12 * 0.8,
      features: [
        'Up to 25 active campaigns',
        'All platform integrations (Meta, Google, TikTok)',
        'Advanced AI optimization',
        'Real-time analytics & insights',
        'Priority support + live chat'
      ],
      cta: 'Choose Plan'
    },
    {
      name: 'Enterprise',
      desc: 'For large businesses and agencies managing multiple clients',
      monthly: 399,
      yearly: 399 * 12 * 0.8,
      features: [
        'Unlimited campaigns',
        'All platform integrations',
        'Enterprise AI features',
        'Custom analytics dashboards',
        'Dedicated account manager'
      ],
      cta: 'Contact Us'
    }
  ]

  return (
    <>
      {/* Pricing Bölümü */}
      <section className="relative py-24 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="absolute inset-x-0 top-8 flex justify-center">
          <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-4 py-1 text-sm font-medium shadow">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.286 3.955c.3.922-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.785.57-1.84-.196-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.955z" />
            </svg>
            Simple, Transparent Pricing
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4 mt-12">
            Choose the Perfect Plan for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Your Business
            </span>
          </h1>
          <p className="text-gray-600 mb-12">
            Start with a 14-day free trial. No credit card required. Scale your advertising with AI-powered automation and optimization.
          </p>
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full shadow-sm p-1 mb-16 mx-auto">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                billing === 'monthly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                billing === 'yearly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              Yearly
            </button>
            {billing === 'yearly' && (
              <span className="ml-4 text-sm text-green-500 font-semibold">
                Save 20%
              </span>
            )}
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div key={plan.name} className="relative flex flex-col rounded-2xl bg-white shadow-lg p-8">
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white uppercase text-xs font-semibold rounded-full px-4 py-1">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-semibold mb-2 mt-6">{plan.name}</h2>
                <p className="text-gray-500 mb-6">{plan.desc}</p>
                <div className="text-4xl font-bold mb-6">
                  ${Math.round(plan[billing])}
                  <span className="text-base font-normal text-gray-500">
                    /{billing === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <ul className="flex-1 mb-8 space-y-2 text-gray-600">
                  {plan.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button className="mt-auto w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
                  {plan.cta}
                </button>
                {i === 1 && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-indigo-600 pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose Tarvina AI */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-4">Why Businesses Choose Tarvina AI</h3>
          <p className="text-gray-600 mb-12">
            Join thousands of companies that have transformed their advertising with our AI-powered platform
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col items-center px-4">
              <div className="bg-white p-6 rounded-2xl shadow mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 21h18L12 2zM11 14v4h2v-4h-2zm0-6v4h2V8h-2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">10x Faster Setup</h4>
              <p className="text-gray-600">
                Create and launch campaigns in minutes, not weeks
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <div className="bg-white p-6 rounded-2xl shadow mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">3x Better ROAS</h4>
              <p className="text-gray-600">
                AI optimization delivers superior return on ad spend
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <div className="bg-white p-6 rounded-2xl shadow mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12l5 5L20 7"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Save 20+ Hours/Week</h4>
              <p className="text-gray-600">
                Automate repetitive tasks and focus on strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-2">Frequently Asked Questions</h3>
          <p className="text-gray-600 mb-10">
            Everything you need to know about Tarvina AI pricing and features
          </p>
          <div className="space-y-6">
            <div className="text-left bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="font-medium mb-2">How does the free trial work?</h4>
              <p className="text-gray-600">
                You get 14 days of full access to all features in your chosen plan. No credit card required to start, and you can cancel anytime during the trial period.
              </p>
            </div>
            <div className="text-left bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="font-medium mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
              </p>
            </div>
            <div className="text-left bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="font-medium mb-2">What platforms do you support?</h4>
              <p className="text-gray-600">
                We support Meta (Facebook & Instagram), Google Ads, and TikTok Ads. More platforms are being added regularly based on user demand.
              </p>
            </div>
            <div className="text-left bg-gray-50 p-6 rounded-xl shadow">
              <h4 className="font-medium mb-2">Is there a setup fee?</h4>
              <p className="text-gray-600">
                No, there is no upfront setup fee. You only pay the subscription fee for the plan you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-8">
            Join thousands of businesses already using Tarvina AI to scale their advertising and maximize ROI.
          </p>
          <div className="inline-flex space-x-4">
            <button className="bg-white text-indigo-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l18-12v24z" />
              </svg>
              Start Free Trial
            </button>
            <button className="border border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
              </svg>
              Book a Demo
            </button>
          </div>
          <p className="mt-4 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </>
  )
}
