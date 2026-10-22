import { useLanguage } from '../i18n/useLanguage';
import { Section } from './Section';

export function Experience() {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <Section id="experience" title={experience.heading}>
      {experience.items.map((job) => (
        <article key={`${job.company}-${job.period}`} className="job">
          <p className="job__period">{job.period}</p>
          <div>
            <h3 className="job__role">{job.role}</h3>
            <p className="job__company">
              {job.company}. {job.place}.
            </p>
            {job.note && <p className="job__company">{job.note}</p>}
            {job.summary && <p className="job__summary">{job.summary}</p>}
            {job.groups.map((group, index) => (
              <div key={group.title ?? index}>
                {group.title && <h4 className="job__group-title">{group.title}</h4>}
                <ul className="job__list">
                  {group.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      ))}
    </Section>
  );
}
