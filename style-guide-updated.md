<!-- Updated style guide reflecting current implementation. Generated for ongoing reference. -->

# Portfolio Style Guide (Updated)

This document captures the exact visual system, layout rules, and component behaviours used in the current project build (`app/`). Use it as the single source of truth before introducing design or layout changes.

---

## 1. Design Tokens

All global tokens live in `app/src/styles/design-tokens.css`.

### Colors
- `--primary`: `hsl(287 60% 65%)` (`#C778DD`)
- `--primary-op`: `hsl(287 60% 65% / 0.1)`
- `--background`: `hsl(218 12% 18%)`
- `--background-dark`: `hsl(218 12% 15%)`
- `--background-darker`: `hsl(218 12% 12%)`
- `--white`: `hsl(0 0% 100%)`
- `--gray`: `hsl(219 14% 71%)`
- `--gray-op`: `hsl(219 14% 71% / 0.1)`

### Typography
- Font family: `--font-primary: "Fira Code", monospace`
- Weights: `300 / 400 / 500 / 600 / 700`
- Sizes:
  - `--font-size-display: 32px` (hero heading, section headings)
  - `--font-size-large: 24px` (project titles, quote text)
  - `--font-size-base: 16px` (body, nav, buttons)
  - `--font-size-quote-mark: 64px` (quote decoration)
- Line height: `--line-height-base: 1.5`

### Spacing (base 8px scale)
- `--space-xs: 4px`
- `--space-sm: 8px`
- `--space-md: 16px`
- `--space-lg: 32px`
- `--space-xl: 48px`
- `--space-2xl: 112px`

### Layout & Borders
- Max container width: `--container-max-width: 1024px`
- Border width: `--border-width: 1px`
- Default border: `--border-default: 1px solid var(--gray)`
- Primary border: `--border-primary: 1px solid var(--primary)`
- Transition default: `--transition-default: 0.3s`

### Breakpoint References
- Desktop: `> 1024px`
- Tablet: `≤ 1024px`
- Mobile: `≤ 768px`

---

## 2. Base Styles (`app/src/styles/base-styles.css`)

- Full reset for semantic elements (`margin: 0`, `padding: 0`, `box-sizing: border-box`).
- `<body>` uses `var(--font-primary)`, `var(--background)`, `var(--white)`, and `var(--font-size-base)`.
- Headings:
  - `h1, h2`: `32px`, `font-weight: 600`, color white.
  - `h3`: `24px`, `font-weight: 500`, color white.
- Links default to `var(--gray)` with a white hover.
- Utility classes include flex helpers (`.flex`, `.flex-between`, `.flex-wrap`), spacing utilities (`.mt-*`, `.mb-*`, `.p-*`), and text utilities (`.text-gray`, `.font-semibold`, etc.).
- `.container`: horizontal padding (`16px`) and max width of 1024px.

---

## 3. Layout Styles (`app/src/styles/layout.css`)

### Global Structure
- `.page` & `body`: flex column with `gap: 112px`, providing consistent section spacing.
- Scroll header: `.header` is fixed (`top: 0`, `z-index: 999`) with 32px top padding.
- Sidebar replaced by top header; previously used left rail styles remain only for icon column.

### Header
- `.header__inner`: flex row, aligns logo (`.logo`) and nav (`.header__links`), capped at 1024px.
- `.logo`: logo mark + name. `.logo__img` currently `18px` square.
- Nav links include `#` prefix via `::before`; active link uses `.header__link_active`.

### Social Icons
- `.media__icon`: 28×28 inline-flex square; image sits at 20×20 (ensures email + LinkedIn match).
- Hover reduces opacity to 0.7.

### Hero Section
- `.hero`: two-column flex layout (`gap: 32px`), wraps on small screens.
- `.hero__content`: left column with heading, description, CTA button (`.button`).
- `.hero__illustrations`: stacked absolute-positioned visuals:
  - `.hero__logo`: outline SVG positioned `top: 10%`, sized `30vmin`.
  - `.hero .dots`: dot grid (`12vmin`) positioned `top: 40%`, `left: 70%`.
  - `.hero__image`: `hero.png`, `width: 100%`, `aspect-ratio: 3/4`, `border-bottom: var(--border-primary)`.
  - `.hero__status`: inline badge with square indicator created via `::before`, text currently “Open for new opportunities”.

