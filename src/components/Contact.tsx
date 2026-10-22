import { LINKS, PERSON, resumeUrl } from '../content/facts';
import { useLanguage } from '../i18n/useLanguage';
import { Section } from './Section';

export function Contact() {
  const { language, content } = useLanguage();
  const { contact, ui } = content;
  const resume = resumeUrl(language);

  return (
    <Section id="contact" title={contact.heading}>
      <p className="lede">{contact.lede}</p>
      <ul className="contact__list">
        <li>
          <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>
        </li>
        <li>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            {ui.links.linkedin}
          </a>
        </li>
        <li>
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            {ui.links.github}
          </a>
        </li>
        {resume && (
          <li>
            <a href={resume} target="_blank" rel="noreferrer">
              {ui.links.resume}
            </a>
          </li>
        )}
      </ul>
      <p className="contact__location">{contact.location}</p>
    </Section>
  );
}
