import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="section">
      <h2 id={headingId} className="section__title">
        {title}
      </h2>
      <div className="section__body">{children}</div>
    </section>
  );
}
