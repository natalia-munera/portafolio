import type { ExternalLink } from '../types/content.types';

// Enlaces a sitios donde está alojado su trabajo (Spotify, SoundCloud,
// prensa, redes, partituras, etc.). Agrega/quita objetos libremente.
export const links: ExternalLink[] = [
  {
    id: 'spotify',
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/tu-id',
    type: 'streaming',
    description: 'Discografía y grabaciones disponibles.',
  },
  {
    id: 'prensa-1',
    label: 'Entrevista - Medio Local',
    url: 'https://ejemplo.com/entrevista',
    type: 'prensa',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com/tu-usuario',
    type: 'red-social',
  },
];
