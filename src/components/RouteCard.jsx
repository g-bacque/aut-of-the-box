import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { routeIcons } from '../data/routeMeta.js';

export default function RouteCard({ route }) {
  const Icon = routeIcons[route.id];
  const total = route.steps.length;

  return (
    <Link className="route-card pressable" to={`/asistente/ruta/${route.id}`}>
      <span className="route-card__icon">
        <Icon size={20} strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="route-card__body">
        <span className="route-card__title">{route.title}</span>
        <span className="route-card__sub">
          {total} pasos · {route.subtitle}
        </span>
      </span>
      <ChevronRight size={18} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} aria-hidden="true" />
    </Link>
  );
}
