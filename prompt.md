# Portfolio Website Development - Project Plan

**Project**: Modern Portfolio Website for Financial Reporting Analyst  
**Tech Stack**: React + TypeScript + Custom CSS (NO Tailwind)  
**Design Reference**: https://eliasdevis.github.io/

---

# PHASE 1: PROJECT SETUP & STYLING

## Objective
Set up the project foundation with proper CSS integration and verify the design system is working.

### TODO 1.1: Initialize Project
- [ ] Create React + TypeScript project using Vite or Next.js
- [ ] Verify project runs successfully (`npm run dev`)
- [ ] Clean out default styles and boilerplate

### TODO 1.2: Integrate CSS Design System
- [ ] Create `src/styles/` directory
- [ ] Add `design-tokens.css` file (provided separately)
- [ ] Add `base-styles.css` file (provided separately)
- [ ] Add `components.css` file (provided separately)
- [ ] Add `STYLE_GUIDE.md` to project root (provided separately)

### TODO 1.3: Import CSS Files in Correct Order
In your main entry point (`main.tsx` or `App.tsx`):
```javascript
import './styles/design-tokens.css';
import './styles/base-styles.css';
import './styles/components.css';
```

**CRITICAL**: Import order MUST be: tokens → base → components

### TODO 1.4: Load Fira Code Font
Add to `index.html` in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### TODO 1.5: Verify Design System
- [ ] Create a test component with `.button` class
- [ ] Verify purple color (`var(--primary)`) displays correctly
- [ ] Verify Fira Code font loads
- [ ] Verify dark background (`var(--background)`) displays
- [ ] Check that all CSS variables are accessible

### Phase 1 Success Criteria
✅ Project runs without errors  
✅ All 3 CSS files imported in correct order  
✅ Fira Code font displays  
✅ CSS variables work (colors, spacing, typography)  
✅ STYLE_GUIDE.md is accessible for reference

---

# PHASE 2: HTML STRUCTURE & LAYOUT

## Objective
Build the complete HTML structure with proper semantic markup and CSS classes. Use PLACEHOLDER content only.

### TODO 2.1: Create Base Layout Structure
Create the main layout in `App.tsx`:
```html
<body>
  <div className="media-header">
    {/* Sidebar with social icons - Desktop only */}
  </div>
  
  <header className="header">
    {/* Fixed header with logo and navigation */}
  </header>
  
  <input type="checkbox" className="hamburger" id="hamburger" />
  <label htmlFor="hamburger" className="hamburger-label"></label>
  
  <main className="content">
    {/* All sections go here */}
  </main>
  
  <footer className="footer">
    {/* Footer content */}
  </footer>
</body>
```

### TODO 2.2: Build Media Header (Sidebar)
```html
<div className="media-header">
  <div className="media-header__links">
    <a href="#" className="media media__icon">
      {/* LinkedIn icon */}
    </a>
    <a href="#" className="media media__icon">
      {/* GitHub icon */}
    </a>
  </div>
  <span className="media-header__line"></span>
</div>
```

**Classes**: `.media-header`, `.media-header__links`, `.media`, `.media__icon`, `.media-header__line`

### TODO 2.3: Build Fixed Header with Navigation
```html
<header className="header">
  <div className="container">
    <div className="header__inner">
      <div className="logo">
        <span className="logo__name">Masih</span>
      </div>
      
      <nav className="header__links">
        <a href="#about" className="header__link">about</a>
        <a href="#skills" className="header__link">skills</a>
        <a href="#experience" className="header__link">experience</a>
        <a href="#projects" className="header__link">projects</a>
        <a href="#contacts" className="header__link">contacts</a>
      </nav>
    </div>
  </div>
</header>
```

**Classes**: `.header`, `.container`, `.header__inner`, `.logo`, `.logo__name`, `.header__links`, `.header__link`

### TODO 2.4: Build Hero Section
```html
<div className="container">
  <section className="hero">
    <div className="hero__content">
      <h1 className="hero__title">
        Masih is a <span className="text-primary">Financial Analyst</span> and 
        <span className="text-primary">Data Analytics Specialist</span>
      </h1>
      <p className="hero__description text-gray">
        He transforms financial data into strategic insights
      </p>
      <div className="hero__status">
        Currently exploring new opportunities
      </div>
      <button className="button">Contact me</button>
    </div>
    <div className="hero__image">
      {/* Placeholder image with purple border */}
    </div>
  </section>
</div>
```

**Classes**: `.hero`, `.hero__content`, `.hero__title`, `.hero__description`, `.hero__status`, `.hero__image`, `.button`

