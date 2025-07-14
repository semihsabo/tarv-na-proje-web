// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-[#f3f4f6]',
    'bg-[#fdf2f8]',
    'bg-[#f0f9ff]',
    'bg-[#fef9ef]',
    'bg-[#fef3f3]',
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}
