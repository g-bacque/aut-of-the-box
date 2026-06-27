import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { ProgressProvider } from './context/ProgressContext.jsx';
import { ReimbursementsProvider } from './context/ReimbursementsContext.jsx';
import { ProfileProvider } from './context/ProfileContext.jsx';
import './styles/global.css';

// Usamos HashRouter porque es lo más robusto en GitHub Pages:
// evita los errores 404 al recargar o entrar directo a una ruta,
// ya que la navegación va después de la almohadilla (#) y no llega al servidor.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ProfileProvider>
        <ProgressProvider>
          <ReimbursementsProvider>
            <App />
          </ReimbursementsProvider>
        </ProgressProvider>
      </ProfileProvider>
    </HashRouter>
  </React.StrictMode>
);
