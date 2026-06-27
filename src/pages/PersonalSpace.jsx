import { useNavigate } from 'react-router-dom';
import { Calendar, User, LogOut, ChevronRight } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import { nextAppointment } from '../data/mock.js';
import { ageFromBirth } from '../lib/format.js';
import { useProfile } from '../context/ProfileContext.jsx';

function Row({ icon: Icon, title, sub, onClick }) {
  return (
    <button
      className="card pressable"
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 8,
        width: '100%',
        textAlign: 'left',
        border: '1px solid var(--border-soft)',
        background: '#fff',
      }}
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
        <Icon size={20} style={{ color: 'var(--aotb-red)' }} aria-hidden="true" />
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700 }}>{title}</div>
        {sub && <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{sub}</div>}
      </div>
      <ChevronRight size={18} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
    </button>
  );
}

export default function PersonalSpace() {
  const navigate = useNavigate();
  const { profile, resetOnboarding } = useProfile();
  const child = profile.child;

  const age = child ? ageFromBirth(child.birthDate) : null;
  const levelText =
    child && child.supportLevel ? `nivel de apoyo ${child.supportLevel}` : 'nivel sin especificar';

  const logout = () => {
    resetOnboarding();
    navigate('/bienvenida');
  };

  return (
    <SectionScreen title="Mi espacio" back="/">
      <p className="section-label" style={{ margin: '14px 0 9px' }}>
        Próxima cita
      </p>
      <div
        className="card"
        style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}
      >
        <Calendar size={22} style={{ color: 'var(--aotb-maroon)' }} aria-hidden="true" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700 }}>{nextAppointment.title}</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
            {nextAppointment.when} · {nextAppointment.location}
          </div>
        </div>
      </div>

      <p className="section-label" style={{ margin: '4px 0 9px' }}>
        Ajustes
      </p>
      {child && (
        <Row
          icon={User}
          title={`Perfil de ${child.name}`}
          sub={`${age != null ? age + ' años · ' : ''}${levelText}`}
        />
      )}
      <Row icon={LogOut} title="Cerrar sesión" sub="Reinicia el flujo de entrada" onClick={logout} />
    </SectionScreen>
  );
}
