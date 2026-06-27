import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'aotb_progress';

// Estado inicial de ejemplo: la ruta del diagnóstico empezada (paso 1 hecho).
const DEFAULT_PROGRESS = {
  diagnostico: { current: 2, completed: [1] },
};

const ProgressContext = createContext(null);

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_PROGRESS;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Sin persistencia si el navegador la bloquea; el estado sigue en memoria.
    }
  }, [progress]);

  const getRouteState = (routeId) => progress[routeId] || { current: 1, completed: [] };

  // Marca el paso actual como hecho y avanza al siguiente.
  const markDone = (routeId, step, total) => {
    setProgress((prev) => {
      const state = prev[routeId] || { current: 1, completed: [] };
      const completed = state.completed.includes(step)
        ? state.completed
        : [...state.completed, step];
      const current = step < total ? step + 1 : step;
      return { ...prev, [routeId]: { current, completed } };
    });
  };

  // Selecciona qué paso mostrar abierto, sin cambiar lo completado.
  const selectStep = (routeId, step) => {
    setProgress((prev) => {
      const state = prev[routeId] || { current: 1, completed: [] };
      return { ...prev, [routeId]: { ...state, current: step } };
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, getRouteState, markDone, selectStep }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress debe usarse dentro de ProgressProvider');
  return ctx;
}
