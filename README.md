# Aut Of The Box — App (Fase 1)

Base de la app en React: navegación montada y pantalla de inicio (el "hub" con los
cuatro botones) funcionando con la identidad de marca. Las secciones (Recursos,
Asistente, Gestiones, Comunidad) están como pantallas base con su cabecera y la barra
de navegación, listas para desarrollarse en los siguientes pasos.

## Cómo arrancarlo

Necesitas tener instalado [Node.js](https://nodejs.org) (versión 18 o superior).

```bash
npm install
npm run dev
```

Luego abre en el navegador la dirección que aparece en la terminal (normalmente
http://localhost:5173). Para ver la experiencia como móvil, abre las herramientas de
desarrollo del navegador y activa la vista de dispositivo.

## Qué se puede hacer ya

- **Onboarding completo** en tres pasos: bienvenida, crear cuenta y perfil del niño/a.
  La primera vez la app lo pide; al terminar, recuerda el perfil y entra directa a la Home.
- Pantalla de inicio con los cuatro botones de sección y el acceso a "Mi espacio",
  personalizada con el nombre y el perfil que se introducen en el onboarding.
- Navegar a cada sección y volver al inicio con la barra inferior.
- **Recursos**, **Asistente** y **Gestiones** con contenido real y navegable.
- Comunidad se muestra como "pronto" (sin funcionalidad, a propósito).

Para volver a ver el onboarding, entra en "Mi espacio" y pulsa "Cerrar sesión"
(o borra el almacenamiento local del navegador).

## Estructura

```
src/
├─ styles/      tokens de marca (colores, tipografías) y estilos
├─ lib/         cliente de Supabase (se activa en la Fase 2)
├─ data/        datos de ejemplo (mock) usados en la Fase 1
├─ components/  piezas reutilizables (barra de navegación, botones, layout)
└─ pages/       una pantalla por archivo
```

## Tipografías

DM Sans (texto) y Baloo 2 (titulares) se cargan desde Google Fonts en `index.html`.
Baloo 2 es una sustituta provisional de **Podium Soft**: cuando tengáis la licencia web
de Podium Soft, se autoaloja en `public/fonts/` y se ajusta `--font-display` en
`src/styles/tokens.css`.

## Siguientes pasos

Desarrollar el contenido de cada sección (Recursos, Asistente con sus rutas guiadas,
Gestiones) y luego conectar Supabase, según el plan técnico (`aotb-plan-tecnico.md`).

## Publicar en GitHub Pages

La app ya está preparada para GitHub Pages, con rutas relativas, así que funciona
con cualquier nombre de repositorio sin tener que tocar la configuración.

Pasos:

1. Crea el repositorio en GitHub y sube el código:
   ```bash
   git init
   git add .
   git commit -m "Primera versión"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/aut-of-the-box.git
   git push -u origin main
   ```

2. Instala las dependencias (incluye la herramienta de despliegue):
   ```bash
   npm install
   ```

3. Despliega con un solo comando (compila y publica en la rama `gh-pages`):
   ```bash
   npm run deploy
   ```

4. En GitHub, ve a **Settings → Pages** y en "Source" elige la rama **gh-pages**
   y la carpeta **/ (root)**. Guarda.

5. Espera uno o dos minutos. La app estará en:
   `https://TU-USUARIO.github.io/aut-of-the-box/`

Cada vez que quieras actualizar la versión publicada, vuelve a ejecutar `npm run deploy`.

### Nota sobre las direcciones

La app usa enrutado por almohadilla (las URLs se ven como
`.../aut-of-the-box/#/recursos`). Es a propósito: es la forma más fiable de que la
navegación funcione en GitHub Pages sin errores 404 al recargar la página.
