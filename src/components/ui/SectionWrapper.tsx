import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

// Envoltorio estándar para cada sección de la landing: mismo
// espaciado, mismo estilo de título. Así toda sección nueva
// (o reordenada) mantiene consistencia visual automáticamente.
export function SectionWrapper({ id, title, subtitle, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 max-w-5xl mx-auto ${className}`}>
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-900">{title}</h2>
        {subtitle && <p className="mt-3 text-brand-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
