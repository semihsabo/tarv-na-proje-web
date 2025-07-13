const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex items-center">
        <span className="mr-4">Hoşgeldiniz, John Doe</span>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Çıkış Yap</button>
      </div>
    </div>
  );
};

export default Navbar;
