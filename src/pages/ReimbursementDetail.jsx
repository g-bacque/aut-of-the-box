import { useParams } from 'react-router-dom';
import SectionScreen from '../components/SectionScreen.jsx';
import StatusTracker from '../components/StatusTracker.jsx';
import { euro, formatDate } from '../lib/format.js';
import { useReimbursements } from '../context/ReimbursementsContext.jsx';

export default function ReimbursementDetail() {
  const { id } = useParams();
  const { getById } = useReimbursements();
  const item = getById(id);

  if (!item) {
    return (
      <SectionScreen title="Reembolso" back="/gestiones/reembolsos" showNav={false}>
        <div className="placeholder-note">No se ha encontrado este reembolso.</div>
      </SectionScreen>
    );
  }

  return (
    <SectionScreen title="Reembolso" back="/gestiones/reembolsos" showNav={false}>
      <div style={{ height: 8 }} />
      <h1 className="display" style={{ fontSize: 22 }}>
        {item.concept}
      </h1>
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>
        {euro(item.amount)} · enviado el {formatDate(item.submittedAt)}
      </p>

      <div className="card" style={{ marginTop: 18, padding: '16px 14px' }}>
        <p className="section-label" style={{ margin: '0 0 4px' }}>
          Seguimiento
        </p>
        <StatusTracker status={item.status} />
      </div>

      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, marginTop: 16 }}>
        Te avisaremos cuando cambie el estado. Si tienes dudas sobre este reembolso,
        puedes contactar con tu aseguradora desde la pantalla de Gestiones.
      </p>
    </SectionScreen>
  );
}
