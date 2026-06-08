import { useState } from 'react'
import SessionProvider from './context/SessionProvider'
import useSession from './hooks/useSession'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function AppContent() {
  const { session } = useSession()
  const [currentPage, setCurrentPage] = useState('login')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutPage />
      default:
        return <HomePage />
    }
  }

  const sessionClass = session === 'pirate' ? 'session-pirate' : session === 'marine' ? 'session-marine' : ''

  return (
    <div className={sessionClass}>
      {currentPage === 'login' ? (
        <LoginPage onNavigate={setCurrentPage} />
      ) : (
        <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
          {renderPage()}
        </Layout>
      )}
    </div>
  )
}

function App() {
  return (
    <SessionProvider>
      <AppContent />
    </SessionProvider>
  )
}

export default App



