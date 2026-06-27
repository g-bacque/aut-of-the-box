import { Link } from 'react-router-dom';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import { categoryMeta } from '../data/categoryMeta.js';

export default function ResourceCard({ resource }) {
  const { Icon, tint } = categoryMeta[resource.category];

  return (
    <Link className="resource-card pressable" to={`/recursos/${resource.id}`}>
      <span className="resource-card__icon" style={{ background: tint }}>
        <Icon size={20} strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="resource-card__body">
        <span className="resource-card__title">{resource.title}</span>
        <span className="resource-card__meta">
          {resource.rating != null && (
            <>
              <Star size={13} style={{ verticalAlign: '-2px', color: 'var(--aotb-olive)' }} aria-hidden="true" />{' '}
              {resource.rating.toLocaleString('es-ES')} ·{' '}
            </>
          )}
          {resource.distanceKm != null && (
            <>
              <MapPin size={13} style={{ verticalAlign: '-2px' }} aria-hidden="true" />{' '}
              {resource.distanceKm.toLocaleString('es-ES')} km ·{' '}
            </>
          )}
          {resource.type}
        </span>
      </span>
      <ChevronRight size={18} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} aria-hidden="true" />
    </Link>
  );
}
