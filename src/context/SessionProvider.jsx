import { useState } from 'react'
import { SessionContext } from './SessionContext.js'

function SessionProvider({ children }) {
  const [session, setSession] = useState(null) // Esto puede valer null, 'pirate' o 'marine'

  const startSession = (faction) => {
    setSession(faction)
  }

  const endSession = () => {
    setSession(null)
  }

  return (
    <SessionContext.Provider value={{ session, startSession, endSession }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionProvider
