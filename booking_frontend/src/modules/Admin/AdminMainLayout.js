import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '../../constant';
import { useSelector } from 'react-redux';
import { useProfileQuery } from '../../services/authentication';

const AdminMainLayout = () => {

  const { data } = useProfileQuery();
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link className="text-white text-xl font-bold" to="/admin">Admin Dashboard</Link>
          <div className="flex">
            <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={`/admin/${ROUTES.cars}`}>Cars</Link>
            <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={`/admin/${ROUTES.bookings}`}>Bookings</Link>
            <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={`/admin/${ROUTES.brands}`}>Brands</Link>
            <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to={`/admin/${ROUTES.users}`}>Users</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminMainLayout;
