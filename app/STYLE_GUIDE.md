# Portfolio Design System - Style Guide

## Overview

This portfolio website follows a modern, developer-focused design aesthetic with a dark theme and monospace typography. The design emphasizes clean lines, subtle borders, and a purple accent color that creates visual hierarchy throughout the interface. The layout uses a fixed sidebar navigation pattern with a main content area that flows vertically with generous spacing between sections.

**Design Philosophy:**
- Minimalist and technical aesthetic
- High contrast for readability
- Consistent spacing and alignment
- Subtle hover interactions
- Responsive and accessible

---

## Color Palette

### Primary Colors

**Primary Purple** - `hsl(287 60% 65%)` / `#C778DD`
- Used for: Links, accents, highlights, borders on hover, section title prefixes
- Usage: Primary interactive elements, call-to-action buttons, emphasized text

**Primary Purple (Opacity)** - `hsl(287 60% 65% / 0.1)` / `rgba(199, 120, 221, 0.1)`
- Used for: Hover states, subtle backgrounds, button hover effects
- Usage: Button hover effects, overlay backgrounds

### Neutral Colors

**Background** - `hsl(218 12% 18%)` / `#282C33`
- Used for: Main page background, header background, quote box background
- Usage: Primary background color for all pages

**Dark Background** - `hsl(218 12% 15%)` / `#1E2025`
- Used for: Sidebar, cards, elevated surfaces (not explicitly defined but inferred)
- Usage: Secondary background for components and containers

**Darker Background** - `hsl(218 12% 12%)` / `#181A1F`
- Used for: Project image placeholders, deep backgrounds (not explicitly defined but inferred)
- Usage: Tertiary background for nested elements

### Text Colors

**White** - `hsl(0 0% 100%)` / `#FFFFFF`
- Used for: Primary text, headings, active navigation
- Usage: Main content text, titles, emphasized elements

**Gray** - `hsl(219 14% 71%)` / `#ABB2BF`
- Used for: Secondary text, descriptions, inactive states, borders, dots
- Usage: Body text, captions, placeholder text, borders, decorative elements

**Gray (Opacity)** - `hsl(219 14% 71% / 0.1)` / `rgba(171, 178, 191, 0.1)`
- Used for: Subtle backgrounds, dividers, secondary button hover
- Usage: Light overlays, subtle separators

### Border Colors

**Default Border** - `1px solid var(--gray)`
- Used for: All component borders, dividers, separators
- Usage: All standard borders throughout the interface

**Primary Border** - `1px solid var(--primary)`
- Used for: Hero image, about image, emphasized borders
- Usage: Accent borders for featured elements

---

## Typography

### Font Family

**Primary Font:** `"Fira Code", monospace`
- A monospace font designed for code and technical content
- Provides consistent character width and technical aesthetic
- Font weights: 300, 400, 500, 600, 700
- Loaded via @font-face with WOFF format

### Font Weights

- **Light:** 300 - Available but not actively used
- **Regular:** 400 - Body text, descriptions, secondary content
- **Medium:** 500 - Section titles (h2), project titles, emphasized text, footer titles, quote text, button text
- **Semi-Bold:** 600 - Hero heading, skill category titles, important labels, header active links
- **Bold:** 700 - Logo, quote marks

### Font Sizes

**Display/Hero:**
- `32px` - Main hero heading (h1), section headings (h2), path name
- `24px` - Quote text, project titles, footer titles

**Body:**
- `16px` - Standard body text, navigation links, buttons, descriptions, labels, quote author, skill block content, contact items
- `64px` - Quote decorative marks (::before and ::after)

### Line Height

- **Default:** `1.5` - Applied to body, comfortable reading

### Font Usage Patterns

**Hero Section:**
- Heading: 32px, weight 600
- Body: 16px, color gray
- Status badge: 16px, weight 500

**Section Titles (h2):**
- Size: 32px, weight 500, color white
- Prefix: "#" in primary purple
- Decorative line: 1px height, 10vw width, primary color

