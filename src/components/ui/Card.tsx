import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

// Contenedor visual reutilizable. Cambia estilos aquí y se
// actualiza en toda la landing sin tocar cada sección.
export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-brand-100 p-6 hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}
