// pages/_app.js
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Admin paneli kontrolü (örn: /admin/analytics gibi rotalarda Navbar ve Footer gizlenir)
  const isAdminPage = router.pathname.startsWith('/admin');

  // Component içinde özel tanım varsa onu kullan, yoksa admin sayfasına göre göster/gizle
  const showNavbar = Component.showNavbar !== undefined ? Component.showNavbar : !isAdminPage;
  const showFooter = Component.showFooter !== undefined ? Component.showFooter : !isAdminPage;

  return (
    <Layout showNavbar={showNavbar} showFooter={showFooter}>
      <Component {...pageProps} />
    </Layout>
  );
}