### TODO 2.5: Build About Section
```html
<div className="container">
  <section id="about">
    <div className="section__header">
      <h2 className="section__title">about</h2>
    </div>
    <div className="about">
      <div className="about__text">
        <p className="text-gray">PLACEHOLDER: About description here</p>
      </div>
      <div className="about__image">
        {/* Placeholder image with purple border */}
      </div>
    </div>
  </section>
</div>
```

**Classes**: `.section__header`, `.section__title`, `.about`, `.about__text`, `.about__image`

### TODO 2.6: Build Skills Section
```html
<div className="container">
  <section id="skills">
    <div className="section__header">
      <h2 className="section__title">skills</h2>
    </div>
    <div className="skills__list skills-columns">
      <div className="skill">
        <div className="skill__title">Category Name</div>
        <div className="skill__content">
          Skill1, Skill2, Skill3
        </div>
      </div>
      {/* Repeat for all skill categories */}
    </div>
  </section>
</div>
```

**Classes**: `.skills__list`, `.skills-columns`, `.skill`, `.skill__title`, `.skill__content`

### TODO 2.7: Build Experience Section
```html
<div className="container">
  <section id="experience">
    <div className="section__header">
      <h2 className="section__title">experience</h2>
    </div>
    <div className="experience__list">
      <div className="experience__item">
        <div className="experience__header">
          <h3 className="experience__title">Job Title</h3>
          <span className="experience__company">Company Name</span>
          <span className="experience__location">Location</span>
          <span className="experience__dates">2022 - 2025</span>
        </div>
        <ul className="experience__achievements">
          <li className="text-gray">Achievement placeholder</li>
        </ul>
      </div>
      {/* Repeat for all jobs */}
    </div>
  </section>
</div>
```

**Note**: Style with borders consistent with design system

### TODO 2.8: Build Projects Section
```html
<div className="container">
  <section id="projects">
    <div className="section__header">
      <h2 className="section__title">projects</h2>
    </div>
    <div className="project-list">
      <article className="project">
        <div className="project__image">
          {/* 16:9 placeholder image */}
        </div>
        <div className="project__techs">
          Tech1 Tech2 Tech3
        </div>
        <div className="project__content">
          <h3 className="project__title">Project Name</h3>
          <p className="project__description text-gray">
            Project description placeholder
          </p>
          <div className="project__buttons">
            <a href="#" className="button">Live Demo</a>
            <a href="#" className="button button__secondary">GitHub</a>
          </div>
        </div>
      </article>
      {/* Repeat for all projects */}
    </div>
  </section>
</div>
```

**Classes**: `.project-list`, `.project`, `.project__image`, `.project__techs`, `.project__content`, `.project__title`, `.project__description`, `.project__buttons`

### TODO 2.9: Build Education Section
```html
<div className="container">
  <section id="education">
    <div className="section__header">
      <h2 className="section__title">education</h2>
    </div>
    <div className="education__content">
      <h3>University of North Florida</h3>
      <p className="text-gray">Bachelor of Business Administration</p>
      <p className="text-gray">Dual Majors: Finance and Financial Services</p>
      <p className="text-gray">Jacksonville, FL</p>
    </div>
  </section>
</div>
```

**Note**: Style with borders consistent with design system

### TODO 2.10: Build Contacts Section (WITH SECURITY)
```html
<div className="container">
  <section id="contacts">
    <div className="section__header">
      <h2 className="section__title">contacts</h2>
    </div>
    <div className="contacts">
      <div className="contacts__description">
        <p className="text-gray">
          I'm interested in opportunities. However, if you have other 
          requests or questions, don't hesitate to contact me.
        </p>
      </div>
      <div className="contacts__content">
        {/* IMPORTANT: Implement SecureContact component here */}
        {/* See Phase 3 for security implementation */}
      </div>
    </div>
  </section>
</div>
```

**Classes**: `.contacts`, `.contacts__description`, `.contacts__content`

### TODO 2.11: Build Footer
```html
<footer className="footer">
  <div className="container">
    <div className="footer__inner">
      <div className="footer__left">
        <div className="logo">
          <span className="logo__name">Masih</span>
        </div>
        <p className="text-gray">Financial Analyst & Data Specialist</p>
      </div>
      <div className="footer__right">
        <h3>Social</h3>
        <div className="footer__links">
          <a href="#" className="media media__icon">LinkedIn</a>
          <a href="#" className="media media__icon">GitHub</a>
        </div>
      </div>
    </div>
    <p className="footer__copyright text-gray">© 2024 Masih Azizpour</p>
  </div>
</footer>
```

**Classes**: `.footer`, `.footer__inner`, `.footer__left`, `.footer__right`, `.footer__links`, `.footer__copyright`

### TODO 2.12: Add Decorative SVG Elements
Add dots pattern SVG for decoration:
```html
<svg className="dots" width="84" height="84" viewBox="0 0 84 84">
  {/* Grid of small circles with fill="var(--gray)" */}
</svg>
```

