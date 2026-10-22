# Portfolio

Personal portfolio of Thiago Fidelis, Senior Front-End Engineer. Bilingual (English and Portuguese), static, built with Vite, React and TypeScript.

The page is organized around evidence: a headline claim backed by a chart of the real measurements, three case studies that each say how the result is known, and a test that keeps the copy honest.

## Run it

Requires Node 20 or newer.

```bash
npm install
npm run dev        # local dev server
npm run check      # lint, typecheck, tests and production build, in that order
npm run preview    # serve the production build locally
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run lint` | ESLint (typescript-eslint, react-hooks) |
| `npm run typecheck` | `tsc --noEmit` in strict mode |
| `npm test` | Vitest and Testing Library, one run |
| `npm run build` | Typecheck, then production build into `dist/` |

## Structure

```
src/
  content/
    types.ts       The Content type: every visible string, per language
    en.ts, pt.ts   The copy. Both must satisfy Content
    facts.ts       Shared facts: links, measured samples, project list
  i18n/            Language context, provider and persistence
  components/      One component per section, no business logic
  styles/          tokens.css (design tokens), base.css, sections.css
  test/            Content parity, claims guard, rendering and language switch
docs/DECISIONS.md  Why it is built this way, and the trade-off of each choice
```

## Editing the content

- Change text in `src/content/en.ts` and `src/content/pt.ts`. Change both: the parity test fails if they drift apart.
- Change links, the project list or the measured numbers in `src/content/facts.ts`.
- `LINKS.source` in `facts.ts` controls the source-code link in the footer. Set it to `null` to hide it.
- Confirm that `LINKS.resume.en` points to the English résumé. `LINKS.resume.pt` is `null`, so Portuguese readers get the same file. Add a Portuguese link there when you have one.

### The claims guard

`src/test/content.test.ts` fails when the copy contains something the résumé does not support, or a percentage that is not one of the measured ones. If a test fails after an edit, check the claim against a source before changing the test. The list is a blocklist, so passing it is not proof of accuracy.

## Quality gates

`.github/workflows/ci.yml` runs lint, typecheck, tests and the build on every push and pull request. On `main` it also deploys `dist/` to GitHub Pages.

To turn on deployment: in the repository settings, open Pages and set the source to **GitHub Actions**.

## Accessibility

Landmarks and a skip link, one `h1`, labelled sections, visible keyboard focus, a text description of the chart for screen readers, `lang` that follows the chosen language, and `prefers-reduced-motion` respected. Both color schemes were chosen for contrast. This has not been audited with assistive technology.

## Known limits

- Content is rendered in the browser, so crawlers that do not run JavaScript only see the static metadata. See decision 1 in `docs/DECISIONS.md`.
- The chart shows two measured examples, not every app. The note under it says so.
- No contact form, by design.
