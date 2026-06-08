import useFetch from '../hooks/useFetch'
import useSession from '../hooks/useSession'
import { getCharacters } from '../services/api'
import CharacterCard from '../components/CharacterCard'

function CharacterListContainer() {
  const { session } = useSession()
  const { data: characters, loading, error } = useFetch(getCharacters)

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

  // El contenedor decide qué datos exclusivos mostrar según el bando elegido.
  const getSessionData = (character) => {
    if (session === 'pirate') {
      return {
        label1: 'Cumpleaños',
        value1: character.birthday,
      }
    }
    return {
      label1: 'Última ubicación 📍',
      value1: character.lastKnownLocation,
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters && characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          session={session}
          sessionData={getSessionData(character)}
        />
      ))}
    </div>
  )
}

export default CharacterListContainer
