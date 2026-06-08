import useSession from '../hooks/useSession'
import LoginView from '../components/LoginView'

function LoginPage({ onNavigate }) {
  const { startSession } = useSession()

  const handleSelectPirate = () => {
    startSession('pirate')
    onNavigate('home')
  }

  const handleSelectMarine = () => {
    startSession('marine')
    onNavigate('home')
  }

  return (
    <LoginView
      onSelectPirate={handleSelectPirate}
      onSelectMarine={handleSelectMarine}
    />
  )
}

export default LoginPage



