// pages/request-demo.js

import { useState } from 'react'

export default function RequestDemo() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    spend: '',
    platforms: '',
    challenges: '',
    agreeTerms: false,
    subscribe: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // gönderme işlemi burada
    console.log('Demo request:', form)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Sol Açıklama */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-medium shadow">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 3h14v14H3V3z" />
            </svg>
            Free Personalized Demo
          </div>
          <h2 className="text-4xl font-bold leading-tight">
            See Tarvina AI in <span className="text-indigo-600">Action</span>
          </h2>
          <p className="text-gray-700">
            Get a personalized demo tailored to your business needs. See how AI can transform your advertising strategy and boost your ROI.
          </p>
          <ul className="space-y-2 text-gray-600">
            {[
              'See how AI can optimize your current campaigns',
              'Get personalized recommendations for your business',
              'Learn advanced targeting strategies',
              'Discover automation opportunities',
              'Compare platform performance insights',
              'Understand ROI improvement potential',
            ].map(item => (
              <li key={item} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 inline-flex bg-white rounded-2xl shadow p-6 space-x-12">
            <div className="text-center">
              <span className="text-2xl font-bold text-indigo-600">30<span className="text-base">min</span></span>
              <p className="text-gray-600">Demo Duration</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-indigo-600">24<span className="text-base">hrs</span></span>
              <p className="text-gray-600">Response Time</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-indigo-600">Free</span>
              <p className="text-gray-600">No Commitment</p>
            </div>
          </div>
        </div>

        {/* Sağ Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold">Request Your Free Demo</h3>
          <p className="text-gray-600 text-sm">
            Fill out the form below and we'll contact you within 24 hours to schedule your personalized demo.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name *</label>
              <input
                required
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name *</label>
              <input
                required
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Business Email *</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Company *</label>
              <input
                required
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-700">Job Title *</label>
              <input
                required
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700">Monthly Ad Spend *</label>
            <select
              required
              name="spend"
              value={form.spend}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Select your monthly ad spend</option>
              <option value="&lt;1k">&lt; $1k</option>
              <option value="1k-5k">$1k–$5k</option>
              <option value="5k-20k">$5k–$20k</option>
              <option value="20k+">$20k+</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Current Advertising Platforms *</label>
            <select
              required
              name="platforms"
              value={form.platforms}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Select platforms you currently use</option>
              <option>Meta Ads</option>
              <option>Google Ads</option>
              <option>TikTok Ads</option>
              <option>Shopify</option>
              <option>WooCommerce</option>
              <option>Zapier</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Current Advertising Challenges</label>
            <textarea
              name="challenges"
              value={form.challenges}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-3">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={form.agreeTerms}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2 text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-indigo-600 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-indigo-600 underline">
                  Privacy Policy
                </a>
                *
              </span>
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="subscribe"
                checked={form.subscribe}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2 text-gray-700">
                Subscribe to our newsletter for AI advertising tips and updates
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!form.agreeTerms}
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-indigo-700 transition"
          >
            Request Free Demo →
          </button>
        </form>
      </div>
    </section>
  )
}
