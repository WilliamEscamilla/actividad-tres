import { useState, lazy, Suspense } from 'react'
import useFetch from '../hooks/useFetch'
import useSession from '../hooks/useSession'
import { getCharacters } from '../services/api'
import CharacterCard from '../components/CharacterCard'
import Modal from '../components/Modal'
import CharacterDetails from '../components/CharacterDetails'

const AbilityList = lazy(() => import('../components/AbilityList'))
const WeaknessList = lazy(() => import('../components/WeaknessList'))

function CharacterListContainer() {
  const { session } = useSession()
  const { data: characters, loading, error } = useFetch(getCharacters)
  
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCharacter(null)
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        <p>Cargando datos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10 bg-red-900/20 rounded-lg">
        <p className="text-lg font-bold">Error de conexión</p>
        <p>No se pudo cargar la tripulación.</p>
      </div>
    )
  }

  const getActionConfig = (character) => {
    if (session === 'pirate') {
      return {
        text: '⚔️ Ver Habilidades',
        variant: 'pirate',
        onClick: () => {
          setSelectedCharacter(character)
          setIsModalOpen(true)
        }
      }
    }
    return {
      text: '🛡️ Ver Debilidades',
      variant: 'marine',
      onClick: () => {
        setSelectedCharacter(character)
        setIsModalOpen(true)
      }
    }
  }

  // El contenedor decide qué datos exclusivos mostrar según el bando elegido.
  const getSessionData = (character) => {
    if (session === 'pirate') {
      return {
        label1: 'Cumpleaños',
        value1: character.birthday,
        bountyStyle: { color: 'var(--session-accent)' },
      }
    }
    return {
      label1: 'Última ubicación 📍',
      value1: character.lastKnownLocation,
      bountyStyle: undefined,
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters && characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            sessionData={getSessionData(character)}
            actionConfig={getActionConfig(character)}
          />
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        title={session === 'pirate' ? 'Habilidades del Tripulante' : 'Reporte de Debilidades'}
      >
        <CharacterDetails 
          character={selectedCharacter}
          render={(char) => {
            if (session === 'pirate') {
              return (
                <Suspense fallback={<div className="animate-pulse h-10 bg-gray-200 rounded w-full"></div>}>
                  <AbilityList character={char} />
                </Suspense>
              )
            } else {
              return (
                <Suspense fallback={<div className="animate-pulse h-10 bg-red-100 rounded w-full"></div>}>
                  <WeaknessList character={char} />
                </Suspense>
              )
            }
          }}
        />
      </Modal>
    </>
  )
}

export default CharacterListContainer
