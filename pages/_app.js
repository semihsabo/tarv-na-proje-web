// pages/_app.js
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Admin sayfalarını kontrol et
  const isAdminPage = router.pathname.startsWith('/admin');

  // Navbar ve Footer gösterme/kaldırma
  const showNavbar =
    Component.showNavbar !== undefined
      ? Component.showNavbar
      : !isAdminPage;
  const showFooter =
    Component.showFooter !== undefined
      ? Component.showFooter
      : !isAdminPage;

  return (
    <Layout showNavbar={showNavbar} showFooter={showFooter}>
      <Component {...pageProps} />
    </Layout>
  )
}

