import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'aotb_profile';

const DEFAULT = {
  onboarded: false,
  user: { name: '' },
  child: null,
};

const ProfileContext = createContext(null);

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // El estado sigue en memoria si el navegador bloquea el almacenamiento.
    }
  }, [profile]);

  // Guarda el nombre de la persona durante el onboarding.
  const setUserName = (name) =>
    setProfile((prev) => ({ ...prev, user: { ...prev.user, name } }));

  // Cierra el onboarding guardando el perfil del niño/a.
  const completeOnboarding = (child) =>
    setProfile((prev) => ({ ...prev, child, onboarded: true }));

  // Permite actualizar el perfil del niño/a más adelante.
  const updateChild = (child) => setProfile((prev) => ({ ...prev, child }));

  // Reinicia el flujo (equivale a cerrar sesión en esta fase).
  const resetOnboarding = () => setProfile(DEFAULT);

  return (
    <ProfileContext.Provider
      value={{ profile, setUserName, completeOnboarding, updateChild, resetOnboarding }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile debe usarse dentro de ProfileProvider');
  return ctx;
}
