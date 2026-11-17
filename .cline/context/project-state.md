# port992 website — Project State & Decisions Log

> **Read this first** (together with `port992-brand-and-website-brief-revised.md`,
> which remains the canonical brand/product brief). This file tracks *state,
> decisions, and learning progress* so any fresh session can pick up the
> project cold. Update it at the end of any session that changes state.

Last updated: 2026-11-15

---

## 1. Working agreement (mentorship mode)

The owner is **learning Angular** while building. The agreed dynamic:

- **Cline acts as a patient senior mentor**: explains concepts *before* they are
  needed, reviews code the owner writes, answers all questions.
- **The owner writes the code and runs the commands.** Cline does not implement
  features for them (exceptions made only for plumbing/ops tasks, e.g. CI/CD).
- **Learning loop per step:** explain concept → owner builds → owner reports
  observations/questions → mentor fills gaps → next step.
- Checkpoint questions are part of the method — wrong answers are welcome,
  they show what to explain.

## 2. Milestone plan & status

| Milestone | Scope | Status |
|---|---|---|
| M0 — Scaffold & tokens | `ng new`, SCSS, design tokens file | 🟡 Scaffold done; tokens file NOT yet created |
| M1 — App shell + header/footer | Emblem, nav, anchors | ⬜ Not started (logo component begun) |
| M2 — Hero section | `$_` wordmark hero, tagline "SECURE ACCESS. REAL SOLUTIONS.", monospace `telnets` accent line w/ blinking violet cursor, dark bg image + scrim, pillar icon strip | ⬜ Not started |
| M3 — Pillars section | 3 pillars data-driven w/ `@for` | ⬜ |
| M4 — Packages & contact | Honest "in development" packages, contact CTA | ⬜ |
| M5 — Polish & ship | SEO/OG meta, a11y, budgets, lighthouse, latin-only font subsets | ⬜ |

### Concepts already taught (don't re-teach; build on them)

- SPA model & CSR vs SSR vs SSG trade-offs
- Boot sequence: `index.html` → `main.ts` → `bootstrapApplication` →
  `app.config.ts` providers → root component → `<router-outlet>`
- Standalone components: `imports` array = template dependency declaration;
  why template compilation requires it (owner ran the "missing import" error
  experiment successfully)
- Interpolation `{{ }}`, signals (`signal()`, read via `title()`), zoneless
  reactivity (signal reads tracked during render; writes notify readers)
- Global vs component-scoped styles (view encapsulation, intro level)
- Presentational vs container components; inputs down / events up;
  "library-shaped" components rule (no hardcoded brand strings/colors — the
  components are meant to become `@port992/angular-*` packages later)
- npm scripts, Vitest+jsdom testing (owner saw CI catch a stale spec)

## 3. Decisions log (with rationale — don't relitigate)

1. **Angular 22, standalone components, zoneless** — modern defaults, no
   NgModules ever.
2. **SCSS + CSS custom properties for tokens** — idiomatic Angular style
   encapsulation; tokens later extractable to a shared design-system package.
   Token file `src/styles/_tokens.scss` not yet created.
3. **No SSR** — static landing page on Cloudflare Pages; SSG/prerender noted
   as a possible cheap SEO upgrade later.
4. **Fonts: Manrope (final choice), self-hosted via `@fontsource/manrope`**
   (weights 400–800). Space Grotesk evaluated and abandoned. Self-hosting
   chosen over Google Fonts links for privacy (no third-party requests) and
   brand independence. Optimization pending: switch to `latin-*` subsets (M5).
   Wordmark weight pairing per brief: `port` 700 / `992` 800.
5. **CI: GitHub Actions** `.github/workflows/ci.yml` — on PRs + pushes to
   `main`: Node 24, `npm ci`, `npm test -- --no-watch` (Vitest/jsdom, no
   Chrome needed), `npm run build`. Concurrency cancels stale runs.
6. **CD: Cloudflare Pages native Git integration** (NOT GitHub-Actions deploy).
   Build cmd `npm run build`, output dir `dist/port992/browser`,
   env `NODE_VERSION=24`, production branch `main`. PRs get automatic preview
   URLs. Site is live on a `*.pages.dev` URL. Custom domain
   `port992.eu.org` deferred.
7. **SPA fallback**: `public/_redirects` with `/* /index.html 200`.
8. **Favicons**: realfavicongenerator package in `public/`, wired in
   `index.html`; `site.webmanifest` + `theme-color` meta set to obsidian
   `#0B0B0D`. Owner enlarged the favicon mark (was too small at 16px).
9. **Figma integration: Framelink MCP** (`figma-developer-mcp` via npx),
   launched through 1Password CLI: `op run` resolves
   `op://Private/Figma API Token/credential` into `FIGMA_API_KEY` at spawn
   time. Telemetry off (`FRAMELINK_TELEMETRY=off`), `IMAGE_DIR=/tmp/figma-images`.
   Config lives in `~/.cline/data/settings/cline_mcp_settings.json` (outside
   repo). MCP tools only bind at conversation start → Figma work happens in
   dedicated tasks, not the mentorship thread.
10. **Secrets policy**: no raw tokens in configs/chat/git — `op://`
    references only; 1Password desktop app integration (not `eval $(op signin)`
    in bashrc). Incident: a Figma token was pasted in chat → revoked & rotated
    same day. Lesson recorded.
11. **Logo direction** (revised brief): minimalist `$_` mark, three variants —
    symbol (white `$`, violet `_`), horizontal wordmark (white `$`, red `_`,
    white `port`, violet `992`), favicon (`$_.'` white/violet/red-dot). No
    circle/badge. Underscore + dot are vector shapes, not font glyphs.
12. **Git workflow**: feature branches + PRs (PR template exists), owner
    merges after green CI. Repo: `github.com/port992/website`.

## 4. Current state snapshot (2026-11-15)

- Angular app scaffolded in repo root (`ng new port992 --directory .`).
- PRs #1 and #2 merged: scaffold + CI + favicons + logo component.
- `Logo` component exists at `src/app/shared/ui/logo/` (selector `app-logo`),
  rendered from `app.html`; template is still placeholder `<p>logo works!</p>`.
- **Uncommitted work in working tree:** Manrope swap (package.json/lock,
  `src/styles.scss` imports, `body` font-family) + placeholder cleanup in
  `app.html`/`app.ts`. Should be committed as its own PR.
- Palette tokens to encode in `_tokens.scss`:
  `--color-obsidian:#0B0B0D`, `--color-charcoal:#151518`,
  `--color-white:#F5F5F5`, `--color-violet:#8B5CF6`,
  `--color-debian-red:#D70A53` (brand details ONLY — never general UI),
  muted grey + border grey TBD (contrast-checked).

## 5. Next actions queue (in order)

1. Commit the Manrope swap as its own small PR.
2. Replace logo placeholder with real `$_` mark; add `variant` input
   (`'symbol' | 'horizontal' | 'favicon'`) — owner's first component input.
3. Create `src/styles/_tokens.scss` with the palette + typography tokens.
4. Owner exports Figma frames (2x PNG, desktop+mobile) into `.cline/images/`;
   hero first → decompose design into components/inputs/tokens together
   before coding.
5. Header + footer shell (M1), then Hero (M2).

## 6. Maintenance convention

Any session that changes architecture, decisions, pipeline, brand assets, or
learning progress must update this file before ending. Keep it short and
factual; the brand brief owns brand truth, this file owns project state.

