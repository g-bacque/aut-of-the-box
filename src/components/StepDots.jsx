// Indicador de pasos: total puntos, con el actual alargado y en color.
export default function StepDots({ total, current }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }} aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            width: i === current ? 18 : 6,
            height: 6,
            borderRadius: 3,
            background: i === current ? 'var(--aotb-red)' : 'var(--border-soft)',
            transition: 'width 0.2s ease',
          }}
        />
      ))}
    </div>
  );
}
