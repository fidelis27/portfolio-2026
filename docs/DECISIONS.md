# Technical decisions

Short records of the choices that shaped this site, with the trade-off each one accepts.

## 1. A static single-page app, not a framework with server rendering

**Decision:** Vite + React + TypeScript, built to static files, no router and no server.

**Why:** The site is one page of content that changes a few times a year. A static build is cheap to host (GitHub Pages), has nothing to patch, and loads fast.

**Trade-off:** The content is rendered in the browser. A crawler that does not run JavaScript sees only the static `<title>`, description, Open Graph tags and a `<noscript>` fallback in `index.html`, not the full page. Prerendering at build time (for example with a static-site generator) would close that gap. It is a known limit, accepted because recruiters reach this page from a link, not from search.

## 2. Typed content, one file per language, instead of an i18n library

**Decision:** Every visible string lives in `src/content/en.ts` and `src/content/pt.ts`, both typed as `Content` (`src/content/types.ts`). A small context provider picks the file.

**Why:** A missing translation becomes a compile error, not a blank spot on the page. `src/test/content.test.ts` also checks that both files have the same shape and the same array lengths.

**Trade-off:** No plural rules, interpolation or lazy loading of languages. The copy is static and short, so none of that is needed. If it grows, an ICU-based library is the next step.

## 3. Facts live once, in `src/content/facts.ts`

**Decision:** Links, the two measured first-render samples and the project list are shared by both languages. The chart in the hero is drawn from the same numbers the tests check against the copy.

**Why:** The headline claim (a 60–67% cut) and the chart cannot drift apart. A test fails if the range in the text no longer matches the samples.

## 4. A test that guards the claims

**Decision:** `content.test.ts` fails if the copy contains claims that the résumé and project documents do not support (audience-scale numbers, tools that were never confirmed, "built a design system or component library", management titles), or any percentage other than the measured ones.

**Why:** An earlier version of the site carried case studies that described work that was not mine. Honesty here is cheaper to enforce with a test than with a memory.

**Trade-off:** The list is a blocklist, so it only catches what someone has already thought of. It is a safety net for editing, not proof of accuracy. Every new claim still needs a source.

## 5. Every case study says how its result is known

**Decision:** Each case study ends with an `evidence` line: measured in production, observed in production, or observed by the teams with no quantified metrics.

**Why:** A reader can tell a benchmark from an impression. Where there is no number, the page says so instead of inventing one.

## 6. Fonts are self-hosted through Fontsource

**Decision:** Bricolage Grotesque (display) and Source Serif 4 (text) are installed as npm packages and bundled by Vite.

**Why:** No request to a third-party font service, no layout shift from a late stylesheet, and the build is reproducible. The system font stacks in `tokens.css` are the fallback.

**Trade-off:** The package ships several language subsets. Browsers download only the ones the page uses (`unicode-range`), but the build output is larger than one subset.

## 7. Theme follows the system, with no toggle

**Decision:** Light and dark palettes switch through `prefers-color-scheme`. There is no manual switch.

**Why:** One less control and one less piece of state. Contrast was checked for both palettes.

**Trade-off:** A reader cannot override their system setting on this page.

## 8. Motion is limited to one moment

**Decision:** The only non-user-triggered motion is the first-render bars growing once on load. It is disabled under `prefers-reduced-motion`. "Before" is hatched and "after" is solid, so the chart does not depend on color or motion to be read.

## 9. No contact form

**Decision:** Contact is a `mailto:` link plus LinkedIn and GitHub.

**Why:** A static site has no back end to receive a form, and a form that silently fails is worse than no form.

## 10. Relative base path

**Decision:** `base: './'` in `vite.config.ts`.

**Why:** The same build works under `<user>.github.io/<any-repo-name>/` and on a custom domain, so the old and the new portfolio can live side by side without changing config.
