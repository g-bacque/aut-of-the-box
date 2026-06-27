import { Link } from 'react-router-dom';

export default function ToolTile({ to, Icon, name, sub, tint }) {
  return (
    <Link className="category-tile pressable" to={to}>
      <span className="category-tile__icon" style={{ background: tint }}>
        <Icon size={22} strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="category-tile__name">{name}</span>
      <span className="category-tile__count">{sub}</span>
    </Link>
  );
}
