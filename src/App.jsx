import { useState, useContext } from 'react'
import SessionProvider, { SessionContext } from './context/SessionContext'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function AppContent() {
  const { session } = useContext(SessionContext)
  const [currentPage, setCurrentPage] = useState('login')

  if (!session) {
    return <LoginPage onNavigate={setCurrentPage} />
  }

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

  return (
    <div className={session === 'pirate' ? 'session-pirate' : 'session-marine'}>
      <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
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



