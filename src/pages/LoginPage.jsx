import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'
import LoginView from '../components/LoginView'

function LoginPage({ onNavigate }) {
  const { startSession } = useContext(SessionContext)

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