Position absolutely in hero and about sections per design reference.

### Phase 2 Success Criteria
✅ Complete HTML structure in place  
✅ All sections use correct CSS classes from design system  
✅ Semantic HTML (header, main, section, article, footer)  
✅ BEM naming convention followed  
✅ Placeholder content in all sections  
✅ Layout matches reference website structure  
✅ Responsive breakpoints work (test at 1024px, 768px, 500px)  
✅ Navigation links scroll to sections

---

# PHASE 3: SECURITY IMPLEMENTATION

## Objective
Implement click-to-reveal pattern for email and phone to prevent scraping.

### TODO 3.1: Create SecureContact Component
Create new file: `src/components/SecureContact.tsx`

```typescript
import { useState } from 'react';

export const SecureContact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  
  // CRITICAL: Store as split arrays, never as plain strings
  const emailParts = ['masih', 'azizpour', 'gmail', 'com'];
  const phoneParts = ['904', '993', '9351'];
  
  return (
    <div className="contacts__content">
      {/* Email */}
      <div className="contact">
        <span className="contact__label">Email:</span>
        {showEmail ? (
          <a 
            href={`mailto:${emailParts[0]}.${emailParts[1]}@${emailParts[2]}.${emailParts[3]}`}
            className="contact__value"
          >
            {emailParts[0]}.{emailParts[1]}@{emailParts[2]}.{emailParts[3]}
          </a>
        ) : (
          <button 
            onClick={() => setShowEmail(true)}
            className="button button__secondary"
            style={{ padding: '4px 12px', fontSize: '14px' }}
          >
            Reveal Email
          </button>
        )}
      </div>
      
      {/* Phone */}
      <div className="contact">
        <span className="contact__label">Phone:</span>
        {showPhone ? (
          <a 
            href={`tel:+1${phoneParts[0]}${phoneParts[1]}${phoneParts[2]}`}
            className="contact__value"
          >
            ({phoneParts[0]}) {phoneParts[1]}-{phoneParts[2]}
          </a>
        ) : (
          <button 
            onClick={() => setShowPhone(true)}
            className="button button__secondary"
            style={{ padding: '4px 12px', fontSize: '14px' }}
          >
            Reveal Phone
          </button>
        )}
      </div>
      
      {/* Location - Safe to display */}
      <div className="contact">
        <span className="contact__label">Location:</span>
        <span className="contact__value">Jacksonville, FL</span>
      </div>
    </div>
  );
};
```

### TODO 3.2: Integrate SecureContact in Contacts Section
Replace the placeholder in Contacts section with:
```tsx
import { SecureContact } from './components/SecureContact';

// In contacts section:
<div className="contacts__content">
  <SecureContact />
</div>
```

### TODO 3.3: Add Social Media Links (Safe to Display)
Below the SecureContact component, add:
```html
<div className="contacts__social">
  <a href="[LinkedIn-URL]" className="media media__icon" target="_blank" rel="noopener">
    {/* LinkedIn icon */}
  </a>
  <a href="[GitHub-URL]" className="media media__icon" target="_blank" rel="noopener">
    {/* GitHub icon */}
  </a>
</div>
```

### TODO 3.4: Security Verification Checklist
- [ ] Email is stored as split array: `['masih', 'azizpour', 'gmail', 'com']`
- [ ] Phone is stored as split array: `['904', '993', '9351']`
- [ ] NO plain text email/phone in HTML source code
- [ ] "Reveal Email" and "Reveal Phone" buttons display initially
- [ ] Clicking buttons constructs and displays contact info
- [ ] After reveal, `mailto:` and `tel:` links work correctly
- [ ] View page source: confirm no email/phone in raw HTML
- [ ] Test on mobile: `tel:` link opens phone dialer after reveal

### Phase 3 Success Criteria
✅ SecureContact component created and working  
✅ Email/phone hidden behind click-to-reveal buttons  
✅ Contact info only appears after user interaction  
✅ No plain text email/phone in HTML source  
✅ Links work correctly after reveal  
✅ Button styling matches design system

---

# PHASE 4: CONTENT POPULATION

## Objective
Replace ALL placeholder content with real information. Do NOT add any new features or styling.

### TODO 4.1: Update Hero Section
Replace with:
```
Name: Masih Azizpour
Title: Financial Reporting Analyst & Data Analytics Specialist
Tagline: Transforming financial data into strategic insights through 
         advanced analytics and automation
Status: Currently exploring new opportunities in Financial Analytics 
        and Business Intelligence
```

### TODO 4.2: Update About Section
Replace placeholder with:
```
Financial Reporting Analyst with over 7 years of experience in business 
intelligence, financial planning & analysis, and workflow automation. Expert 
in leveraging Power BI, Alteryx, SQL, and Oracle systems to transform complex 
financial data into actionable insights. Proven track record managing $200M+ 
operations, automating reporting processes, and delivering strategic 
recommendations to senior leadership. Passionate about using data analytics 
and emerging technologies to drive financial efficiency and strategic 
decision-making.
```

