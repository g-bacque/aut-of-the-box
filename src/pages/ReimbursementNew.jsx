import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import { useReimbursements } from '../context/ReimbursementsContext.jsx';

export default function ReimbursementNew() {
  const navigate = useNavigate();
  const { addReimbursement } = useReimbursements();
  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (!concept.trim()) return setError('Indica el concepto del reembolso.');
    if (!amount || Number(amount) <= 0) return setError('Indica un importe válido.');
    const item = addReimbursement({ concept: concept.trim(), amount });
    navigate(`/gestiones/reembolsos/${item.id}`);
  };

  return (
    <SectionScreen title="Nuevo reembolso" back="/gestiones/reembolsos" showNav={false}>
      <div style={{ height: 14 }} />

      <label className="field-label">Concepto</label>
      <input
        className="field"
        type="text"
        value={concept}
        onChange={(e) => setConcept(e.target.value)}
        placeholder="Ej. Sesión de logopedia"
      />

      <label className="field-label" style={{ marginTop: 14 }}>
        Importe (€)
      </label>
      <input
        className="field"
        type="number"
        inputMode="decimal"
        min="0"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0"
      />

      <label className="field-label" style={{ marginTop: 14 }}>
        Factura
      </label>
      <div
        className="field"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: 'var(--text-tertiary)',
          cursor: 'not-allowed',
        }}
        title="Disponible al conectar el almacenamiento (Fase 3)"
      >
        <Upload size={16} aria-hidden="true" /> Adjuntar factura (próximamente)
      </div>

      {error && (
        <p style={{ color: 'var(--aotb-red)', fontSize: 13, marginTop: 12 }}>{error}</p>
      )}

      <button
        className="btn btn--primary pressable"
        style={{ width: '100%', marginTop: 20 }}
        onClick={submit}
      >
        Enviar solicitud
      </button>
    </SectionScreen>
  );
}
