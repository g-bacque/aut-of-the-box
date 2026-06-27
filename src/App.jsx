import { Routes, Route } from 'react-router-dom';

import RequireOnboarding from './components/RequireOnboarding.jsx';
import Welcome from './pages/onboarding/Welcome.jsx';
import CreateAccount from './pages/onboarding/CreateAccount.jsx';
import ChildProfile from './pages/onboarding/ChildProfile.jsx';
import Home from './pages/Home.jsx';
import PersonalSpace from './pages/PersonalSpace.jsx';
import Resources from './pages/Resources.jsx';
import ResourceList from './pages/ResourceList.jsx';
import ResourceDetail from './pages/ResourceDetail.jsx';
import Assistant from './pages/Assistant.jsx';
import GuidedRoute from './pages/GuidedRoute.jsx';
import Gestiones from './pages/Gestiones.jsx';
import ReimbursementList from './pages/ReimbursementList.jsx';
import ReimbursementNew from './pages/ReimbursementNew.jsx';
import ReimbursementDetail from './pages/ReimbursementDetail.jsx';
import Documents from './pages/Documents.jsx';
import Coverage from './pages/Coverage.jsx';
import Directory from './pages/Directory.jsx';
import Community from './pages/Community.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        {/* Onboarding (sin guard) */}
        <Route path="/bienvenida" element={<Welcome />} />
        <Route path="/onboarding/cuenta" element={<CreateAccount />} />
        <Route path="/onboarding/perfil" element={<ChildProfile />} />

        {/* App principal: requiere haber completado el onboarding */}
        <Route element={<RequireOnboarding />}>
          <Route path="/" element={<Home />} />
          <Route path="/mi-espacio" element={<PersonalSpace />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/recursos/categoria/:slug" element={<ResourceList />} />
          <Route path="/recursos/:id" element={<ResourceDetail />} />
          <Route path="/asistente" element={<Assistant />} />
          <Route path="/asistente/ruta/:id" element={<GuidedRoute />} />
          <Route path="/gestiones" element={<Gestiones />} />
          <Route path="/gestiones/reembolsos" element={<ReimbursementList />} />
          <Route path="/gestiones/reembolsos/nuevo" element={<ReimbursementNew />} />
          <Route path="/gestiones/reembolsos/:id" element={<ReimbursementDetail />} />
          <Route path="/gestiones/documentos" element={<Documents />} />
          <Route path="/gestiones/coberturas" element={<Coverage />} />
          <Route path="/gestiones/directorio" element={<Directory />} />
          <Route path="/comunidad" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
}