### TODO 4.3: Update Skills Section

**Financial & Analytics:**
```
Financial Reporting & Analysis, FP&A & OPEX Management, Financial 
Consolidation & Forecasting, Variance Analysis & Commentary, Capital 
Investment Analysis (NPV/IRR), Process Improvement & Optimization
```

**Technical Tools & Platforms:**
```
Power BI (Dashboard Development), Alteryx (Certified - Workflow Automation), 
SQL (Data Querying & Manipulation), SAP FI/CO & Oracle Fusion ERP, Hyperion 
Financial Management, Oracle OTBI, Anaplan, Python (Data Analytics & Automation)
```

**Web Development & Applications:**
```
React & Next.js (Web Application Development), TypeScript & JavaScript, 
Tailwind CSS & Modern UI Design, RESTful APIs & Data Integration, Claude AI 
& LLM Integration, Full-Stack Development Concepts
```

**Business Intelligence:**
```
ETL Processes & Data Integration, Requirements Gathering & Analysis, Executive 
Presentations, Cross-Functional Collaboration, Strategic Decision Support
```

### TODO 4.4: Update Experience Section

**Job 1: FIS (Fidelity Information Services)**
```
Position: Financial Reporting Analyst II
Location: Jacksonville, FL
Duration: 2022 - 2025

Achievements:
• Designed and maintained interactive Power BI dashboards delivering real-time 
  visibility into Accounts Payable trends, reducing manual reporting time by 40% 
  and accelerating executive decision-making

• Managed global financial consolidation and reporting for $200M+ operations, 
  including expense, capital, and headcount tracking across multiple business units

• Automated end-to-end AP data extraction, transformation, and reporting using 
  Alteryx and SQL, cutting data processing time by 50% and improving accuracy 
  in monthly reporting cycles

• Led forecasting and financial planning processes including quarterly updates, 
  identifying risks and opportunities worth $2M+ annually

• Performed quarter-close responsibilities including journal entries, intercompany 
  cross-charges, and variance commentary, achieving 99.8% accuracy and reducing 
  close cycle time by 35%

• Created monthly analytics packages for Tribe Leads and Product Owners covering 
  AP activity, cash flow trends, and expense performance, informing a $2M 
  reallocation in departmental budgets

• Partnered with finance, engineering, and IT teams to integrate 5+ data sources, 
  enhancing financial data completeness and reliability across reporting platforms

• Delivered executive presentations to Senior Directors and VP of Finance with 
  actionable insights that enabled strategic decision-making
```

**Job 2: CIT Bank N.A**
```
Position: End of Lease Specialist III
Location: Jacksonville, FL
Duration: 2017 - 2022

Achievements:
• Oversaw a $100M+ technology and industrial equipment lease portfolio, driving 
  a 95% client retention rate through responsive service and strategic upsell 
  opportunities

• Analyzed portfolio using financial metrics including NPV and IRR to evaluate 
  investment opportunities and deliver strategic recommendations

• Finalized high-volume sales transactions with 110% quarterly attainment by 
  analyzing customer data and aligning renewal terms with business goals

• Led cross-departmental issue resolution initiatives, reducing service backlog 
  resolution time by 25% and improving interdepartmental workflow efficiency

• Contributed to Salesforce CRM system implementation by executing test scenarios 
  during UAT and providing feedback that enhanced system functionality for over 
  50 users

• Performed detailed financial research to reconcile cash receipts with internal 
  systems, maintaining a 99.8% transaction accuracy rate
```

**Job 3: Independent Business Operations**
```
Position: Business Owner / Managing Partner
Location: Jacksonville, FL
Duration: 2014 - 2024

Achievements:
• Managed comprehensive P&L with full responsibility for expense management, 
  capital planning, and headcount decisions across multiple operational sites

• Performed all financial planning, forecasting, and monthly close activities 
  while ensuring compliance with regulatory requirements
```

### TODO 4.5: Update Projects Section

**Project 1: Automated AP Dashboard & Reporting System**
```
Description: Developed an end-to-end automated reporting solution using Power BI, 
Alteryx, and SQL that consolidated data from 5+ sources. Reduced manual reporting 
time by 40% and provided real-time visibility into $200M+ AP operations. Featured 
drill-down capabilities for trend analysis and variance tracking.

Technologies: Power BI, Alteryx, SQL, Oracle Fusion

Links: [Leave as placeholders or remove if no live demo]
```

