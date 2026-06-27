import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import StepDots from '../../components/StepDots.jsx';
import { useProfile } from '../../context/ProfileContext.jsx';

const COMUNIDADES = [
  'Andalucía', 'Aragón', 'Asturias', 'Baleares', 'Canarias', 'Cantabria',
  'Castilla-La Mancha', 'Castilla y León', 'Cataluña', 'Comunidad Valenciana',
  'Extremadura', 'Galicia', 'La Rioja', 'Madrid', 'Murcia', 'Navarra', 'País Vasco',
];

const INTERESTS = ['Música', 'Animales', 'Dibujo', 'Trenes', 'Agua', 'Números', 'Naturaleza'];

export default function ChildProfile() {
  const navigate = useNavigate();
  const { completeOnboarding } = useProfile();

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [diagnosisDate, setDiagnosisDate] = useState('');
  const [supportLevel, setSupportLevel] = useState(null);
  const [unsure, setUnsure] = useState(false);
  const [comunidad, setComunidad] = useState('');
  const [interests, setInterests] = useState([]);
  const [error, setError] = useState('');

  const pickLevel = (lvl) => {
    setSupportLevel(lvl);
    setUnsure(false);
  };

  const toggleUnsure = () => {
    setUnsure((u) => !u);
    setSupportLevel(null);
  };

  const toggleInterest = (i) =>
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const submit = () => {
    if (!name.trim()) return setError('Indica el nombre.');
    if (!birthDate) return setError('Indica la fecha de nacimiento.');
    completeOnboarding({
      name: name.trim(),
      birthDate,
      diagnosisDate: diagnosisDate || null,
      supportLevel: unsure ? null : supportLevel,
      comunidad: comunidad || null,
      interests,
    });
    navigate('/');
  };

  const initial = name.trim() ? name.trim()[0].toUpperCase() : '·';

  return (
    <div className="screen">
      <header className="onb-header">
        <Link to="/onboarding/cuenta" aria-label="Volver" style={{ color: 'var(--text-secondary)', display: 'flex' }}>
          <ArrowLeft size={22} aria-hidden="true" />
        </Link>
        <StepDots total={3} current={2} />
        <span style={{ width: 22 }} />
      </header>

      <div className="screen-body">
        <h1 className="display" style={{ fontSize: 22, marginTop: 8 }}>
          El perfil de tu hijo/a
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: '4px 0 18px' }}>
          Con estos datos personalizamos los recursos, las ayudas y la información.
          Puedes cambiarlos cuando quieras.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <span
            style={{
              width: 68,
              height: 68,
              borderRadius: '50%',
              background: 'var(--aotb-blue)',
              color: 'var(--aotb-maroon)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 26,
            }}
            aria-hidden="true"
          >
            {initial}
          </span>
        </div>

        <label className="field-label">Nombre</label>
        <input
          className="field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Mateo"
        />

        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <div style={{ flex: 1 }}>
            <label className="field-label">Nacimiento</label>
            <input className="field" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          </div>
          <div style={{ flex: 1 }}>
            <label className="field-label">Diagnóstico</label>
            <input
              className="field"
              type="date"
              value={diagnosisDate}
              onChange={(e) => setDiagnosisDate(e.target.value)}
            />
          </div>
        </div>

        <label className="field-label" style={{ marginTop: 14 }}>
          Nivel de apoyo
        </label>
        <div className="segmented">
          {[1, 2, 3].map((lvl) => (
            <button
              key={lvl}
              className={'segment' + (supportLevel === lvl ? ' is-active' : '')}
              onClick={() => pickLevel(lvl)}
              aria-pressed={supportLevel === lvl}
            >
              Nivel {lvl}
            </button>
          ))}
        </div>
        <button
          className={'chip' + (unsure ? ' is-active' : '')}
          style={{ marginTop: 8 }}
          onClick={toggleUnsure}
          aria-pressed={unsure}
        >
          No estoy seguro/a
        </button>

        <label className="field-label" style={{ marginTop: 16 }}>
          Comunidad autónoma
        </label>
        <select className="field" value={comunidad} onChange={(e) => setComunidad(e.target.value)}>
          <option value="">Selecciona…</option>
          {COMUNIDADES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <label className="field-label" style={{ marginTop: 16 }}>
          Intereses <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>(opcional)</span>
        </label>
        <div className="chip-row">
          {INTERESTS.map((i) => (
            <button
              key={i}
              className={'chip' + (interests.includes(i) ? ' is-active' : '')}
              onClick={() => toggleInterest(i)}
              aria-pressed={interests.includes(i)}
            >
              {i}
            </button>
          ))}
        </div>

        {error && <p style={{ color: 'var(--aotb-red)', fontSize: 13, marginTop: 14 }}>{error}</p>}
      </div>

      <div style={{ padding: '16px 20px 26px' }}>
        <button className="btn btn--primary pressable" style={{ width: '100%' }} onClick={submit}>
          Crear perfil
        </button>
      </div>
    </div>
  );
}