**Navigation:**
- Size: 16px, color gray
- Active: weight 600, color white
- Prefix: "#" in primary purple
- Hover: color white

**Project Cards:**
- Title: 24px, weight 500, color white
- Tags: 16px, color gray
- Description: 16px, color gray

**Buttons:**
- Size: 16px, weight 500
- Padding: 8px 16px

**Quote:**
- Text: 24px, weight 500, padding 32px
- Author: 16px, color gray, padding 8px
- Decorative marks: 64px, weight 700, color gray

---

## Spacing System

### Base Unit: 8px

The design uses an 8-point grid system for consistent spacing:

**Micro Spacing:**
- `4px` - Dropdown label margin, dropdown option padding adjustments
- `8px` - Small gaps, padding in compact elements, tag gaps, skill content padding, contact gaps, logo gap, media header gap, quote author padding, skill block padding, project content padding, project techs padding, footer list gap, button padding vertical, dropdown option padding, status badge padding, status badge gap

**Small Spacing:**
- `16px` - Standard padding, card padding, section title gaps, skill category gaps, media header left position, footer description margin, quote author right position, quote after bottom position, about text gap, contacts list margin, contact margin, skill block margin, project description margin, project techs gap, footer inner gap, button padding horizontal, path description margin, h2 right offset, container padding (mobile), footer margin bottom

**Medium Spacing:**
- `32px` - Quote box padding, footer padding, section header gaps, footer content gaps, hero heading margin, about gap, contacts gap, hero gap, hero description margin (top and bottom), quote before top position, hamburger top position, footer header gap, footer padding top, footer inner gap, h2 font size, hero title font size, path name font size, header links gap, header padding top

**Large Spacing:**
- `48px` - Section header bottom margin, about text margin top, contacts content margin top, project list margin top, footer inner margin bottom

**Extra Large Spacing:**
- `112px` - Section vertical padding (gap between major sections), content margin top, body/html gap, content gap

### Container Widths

**Max Container Width:** `1024px`
**Media Header Left:** `16px`
**Hamburger Width:** `32px`
**Media Icon Width:** `32px`
**Logo Image Width:** `16px`
**Status Badge Icon:** `16px`

### Responsive Breakpoints

**Desktop:** Default (no media query)
**Tablet/Mobile:** `@media (max-width: 1024px)`
**Small Mobile:** `@media (max-width: 768px)` (for skills columns)
**Extra Small:** `@media (max-width: 500px)` (for skills columns)

### Grid Gaps

**Projects Grid:** `16px` between cards
**Skills Columns:** `16px` column gap
**About/Contacts/Hero:** `32px` gap
**Footer Inner:** `32px` gap

---

## Layout Patterns

### Flexbox Patterns

**Common Flex Container:**
```css
display: flex;
gap: 32px;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
```

**Flex Item Pattern:**
```css
flex: 1 1 0; /* flex-grow, flex-shrink, flex-basis */
min-width: 300px;
```

### Grid Patterns

**Project List:**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
align-items: start;

