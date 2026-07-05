import type { ProfileInfo } from '../types/content.types';

// Edita únicamente estos valores para actualizar la información principal.
export const profile: ProfileInfo = {
  name: 'Nombre de la Artista',
  title: 'Formadora musical & intérprete',
  bio: `Escribe aquí una biografía profesional de 2-4 párrafos. Puedes usar
saltos de línea normales; el componente Hero/About se encarga de darle formato.
Incluye trayectoria, enfoque pedagógico y logros relevantes para convocatorias.`,
  photo: '/images/profile.jpg', // coloca la imagen en /public/images/
  location: 'Antioquia, Colombia',
  email: 'contacto@ejemplo.com',
  cvUrl: '/docs/hoja-de-vida.pdf', // opcional, coloca el PDF en /public/docs/
};
