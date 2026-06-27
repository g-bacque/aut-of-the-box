import { createContext, useContext, useEffect, useState } from 'react';
import { seedReimbursements } from '../data/mock.js';

const STORAGE_KEY = 'aotb_reimbursements';

const ReimbursementsContext = createContext(null);

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : seedReimbursements;
  } catch {
    return seedReimbursements;
  }
}

export function ReimbursementsProvider({ children }) {
  const [items, setItems] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // El estado sigue en memoria si el navegador bloquea el almacenamiento.
    }
  }, [items]);

  const addReimbursement = ({ concept, amount }) => {
    const today = new Date().toISOString().slice(0, 10);
    const item = {
      id: 'rb' + Date.now(),
      concept,
      amount: Number(amount),
      status: 'enviado',
      submittedAt: today,
    };
    setItems((prev) => [item, ...prev]);
    return item;
  };

  const getById = (id) => items.find((r) => r.id === id);

  return (
    <ReimbursementsContext.Provider value={{ items, addReimbursement, getById }}>
      {children}
    </ReimbursementsContext.Provider>
  );
}

export function useReimbursements() {
  const ctx = useContext(ReimbursementsContext);
  if (!ctx) throw new Error('useReimbursements debe usarse dentro de ReimbursementsProvider');
  return ctx;
}
