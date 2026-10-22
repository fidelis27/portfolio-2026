import { LINKS, PERSON } from '../content/facts';
import { useLanguage } from '../i18n/useLanguage';

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="page site-footer__inner">
        <p>{`© 2026 ${PERSON.name}. ${content.ui.footer}`}</p>
        {LINKS.source && (
          <a href={LINKS.source} target="_blank" rel="noreferrer">
            {content.ui.links.source}
          </a>
        )}
      </div>
    </footer>
  );
}
