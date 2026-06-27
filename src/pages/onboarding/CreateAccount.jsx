import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import StepDots from '../../components/StepDots.jsx';
import { useProfile } from '../../context/ProfileContext.jsx';

export default function CreateAccount() {
  const navigate = useNavigate();
  const { setUserName } = useProfile();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (!name.trim()) return setError('Indica tu nombre.');
    if (!email.includes('@')) return setError('Indica un email válido.');
    if (password.length < 6) return setError('La contraseña debe tener al menos 6 caracteres.');
    setUserName(name.trim());
    navigate('/onboarding/perfil');
  };

  return (
    <div className="screen">
      <header className="onb-header">
        <Link to="/bienvenida" aria-label="Volver" style={{ color: 'var(--text-secondary)', display: 'flex' }}>
          <ArrowLeft size={22} aria-hidden="true" />
        </Link>
        <StepDots total={3} current={1} />
        <span style={{ width: 22 }} />
      </header>

      <div className="screen-body">
        <h1 className="display" style={{ fontSize: 22, marginTop: 8 }}>
          Crea tu cuenta
        </h1>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: '4px 0 20px' }}>
          Tu cuenta protege la información de tu familia. Solo tú podrás acceder a ella.
        </p>

        <label className="field-label">Tu nombre</label>
        <input
          className="field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Laura"
          autoComplete="name"
        />

        <label className="field-label" style={{ marginTop: 14 }}>
          Email
        </label>
        <input
          className="field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
        />

        <label className="field-label" style={{ marginTop: 14 }}>
          Contraseña
        </label>
        <input
          className="field"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 6 caracteres"
          autoComplete="new-password"
        />

        <p style={{ fontSize: 12, color: 'var(--text-tertiary)', lineHeight: 1.5, marginTop: 14 }}>
          Tratamos tus datos según el RGPD. Al continuar, aceptas la política de
          privacidad. Como los datos son de un menor, el consentimiento lo das como
          madre, padre o tutor legal.
        </p>

        {error && <p style={{ color: 'var(--aotb-red)', fontSize: 13, marginTop: 12 }}>{error}</p>}
      </div>

      <div style={{ padding: '12px 20px 26px' }}>
        <button className="btn btn--primary pressable" style={{ width: '100%' }} onClick={submit}>
          Continuar
        </button>
      </div>
    </div>
  );
}
