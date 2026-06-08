import withSession from '../hocs/withSession'
import CharacterListContainer from '../containers/CharacterListContainer'

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 pb-2">
        La Tripulación de Sombrero de paja
      </h1>
      <CharacterListContainer />
    </div>
  )
}

export default withSession(HomePage)
