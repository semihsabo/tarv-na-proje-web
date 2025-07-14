// pages/_app.js
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
export default function MyApp({ Component, pageProps }) {
  // Navbar ve Footer gösterme/kaldırma
  const showNavbar =
    Component.showNavbar !== undefined
      ? Component.showNavbar
      : false;
  const showFooter =
    Component.showFooter !== undefined
      ? Component.showFooter
      : false;
  return (
    <Layout showNavbar={showNavbar} showFooter={showFooter}>
      <Component {...pageProps} />
    </Layout>
  )
}

