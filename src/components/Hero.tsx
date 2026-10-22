import { LINKS, PERSON, resumeUrl } from '../content/facts';
import { useLanguage } from '../i18n/useLanguage';
import { FirstRenderChart } from './FirstRenderChart';

export function Hero() {
  const { language, content } = useLanguage();
  const { hero, ui } = content;
  const resume = resumeUrl(language);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 id="hero-title" className="hero__title">
          {hero.headline}
        </h1>
        <p className="hero__lede">{hero.lede}</p>
        <p className="hero__availability">{hero.availability}</p>
        <ul className="link-row">
          {resume && (
            <li>
              <a className="button" href={resume} target="_blank" rel="noreferrer">
                {ui.links.resume}
              </a>
            </li>
          )}
          <li>
            <a className="link-row__link" href={`mailto:${PERSON.email}`}>
              {ui.links.email}
            </a>
          </li>
          <li>
            <a className="link-row__link" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              {ui.links.linkedin}
            </a>
          </li>
          <li>
            <a className="link-row__link" href={LINKS.github} target="_blank" rel="noreferrer">
              {ui.links.github}
            </a>
          </li>
        </ul>
      </div>
      <FirstRenderChart />
    </section>
  );
}
