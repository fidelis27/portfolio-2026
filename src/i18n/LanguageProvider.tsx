import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { contentByLanguage, type Language } from '../content';
import { LanguageContext } from './LanguageContext';
import { readStoredLanguage, writeStoredLanguage } from './storage';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);
  const content = contentByLanguage[language];

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    writeStoredLanguage(next);
  }, []);

  // Keep the document in step with the visible language: screen readers,
  // hyphenation, the tab title and the description all follow it.
  useEffect(() => {
    document.documentElement.lang = content.meta.htmlLang;
    document.title = content.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description);
  }, [content]);

  const value = useMemo(() => ({ language, content, setLanguage }), [language, content, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
