import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext.js'

function useSession() {
  const context = useContext(SessionContext)
  
  if (context === undefined || context === null) {
    throw new Error('useSession debe ser usado dentro de un SessionProvider')
  }
  
  return context
}

export default useSession
