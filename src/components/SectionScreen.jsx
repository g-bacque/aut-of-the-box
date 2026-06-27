import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BottomNav from './BottomNav.jsx';

export default function SectionScreen({ title, back, action, children, showNav = true }) {
  return (
    <div className="screen">
      <header className="screen-header">
        {back ? (
          <Link
            to={back}
            aria-label="Volver"
            style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)' }}
          >
            <ArrowLeft size={22} aria-hidden="true" />
          </Link>
        ) : (
          <h1 className="screen-header__title">{title}</h1>
        )}
        {back && <h1 className="screen-header__title">{title}</h1>}
        {action || <span style={{ width: 22 }} />}
      </header>

      <div className="screen-body">{children}</div>

      {showNav && <BottomNav />}
    </div>
  );
}
