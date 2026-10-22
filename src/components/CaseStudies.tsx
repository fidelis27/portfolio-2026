import type { CaseStudy as CaseStudyContent, Content } from '../content';
import { useLanguage } from '../i18n/useLanguage';
import { Section } from './Section';

interface CaseStudyProps {
  study: CaseStudyContent;
  labels: Content['ui']['caseLabels'];
}

function CaseStudy({ study, labels }: CaseStudyProps) {
  const titleId = `case-${study.id}-title`;

  return (
    <article id={`case-${study.id}`} className="case" aria-labelledby={titleId}>
      <h3 id={titleId} className="case__title">
        {study.title}
      </h3>
      <dl className="case__facts">
        <div className="case__fact">
          <dt>{labels.role}</dt>
          <dd>{study.facts.role}</dd>
        </div>
        <div className="case__fact">
          <dt>{labels.period}</dt>
          <dd>{study.facts.period}</dd>
        </div>
        <div className="case__fact">
          <dt>{labels.stack}</dt>
          <dd>{study.facts.stack}</dd>
        </div>
      </dl>
      <h4 className="case__heading">{labels.context}</h4>
      <p>{study.context}</p>
      <h4 className="case__heading">{labels.problem}</h4>
      <p>{study.problem}</p>
      <h4 className="case__heading">{labels.actions}</h4>
      <ul className="case__list">
        {study.actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
      <div className="case__result">
        <h4 className="case__heading case__heading--result">{labels.result}</h4>
        <p>{study.result}</p>
        <p className="case__evidence">{study.evidence}</p>
      </div>
    </article>
  );
}

export function CaseStudies() {
  const { content } = useLanguage();
  const { cases, ui } = content;

  return (
    <Section id="cases" title={cases.heading}>
      <p className="lede">{cases.intro}</p>
      {cases.items.map((study) => (
        <CaseStudy key={study.id} study={study} labels={ui.caseLabels} />
      ))}
    </Section>
  );
}
