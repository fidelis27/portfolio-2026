import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { App } from '../App';
import { en } from '../content/en';
import { pt } from '../content/pt';

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(cleanup);

describe('App', () => {
  it('renders in English by default and sets the document language', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(en.hero.headline);
    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe(en.meta.title);
  });

  it('switches to Portuguese and remembers the choice', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Português' }));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(pt.hero.headline);
    expect(document.documentElement.lang).toBe('pt-BR');
    expect(window.localStorage.getItem('portfolio:language')).toBe('pt');
    expect(screen.getByRole('button', { name: 'Português' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('restores the saved language on load', () => {
    window.localStorage.setItem('portfolio:language', 'pt');
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(pt.hero.headline);
  });

  it('ignores an invalid saved language', () => {
    window.localStorage.setItem('portfolio:language', 'fr');
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(en.hero.headline);
  });

  it('has a skip link and one labelled region per section', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: en.ui.skipLink })).toHaveAttribute('href', '#main');

    const headings = [
      en.impact.heading,
      en.cases.heading,
      en.experience.heading,
      en.projects.heading,
      en.skills.heading,
      en.contact.heading,
    ];
    for (const name of headings) {
      expect(screen.getByRole('region', { name })).toBeInTheDocument();
    }
  });

  it('renders every case study with its result and how it is known', () => {
    render(<App />);
    for (const study of en.cases.items) {
      const article = screen.getByRole('article', { name: study.title });
      expect(article).toHaveAttribute('id', `case-${study.id}`);
      expect(within(article).getByText(study.result)).toBeInTheDocument();
      expect(within(article).getByText(study.evidence)).toBeInTheDocument();
    }
  });

  it('describes the chart in text for screen readers', () => {
    render(<App />);
    expect(screen.getByText('App 1: Before 1.2 s, After 0.4 s, 67% faster')).toBeInTheDocument();
    expect(screen.getByText('App 2: Before 2 s, After 0.8 s, 60% faster')).toBeInTheDocument();
  });

  it('formats seconds with a decimal comma in Portuguese', () => {
    window.localStorage.setItem('portfolio:language', 'pt');
    render(<App />);
    expect(screen.getByText('App 1: Antes 1,2 s, Depois 0,4 s, 67% mais rápido')).toBeInTheDocument();
  });

  it('links to the right profiles and to the source code', () => {
    render(<App />);
    const hero = screen.getByRole('region', { name: en.hero.headline });
    expect(within(hero).getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/fidelis27',
    );
    expect(within(hero).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/fidelis27/',
    );
    expect(screen.getByRole('link', { name: en.ui.links.source })).toHaveAttribute(
      'href',
      'https://github.com/fidelis27/portfolio-2026',
    );
  });
});
