import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { LanguageProvider } from './i18n/LanguageProvider';
import { useLanguage } from './i18n/useLanguage';

function Page() {
  const { content } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main">
        {content.ui.skipLink}
      </a>
      <Header />
      <main id="main" className="page">
        <span id="top" />
        <Hero />
        <Impact />
        <CaseStudies />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
