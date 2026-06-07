import LoginView from '../components/LoginView'

function LoginPage({ onNavigate }) {
  const handleSelectPirate = () => {
    onNavigate('home')
  }

  const handleSelectMarine = () => {
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


