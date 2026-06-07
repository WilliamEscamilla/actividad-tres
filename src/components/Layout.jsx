import Navbar from './Navbar'

function Layout({ children, currentPage, onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}

export default Layout