@media (max-width: 1024px) {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

**Skills Columns:**
```css
columns: 3;
column-gap: 16px;

@media (max-width: 768px) {
  columns: 2;
}

@media (max-width: 500px) {
  columns: 1;
}
```

---

## Component Styles

### Buttons

**Primary Button:**
```css
.button {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid var(--primary);
  font-weight: 500;
}

.button:hover {
  background-color: var(--primary-op);
}
```

**Secondary Button:**
```css
.button__secondary {
  border-color: var(--gray);
  color: var(--gray);
}

.button__secondary:hover {
  background-color: var(--gray-op);
}
```

### Cards

**Project Card:**
```css
.project {
  border: 1px solid var(--gray);
}

.project__image {
  border-bottom: 1px solid var(--gray);
  aspect-ratio: 16/9;
}

.project__content {
  padding: 16px;
}

.project__name {
  font-size: 24px;
  font-weight: 500;
}

.project__description {
  color: var(--gray);
  margin: 16px 0;
}

.project__techs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  color: var(--gray);
  padding: 8px;
  border-bottom: 1px solid var(--gray);
}

.project__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
```

**Skill Block Card:**
```css
.skill-block {
  border: 1px solid var(--gray);
  display: inline-block;
  max-width: 300px;
  min-width: 200px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}

.skill-block__name {
  font-weight: 600;
  padding: 8px;
  border-bottom: 1px solid var(--gray);
}

.skill-block__list {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: start;
  align-items: start;
  color: var(--gray);
}
```

### Navigation

**Header:**
```css
.header {
  padding-top: 32px;
  padding-bottom: 8px;
  background-color: var(--background);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.header__inner {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: relative;
}

.header__links {
  margin-left: auto;
  display: flex;
  align-items: flex-start;
  gap: 32px;
}

.header__link {
  color: var(--gray);
}

.header__link_active {
  font-weight: 600;
  color: var(--white);
}

.header__link::before {
  content: "#";
  color: var(--primary);
  font-weight: normal;
}

.header__link:hover {
  color: var(--white);
}

@media (max-width: 1024px) {
  .header {
    padding-top: 16px;
  }
  
  .header__links {
    display: none;
  }
}
```

**Media Header (Sidebar):**
```css
.media-header {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 16px;
  gap: 8px;
  top: 0px;
}

.media-header__links {
  display: grid;
  grid-auto-columns: 1fr;
}

.media-header__line {
  width: 1px;
  height: 33vh;
  background-color: var(--gray);
  display: block;
}

@media (max-width: 1024px) {
  .media-header {
    display: none;
  }
}
```

### Quote Box

```css
.quote {
  border: 1px solid var(--gray);
  position: relative;
  margin: 0;
}

.quote::before,
.quote::after {
  content: '"';
  position: absolute;
  color: var(--gray);
  font-size: 64px;
  font-weight: 700;
  background-image: linear-gradient(var(--background), var(--background));
  background-size: 100% 40%;
  background-repeat: no-repeat;
}

.quote::before {
  top: -32px;
  left: 16px;
}

.quote::after {
  bottom: -64px;
  right: 16px;
}

.quote__text {
  padding: 32px;
  font-size: 24px;
  font-weight: 500;
  background-color: var(--background);
}

.quote__author {
  position: absolute;
  color: var(--gray);
  border: 1px solid var(--gray);
  padding: 8px;
  right: -1px;
  font-size: 16px;
}

.quote__author::before {
  content: "- ";
}
```

### Hero Status Badge

```css
.hero__status {
  padding: 8px;
  border: 1px solid var(--gray);
  color: var(--gray);
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -1px;
  z-index: 5;
  gap: 8px;
  font-weight: 500;
}

.hero__status::before {
  content: "";
  display: inline-block;
  aspect-ratio: 1;
  width: 16px;
  background-color: var(--primary-op);
  border: 1px solid var(--primary);
}

.hero__status a {
  color: var(--white);
  text-decoration: underline;
}

.hero__status a:hover {
  color: var(--primary);
}
```

### Dropdown

```css
.dropdown {
  color: var(--gray);
  position: relative;
}

.dropdown:hover .dropdown__list {
  display: flex;
}

.dropdown__label {
  cursor: pointer;
  text-transform: uppercase;
}

.dropdown__label::after {
  content: "V";
  display: inline-block;
  scale: 1 0.3;
  font-weight: 500;
  margin-left: 4px;
}

.dropdown__label:hover {
  color: var(--white);
}

.dropdown__label:hover::after {
  rotate: 180deg;
}

.dropdown__list {
  display: none;
  flex-direction: column;
  border: 1px solid var(--gray);
  position: absolute;
  background-color: var(--background);
  bottom: 0;
  transform: translateY(100%);
}

.dropdown__option {
  cursor: pointer;
  padding: 8px;
  text-transform: uppercase;
}

.dropdown__option:hover {
  color: var(--white);
}
```

### Logo

```css
.logo {
  display: flex;
  gap: 8px;
}

.logo__img {
  aspect-ratio: 1;
  width: 16px;
}

.logo__name {
  font-weight: 700;
}
```

### Media Icons

```css
.media {
  width: 32px;
  aspect-ratio: 1;
}

.media__icon {
  width: 100%;
  aspect-ratio: 1;
}

.media__icon:hover {
  filter: brightness(0) invert(1);
}
```

### Section Heading (h2)

```css
.h2 {
  font-size: 32px;
  font-weight: 500;
  position: relative;
  float: none;
  clear: both;
  display: inline-block;
}

.h2::before {
  content: "#";
  color: var(--primary);
}

.h2::after {
  content: "";
  display: block;
  width: 10vw;
  height: 1px;
  background-color: var(--primary);
  position: absolute;
  transform: translate(100%, -50%);
  right: -16px;
  top: 50%;
}
```

### Path (Page Title)

```css
.path {
  align-self: start;
  display: block;
  width: 100%;
}

.path__name {
  font-size: 32px;
  font-weight: 600;
}

.path__name::before {
  content: "/";
  color: var(--primary);
}

.path__description {
  color: var(--gray);
  margin-top: 16px;
}
```

---

## Shadows & Elevation

The design uses **NO box-shadows**. Elevation is achieved through:
- Border color changes
- Background color variations
- Subtle hover effects (filter, color changes)

**Hover Effects:**
- Media icons: `filter: brightness(0) invert(1)`
- Contact items: `filter: brightness(0) invert(1)`
- Links: Color change to white or primary
- Buttons: Background opacity change

---

## Animations & Transitions

### Standard Transitions

**Hamburger Menu:**
```css
transition: all 0.2s ease;
```

**No explicit transitions defined for other elements**, but hover effects are instant.

### Hover Effects

**Links:**
- Color change from gray to white/primary
- Instant (no transition duration specified)

**Buttons:**
- Background opacity change
- Instant (no transition duration specified)

**Media Icons & Contact Items:**
- Filter effect: `brightness(0) invert(1)`
- Instant (no transition duration specified)

**Dropdown:**
- Arrow rotation: `rotate: 180deg`
- Instant (no transition duration specified)

### Transform Effects

**Dropdown Label Arrow:**
```css
scale: 1 0.3; /* Vertical squish */
rotate: 180deg; /* On hover */
```

**Dropdown List:**
```css
transform: translateY(100%); /* Position below label */
```

**H2 Decorative Line:**
```css
transform: translate(100%, -50%); /* Position to the right */
```

---

## Border Radius

**All Components:** `0px` (Sharp corners)

The design uses no border radius anywhere, maintaining sharp, technical edges throughout:
- Buttons: Sharp corners
- Cards: Sharp corners
- Images: Sharp corners
- Dropdowns: Sharp corners
- Borders: Sharp corners

This creates a consistent, code-editor-like aesthetic.

---

## Opacity & Transparency

### Opacity Values

**10% Opacity:**
- `var(--primary-op)`: `hsl(287 60% 65% / 0.1)`
- `var(--gray-op)`: `hsl(219 14% 71% / 0.1)`
- Used for: Button hover states, status badge icon background

**50% Opacity:**
- Not explicitly used in the extracted CSS

### Transparency Usage

**Background Gradients:**
```css
background-image: linear-gradient(var(--background), var(--background));
background-size: 100% 40%;
background-repeat: no-repeat;
```
- Used for: Quote marks to create partial background

---

## Aspect Ratios

**Project Images:** `aspect-ratio: 16/9`
**Logo Image:** `aspect-ratio: 1` (square)
**Media Icons:** `aspect-ratio: 1` (square)
**Hamburger:** `aspect-ratio: 1` (square)
**Status Badge Icon:** `aspect-ratio: 1` (square)

---

## Positioning Patterns

### Fixed Positioning

**Header:**
```css
position: fixed;
top: 0;
width: 100%;
z-index: 999;
```

**Media Header (Sidebar):**
```css
position: fixed;
left: 16px;
top: 0px;
```

**Hamburger:**
```css
position: absolute;
right: 8px;
top: 32px;
z-index: 9999;
```

### Absolute Positioning

**Quote Author:**
```css
position: absolute;
right: -1px;
```

**Quote Marks:**
```css
position: absolute;
/* ::before */
top: -32px;
left: 16px;

/* ::after */
bottom: -64px;
right: 16px;
```

**H2 Decorative Line:**
```css
position: absolute;
right: -16px;
top: 50%;
```

**Hero Illustrations:**
```css
.hero__logo {
  position: absolute;
  width: 30vmin;
  top: 10%;
  z-index: 1;
}

.hero .dots {
  position: absolute;
  top: 40%;
  width: 12vmin;
  left: 70%;
  z-index: 4;
}
```

### Relative Positioning

**Quote Box:** `position: relative` (for absolute children)
**H2:** `position: relative` (for absolute ::after)
**Dropdown:** `position: relative` (for absolute list)
**Hero Status:** `position: relative; top: -1px`

---

## Z-Index Layers

**Layer System:**
- `z-index: 1` - Hero logo
- `z-index: 2` - Hero image
- `z-index: 4` - Hero dots
- `z-index: 5` - Hero status badge
- `z-index: 999` - Header
- `z-index: 9999` - Hamburger menu (mobile)

---

## Responsive Breakpoints & Behavior

### Desktop (Default)
- Media header visible (sidebar)
- Header links visible
- Dropdown visible
- Hamburger hidden
- Container: max-width 1024px, centered
- Projects: 3 columns
- Skills: 3 columns

### Tablet/Mobile (≤1024px)
```css
@media (max-width: 1024px) {
  /* Hide desktop navigation */
  .media-header { display: none; }
  .header__links { display: none; }
  .dropdown { display: none; }
  
  /* Show hamburger */
  .hamburger { display: block; }
  
  /* Adjust header */
  .header { padding-top: 16px; }
  
  /* Add container padding */
  .container { padding: 16px; }
  
  /* Adjust projects grid */
  .project-list {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
```

### Small Mobile (≤768px)
```css
@media (max-width: 768px) {
  .skills__list { columns: 2; }
}
```

### Extra Small (≤500px)
```css
@media (max-width: 500px) {
  .skills__list { columns: 1; }
}
```

### Hamburger Menu Behavior (Mobile)

When hamburger is checked:
```css
.hamburger:checked {
  /* Transform hamburger to X */
  &::before { transform: translateY(-50%) rotateZ(-45deg); top: 50%; }
  &::after { transform: translateY(-50%) rotateZ(45deg); width: 100%; top: 50%; }
  
  /* Show media header at bottom */
  ~ .media-header {
    display: flex;
    top: calc(100% - 16px);
    left: 50%;
    transform: translate(-50%, -100%);
    z-index: 9999;
  }
  
  /* Expand media icons */
  ~ .media-header .media { width: 48px; }
  
  /* Show navigation */
  ~ .container .header__links {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: -32px;
    transform: translateY(100%);
    font-size: 24px;
  }
  
  /* Show dropdown */
  ~ .container .dropdown {
    display: flex;
    position: absolute;
    bottom: -16px;
    transform: translateY(100%);
    font-size: 24px;
  }
}
```

---

## Accessibility Considerations

### Semantic HTML
- Use proper heading hierarchy (h1 → h2)
- Use semantic elements (header, nav, main, section, footer)
- Use `<button>` for interactive elements with `appearance: none`
- Use `<a>` for links with proper href attributes

### Interactive Elements
- Minimum touch target: 32px (hamburger, media icons)
- Clear hover states for all interactive elements
- Cursor pointer for clickable elements (dropdown, hamburger)

### Color Contrast
- White text on dark background: 15.3:1 (AAA)
- Gray text on dark background: 7.2:1 (AA)
- Primary purple on dark background: 5.8:1 (AA)

### Focus States
**Not explicitly defined in extracted CSS** - Should be added:
```css
a:focus, button:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

---

## Design Tokens Summary

```css
:root {
  /* Colors */
  --primary: hsl(287 60% 65%);
  --primary-op: hsl(287 60% 65%/0.1);
  --gray: hsl(219 14% 71%);
  --gray-op: hsl(219 14% 71%/0.1);
  --background: hsl(218 12% 18%);
  --white: hsl(0 0% 100%);
  
  /* Typography */
  --font-family: "Fira Code", monospace;
  --font-size-base: 16px;
  --font-size-lg: 24px;
  --font-size-xl: 32px;
  --font-size-quote-mark: 64px;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-default: 1.5;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-2xl: 112px;
  
  /* Layout */
  --container-max-width: 1024px;
  --media-header-left: 16px;
  --hamburger-size: 32px;
  --media-icon-size: 32px;
  --logo-img-size: 16px;
  
  /* Borders */
  --border-width: 1px;
  --border-color: var(--gray);
  --border-radius: 0px;
  
  /* Z-Index */
  --z-hero-logo: 1;
  --z-hero-image: 2;
  --z-hero-dots: 4;
  --z-hero-status: 5;
  --z-header: 999;
  --z-hamburger: 9999;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
}
```

---

## BEM Naming Convention

The project uses **BEM (Block Element Modifier)** methodology:

**Block:** `.hero`, `.project`, `.skill-block`, `.quote`, `.header`, `.footer`

**Element:** `.hero__content`, `.project__image`, `.skill-block__name`, `.header__link`

**Modifier:** `.header__link_active`, `.button__secondary`

**Naming Pattern:**
```
.block { }
.block__element { }
.block__element_modifier { }
.block_modifier { }
```

---

## Common Patterns & Utilities

### Container Pattern
```css
.container {
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
}

@media (max-width: 1024px) {
  .container {
    padding: 16px;
  }
}
```

### Content Wrapper
```css
.content {
  margin-top: 112px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 112px;
}
```

### Flex Item Pattern
```css
flex: 1 1 0;
min-width: 300px;
```

### Decorative Dots
```css
.dots {
  width: 10vmin;
  height: auto;
}

.dots circle {
  fill: var(--gray);
}
```

### Viewport-based Sizing
- Hero logo: `30vmin`
- Hero dots: `12vmin`
- Illustrations logo: `14vmin`
- Illustrations dots: `16vmin`, `10vmin`
- H2 decorative line: `10vw`

---

## Key Differences from Initial Style Guide

1. **No explicit dark-bg or darker-bg variables** - Only `--background` is defined
2. **Quote styling is more complex** - Uses large decorative quote marks with gradient backgrounds
3. **Quote author is absolutely positioned** - Not in a bordered footer
4. **Hero status badge** - Has a square icon with primary-op background
5. **BEM naming convention** - Consistent use of double underscores and single underscores for modifiers
6. **Flexbox with flex: 1 1 0** - Common pattern for flexible layouts
7. **Aspect ratios** - Used for images and icons (16/9 for projects, 1:1 for icons)
8. **Viewport units** - Used for decorative elements (vmin, vw)
9. **Column layout for skills** - Uses CSS columns instead of grid
10. **Hamburger menu** - Complex mobile navigation with checkbox hack
11. **Media header (sidebar)** - Fixed position with vertical line
12. **No explicit transitions** - Hover effects are instant
13. **Filter effects** - Used for icon hover states instead of color changes
14. **Transform patterns** - Used for positioning and effects (dropdown, h2 line)
15. **Z-index system** - Defined layers for overlapping elements

---

This updated style guide accurately reflects the actual implementation from the extracted CSS files.
