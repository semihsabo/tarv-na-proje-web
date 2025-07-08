
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
    </>
  )
}
