
export default function Integrations() {
  const logos = ['Meta', 'Google', 'TikTok', 'LinkedIn']

  return (
    <section className="py-16 bg-gray-50">
      <div className="container text-center space-y-8">
        <h2 className="text-3xl font-bold">Connect Your Favorite Channels</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map(l => (
            <div key={l} className="text-2xl font-semibold text-gray-700">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
