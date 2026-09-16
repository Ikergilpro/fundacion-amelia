# Fundación AMELIA A.C.

Sitio institucional público de Fundación AMELIA A.C., asociación civil en Chihuahua, México.

AMELIA significa Acompañamiento Multidisciplinario, Empatía, Lenguajes, Inclusión y Autonomía.

Lema: *Cada forma de comunicar abre un camino.*

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide Icons

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Logotipo

Coloca el archivo oficial en `public/brand/logo.png` o `public/brand/logo.svg` y cambia `brand.hasOfficialLogo` a `true` en `src/data/site.ts`.

## Contenido editable

El texto de programas, valores, navegación y plan de desarrollo vive en `src/data/`.

## Formularios

Los formularios son solo frontend. No envían datos a un servidor. Están preparados para una conexión posterior (por ejemplo, Supabase).

## Variables de entorno

Copia `.env.example` y define `NEXT_PUBLIC_SITE_URL` cuando exista dominio institucional.

No inventes correo, teléfono, domicilio, cifras ni testimonios.
