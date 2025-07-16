import { useState } from 'react'

export default function Login() {
  const [tab, setTab] = useState('signin')

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img
            src="/logo.png"
            alt="AdFlow AI"
            className="mx-auto h-12 w-12 mb-4"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            AdFlow AI
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Intelligent advertising management platform
          </p>
        </div>

        <div className="bg-white py-8 px-6 sm:px-8 shadow rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
            Welcome
          </h3>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Sign in to your account or create a new one
          </p>

          {/* Tabs */}
          <div className="flex mb-6 border-b border-gray-200">
            {['signin', 'signup'].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`w-1/2 py-2 text-center font-medium transition-colors ${
                  tab === item
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {item === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400"
                >
                  <span>👁️</span>
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
            >
              {tab === 'signin' ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Social */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
            {['G', 'T', 'G'].map((icon, idx) => (
              <button
                key={idx}
                className="flex-1 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 px-2">
          By continuing, you agree to our{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </section>
  )
}
