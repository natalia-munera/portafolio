import type { ExperienceItem, EducationItem } from '../types/content.types';

// Trayectoria profesional / formativa. El componente ExperienceTimeline
// las ordena automáticamente por año (más reciente primero).
export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Docente de formación musical',
    institution: 'Casa de la Cultura Ejemplo',
    startYear: 2020,
    description: 'Formación de estudiantes en teoría musical e interpretación instrumental.',
    // image: '/images/experiencia-1.jpg',
  },
  {
    id: 'exp-2',
    role: 'Intérprete profesional',
    institution: 'Orquesta / Ensamble Ejemplo',
    startYear: 2015,
    endYear: 2020,
    description: 'Participación en temporadas de concierto y giras nacionales.',
  },
];

export const education: EducationItem[] = [
  {
    id: 'edu-1',
    title: 'Maestría en Pedagogía Musical',
    institution: 'Universidad Ejemplo',
    year: 2019,
  },
  {
    id: 'edu-2',
    title: 'Pregrado en Música - Énfasis en Interpretación',
    institution: 'Universidad Ejemplo',
    year: 2014,
  },
];
