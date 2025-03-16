import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes, PrivateRoute, PublicRoute } from './routes';
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<PublicRoute>{route.element}</PublicRoute>}
          />
        ))}

        {/* Private Routes */}
        {privateRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<PrivateRoute>{route.element}</PrivateRoute>}
          />
        ))}
      </Routes>
    </div>
  );
}
export default App;
