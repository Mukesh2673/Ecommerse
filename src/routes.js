// src/routes.js
import { Navigate } from 'react-router-dom';

import Login from './components/Auth/Login/login';
import Dashboard from './components/Auth/Dashboard';

// Public routes (accessible by anyone)
export const publicRoutes = [
  { path: '/', element: <Login /> },
  { path: '/about', element: <Login /> },
  { path: '/login', element: <Login /> },
];

// Private routes (require authentication)
export const privateRoutes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/profile', element: <Login /> },
];

// Wrapper component for private routes
export const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; 
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export const PublicRoute = ({ children }) => {
  return children;
};