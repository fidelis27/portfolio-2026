import { createContext } from 'react';
import type { Content, Language } from '../content';

export interface LanguageContextValue {
  language: Language;
  content: Content;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
