import { en } from './en';
import { pt } from './pt';
import type { Content, Language } from './types';

export type { CaseStudy, Content, Language } from './types';

export const LANGUAGES: readonly Language[] = ['en', 'pt'];
export const DEFAULT_LANGUAGE: Language = 'en';

export const contentByLanguage: Record<Language, Content> = { en, pt };

export function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'pt';
}
