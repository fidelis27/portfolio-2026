import { PROJECTS } from '../content/facts';
import { useLanguage } from '../i18n/useLanguage';
import { Section } from './Section';

export function Projects() {
  const { content } = useLanguage();
  const { projects } = content;

  return (
    <Section id="projects" title={projects.heading}>
      <p className="lede">{projects.intro}</p>
      {PROJECTS.map((project) => (
        <article key={project.id} className="project">
          <h3 className="project__name">
            <a href={project.href} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          </h3>
          <p>{projects.items[project.id]}</p>
        </article>
      ))}
    </Section>
  );
}
