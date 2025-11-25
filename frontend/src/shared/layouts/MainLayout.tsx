import { Outlet } from 'react-router-dom';
import Sidebar from '../partials/Sidebar';
import Topbar from '../partials/Topbar';

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Left Side */}
      <aside>
        <Sidebar />
      </aside>

      {/* Right Side Container */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Topbar - Top */}
        <header>
          <Topbar />
        </header>

        {/* Main Content Area - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-[#f4f6f9] shadow-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
