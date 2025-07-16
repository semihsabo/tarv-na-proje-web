import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, showNavbar = true, showFooter = true }) {
  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  )
}
