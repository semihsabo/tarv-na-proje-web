import Navbar from './Navbar'
import Footer from './Footer'
export default function Layout({ children, showNavbar = true, showFooter = true }) {
  return (
    <>
      {showNavbar && <Navbar />}
      <main className="min-h-screen flex flex-col">{children}</main>
      {showFooter && <Footer />}
    </>
  )
}