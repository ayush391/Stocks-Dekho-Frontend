import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppContext } from './context/AppState';
import { LOCAL } from './utils/routes';

const RequireAuth = () => {
  const { user } = useAppContext();
  const location = useLocation();

  return user ? <Outlet /> : <Navigate to={LOCAL.LOGIN} state={{ from: location }} replace />;
};

export default RequireAuth;
