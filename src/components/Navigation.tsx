
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-100';
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">
                Смертная казнь в России
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}>
                Главная
              </Link>
              <Link to="/history" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/history')}`}>
                История
              </Link>
              <Link to="/law" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/law')}`}>
                Закон и право
              </Link>
              <Link to="/arguments" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/arguments')}`}>
                Аргументы
              </Link>
              <Link to="/cases" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/cases')}`}>
                Громкие дела
              </Link>
              <Link to="/world" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/world')}`}>
                В мире
              </Link>
              <Link to="/opinions" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/opinions')}`}>
                Мнения
              </Link>
              <Link to="/sources" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/sources')}`}>
                Источники
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Мобильное меню */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}>
            Главная
          </Link>
          <Link to="/history" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/history')}`}>
            История
          </Link>
          <Link to="/law" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/law')}`}>
            Закон и право
          </Link>
          <Link to="/arguments" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/arguments')}`}>
            Аргументы
          </Link>
          <Link to="/cases" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/cases')}`}>
            Громкие дела
          </Link>
          <Link to="/world" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/world')}`}>
            В мире
          </Link>
          <Link to="/opinions" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/opinions')}`}>
            Мнения
          </Link>
          <Link to="/sources" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/sources')}`}>
            Источники
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
