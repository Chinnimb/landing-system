# Landing System — Fitness & Wellness Influencers

Sistema de templates reutilizables para landing pages de telehealth/fitness influencers.

## Stack
- React + Vite
- Tailwind CSS v4
- Framer Motion (animaciones)

## Cómo clonar para un nuevo influencer
1. Duplicá `src/config/influencer.js` (ej: `src/config/maria-fit.js`)
2. Cambiá textos, colores, fotos, CTA, oferta, testimonios
3. En `src/App.jsx`, importá el nuevo config y pasalo como prop:
   ```jsx
   import mariaConfig from "./config/maria-fit";
   <MobileLandingPage config={mariaConfig} />
   ```
4. Los componentes (`src/components/*`) NO se tocan — son genéricos.

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
