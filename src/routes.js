import { Navigate } from 'react-router-dom';
import Login from './components/Auth/Login/login';
import Dashboard from './components/Auth/Dashboard/Dashboard';
import DashboardHome from './components/Pages/home'
import Profile from './components/Pages/Profile';

export const publicRoutes = [
  { path: '/', element: <Login /> },
  { path: '/about', element: <Login /> },
  { path: '/login', element: <Login /> },
];

export const privateRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: '', element: <DashboardHome /> }, // Default dashboard page
      { path: 'profile', element: <Profile /> }, // Profile page
    ],
  },
];

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with actual auth logic
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export const PublicRoute = ({ children }) => children;