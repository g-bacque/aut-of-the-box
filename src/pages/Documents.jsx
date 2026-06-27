import { FileText } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import { documents } from '../data/mock.js';
import { formatDate } from '../lib/format.js';

export default function Documents() {
  return (
    <SectionScreen title="Mis documentos" back="/gestiones" showNav={false}>
      <div style={{ height: 14 }} />
      {documents.map((d) => (
        <div
          key={d.id}
          className="card"
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}
        >
          <span
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: 'var(--aotb-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <FileText size={20} style={{ color: 'var(--aotb-red)' }} aria-hidden="true" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{d.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              {d.type} · {formatDate(d.date)}
            </div>
          </div>
        </div>
      ))}
    </SectionScreen>
  );
}
