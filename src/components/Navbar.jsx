function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold tracking-wide">
        ☠️ Mugiwara Dex
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => onNavigate('home')}
          className={`px-4 py-2 rounded transition-colors ${
            currentPage === 'home'
              ? 'bg-white text-gray-900 font-semibold'
              : 'hover:bg-gray-700'
          }`}
        >
          Inicio
        </button>

        <button
          onClick={() => onNavigate('about')}
          className={`px-4 py-2 rounded transition-colors ${
            currentPage === 'about'
              ? 'bg-white text-gray-900 font-semibold'
              : 'hover:bg-gray-700'
          }`}
        >
          Acerca de
        </button>
      </div>
    </nav>
  )
}

export default Navbar
