function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseStyles = 'font-bold text-lg transition-colors cursor-pointer'

  const variants = {
    primary: 'bg-gray-800 hover:bg-gray-700 text-white',
    pirate: 'bg-yellow-500 hover:bg-yellow-400 text-black',
    marine: 'bg-blue-700 hover:bg-blue-600 text-white',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
