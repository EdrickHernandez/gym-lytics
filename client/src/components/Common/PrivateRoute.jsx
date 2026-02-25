import { Navigate } from 'react-router-dom';

// PrivateRoute protege rutas que requieren autenticación
// Si el usuario NO está autenticado, lo redirige a /login
// Si está autenticado, muestra el contenido (children)

const PrivateRoute = ({ children }) => {
  // TODO: Reemplazar con contexto de auth real
  const isAuthenticated = false; // Temporal: cambiar a true/false según el usuario

  return isAuthenticated 
    ? children 
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;