**Project 2: Financial Consolidation & Forecasting Platform**
```
Description: Led implementation of a global financial consolidation system 
integrating SAP, Oracle Fusion, and Hyperion. Streamlined quarter-close processes, 
reducing cycle time by 35% while maintaining 99.8% accuracy across journal entries 
and intercompany charges.

Technologies: SAP FI/CO, Oracle Fusion, Hyperion, Excel

Links: [Leave as placeholders or remove if no live demo]
```

**Project 3: ETL Workflow Optimization**
```
Description: Created modular Alteryx workflows that automated data extraction, 
transformation, and loading from multiple ERP systems. Improved data processing 
efficiency by 50% and enabled real-time financial insights for executive 
decision-making.

Technologies: Alteryx, SQL, Python, Oracle OTBI

Links: [Leave as placeholders or remove if no live demo]
```

**Project 4: Executive Analytics Package**
```
Description: Designed monthly analytics packages in Power BI combining AP trends, 
cash flow analysis, and expense performance metrics. Delivered actionable insights 
that informed $2M in strategic budget reallocations across departments.

Technologies: Power BI, Excel, PowerPoint

Links: [Leave as placeholders or remove if no live demo]
```

**Project 5: Financial Analytics Web Portal**
```
Description: Built a custom web application using React, TypeScript, and Claude AI 
to streamline financial data analysis and reporting workflows. Integrated real-time 
data visualization components with backend APIs, enabling stakeholders to access 
interactive dashboards and generate custom reports on-demand.

Technologies: React, TypeScript, Tailwind CSS, Claude AI, REST APIs

Links: [Add if applicable]
```

**Project 6: Salesforce CRM Enhancement Initiative**
```
Description: Collaborated on UAT testing and system optimization for Salesforce CRM 
implementation serving 50+ users. Provided feedback that improved lease management 
workflows and customer interaction tracking capabilities.

Technologies: Salesforce, CRM Systems

Links: [Leave as placeholders or remove if no live demo]
```

### TODO 4.6: Update Education Section
```
University: University of North Florida, Coggin College of Business
Degree: Bachelor of Business Administration
Majors: Dual Majors in Finance and Financial Services
Location: Jacksonville, FL
```

Add certification:
```
Certifications:
• Alteryx Designer Core Certified
```

### TODO 4.7: Update Footer
```
Left side:
Name: Masih
Tagline: Financial Analyst & Data Specialist

Right side:
Social links: LinkedIn, GitHub (use actual URLs)

Copyright: © 2025 Masih Azizpour
```

### TODO 4.8: Add Real Images
- [ ] Add professional headshot for hero section (with purple border)
- [ ] Add professional photo for about section (with purple border)
- [ ] Add project screenshots/placeholders for all 6 projects (16:9 aspect ratio)
- [ ] Add social media icons (LinkedIn, GitHub) for sidebar and footer
- [ ] Ensure all images are optimized for web

### TODO 4.9: Add Social Media URLs
Replace all `[LinkedIn-URL]` and `[GitHub-URL]` placeholders with:
```
LinkedIn: [User to provide actual LinkedIn URL]
GitHub: [User to provide actual GitHub URL]
```

### Phase 4 Success Criteria
✅ ALL placeholder text replaced with real content  
✅ All 3 jobs in experience section with full descriptions  
✅ All 6 projects with complete descriptions  
✅ All 4 skill categories populated  
✅ About section has full bio  
✅ Education and certification added  
✅ Professional images added and optimized  
✅ Social media links updated  
✅ No lorem ipsum or placeholder text remains

---

# PHASE 5: POLISH & OPTIMIZATION

## Objective
Final refinements, testing, and deployment preparation.

### TODO 5.1: Responsive Testing
Test at these breakpoints:
- [ ] Desktop: 1920px, 1440px, 1024px
- [ ] Tablet: 768px
- [ ] Mobile: 500px, 375px, 320px

Verify:
- [ ] Media header hides ≤1024px
- [ ] Navigation links hide ≤1024px
- [ ] Hamburger menu shows ≤1024px
- [ ] Projects grid adjusts properly
- [ ] Skills columns reduce (3 → 2 → 1)
- [ ] All text remains readable
- [ ] Buttons remain tappable (min 44px)

### TODO 5.2: Navigation Testing
- [ ] All navigation links scroll smoothly to sections
- [ ] Active section highlights in navigation
- [ ] Hamburger menu opens/closes correctly on mobile
- [ ] Hamburger transforms to X when active
- [ ] Mobile navigation displays correctly when expanded

### TODO 5.3: Interactive Elements Testing
- [ ] All buttons have hover states
- [ ] Contact reveal buttons work correctly
- [ ] External links open in new tabs (`target="_blank" rel="noopener"`)
- [ ] mailto: links work after email reveal
- [ ] tel: links work after phone reveal on mobile
- [ ] All social media icons link correctly

