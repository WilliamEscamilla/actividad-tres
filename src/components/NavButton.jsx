function NavButton({ children, isActive, onClick }) {
  const baseClasses = "rounded transition-colors"
  let colorClasses = "hover:bg-gray-600"
  if (isActive) {
    colorClasses = "bg-white text-black font-semibold"
  }
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses}`}
    >
      {children}
    </button>
  )
}

export default NavButton
