import { Check, X } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import { insurers, policy } from '../data/mock.js';

export default function Coverage() {
  return (
    <SectionScreen title="Coberturas" back="/gestiones" showNav={false}>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: '14px 0 12px' }}>
        Qué cubre cada mutua para terapias de TEA. Tu aseguradora actual aparece marcada.
      </p>

      {insurers.map((ins) => {
        const isMine = ins.name === policy.insurerName;
        return (
          <div
            key={ins.id}
            className="card"
            style={{
              marginBottom: 8,
              padding: 14,
              borderColor: isMine ? 'var(--aotb-red)' : 'var(--border-soft)',
              borderWidth: isMine ? 2 : 1,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 15, fontWeight: 700 }}>{ins.name}</span>
              {isMine && <span className="badge badge--lime">Tu mutua</span>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0' }}>
              {ins.coversTherapy ? (
                <>
                  <Check size={16} style={{ color: 'var(--aotb-olive)' }} aria-hidden="true" />
                  <span style={{ fontSize: 13, fontWeight: 700 }}>Cubre terapias</span>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>· {ins.sessions}</span>
                </>
              ) : (
                <>
                  <X size={16} style={{ color: 'var(--aotb-red)' }} aria-hidden="true" />
                  <span style={{ fontSize: 13, fontWeight: 700 }}>No cubre terapias</span>
                </>
              )}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.45 }}>{ins.note}</p>
          </div>
        );
      })}
    </SectionScreen>
  );
}
