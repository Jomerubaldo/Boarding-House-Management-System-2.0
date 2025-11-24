import { Outlet } from 'react-router-dom';
import Sidebar from '../partials/Sidebar';

const MainLayout = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1">
        {/* This is where pages are injected */}
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
