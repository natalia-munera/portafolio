import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { links } from '../../content/links';
import type { LinkType } from '../../types/content.types';

// Etiquetas legibles para cada tipo de enlace.
const typeLabels: Record<LinkType, string> = {
  portfolio: 'Portafolio',
  streaming: 'Streaming',
  prensa: 'Prensa',
  'red-social': 'Red social',
  partitura: 'Partitura',
  otro: 'Otro',
};

export function LinksGrid() {
  return (
    <SectionWrapper id="enlaces" title="Enlaces" subtitle="Trabajo alojado en otras plataformas">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
            <Card className="h-full">
              <span className="text-xs uppercase tracking-wide text-brand-400">
                {typeLabels[link.type]}
              </span>
              <h4 className="font-semibold text-brand-900 mt-1">{link.label}</h4>
              {link.description && <p className="text-sm text-brand-600 mt-1">{link.description}</p>}
            </Card>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
