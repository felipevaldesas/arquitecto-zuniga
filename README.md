# Arquitectos Zúñiga - Angular App

Aplicación web estática desarrollada en Angular 20 y desplegada en **Vercel** 🚀.

## 🚀 Scripts principales

- `npm install` → Instala dependencias
- `npm start` → Levanta servidor local de desarrollo
- `npm run build` → Compila la app en modo producción (`dist/arquitectos-zuniga/browser`)

## 🌍 Deploy en Vercel

1. Subir proyecto a GitHub.
2. Conectar el repo en [Vercel](https://vercel.com).
3. Configurar:
   - **Build Command** → `npm run build`
   - **Output Directory** → `dist/arquitectos-zuniga/browser`
4. Incluir `vercel.json` en la raíz del proyecto:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "angular.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/arquitectos-zuniga/browser"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
