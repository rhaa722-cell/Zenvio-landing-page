const features = [
  { title: 'Plan', text: 'Organize tasks and goals in one clear board.', icon: '📝' },
  { title: 'Track', text: 'See progress in real time, without extra meetings.', icon: '📊' },
  { title: 'Collaborate', text: 'Work with your team from any device.', icon: '🤝' },
]

export default function Features() {
  return (
    <section id="features" className="px-6 py-16 md:px-12">
      <h2 className="text-center text-3xl font-bold text-gray-900">Features</h2>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{f.title}</h3>
            <p className="mt-2 text-gray-600">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}