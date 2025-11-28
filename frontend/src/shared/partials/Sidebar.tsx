import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  // one logic but resusable using className={getClassName in NavLink component
  const getClassName = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses =
      'block w-full py-2 px-6 rounded-md text-left text-white transition-colors';
    const activeClasses = 'bg-blue-500 hover:bg-blue-600';
    const inactiveClasses = 'hover:bg-gray-700';

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="bg-[#343a40] w-[250px] h-screen">
      <div className="text-center font-light pt-3 pb-[15px]">
        <h2 className="text-[19px] text-white">Admin</h2>
      </div>
      <hr className="text-gray-600" />

      <div className="px-3 pt-5">
        <nav className="space-y-3">
          <NavLink to="/" className={getClassName}>
            Dashboard
          </NavLink>
          <NavLink to="/boarders" className={getClassName}>
            Boarders
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
