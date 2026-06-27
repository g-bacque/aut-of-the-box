import { Navigate, Outlet } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext.jsx';

// Si la persona aún no ha completado el onboarding, la llevamos a la bienvenida.
export default function RequireOnboarding() {
  const { profile } = useProfile();
  if (!profile.onboarded) {
    return <Navigate to="/bienvenida" replace />;
  }
  return <Outlet />;
}
