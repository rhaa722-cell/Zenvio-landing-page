export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white px-6 py-16 text-center md:py-24">
      <h2 className="mx-auto max-w-3xl text-4xl font-bold text-gray-900 md:text-6xl">
        Manage your work, <span className="text-indigo-600">simply.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
        Zenvio helps teams plan, track and finish projects in one clean place.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button className="rounded-lg bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700">
          Start Free
        </button>
        <button className="rounded-lg border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-50">
          Learn More
        </button>
      </div>
    </section>
  )
}