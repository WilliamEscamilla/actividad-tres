import { useState } from 'react'
import SessionProvider from './context/SessionProvider'
import useSession from './hooks/useSession'
import Layout from './components/Layout'
import { Suspense, lazy } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const AboutPage = lazy(() => import('./pages/AboutPage'))

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
          <Suspense fallback={<div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div></div>}>
            {renderPage()}
          </Suspense>
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



