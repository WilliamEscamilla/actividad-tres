import useSession from '../hooks/useSession'

const withSession = (WrappedComponent) => {
  return function WithSessionComponent(props) {
    const { session } = useSession()

    if (!session) {
      return (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-red-500">Acceso Denegado</h2>
          <p className="text-lg">Debes seleccionar un bando (Pirata o Marino) para ver esta página.</p>
        </div>
      )
    }

    return <WrappedComponent {...props} />
  }
}

export default withSession
