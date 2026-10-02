# Skillia — AI Skills for the Modern Workforce

Sitio corporativo de Skillia (programa de capacitación y adopción de IA para empresas), migrado de WordPress a Next.js.

**Stack:** TypeScript · Next.js 16.3 (App Router) · React 19.2 · Tailwind CSS 4 + `@tailwindcss/postcss` · Geist (+ Outfit) vía `next/font` · ESLint 9.

## Páginas
- `/` — Inicio
- `/para-quien` — selector por tamaño de empresa (Start/Pro/Team/Business/Enterprise)
- `/metodologia` — modelo, niveles, talleres, ruta AI Builder, asesoría LLM

## Detalles
- Bilingüe ES/EN: cookie `skillia-locale`, copy completo en `src/lib/content.ts` (es + en), selector en el header.
- Neón: anillo animado `.sk-neon` (conic-gradient + `@property`) en `src/app/globals.css`.
- Fotos: Pexels (licencia libre) — human/robot hands #8386434 y robot hand + network #8386437.
- Robot mascota (`src/components/mascot.tsx`): recorre la página, cambia de pose y visita secciones marcadas con `data-bot="pose|mensaje"`. Respeta `prefers-reduced-motion`.
- Contenido en `src/lib/content.ts`.
- Formulario de diagnóstico: server action `src/app/actions.ts`. **Aún sin proveedor de correo**: las solicitudes quedan en los logs como `[SKILLIA_LEAD]`.

## Desarrollo
```bash
npm install
npm run dev
```