### TODO 5.4: Performance Optimization
- [ ] Optimize all images (compress, use WebP if possible)
- [ ] Lazy load images below the fold
- [ ] Minify CSS for production
- [ ] Check Lighthouse scores (aim for 90+ on all metrics)
- [ ] Verify fast loading time (< 3 seconds)

### TODO 5.5: Accessibility Audit
- [ ] All images have alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works (tab through all links)
- [ ] Focus states visible on interactive elements
- [ ] Screen reader friendly (test with NVDA/VoiceOver)

### TODO 5.6: SEO Optimization
Add to `index.html` `<head>`:
```html
<title>Masih Azizpour - Financial Reporting Analyst & Data Analytics Specialist</title>
<meta name="description" content="Financial Reporting Analyst with 7+ years experience in business intelligence, data analytics, and workflow automation. Expert in Power BI, Alteryx, and SQL.">
<meta name="keywords" content="Financial Analyst, Data Analytics, Power BI, Alteryx, SQL, Business Intelligence">
<meta name="author" content="Masih Azizpour">

<!-- Open Graph -->
<meta property="og:title" content="Masih Azizpour - Financial Analyst Portfolio">
<meta property="og:description" content="Financial Reporting Analyst specializing in data analytics and business intelligence">
<meta property="og:type" content="website">
<meta property="og:url" content="[Your-Domain-URL]">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

### TODO 5.7: Cross-Browser Testing
Test in:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

Verify:
- [ ] CSS grid and flexbox work correctly
- [ ] CSS variables display properly
- [ ] Fonts load correctly
- [ ] No layout shifts or broken elements

### TODO 5.8: Security Verification
- [ ] View page source: confirm NO email/phone in raw HTML
- [ ] Test contact reveal: email/phone only appear after click
- [ ] Verify external links have `rel="noopener"` for security
- [ ] Check that no sensitive data is exposed in console/network tab

### TODO 5.9: Code Quality
- [ ] Remove all console.log statements
- [ ] Remove unused imports and components
- [ ] Add TypeScript types where missing
- [ ] Ensure no ESLint errors
- [ ] Format code consistently (Prettier)
- [ ] Add comments for complex logic

### TODO 5.10: Documentation
Create `README.md` with:
- [ ] Project description
- [ ] Tech stack used
- [ ] Installation instructions (`npm install`, `npm run dev`)
- [ ] Build instructions (`npm run build`)
- [ ] Deployment instructions
- [ ] Credits (design system, fonts, etc.)

### Phase 5 Success Criteria
✅ Fully responsive across all devices  
✅ All interactive elements working  
✅ Performance optimized (90+ Lighthouse score)  
✅ Accessible (WCAG AA compliance)  
✅ SEO optimized with proper meta tags  
✅ Cross-browser compatible  
✅ Security measures verified  
✅ Clean, documented code  
✅ README.md complete

---

# PHASE 6: DEPLOYMENT

## Objective
Deploy the website to a public hosting platform.

### TODO 6.1: Build for Production
```bash
npm run build
```
- [ ] Verify build completes without errors
- [ ] Test production build locally
- [ ] Check bundle size is reasonable

### TODO 6.2: Choose Hosting Platform
Recommended options:
- **GitHub Pages**: Free, easy integration with GitHub repos
- **Vercel**: Free, automatic deployments, great for React
- **Netlify**: Free, easy deployment, continuous integration

### TODO 6.3: Deploy to GitHub Pages

**If using GitHub Pages:**
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://[username].github.io/[repo-name]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages in repo settings (source: gh-pages branch)

### TODO 6.4: Deploy to Vercel (Alternative)

**If using Vercel:**
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and link to GitHub repo for automatic deployments

### TODO 6.5: Configure Custom Domain (Optional)
- [ ] Purchase domain name
- [ ] Add custom domain in hosting platform settings
- [ ] Configure DNS records (A record or CNAME)
- [ ] Enable HTTPS/SSL certificate
- [ ] Verify domain propagation
- [ ] Update meta tags with final domain URL

### TODO 6.6: Post-Deployment Verification
- [ ] Visit live site and verify all pages load
- [ ] Test all navigation links work
- [ ] Test contact reveal buttons work
- [ ] Verify images load correctly
- [ ] Test responsive design on real mobile devices
- [ ] Check all external links (LinkedIn, GitHub)
- [ ] Verify security: no email/phone in page source
- [ ] Run final Lighthouse audit on live site
- [ ] Test site speed with GTmetrix or similar

### TODO 6.7: Share & Monitor
- [ ] Update LinkedIn with portfolio link
- [ ] Update GitHub profile with portfolio link
- [ ] Share with network
- [ ] Set up analytics (optional: Google Analytics, Plausible)
- [ ] Monitor for broken links or issues
- [ ] Collect feedback and iterate

### Phase 6 Success Criteria
✅ Site successfully deployed to hosting platform  
✅ Live URL accessible to public  
✅ All functionality works on live site  
✅ Custom domain configured (if applicable)  
✅ HTTPS enabled  
✅ Performance verified on live site  
✅ Portfolio link shared on professional networks

---

# FINAL CHECKLIST

## Design System Compliance
- [ ] All CSS imported in correct order (tokens → base → components)
- [ ] NO Tailwind CSS used
- [ ] NO custom CSS written outside design system
- [ ] BEM naming convention followed throughout
- [ ] All colors use CSS variables (var(--primary), var(--gray), etc.)
- [ ] All spacing uses CSS variables (var(--space-md), etc.)
- [ ] Fira Code font loads and displays correctly
- [ ] Sharp corners (0px border radius) maintained
- [ ] 1px borders used throughout
- [ ] No box-shadows anywhere

## Content Completeness
- [ ] All sections present (Hero, About, Skills, Experience, Projects, Education, Contacts)
- [ ] All placeholder text replaced with real content
- [ ] All 3 work experiences fully described
- [ ] All 6 projects fully described
- [ ] All 4 skill categories populated
- [ ] Professional images added (hero, about, projects)
- [ ] Social media links working (LinkedIn, GitHub)
- [ ] Contact information secure (click-to-reveal)

## Functionality
- [ ] Fixed header with working navigation
- [ ] Smooth scrolling to sections
- [ ] Active section highlighting in nav
- [ ] Hamburger menu works on mobile
- [ ] Media header (sidebar) visible on desktop, hidden on mobile
- [ ] Contact reveal buttons work correctly
- [ ] All external links open in new tabs
- [ ] mailto: and tel: links work after reveal

## Responsive Design
- [ ] Works on desktop (1920px, 1440px, 1024px)
- [ ] Works on tablet (768px)
- [ ] Works on mobile (500px, 375px, 320px)
- [ ] Media header hides ≤1024px
- [ ] Navigation adapts ≤1024px
- [ ] Projects grid responsive (3 → 2 → 1 columns)
- [ ] Skills columns responsive (3 → 2 → 1 columns)

## Security
- [ ] Email stored as split array, not plain text
- [ ] Phone stored as split array, not plain text
- [ ] NO email/phone in HTML source code
- [ ] Contact info only appears after user interaction
- [ ] External links have rel="noopener"

## Performance
- [ ] Images optimized and compressed
- [ ] Lazy loading implemented for below-fold images
- [ ] CSS minified for production
- [ ] Fast loading time (< 3 seconds)
- [ ] Lighthouse score 90+ on all metrics

## Accessibility
- [ ] Semantic HTML throughout
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader friendly

## SEO
- [ ] Descriptive page title
- [ ] Meta description added
- [ ] Meta keywords added
- [ ] Open Graph tags added
- [ ] Favicon added
- [ ] Semantic HTML for better indexing

## Code Quality
- [ ] No console.log statements
- [ ] No unused imports/components
- [ ] TypeScript types added where needed
- [ ] No ESLint errors
- [ ] Code formatted consistently
- [ ] Comments added for complex logic
- [ ] README.md complete

## Deployment
- [ ] Production build successful
- [ ] Site deployed to hosting platform
- [ ] Live URL accessible
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] All functionality verified on live site
- [ ] Portfolio link shared on LinkedIn/GitHub

---

# CRITICAL RULES - READ BEFORE STARTING

## What NOT to Do

❌ **DO NOT use Tailwind CSS** - Use the provided custom CSS design system only  
❌ **DO NOT write custom CSS** - Use existing classes from components.css  
❌ **DO NOT add border radius** - Design uses sharp corners (0px) throughout  
❌ **DO NOT add box shadows** - Design uses borders for elevation  
❌ **DO NOT put email/phone in HTML** - Must use click-to-reveal security pattern  
❌ **DO NOT skip the CSS import order** - Must be: tokens → base → components  
❌ **DO NOT deviate from BEM naming** - Follow the established pattern  
❌ **DO NOT add additional CSS frameworks** - Everything needed is provided  
❌ **DO NOT change color values** - Use CSS variables only  
❌ **DO NOT skip responsive testing** - Must work on all breakpoints  
❌ **DO NOT deploy without security verification** - Check email/phone not in source

## What TO Do

✅ **USE the provided CSS files** - They contain everything you need  
✅ **FOLLOW the BEM naming convention** - .block__element_modifier  
✅ **REFERENCE STYLE_GUIDE.md** - For component patterns and usage  
✅ **USE CSS variables** - For all colors, spacing, typography  
✅ **IMPLEMENT click-to-reveal** - For email and phone security  
✅ **TEST at all breakpoints** - 1024px, 768px, 500px minimum  
✅ **VERIFY security** - View page source to confirm no exposed contact info  
✅ **OPTIMIZE images** - Compress and use appropriate formats  
✅ **ADD proper alt text** - For accessibility  
✅ **CHECK Lighthouse scores** - Aim for 90+ on all metrics

---

# PHASE-BY-PHASE WORKFLOW

## Recommended Development Flow

**Start Here → Phase 1** (Setup & CSS)
- Get the foundation right first
- Verify all CSS working before moving on

**Then → Phase 2** (HTML Structure)
- Build complete structure with placeholder content
- Focus on semantic HTML and correct class names
- Don't worry about real content yet

**Then → Phase 3** (Security)
- Implement contact security early
- This is a critical requirement

**Then → Phase 4** (Content)
- Replace all placeholders with real information
- Add images and links
- This is the longest phase

**Then → Phase 5** (Polish)
- Test everything thoroughly
- Optimize performance
- Fix any issues found

**Finally → Phase 6** (Deploy)
- Build and deploy to hosting
- Verify live site works
- Share with the world

---

# SUCCESS METRICS

## How to Know You're Done

Your portfolio is complete when:

✅ **Visual**: Matches the reference design aesthetic exactly  
✅ **Functional**: All interactive elements work correctly  
✅ **Responsive**: Works perfectly on mobile, tablet, and desktop  
✅ **Secure**: Email/phone protected from scraping  
✅ **Performant**: Loads in < 3 seconds, Lighthouse 90+  
✅ **Accessible**: WCAG AA compliant  
✅ **Professional**: Real content, no placeholders or lorem ipsum  
✅ **Deployed**: Live on the web with HTTPS  
✅ **Shared**: Link active on LinkedIn and GitHub profiles

---

# GETTING HELP

## Reference Materials

1. **STYLE_GUIDE.md** - Complete design system documentation
2. **design-tokens.css** - All CSS variables reference
3. **base-styles.css** - Typography and common patterns
4. **components.css** - All component styles and utilities
5. **Reference website**: https://eliasdevis.github.io/

## Common Issues & Solutions

**Issue: CSS not applying**
- Check CSS import order (tokens → base → components)
- Verify class names match exactly (case-sensitive)
- Check for typos in CSS variable names

**Issue: Layout breaking on mobile**
- Test at exact breakpoints: 1024px, 768px, 500px
- Verify hamburger menu implemented correctly
- Check that media-header hides at 1024px

**Issue: Contact info showing in source**
- Verify using split arrays: `['masih', 'azizpour', 'gmail', 'com']`
- Check that useState controls visibility
- Confirm no plain text email/phone in JSX

**Issue: Fonts not loading**
- Verify Fira Code link in index.html <head>
- Check font-family CSS variable usage
- Clear cache and reload

**Issue: Colors wrong**
- Verify design-tokens.css imported first
- Check using CSS variables: `var(--primary)` not hex codes
- Confirm no inline style overrides

---

# PROJECT STRUCTURE

## Recommended File Organization

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero.jpg
│       ├── about.jpg
│       └── projects/
│           ├── project1.jpg
│           ├── project2.jpg
│           └── ...
├── src/
│   ├── components/
│   │   ├── SecureContact.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contacts.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── design-tokens.css
│   │   ├── base-styles.css
│   │   └── components.css
│   ├── App.tsx
│   └── main.tsx
├── STYLE_GUIDE.md
├── README.md
├── package.json
└── vite.config.ts (or next.config.js)
```

---

# TIMELINE ESTIMATE

**Phase 1**: 1-2 hours (Setup & CSS integration)  
**Phase 2**: 3-4 hours (HTML structure with placeholders)  
**Phase 3**: 1 hour (Security implementation)  
**Phase 4**: 2-3 hours (Content population)  
**Phase 5**: 2-3 hours (Testing & optimization)  
**Phase 6**: 1 hour (Deployment)

**Total**: 10-14 hours for complete portfolio

---

# FINAL NOTES

## This is a Complete Guide

This document contains EVERYTHING needed to build the portfolio:
- Exact tech stack and tools
- Complete HTML structure with class names
- All content (bio, experience, projects, skills)
- Security implementation (contact protection)
- Testing procedures and checklists
- Deployment instructions

## Stay Focused

- Work through phases sequentially
- Complete each TODO before moving to next
- Use the provided CSS - don't reinvent
- Follow the reference design exactly
- Test thoroughly at each phase
- Don't skip security requirements

## When in Doubt

1. Check STYLE_GUIDE.md
2. Look at reference website
3. Verify CSS class names in components.css
4. Test in browser at multiple breakpoints
5. View page source to verify security

---

**Good luck building your portfolio! 🚀**

This document is your complete roadmap from empty project to deployed website.