import { SectionWrapper } from '../ui/SectionWrapper';
import { profile } from '../../content/profile';

export function About() {
  // Divide la bio en párrafos usando saltos de línea del texto original.
  const paragraphs = profile.bio.split('\n').filter((p) => p.trim().length > 0);

  return (
    <SectionWrapper id="sobre-mi" title="Sobre mí">
      <div className="prose prose-brand max-w-3xl mx-auto text-brand-800 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </SectionWrapper>
  );
}
