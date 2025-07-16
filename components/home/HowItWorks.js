export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Connect',
      desc: 'Link your Meta or Google advertising accounts securely in seconds',
      icon: '🌐',
    },
    {
      num: '02',
      title: 'Describe',
      desc: 'Tell us about your product, audience, and advertising objectives',
      icon: '🎯',
    },
    {
      num: '03',
      title: 'Generate',
      desc: 'Our AI creates optimized campaigns with copy, targeting, and budgets',
      icon: '✨',
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'Go live instantly and monitor real-time performance analytics',
      icon: '📈',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-4xl sm:text-5xl font-bold">How It Works</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
          Get started with AI-powered advertising in just 4 simple steps
        </p>

        {/* Adımlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {steps.map(({ num, title, desc, icon }) => (
            <div
              key={num}
              className="flex flex-col items-center text-center bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="h-20 w-20 rounded-full flex items-center justify-center text-3xl text-white bg-gradient-to-br from-indigo-500 to-fuchsia-600 shadow-md">
                {icon}
              </div>

              {/* Step bilgisi */}
              <span className="mt-6 text-sm font-semibold tracking-wider text-indigo-600">
                STEP {num}
              </span>

              {/* Başlık */}
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>

              {/* Açıklama */}
              <p className="mt-3 text-sm text-gray-600 max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
