import { NavLink } from 'react-router-dom';
import { Home, Folder, MessageSquare, FileText, Users } from 'lucide-react';

const tabs = [
  { to: '/', label: 'Inicio', Icon: Home, end: true },
  { to: '/recursos', label: 'Recursos', Icon: Folder },
  { to: '/asistente', label: 'Asistente', Icon: MessageSquare },
  { to: '/gestiones', label: 'Gestiones', Icon: FileText },
  { to: '/comunidad', label: 'Comunidad', Icon: Users, soon: true },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      {tabs.map(({ to, label, Icon, end, soon }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            'bottom-nav__item' + (isActive ? ' is-active' : '') + (soon ? ' is-soon' : '')
          }
        >
          <Icon size={21} strokeWidth={2} aria-hidden="true" />
          <span>{label}</span>
          {soon && <span className="bottom-nav__badge">pronto</span>}
        </NavLink>
      ))}
    </nav>
  );
}
