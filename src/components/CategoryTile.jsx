import { Link } from 'react-router-dom';
import { categoryMeta } from '../data/categoryMeta.js';

export default function CategoryTile({ slug, name, count }) {
  const { Icon, tint } = categoryMeta[slug];
  return (
    <Link className="category-tile pressable" to={`/recursos/categoria/${slug}`}>
      <span className="category-tile__icon" style={{ background: tint }}>
        <Icon size={22} strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="category-tile__name">{name}</span>
      <span className="category-tile__count">
        {count} {count === 1 ? 'recurso' : 'recursos'}
      </span>
    </Link>
  );
}
