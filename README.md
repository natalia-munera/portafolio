# Landing — Artista Formadora en Música

Sitio construido con **React + Vite + TypeScript + Tailwind CSS v4**.
Diseñado para actualizarse fácilmente sin tocar componentes: toda la
información vive en `src/content/`.

## Estructura

```
src/
├── content/          ← EDITA AQUÍ para actualizar información
│   ├── profile.ts     (nombre, bio, foto, contacto)
│   ├── videos.ts       (videos de YouTube)
│   ├── links.ts         (enlaces externos: Spotify, prensa, redes...)
│   └── experience.ts    (experiencia laboral y formación académica)
├── types/
│   └── content.types.ts ← define la "forma" de cada dato (TypeScript)
├── components/
│   ├── sections/        (Hero, About, VideoGallery, LinksGrid, etc.)
│   └── ui/               (Card, YoutubeEmbed, SectionWrapper: reutilizables)
└── App.tsx              ← controla el ORDEN de las secciones
```

## Cómo actualizar contenido (lo más común)

### Agregar un video
Abre `src/content/videos.ts` y agrega un objeto al arreglo:

```ts
{
  id: 'video-3',
  title: 'Título del video',
  youtubeId: 'ABC123xyz', // solo el ID, no la URL completa
  description: 'Descripción breve',
  tags: ['recital'],
}
```

### Agregar un enlace
Edita `src/content/links.ts` de la misma forma.

### Agregar experiencia o formación
Edita `src/content/experience.ts`. El componente ordena automáticamente
por año, no necesitas preocuparte por el orden.

### Cambiar bio, foto o datos de contacto
Edita `src/content/profile.ts`. Coloca la foto en `public/images/` y
referencia la ruta ahí (ej: `/images/profile.jpg`).

En todos los casos, TypeScript te avisará si falta un campo obligatorio
o si el tipo de dato no corresponde — no hay forma de "romper" el sitio
por un error de estructura en el contenido.

## Agregar una sección nueva (menos común)

1. Crea el archivo de datos en `src/content/`.
2. Define su tipo en `src/types/content.types.ts`.
3. Crea el componente en `src/components/sections/` que consuma ese archivo.
4. Impórtalo y agrégalo en `src/App.tsx` en el orden que quieras.

Ninguna sección existente se ve afectada por este proceso.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages (gratuito)

### Opción A — Automático (recomendado)
Ya incluye el workflow `.github/workflows/deploy.yml`. Solo debes:

1. Crear un repositorio en GitHub y subir este proyecto.
2. En **Settings → Pages**, seleccionar como fuente "GitHub Actions".
3. Editar `vite.config.ts` y ajustar `base: '/nombre-de-tu-repo/'` para que
   coincida EXACTAMENTE con el nombre de tu repositorio.
4. Cada `push` a `main` desplegará automáticamente.

### Opción B — Manual
```bash
npm run deploy
```
Esto construye el proyecto y publica la carpeta `dist/` a la rama `gh-pages`
usando el paquete `gh-pages` (ya incluido como dependencia de desarrollo).
Luego, en Settings → Pages, selecciona la rama `gh-pages` como fuente.

## Notas técnicas

- Tailwind v4 se configura vía CSS (`src/index.css`, bloque `@theme`), no
  requiere `tailwind.config.js`.
- Los colores/tipografía de marca están centralizados en ese mismo bloque
  `@theme` — cámbialos ahí y se propagan a todo el sitio.
