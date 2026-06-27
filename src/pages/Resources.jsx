import { useState, useMemo } from 'react';
import { Search, Bookmark } from 'lucide-react';
import SectionScreen from '../components/SectionScreen.jsx';
import CategoryTile from '../components/CategoryTile.jsx';
import ResourceCard from '../components/ResourceCard.jsx';
import { resourceCategories, resources, categoryCounts } from '../data/mock.js';

const FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'gratuito', label: 'Gratuito' },
  { id: 'cerca', label: 'Cerca de mí' },
];

export default function Resources() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('todos');

  const q = query.trim().toLowerCase();
  const isSearching = q !== '' || filter !== 'todos';

  const results = useMemo(() => {
    let list = resources;
    if (q) {
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.type.toLowerCase().includes(q)
      );
    }
    if (filter === 'gratuito') list = list.filter((r) => r.isFree);
    if (filter === 'cerca') {
      list = list
        .filter((r) => r.distanceKm != null)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    }
    return list;
  }, [q, filter]);

  const nearby = useMemo(
    () =>
      resources
        .filter((r) => r.distanceKm != null)
        .sort((a, b) => a.distanceKm - b.distanceKm)
        .slice(0, 2),
    []
  );

  const bookmark = (
    <button
      aria-label="Recursos guardados"
      style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', padding: 0 }}
    >
      <Bookmark size={21} aria-hidden="true" />
    </button>
  );

  return (
    <SectionScreen title="Recursos" action={bookmark}>
      <div className="search-bar">
        <Search size={18} style={{ color: 'var(--text-tertiary)' }} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar terapias, centros, ayudas…"
          aria-label="Buscar recursos"
        />
      </div>

      <div className="chip-row">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={'chip' + (filter === f.id ? ' is-active' : '')}
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
          >
            {f.label}
          </button>
        ))}
      </div>

      {isSearching ? (
        <>
          <p className="section-label" style={{ margin: '18px 0 9px' }}>
            {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
          </p>
          {results.length > 0 ? (
            results.map((r) => <ResourceCard key={r.id} resource={r} />)
          ) : (
            <div className="placeholder-note">
              No hay recursos que coincidan. Prueba con otra palabra o quita los filtros.
            </div>
          )}
        </>
      ) : (
        <>
          <p className="section-label" style={{ margin: '18px 0 9px' }}>
            Categorías
          </p>
          <div className="category-grid">
            {resourceCategories.map((c) => (
              <CategoryTile key={c.slug} {...c} count={categoryCounts[c.slug] || 0} />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '20px 0 9px',
            }}
          >
            <span className="section-label">Cerca de ti</span>
          </div>
          {nearby.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </>
      )}

      <div style={{ height: 8 }} />
    </SectionScreen>
  );
}
