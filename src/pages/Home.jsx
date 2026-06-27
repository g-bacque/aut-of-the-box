import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import SectionButton from '../components/SectionButton.jsx';
import { nextAppointment, sections } from '../data/mock.js';
import { useProfile } from '../context/ProfileContext.jsx';

export default function Home() {
  const { profile } = useProfile();
  const userName = profile.user.name || 'allí';

  return (
    <div className="screen">
      <header style={{ padding: '26px 20px 0' }}>
        <p className="eyebrow">AUT OF THE BOX</p>
        <h1 className="display" style={{ fontSize: 31, marginTop: 8 }}>
          Hola,{' '}
          <Link
            to="/mi-espacio"
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              borderBottom: '3px solid var(--aotb-red)',
              paddingBottom: 1,
              whiteSpace: 'nowrap',
            }}
          >
            {userName}
            <ChevronRight
              size={22}
              style={{ verticalAlign: '-4px', color: 'var(--aotb-red)' }}
              aria-hidden="true"
            />
          </Link>
        </h1>
      </header>

      <main style={{ padding: '24px 20px 0' }}>
        <div className="section-grid">
          {sections.map((s) => (
            <SectionButton key={s.id} {...s} />
          ))}
        </div>
      </main>

      <div style={{ padding: '16px 20px 26px' }}>
        <Link className="dark-card pressable" to="/mi-espacio">
          <Calendar size={24} style={{ color: 'var(--aotb-lime)' }} aria-hidden="true" />
          <div style={{ flex: 1 }}>
            <div className="dark-card__title">Mi espacio</div>
            <div className="dark-card__sub">
              Próxima cita · {nextAppointment.title}, {nextAppointment.when.toLowerCase()}
            </div>
          </div>
          <ArrowRight size={19} style={{ color: 'var(--on-dark)' }} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
