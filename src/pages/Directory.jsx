import { Building2, Phone, Check } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import { insurers } from '../data/mock.js';

export default function Directory() {
  return (
    <SectionScreen title="Directorio de mutuas" back="/gestiones" showNav={false}>
      <div style={{ height: 14 }} />
      {insurers.map((ins) => (
        <div
          key={ins.id}
          className="card"
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}
        >
          <span
            style={{
              width: 42,
              height: 42,
              borderRadius: 13,
              background: 'var(--aotb-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Building2 size={20} style={{ color: 'var(--aotb-red)' }} aria-hidden="true" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{ins.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              {ins.coversTherapy ? (
                <>
                  <Check size={13} style={{ verticalAlign: '-2px', color: 'var(--aotb-olive)' }} aria-hidden="true" />{' '}
                  Cubre terapias TEA
                </>
              ) : (
                'No cubre terapias TEA'
              )}
            </div>
          </div>
          <a
            href={`tel:${ins.phone}`}
            aria-label={`Llamar a ${ins.name}`}
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              border: '1px solid var(--border-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--aotb-red)',
              flexShrink: 0,
            }}
          >
            <Phone size={18} aria-hidden="true" />
          </a>
        </div>
      ))}
    </SectionScreen>
  );
}
