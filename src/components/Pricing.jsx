const plans = [
  { name: 'Free', price: '$0', points: ['1 project', 'Basic support'] },
  { name: 'Pro', price: '$12', points: ['Unlimited projects', 'Priority support'] },
  { name: 'Team', price: '$29', points: ['Everything in Pro', 'Team analytics'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 px-6 py-16 md:px-12">
      <h2 className="text-center text-3xl font-bold text-gray-900">Pricing</h2>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-600">{p.name}</h3>
            <p className="mt-2 text-4xl font-bold text-gray-900">
              {p.price}<span className="text-base font-normal text-gray-500">/mo</span>
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <button className="mt-6 w-full rounded-lg bg-indigo-600 py-2 text-white hover:bg-indigo-700">
              Choose {p.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}