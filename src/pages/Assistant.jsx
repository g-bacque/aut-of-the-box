import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronDown } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import RouteCard from '../components/RouteCard.jsx';
import { guidedRoutes, faqs } from '../data/mock.js';
import { useProgress } from '../context/ProgressContext.jsx';

export default function Assistant() {
  const { getRouteState } = useProgress();
  const [openFaq, setOpenFaq] = useState(null);

  // Ruta empezada (con al menos un paso completado) para "continúa donde lo dejaste".
  const inProgress = guidedRoutes.find((r) => getRouteState(r.id).completed.length > 0);
  const inProgressState = inProgress ? getRouteState(inProgress.id) : null;
  const percent = inProgress
    ? Math.round((inProgressState.completed.length / inProgress.steps.length) * 100)
    : 0;

  return (
    <SectionScreen title="Asistente">
      {/* Entrada de chat, preparada para cuando se conecte la IA */}
      <div className="chat-entry" aria-label="Asistente con IA, en preparación">
        <MessageSquare size={20} style={{ color: 'var(--aotb-red)' }} aria-hidden="true" />
        <span className="chat-entry__placeholder">Escríbeme tu duda…</span>
        <span className="chat-entry__tag">IA · en preparación</span>
      </div>

      {inProgress && (
        <>
          <p className="section-label" style={{ margin: '18px 0 9px' }}>
            Continúa donde lo dejaste
          </p>
          <Link className="continue-card pressable" to={`/asistente/ruta/${inProgress.id}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 700 }}>{inProgress.title}</span>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                Paso {inProgressState.current} de {inProgress.steps.length}
              </span>
            </div>
            <div className="progress-track" style={{ marginTop: 10 }}>
              <div className="progress-fill" style={{ width: `${percent}%` }} />
            </div>
          </Link>
        </>
      )}

      <p className="section-label" style={{ margin: '18px 0 9px' }}>
        Rutas guiadas
      </p>
      {guidedRoutes.map((r) => (
        <RouteCard key={r.id} route={r} />
      ))}

      <p className="section-label" style={{ margin: '20px 0 9px' }}>
        Preguntas frecuentes
      </p>
      {faqs.map((f, i) => {
        const open = openFaq === i;
        return (
          <div key={i} className="faq-item">
            <button
              className="faq-item__q"
              aria-expanded={open}
              onClick={() => setOpenFaq(open ? null : i)}
            >
              <span>{f.q}</span>
              <ChevronDown
                size={18}
                style={{
                  flexShrink: 0,
                  transition: 'transform 0.15s ease',
                  transform: open ? 'rotate(180deg)' : 'none',
                  color: 'var(--text-tertiary)',
                }}
                aria-hidden="true"
              />
            </button>
            {open && <p className="faq-item__a">{f.a}</p>}
          </div>
        );
      })}

      <div style={{ height: 8 }} />
    </SectionScreen>
  );
}
