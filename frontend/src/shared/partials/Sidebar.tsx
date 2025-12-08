import { IonIcon } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
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
      <div className="text-center font-light">
        <div className="flex justify-start items-center">
          <IonIcon icon={personCircle} className="text-8xl" />
          <div className="text-left text-white">
            <h1 className="font-semibold">Jomer Ubaldo</h1>
            <p className="text-slate-300">Admin</p>
          </div>
        </div>
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
