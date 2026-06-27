import { Users } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';

export default function Community() {
  return (
    <SectionScreen title="Comunidad">
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '48px 24px',
          gap: 14,
        }}
      >
        <Users size={40} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
        <h2 className="display" style={{ fontSize: 22 }}>
          Muy pronto
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.5, maxWidth: 280 }}>
          La comunidad —foros, grupos por edades y eventos— llegará en una próxima
          versión. Estamos centrando los primeros pasos en recursos, asistente y gestiones.
        </p>
      </div>
    </SectionScreen>
  );
}
