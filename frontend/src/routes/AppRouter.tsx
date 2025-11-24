import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import BoardersPage from '../pages/BoardersPage';
import NotFoundPage from '../pages/NotFoundPage';
import MainLayout from '../shared/layouts/MainLayout';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {/* <Route path="/login" element={<Login />} /> */}

      {/* Protected Layout */}
      {/* Wrap pages component inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/boarders" element={<BoardersPage />} />
      </Route>
      {/* Catch unmatched URLs */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRouter;
