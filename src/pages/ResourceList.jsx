import { useParams } from 'react-router-dom';
import SectionScreen from '../components/SectionScreen.jsx';
import ResourceCard from '../components/ResourceCard.jsx';
import { resourceCategories, resources } from '../data/mock.js';

export default function ResourceList() {
  const { slug } = useParams();
  const category = resourceCategories.find((c) => c.slug === slug);
  const list = resources.filter((r) => r.category === slug);

  return (
    <SectionScreen title={category ? category.name : 'Categoría'} back="/recursos" showNav={false}>
      <p className="section-label" style={{ margin: '14px 0 9px' }}>
        {list.length} {list.length === 1 ? 'recurso' : 'recursos'}
      </p>
      {list.length > 0 ? (
        list.map((r) => <ResourceCard key={r.id} resource={r} />)
      ) : (
        <div className="placeholder-note">Todavía no hay recursos en esta categoría.</div>
      )}
    </SectionScreen>
  );
}
