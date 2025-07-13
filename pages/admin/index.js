import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-8">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Admin;     