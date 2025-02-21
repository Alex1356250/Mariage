import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-serif">Alex & Sophie</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-rose-500' : 'text-gray-600'
              } hover:text-rose-500 transition-colors`}
            >
              Accueil
            </Link>
            <Link
              to="/programme"
              className={`${
                isActive('/programme') ? 'text-rose-500' : 'text-gray-600'
              } hover:text-rose-500 transition-colors`}
            >
              Programme
            </Link>
            <Link
              to="/hebergements"
              className={`${
                isActive('/hebergements') ? 'text-rose-500' : 'text-gray-600'
              } hover:text-rose-500 transition-colors`}
            >
              Hébergements
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-rose-500' : 'text-gray-600'
              } hover:text-rose-500 transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;