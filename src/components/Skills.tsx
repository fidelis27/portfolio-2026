import { useLanguage } from '../i18n/useLanguage';
import { Section } from './Section';

export function Skills() {
  const { content } = useLanguage();
  const { skills } = content;

  return (
    <Section id="skills" title={skills.heading}>
      <dl className="skills">
        {skills.groups.map((group) => (
          <div key={group.label} className="skills__row">
            <dt>{group.label}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
      <dl className="skills skills--background">
        <div className="skills__row">
          <dt>{skills.languages.label}</dt>
          <dd>{skills.languages.value}</dd>
        </div>
        <div className="skills__row">
          <dt>{skills.education.label}</dt>
          <dd>{skills.education.value}</dd>
        </div>
      </dl>
    </Section>
  );
}
