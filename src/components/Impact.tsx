import { useLanguage } from '../i18n/useLanguage';
import { Section } from './Section';

export function Impact() {
  const { content } = useLanguage();
  const { impact, ui } = content;

  return (
    <Section id="impact" title={impact.heading}>
      <ul className="impact">
        {impact.items.map((item) => (
          <li key={item.label} className="impact__item">
            <span className="impact__label">{item.label}</span>
            <p className="impact__body">{item.body}</p>
            {item.caseId && (
              <a className="impact__link" href={`#case-${item.caseId}`}>
                {ui.caseLabels.readCase}
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
