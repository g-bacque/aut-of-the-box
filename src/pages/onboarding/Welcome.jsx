import { useNavigate } from 'react-router-dom';
import { Folder, MessageSquare, Shield } from 'lucide-react';
import StepDots from '../../components/StepDots.jsx';

function Value({ icon: Icon, title, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 14 }}>
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
        <Icon size={20} style={{ color: 'var(--aotb-red)' }} aria-hidden="true" />
      </span>
      <div>
        <div style={{ fontSize: 14, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.4 }}>{sub}</div>
      </div>
    </div>
  );
}

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="screen">
      <div style={{ padding: '40px 24px 0', textAlign: 'center' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--aotb-lime)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 18px',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 30,
            color: 'var(--aotb-maroon)',
          }}
        >
          ∞
        </div>
        <h1 className="display" style={{ fontSize: 24, marginBottom: 8 }}>
          Bienvenida a Aut Of The Box
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          No estás sola. Reunimos todo lo que tu familia necesita tras el diagnóstico,
          en un solo lugar.
        </p>
      </div>

      <div style={{ padding: '28px 24px 0' }}>
        <Value
          icon={Folder}
          title="Recursos cerca de ti"
          sub="Terapias, centros y ayudas filtrados para tu caso."
        />
        <Value
          icon={MessageSquare}
          title="Trámites paso a paso"
          sub="Rutas guiadas que convierten lo confuso en sencillo."
        />
        <Value
          icon={Shield}
          title="Mutuas sin líos"
          sub="Coberturas y reembolsos siempre bajo control."
        />
      </div>

      <div style={{ padding: '30px 24px 26px', marginTop: 'auto' }}>
        <StepDots total={3} current={0} />
        <button
          className="btn btn--primary pressable"
          style={{ width: '100%', marginTop: 18 }}
          onClick={() => navigate('/onboarding/cuenta')}
        >
          Empezar
        </button>
      </div>
    </div>
  );
}
