import type { VideoResource } from '../types/content.types';

// Para añadir un video nuevo, agrega un objeto más al arreglo.
// No necesitas tocar ningún componente.
export const videos: VideoResource[] = [
  {
    id: 'video-1',
    title: 'Concierto - Obra destacada',
    youtubeId: 'dQw4w9WgXcQ', // reemplaza por el ID real del video de YouTube
    description: 'Breve descripción del contexto de esta presentación.',
    tags: ['concierto'],
    featured: true,
  },
  {
    id: 'video-2',
    title: 'Masterclass de formación musical',
    youtubeId: 'dQw4w9WgXcQ',
    description: 'Sesión formativa con estudiantes de nivel intermedio.',
    tags: ['masterclass', 'formación'],
  },
];
