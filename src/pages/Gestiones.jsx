import { Link } from 'react-router-dom';
import { Shield, Phone, Files, ArrowLeftRight, Building2, Receipt } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import ToolTile from '../components/ToolTile.jsx';
import StatusTracker from '../components/StatusTracker.jsx';
import { policy } from '../data/mock.js';
import { euro } from '../lib/format.js';
import { useReimbursements } from '../context/ReimbursementsContext.jsx';

export default function Gestiones() {
  const { items } = useReimbursements();
  const inProgress = items.find((r) => r.status !== 'pagado');

  return (
    <SectionScreen title="Gestiones">
      {/* Tu aseguradora */}
      <p className="section-label" style={{ margin: '16px 0 9px' }}>
        Tu aseguradora
      </p>
      <div className="card" style={{ padding: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span
            style={{
              width: 42,
              height: 42,
              borderRadius: 13,
              background: 'var(--aotb-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Shield size={22} style={{ color: 'var(--aotb-red)' }} aria-hidden="true" />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{policy.insurerName}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              {policy.plan} · nº {policy.policyNumber}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <a className="btn btn--outline pressable" href={`tel:${policy.phone}`}>
            <Phone size={16} aria-hidden="true" /> Llamar
          </a>
          <Link className="btn btn--primary pressable" to="/gestiones/coberturas">
            Ver cobertura
          </Link>
        </div>
      </div>

      {/* Trámites en curso */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px 0 9px',
        }}
      >
        <span className="section-label">Trámites en curso</span>
        <Link to="/gestiones/reembolsos" style={{ fontSize: 12, color: 'var(--aotb-red)', textDecoration: 'none' }}>
          Ver todos
        </Link>
      </div>

      {inProgress ? (
        <Link
          className="card pressable"
          to={`/gestiones/reembolsos/${inProgress.id}`}
          style={{ display: 'block', textDecoration: 'none', color: 'var(--text-primary)', padding: 14 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>Reembolso · {inProgress.concept}</span>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{euro(inProgress.amount)}</span>
          </div>
          <StatusTracker status={inProgress.status} />
        </Link>
      ) : (
        <div className="placeholder-note">No tienes trámites en curso ahora mismo.</div>
      )}

      {/* Herramientas */}
      <p className="section-label" style={{ margin: '20px 0 9px' }}>
        Herramientas
      </p>
      <div className="category-grid">
        <ToolTile to="/gestiones/documentos" Icon={Files} name="Mis documentos" sub="Informes, facturas" tint="var(--aotb-blue)" />
        <ToolTile to="/gestiones/coberturas" Icon={ArrowLeftRight} name="Comparar coberturas" sub="Qué cubre cada mutua" tint="var(--aotb-lime)" />
        <ToolTile to="/gestiones/directorio" Icon={Building2} name="Directorio de mutuas" sub="Buscar aseguradoras" tint="var(--aotb-blue)" />
        <ToolTile to="/gestiones/reembolsos/nuevo" Icon={Receipt} name="Nuevo reembolso" sub="Subir factura" tint="var(--aotb-lime)" />
      </div>

      <div style={{ height: 8 }} />
    </SectionScreen>
  );
}
