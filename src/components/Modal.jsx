import Button from './Button'

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black font-bold text-xl px-2 cursor-pointer">&times;</button>
        </div>
        <div className="p-4 overflow-y-auto">
          {children}
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <Button onClick={onClose} variant="primary" className="px-4 py-2 rounded">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
