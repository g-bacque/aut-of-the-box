import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Phone, ExternalLink, Bookmark, BookmarkCheck } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import { resources } from '../data/mock.js';
import { categoryMeta } from '../data/categoryMeta.js';

export default function ResourceDetail() {
  const { id } = useParams();
  const resource = resources.find((r) => r.id === id);
  const [saved, setSaved] = useState(false);

  if (!resource) {
    return (
      <SectionScreen title="Recurso" back="/recursos" showNav={false}>
        <div className="placeholder-note">No se ha encontrado este recurso.</div>
      </SectionScreen>
    );
  }

  const { Icon, tint } = categoryMeta[resource.category];

  const saveButton = (
    <button
      aria-label={saved ? 'Quitar de guardados' : 'Guardar recurso'}
      aria-pressed={saved}
      onClick={() => setSaved((s) => !s)}
      style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', padding: 0 }}
    >
      {saved ? (
        <BookmarkCheck size={21} style={{ color: 'var(--aotb-red)' }} aria-hidden="true" />
      ) : (
        <Bookmark size={21} aria-hidden="true" />
      )}
    </button>
  );

  return (
    <SectionScreen title="" back="/recursos" action={saveButton} showNav={false}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginTop: 6 }}>
        <span
          className="resource-card__icon"
          style={{ background: tint, width: 52, height: 52, borderRadius: 15 }}
        >
          <Icon size={26} strokeWidth={2} aria-hidden="true" />
        </span>
        <div>
          <h1 className="display" style={{ fontSize: 21, lineHeight: 1.15 }}>
            {resource.title}
          </h1>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{resource.type}</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '14px 0' }}>
        {resource.isFree && <span className="badge badge--lime">Gratuito</span>}
        <span className="badge badge--soft">{resource.comunidad || 'Ámbito estatal'}</span>
        {resource.rating != null && (
          <span className="badge badge--soft">
            <Star size={13} style={{ verticalAlign: '-2px', color: 'var(--aotb-olive)' }} aria-hidden="true" />{' '}
            {resource.rating.toLocaleString('es-ES')}
          </span>
        )}
        {resource.distanceKm != null && (
          <span className="badge badge--soft">
            <MapPin size={13} style={{ verticalAlign: '-2px' }} aria-hidden="true" />{' '}
            {resource.distanceKm.toLocaleString('es-ES')} km
          </span>
        )}
      </div>

      <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.6 }}>
        {resource.description}
      </p>

      <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
        {resource.phone && (
          <a className="btn btn--primary pressable" href={`tel:${resource.phone}`}>
            <Phone size={16} aria-hidden="true" /> Llamar
          </a>
        )}
        {resource.url && (
          <a
            className="btn btn--outline pressable"
            href={resource.url}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={16} aria-hidden="true" /> Ver web
          </a>
        )}
      </div>
    </SectionScreen>
  );
}
