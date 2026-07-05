// Tipos centrales del contenido del sitio.
// Cualquier cambio de "forma" de los datos se valida aquí,
// y TypeScript te avisará en cada archivo de content/ si algo no calza.

export interface VideoResource {
  id: string;              // identificador único, ej: 'concierto-2024'
  title: string;
  youtubeId: string;       // solo el ID del video (ej: 'dQw4w9WgXcQ')
  description?: string;
  tags?: string[];         // ej: ['concierto', 'masterclass', 'obra propia']
  featured?: boolean;      // true = se muestra destacado/primero
}

export type LinkType = 'portfolio' | 'streaming' | 'prensa' | 'red-social' | 'partitura' | 'otro';

export interface ExternalLink {
  id: string;
  label: string;
  url: string;
  type: LinkType;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;            // ej: 'Docente de formación musical'
  institution: string;
  startYear: number;
  endYear?: number;        // si no tiene, se asume "actualidad"
  description: string;
  image?: string;          // ruta relativa en /public/images/
}

export interface EducationItem {
  id: string;
  title: string;           // ej: 'Maestría en Pedagogía Musical'
  institution: string;
  year: number;
  description?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;           // ej: 'Formadora musical & intérprete'
  bio: string;
  photo: string;           // ruta relativa en /public/images/
  location?: string;
  email?: string;
  cvUrl?: string;          // enlace a PDF de hoja de vida, si aplica
}
