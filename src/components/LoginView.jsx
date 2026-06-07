import Button from './Button'

function LoginView({ onSelectPirate, onSelectMarine }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8">
      <h1 className="text-4xl font-bold">
        ¿De qué lado estás?
      </h1>
      <p className="text-lg">Elige tu bando para continuar</p>

      <div className="flex gap-6">
        <Button variant="pirate" onClick={onSelectPirate}>
          ☠️ Soy Pirata
        </Button>
        <Button variant="marine" onClick={onSelectMarine}>
          ⚓ Soy Marino
        </Button>
      </div>
    </div>
  )
}

export default LoginView
