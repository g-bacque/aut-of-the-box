import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// En desarrollo la app vive en "/".
// Al compilar usamos rutas RELATIVAS ("./"), así los archivos se encuentran
// sin importar el nombre del repositorio en GitHub Pages.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}));
