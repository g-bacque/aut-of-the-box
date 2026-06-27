import { Link, useParams } from 'react-router-dom';
import { Check, ChevronDown, ArrowRight } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import { guidedRoutes } from '../data/mock.js';
import { useProgress } from '../context/ProgressContext.jsx';

export default function GuidedRoute() {
  const { id } = useParams();
  const route = guidedRoutes.find((r) => r.id === id);
  const { getRouteState, markDone, selectStep } = useProgress();

  if (!route) {
    return (
      <SectionScreen title="Ruta" back="/asistente" showNav={false}>
        <div className="placeholder-note">No se ha encontrado esta ruta.</div>
      </SectionScreen>
    );
  }

  const total = route.steps.length;
  const { current, completed } = getRouteState(id);
  const percent = Math.round((completed.length / total) * 100);

  return (
    <SectionScreen title="" back="/asistente" showNav={false}>
      <h1 className="display" style={{ fontSize: 22, marginTop: 6 }}>
        {route.title}
      </h1>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '4px 0 0' }}>
        {route.subtitle} · {total} pasos
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0 22px' }}>
        <div className="progress-track" style={{ flex: 1 }}>
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <span style={{ fontSize: 12, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
          Paso {current} de {total}
        </span>
      </div>

      <div className="stepper">
        <div className="stepper__line" />
        {route.steps.map((step, i) => {
          const pos = i + 1;
          const done = completed.includes(pos);
          const isCurrent = pos === current;

          let circleClass = 'step__circle step__circle--upcoming';
          if (done) circleClass = 'step__circle step__circle--done';
          else if (isCurrent) circleClass = 'step__circle step__circle--current';

          return (
            <div className="step" key={pos}>
              <span className={circleClass}>
                {done ? <Check size={18} aria-hidden="true" /> : pos}
              </span>

              {isCurrent ? (
                <div className="step__panel">
                  <div className="step__title" style={{ fontSize: 15 }}>
                    {step.title}
                  </div>
                  <p className="step__body">{step.body}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                    {step.ctaLabel && (
                      <Link
                        className="btn btn--primary pressable"
                        to={step.ctaRouteId ? `/asistente/ruta/${step.ctaRouteId}` : '/recursos'}
                        style={{ flex: 'initial' }}
                      >
                        {step.ctaLabel} <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    )}
                    <button
                      className="btn btn--outline pressable"
                      style={{ flex: 'initial' }}
                      onClick={() => markDone(id, pos, total)}
                    >
                      Marcar hecho
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="step__row"
                  onClick={() => selectStep(id, pos)}
                  aria-label={`Abrir paso ${pos}: ${step.title}`}
                >
                  <span style={{ color: done ? 'var(--text-secondary)' : 'var(--text-secondary)' }}>
                    {step.title}
                  </span>
                  {done ? (
                    <span style={{ fontSize: 12, color: 'var(--aotb-olive)', fontWeight: 700 }}>
                      Hecho
                    </span>
                  ) : (
                    <ChevronDown size={18} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ height: 8 }} />
    </SectionScreen>
  );
}
