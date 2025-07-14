import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const isAdmin = router.pathname.startsWith('/admin'); // Admin sayfası mı kontrol et

  // Eğer Admin sayfası ise Navbar'ı render etme
  if (isAdmin) {
    return null; // Admin sayfasında navbar gösterilmesin
  }

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex items-center">
        <span className="mr-4">Hoşgeldiniz, John Doe</span>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Çıkış Yap</button>
      </div>

      {/* Admin sayfası dışında ise login butonunu göster */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
        Giriş Yap
      </button>
    </div>
  );
};

export default Navbar;
