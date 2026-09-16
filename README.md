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
- Supabase (conexión preparada; aún sin tablas de expedientes)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Logotipo

El logotipo oficial está en `public/brand/logo.jpg`. Si lo cambias, actualiza `brand.logoSrc` en `src/data/site.ts`.

## Contenido editable

El texto de programas, valores, navegación y plan de desarrollo vive en `src/data/`.

## Formularios

Los formularios todavía no envían a Supabase. El cliente está en `src/lib/supabase/client.ts`.

## Variables de entorno

1. Copia `.env.example` a `.env.local` (ya existe en local).
2. En Supabase: **Project Settings → API**.
3. Pega `Project URL` en `NEXT_PUBLIC_SUPABASE_URL`.
4. Pega la **Publishable key** en `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Nunca subas la clave `service_role` ni `sb_secret_`. Esas son secretas.

## Publicar en Render

El servicio es de tipo **Web Service** (no Static Site), porque Next.js necesita un servidor.

- **Build command:** `npm ci && npm run build`
- **Start command:** `npm start`

En el panel de Render, agrega las mismas variables que en `.env.local`, más `NEXT_PUBLIC_SITE_URL` con la URL pública de Render (por ejemplo `https://fundacion-amelia.onrender.com`).
