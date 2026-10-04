export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm md:px-12">
      <h1 className="text-2xl font-bold text-indigo-600">Zenvio</h1>
      <ul className="hidden gap-8 text-gray-600 md:flex">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
        Get Started
      </button>
    </nav>
  )
}