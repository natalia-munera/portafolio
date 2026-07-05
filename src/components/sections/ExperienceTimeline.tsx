import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { experience, education } from '../../content/experience';

export function ExperienceTimeline() {
  const sortedExperience = [...experience].sort((a, b) => b.startYear - a.startYear);
  const sortedEducation = [...education].sort((a, b) => b.year - a.year);

  return (
    <SectionWrapper id="trayectoria" title="Trayectoria" subtitle="Experiencia profesional y formación académica">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-brand-800 mb-4">Experiencia</h3>
          <div className="space-y-4">
            {sortedExperience.map((item) => (
              <Card key={item.id}>
                <p className="text-sm text-brand-400">
                  {item.startYear}{item.endYear ? ` - ${item.endYear}` : ' - actualidad'}
                </p>
                <h4 className="font-semibold text-brand-900">{item.role}</h4>
                <p className="text-sm text-brand-600 mb-2">{item.institution}</p>
                <p className="text-sm text-brand-800">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-brand-800 mb-4">Formación académica</h3>
          <div className="space-y-4">
            {sortedEducation.map((item) => (
              <Card key={item.id}>
                <p className="text-sm text-brand-400">{item.year}</p>
                <h4 className="font-semibold text-brand-900">{item.title}</h4>
                <p className="text-sm text-brand-600">{item.institution}</p>
                {item.description && <p className="text-sm text-brand-800 mt-2">{item.description}</p>}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
