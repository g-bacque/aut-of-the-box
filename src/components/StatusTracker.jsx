import { Check } from 'lucide-react';
import { REIMBURSEMENT_STATUSES } from '../data/mock.js';

export default function StatusTracker({ status }) {
  const currentIndex = REIMBURSEMENT_STATUSES.findIndex((s) => s.id === status);

  return (
    <div className="status-tracker">
      <div className="status-tracker__line" />
      {REIMBURSEMENT_STATUSES.map((s, i) => {
        const done = i < currentIndex;
        const current = i === currentIndex;

        let dotClass = 'status-tracker__dot status-tracker__dot--upcoming';
        if (done) dotClass = 'status-tracker__dot status-tracker__dot--done';
        else if (current) dotClass = 'status-tracker__dot status-tracker__dot--current';

        return (
          <div className="status-tracker__step" key={s.id}>
            <span className={dotClass}>
              {done ? <Check size={13} aria-hidden="true" /> : i + 1}
            </span>
            <span
              className="status-tracker__label"
              style={current ? { color: 'var(--aotb-red)', fontWeight: 700 } : undefined}
            >
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
