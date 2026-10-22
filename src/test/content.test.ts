import { describe, expect, it } from 'vitest';
import { contentByLanguage } from '../content';
import { en } from '../content/en';
import {
  AXIS_MAX_SECONDS,
  FIRST_RENDER_SAMPLES,
  LINKS,
  PROJECTS,
  reductionPercent,
  resumeUrl,
} from '../content/facts';
import { pt } from '../content/pt';

/** Reduces a value to its shape: same keys, same array lengths, same value types. */
function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, shape(v)]));
  }
  return typeof value;
}

function strings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value !== null && typeof value === 'object') return Object.values(value).flatMap(strings);
  return [];
}

describe('content parity', () => {
  it('English and Portuguese have the same structure', () => {
    expect(shape(pt)).toEqual(shape(en));
  });

  it('has no empty or placeholder strings', () => {
    for (const text of [...strings(en), ...strings(pt)]) {
      expect(text.trim()).not.toBe('');
      // Case-sensitive on purpose: "todo" is a normal Portuguese word.
      expect(text).not.toMatch(/\b(TODO|TBD)\b/);
      expect(text).not.toMatch(/lorem ipsum/i);
    }
  });

  it('uses unique case ids and every impact link points to a real case', () => {
    for (const content of Object.values(contentByLanguage)) {
      const ids = content.cases.items.map((item) => item.id);
      expect(new Set(ids).size).toBe(ids.length);
      for (const item of content.impact.items) {
        if (item.caseId) expect(ids).toContain(item.caseId);
      }
    }
  });

  it('states how each result is known', () => {
    for (const content of Object.values(contentByLanguage)) {
      for (const study of content.cases.items) {
        expect(study.evidence.trim().length).toBeGreaterThan(0);
      }
    }
  });
});

describe('claims guard', () => {
  const everything = [...strings(en), ...strings(pt)].join('\n');

  // Claims that appeared on an earlier version of the site and that the
  // résumé, the project documents and the author have not confirmed.
  const unsupported: Array<[string, RegExp]> = [
    ['audience scale', /millions? of users|milh(õ|o)es de usu(á|a)rios/i],
    ['unconfirmed tools', /Playwright|Vitest|\bn8n\b|React 19|Core Web Vitals/i],
    ['unconfirmed architecture claims', /Clean Architecture/i],
    // Working with a design system, Storybook and component libraries is
    // confirmed. Building or leading one is not.
    [
      'building or leading a design system or component library',
      /(built|led|leading|created|criei|liderei|construí) (a |the |um |o |uma |our )?(design system|component library|biblioteca de componentes)/i,
    ],
    ['infinity-style filler', /∞|any timezone|qualquer fuso/i],
    ['management titles', /engineering manager|people manager/i],
  ];

  it.each(unsupported)('does not contain: %s', (_name, pattern) => {
    expect(everything).not.toMatch(pattern);
  });

  it('only uses percentages that come from the measured samples', () => {
    const measured = FIRST_RENDER_SAMPLES.map(reductionPercent);
    // 100 is the "100% remote" availability line, not a result.
    const allowed = new Set([...measured, 100]);
    const found = [...everything.matchAll(/(\d+)(?:\s*[–-]\s*(\d+))?\s*%/g)].flatMap((match) =>
      [match[1], match[2]].filter(Boolean).map(Number),
    );
    expect(found.length).toBeGreaterThan(0);
    for (const value of found) expect(allowed).toContain(value);
  });

  it('keeps the headline range in step with the samples', () => {
    const measured = FIRST_RENDER_SAMPLES.map(reductionPercent);
    expect(Math.min(...measured)).toBe(60);
    expect(Math.max(...measured)).toBe(67);
    expect(strings(en).join('\n')).toContain('60–67%');
    expect(strings(pt).join('\n')).toContain('60–67%');
  });
});

describe('facts', () => {
  it('computes the reduction from the measured seconds', () => {
    expect(reductionPercent({ beforeSeconds: 1.2, afterSeconds: 0.4 })).toBe(67);
    expect(reductionPercent({ beforeSeconds: 2, afterSeconds: 0.8 })).toBe(60);
  });

  it('draws every sample inside the chart axis', () => {
    for (const sample of FIRST_RENDER_SAMPLES) {
      expect(sample.beforeSeconds).toBeLessThanOrEqual(AXIS_MAX_SECONDS);
      expect(sample.afterSeconds).toBeLessThan(sample.beforeSeconds);
    }
  });

  it('has one row label per sample in both languages', () => {
    expect(en.hero.chart.rows).toHaveLength(FIRST_RENDER_SAMPLES.length);
    expect(pt.hero.chart.rows).toHaveLength(FIRST_RENDER_SAMPLES.length);
  });

  it('describes every personal project in both languages', () => {
    for (const project of PROJECTS) {
      expect(en.projects.items[project.id]).toBeTruthy();
      expect(pt.projects.items[project.id]).toBeTruthy();
      expect(project.href).toMatch(/^https:\/\/github\.com\/fidelis27\//);
    }
  });

  it('uses https links that point at the right accounts', () => {
    expect(LINKS.linkedin).toBe('https://www.linkedin.com/in/fidelis27/');
    expect(LINKS.github).toBe('https://github.com/fidelis27');
    expect(resumeUrl('pt')).toMatch(/^https:\/\//);
    expect(resumeUrl('en')).toMatch(/^https:\/\//);
  });
});
