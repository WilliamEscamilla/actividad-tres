import useSession from '../hooks/useSession'
import NavButton from './NavButton'

function Navbar({ currentPage, onNavigate }) {
  const { session, endSession } = useSession()

  const sessionLabel = session === 'pirate' ? '☠️ Pirata' : '⚓ Marino'

  const handleLogout = () => {
    endSession()
    onNavigate('login')
  }

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold tracking-wide">
        ☠️ Mugiwara Dex
      </div>

      <div className="flex gap-4">
        <NavButton
          isActive={currentPage === 'home'}
          onClick={() => onNavigate('home')}
        >
          Inicio
        </NavButton>

        <NavButton
          isActive={currentPage === 'about'}
          onClick={() => onNavigate('about')}
        >
          Acerca de
        </NavButton>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold">{sessionLabel}</span>
        <NavButton onClick={handleLogout}>
          Salir
        </NavButton>
      </div>
    </nav>
  )
}

export default Navbar
