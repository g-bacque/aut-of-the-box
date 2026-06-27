import { Link } from 'react-router-dom';
import { Plus, ChevronRight } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import { REIMBURSEMENT_STATUSES } from '../data/mock.js';
import { euro, formatDate } from '../lib/format.js';
import { useReimbursements } from '../context/ReimbursementsContext.jsx';

const statusLabel = (id) => REIMBURSEMENT_STATUSES.find((s) => s.id === id)?.label || id;

export default function ReimbursementList() {
  const { items } = useReimbursements();

  const newButton = (
    <Link
      to="/gestiones/reembolsos/nuevo"
      aria-label="Nuevo reembolso"
      style={{ color: 'var(--aotb-red)', display: 'flex' }}
    >
      <Plus size={22} aria-hidden="true" />
    </Link>
  );

  return (
    <SectionScreen title="Reembolsos" back="/gestiones" action={newButton} showNav={false}>
      <div style={{ height: 14 }} />
      {items.map((r) => (
        <Link
          key={r.id}
          className="card pressable"
          to={`/gestiones/reembolsos/${r.id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 8,
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{r.concept}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              {euro(r.amount)} · {formatDate(r.submittedAt)}
            </div>
          </div>
          <span
            className={'badge ' + (r.status === 'pagado' ? 'badge--lime' : 'badge--soft')}
          >
            {statusLabel(r.status)}
          </span>
          <ChevronRight size={18} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
        </Link>
      ))}
    </SectionScreen>
  );
}