### Quote Block
- `.quote`: bordered block with decorative `::before` & `::after` quote marks (64px).
- `.quote__text`: 32px padding, 24px font size.
- `.quote__author`: absolutely positioned bottom-right with own border and prefix `-`.

### Section Titles
- `.h2`: 32px heading with `#` prefix and trailing horizontal line (`10vw`).

### Projects Grid
- `.project-list`: 3-column grid, `gap: 16px`, responsive down to single column below 768px.
- `.project`: bordered; image placeholder uses gradient background and `aspect-ratio: 16 / 9`.
- `.project__techs`: border-bottom strip listing tools.
- `.project__links`: inline buttons (`Live <~>` styling matches HTML reference).

### Buttons
- `.button`: 8px × 16px padding, bordered with `var(--border-primary)`, hover fills with `--primary-op`.
- No secondary modifier currently active (file intentionally left empty for parity with reference).

### Responsive Rules
- ≤1024px: social column hidden, nav hidden, header padding reduced, projects reorganise via `auto-fit`.
- ≤768px: projects collapse to single column.

---

## 4. Component Styles

`app/src/styles/components.css` is intentionally empty to match the reference HTML. Any future component-specific tweaks should be added here (keeps base/layout files clean).

---

## 5. Assets & Imagery

- Hero outline: `logo-outline.svg`
- Hero portrait: `hero.png`
- Logo mark: `logo.svg`
- Email icon: `email.svg`
- LinkedIn icon: `linkedin.svg`

These assets are referenced directly in `app/src/App.tsx`. Maintain naming to keep imports stable.

---

## 6. Layout Blueprint (Reference)

```
<header class="header">
  <div class="header__inner container">
    <div class="logo">
      <img class="logo__img" />
      <span class="logo__name">Masih</span>
    </div>
    <nav class="header__links">
      <a class="header__link header__link_active">home</a>
      ...
    </nav>
  </div>
</header>

<main class="content">
  <section class="container">
    <div class="hero">
      <div class="hero__content">...</div>
      <div class="hero__illustrations">
        <img class="hero__logo" />
        <img class="hero__image" />
        <svg class="dots">...</svg>
        <div class="hero__status">Open for new opportunities</div>
      </div>
    </div>
  </section>
  <section class="container">
    <blockquote class="quote">...</blockquote>
  </section>
  <section id="projects" class="container">
    <h2 class="h2">projects</h2>
    <div class="project-list">
      <article class="project">...</article>
      ...
    </div>
  </section>
</main>
```

---

## 7. Best Practices & Notes

1. **Follow BEM**: When adding new elements, extend existing naming conventions (`.block__element`).
2. **Use Tokens**: Pull colors, spacing, and typography from design tokens; avoid hard-coded values.
3. **Maintain Layout CSS Order**: Global sections are ordered top-to-bottom (header → hero → quote → projects). Add new sections after existing to keep cascade predictable.
4. **Respect Aspect Ratios**: Hero image and project placeholders rely on `aspect-ratio`; maintain these rules for new assets.
5. **Decorations**: Dot matrices and border accents are positioned via absolute coordinates. If shifting hero imagery, adjust `.hero__logo` and `.hero .dots` rather than inline styles.
6. **Responsive Behaviour**: Use current media query breakpoints. For new grids, mirror the pattern used in `.project-list`.
7. **Typography Consistency**: Use `h2` class `.h2` for section headings; avoid plain `<h2>` to retain decorative line and hash prefix.
8. **Buttons**: Stick with `.button` styling; to introduce variations, extend via `components.css`.
9. **Status Badge**: `.hero__status` intentionally uses inline text (no nested link now); if reintroducing a link, apply `text-decoration: underline` specifically.
10. **Icons**: Social icons assume a 20×20 inner graphic; ensure replacements follow same dimensions to maintain alignment.

---

## 8. Files & Directories Snapshot

```
app/
  src/
    App.tsx                      # Layout markup
    assets/
      hero.png, logo.svg, etc.
    styles/
      design-tokens.css
      base-styles.css
      components.css
      layout.css
style-guide-updated.md           # ← this document
STYLE_GUIDE.md                   # Original reference (for historical context)
```

Keep this document updated whenever you introduce new sections, alter spacing, or adjust tokens so design intent remains clear and reproducible.
