export type Language = 'en' | 'pt';

export type CaseId = 'crm' | 'bff' | 'backoffice';
export type ProjectId = 'mfe-communication' | 'secretaria-backend';

export interface CaseStudy {
  id: CaseId;
  title: string;
  facts: { role: string; period: string; stack: string };
  context: string;
  problem: string;
  actions: string[];
  result: string;
  /** How the result is known: measured, observed, not quantified. Always stated. */
  evidence: string;
}

export interface ImpactItem {
  label: string;
  body: string;
  caseId?: CaseId;
}

export interface ExperienceGroup {
  title?: string;
  bullets: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  place: string;
  note?: string;
  summary?: string;
  groups: ExperienceGroup[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

/**
 * Every user-visible string lives here, once per language. `en.ts` and `pt.ts`
 * must both satisfy this type, so a missing key is a compile error, and
 * `content.test.ts` checks the two files have identical shape and length.
 */
export interface Content {
  meta: { title: string; description: string; htmlLang: string };
  ui: {
    skipLink: string;
    navAria: string;
    languageAria: string;
    languageNames: Record<Language, string>;
    nav: {
      impact: string;
      cases: string;
      experience: string;
      projects: string;
      skills: string;
      contact: string;
    };
    links: {
      resume: string;
      email: string;
      linkedin: string;
      github: string;
      source: string;
    };
    caseLabels: {
      role: string;
      period: string;
      stack: string;
      context: string;
      problem: string;
      actions: string;
      result: string;
      readCase: string;
    };
    footer: string;
  };
  hero: {
    headline: string;
    lede: string;
    availability: string;
    chart: {
      title: string;
      note: string;
      before: string;
      after: string;
      faster: string;
      rows: string[];
    };
  };
  impact: { heading: string; items: ImpactItem[] };
  cases: { heading: string; intro: string; items: CaseStudy[] };
  experience: { heading: string; items: ExperienceItem[] };
  projects: {
    heading: string;
    intro: string;
    items: Record<ProjectId, string>;
  };
  skills: {
    heading: string;
    groups: SkillGroup[];
    languages: { label: string; value: string };
    education: { label: string; value: string };
  };
  contact: { heading: string; lede: string; location: string };
}
