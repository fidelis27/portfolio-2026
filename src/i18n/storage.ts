import { DEFAULT_LANGUAGE, isLanguage, type Language } from '../content';

const KEY = 'portfolio:language';

// Browser storage can throw (private windows, blocked site data), so every
// access is wrapped and the page works without it.
export function readStoredLanguage(): Language {
  try {
    const value = window.localStorage.getItem(KEY);
    return isLanguage(value) ? value : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function writeStoredLanguage(language: Language): void {
  try {
    window.localStorage.setItem(KEY, language);
  } catch {
    // Ignore: the choice just won't be remembered.
  }
}
