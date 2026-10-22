import { LANGUAGES } from '../content';
import { useLanguage } from '../i18n/useLanguage';
import { PERSON } from '../content/facts';

const NAV_ORDER = ['impact', 'cases', 'experience', 'projects', 'skills', 'contact'] as const;

export function Header() {
  const { language, setLanguage, content } = useLanguage();
  const { ui } = content;

  return (
    <header className="site-header">
      <div className="page site-header__inner">
        <a className="brand" href="#top">
          {PERSON.name}
        </a>
        <nav className="site-nav" aria-label={ui.navAria}>
          <ul className="site-nav__list">
            {NAV_ORDER.map((id) => (
              <li key={id}>
                <a className="site-nav__link" href={`#${id}`}>
                  {ui.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lang" role="group" aria-label={ui.languageAria}>
          {LANGUAGES.map((code) => (
            <button
              key={code}
              type="button"
              className="lang__button"
              aria-pressed={language === code}
              aria-label={ui.languageNames[code]}
              onClick={() => setLanguage(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
