import type { Language, ProjectId } from './types';

/** Facts shared by both languages. Change them here, once. */

export const PERSON = {
  name: 'Thiago Fidelis',
  email: 'thiago.fidelis27@gmail.com',
} as const;

export interface SiteLinks {
  linkedin: string;
  github: string;
  /** One resume per language. `null` falls back to the English one. */
  resume: Record<Language, string | null>;
  /** Repository of this site. `null` hides the link in the footer. */
  source: string | null;
}

export const LINKS: SiteLinks = {
  linkedin: 'https://www.linkedin.com/in/fidelis27/',
  github: 'https://github.com/fidelis27',
  // Same Drive link the current portfolio uses. Confirm it is the English resume.
  resume: {
    en: 'https://drive.google.com/file/d/1nm67wzixhf92T1DNdoaj79qGfO-6crhK/view?usp=drivesdk',
    pt: null,
  },
  source: 'https://github.com/fidelis27/portfolio-2026',
};

export const PROJECTS: ReadonlyArray<{ id: ProjectId; name: string; href: string }> = [
  {
    id: 'mfe-communication',
    name: 'mfe-communication',
    href: 'https://github.com/fidelis27/mfe-communication',
  },
  {
    id: 'secretaria-backend',
    name: 'secretaria-backend',
    href: 'https://github.com/fidelis27/secretaria-backend',
  },
];

/**
 * Time to first render of two CRM micro-frontend apps, measured in production,
 * before and after removing the calls that blocked the first render.
 */
export interface FirstRenderSample {
  beforeSeconds: number;
  afterSeconds: number;
}

export const FIRST_RENDER_SAMPLES: readonly FirstRenderSample[] = [
  { beforeSeconds: 1.2, afterSeconds: 0.4 },
  { beforeSeconds: 2, afterSeconds: 0.8 },
];

export const AXIS_MAX_SECONDS = 2;

export function reductionPercent({ beforeSeconds, afterSeconds }: FirstRenderSample): number {
  return Math.round((1 - afterSeconds / beforeSeconds) * 100);
}

export function resumeUrl(language: Language): string | null {
  return LINKS.resume[language] ?? LINKS.resume.en;
}
