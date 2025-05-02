
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

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
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')} flex items-center gap-1.5`}>
                <Icon name="Home" size={18} />
                Главная
              </Link>
              <Link to="/history" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/history')} flex items-center gap-1.5`}>
                <Icon name="Clock" size={18} />
                История
              </Link>
              <Link to="/law" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/law')} flex items-center gap-1.5`}>
                <Icon name="Scale" size={18} />
                Закон и право
              </Link>
              <Link to="/arguments" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/arguments')} flex items-center gap-1.5`}>
                <Icon name="FilePlus2" size={18} />
                Аргументы
              </Link>
              <Link to="/cases" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/cases')} flex items-center gap-1.5`}>
                <Icon name="FileSearch" size={18} />
                Громкие дела
              </Link>
              <Link to="/opinions" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/opinions')} flex items-center gap-1.5`}>
                <Icon name="Users" size={18} />
                Мнения
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Мобильное меню */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')} flex items-center gap-2`}>
            <Icon name="Home" size={20} />
            Главная
          </Link>
          <Link to="/history" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/history')} flex items-center gap-2`}>
            <Icon name="Clock" size={20} />
            История
          </Link>
          <Link to="/law" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/law')} flex items-center gap-2`}>
            <Icon name="Scale" size={20} />
            Закон и право
          </Link>
          <Link to="/arguments" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/arguments')} flex items-center gap-2`}>
            <Icon name="FilePlus2" size={20} />
            Аргументы
          </Link>
          <Link to="/cases" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/cases')} flex items-center gap-2`}>
            <Icon name="FileSearch" size={20} />
            Громкие дела
          </Link>
          <Link to="/opinions" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/opinions')} flex items-center gap-2`}>
            <Icon name="Users" size={20} />
            Мнения
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
