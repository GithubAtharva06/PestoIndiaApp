function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">PestoIndia</h1>
        <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">
          Book Service
        </button>   
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Professional Pest Control Services
        </h2>
        <p className="text-gray-400 mb-6">
          Fast, safe, and reliable pest control at your doorstep.
        </p>

        <button className="bg-green-500 px-6 py-3 rounded-xl text-lg hover:bg-green-600">
          Request Service
        </button>
      </section>

      {/* Services */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        {["Termite Control", "Rodent Control", "Cockroach Treatment"].map((item) => (
          <div key={item} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400">Effective and safe treatment solutions.</p>
          </div>
        ))}
      </section>

    </div>
  )
}

export default App