import type { SVGProps } from 'react'

import heroImage from './assets/hero-headshot.svg'
import aboutImage from './assets/about-profile.svg'
import projectPlaceholder from './assets/project-placeholder.svg'
import githubIcon from './assets/icon-github.svg'
import linkedinIcon from './assets/icon-linkedin.svg'
import { SecureContact } from './components/SecureContact'

const DotsPattern = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  const circles = Array.from({ length: 7 }, (_, row) =>
    Array.from({ length: 7 }, (_, col) => ({
      cx: 6 + col * 12,
      cy: 6 + row * 12,
      r: 2,
      key: `${row}-${col}`,
    })),
  )

  const svgClassName = ['dots', className].filter(Boolean).join(' ')

  return (
    <svg width="84" height="84" viewBox="0 0 84 84" className={svgClassName} {...props}>
      {circles.flat().map(({ cx, cy, r, key }) => (
        <circle cx={cx} cy={cy} r={r} key={key} />
      ))}
    </svg>
  )
}

const LINKEDIN_URL = 'https://www.linkedin.com/in/masih-azizpour/'
const GITHUB_URL = 'https://github.com/masih-azizpour'

const projects = [
  {
    title: 'Automated AP Dashboard & Reporting System',
    description:
      'Developed an end-to-end automated reporting solution using Power BI, Alteryx, and SQL that consolidated data from 5+ sources. Reduced manual reporting time by 40% and provided real-time visibility into $200M+ AP operations with drill-down trend analysis.',
    techs: ['Power BI', 'Alteryx', 'SQL', 'Oracle Fusion'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Financial Consolidation & Forecasting Platform',
    description:
      'Led implementation of a global financial consolidation system integrating SAP, Oracle Fusion, and Hyperion. Streamlined quarter-close processes, reducing cycle time by 35% while maintaining 99.8% accuracy across journal entries and intercompany charges.',
    techs: ['SAP FI/CO', 'Oracle Fusion', 'Hyperion', 'Excel'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'ETL Workflow Optimization',
    description:
      'Created modular Alteryx workflows that automated data extraction, transformation, and loading from multiple ERP systems. Improved data processing efficiency by 50% and enabled real-time financial insights for executive decision-making.',
    techs: ['Alteryx', 'SQL', 'Python', 'Oracle OTBI'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Executive Analytics Package',
    description:
      'Designed monthly analytics packages in Power BI combining Accounts Payable trends, cash flow analysis, and expense performance metrics. Delivered actionable insights that informed $2M in strategic budget reallocations.',
    techs: ['Power BI', 'Excel', 'PowerPoint'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Financial Analytics Web Portal',
    description:
      'Built a custom web application using React, TypeScript, and Claude AI to streamline financial data analysis workflows. Integrated real-time data visualizations with backend APIs for interactive dashboards and on-demand reporting.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Claude AI', 'REST APIs'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Salesforce CRM Enhancement Initiative',
    description:
      'Collaborated on UAT testing and optimization for a Salesforce CRM deployment serving 50+ users. Delivered feedback that improved lease management workflows and customer interaction tracking capabilities.',
    techs: ['Salesforce', 'CRM Systems'],
    liveUrl: '#',
    repoUrl: '#',
  },
]

const experiences = [
  {
    title: 'Financial Reporting Analyst II',
    company: 'Fidelity Information Services (FIS)',
    location: 'Jacksonville, FL',
    dates: '2022 - 2025',
    achievements: [
      'Designed and maintained interactive Power BI dashboards delivering real-time visibility into Accounts Payable trends, reducing manual reporting time by 40% and accelerating executive decision-making.',
      'Managed global financial consolidation and reporting for $200M+ operations, including expense, capital, and headcount tracking across multiple business units.',
      'Automated end-to-end AP data extraction, transformation, and reporting using Alteryx and SQL, cutting data processing time by 50% and improving accuracy in monthly reporting cycles.',
      'Led forecasting and financial planning processes including quarterly updates, identifying risks and opportunities worth $2M+ annually.',
      'Performed quarter-close responsibilities including journal entries, intercompany cross-charges, and variance commentary, achieving 99.8% accuracy and reducing close cycle time by 35%.',
      'Created monthly analytics packages for Tribe Leads and Product Owners covering AP activity, cash flow trends, and expense performance, informing a $2M reallocation in departmental budgets.',
      'Partnered with finance, engineering, and IT teams to integrate 5+ data sources, enhancing financial data completeness and reliability across reporting platforms.',
      'Delivered executive presentations to Senior Directors and the VP of Finance with actionable insights that enabled strategic decision-making.',
    ],
  },
  {
    title: 'End of Lease Specialist III',
    company: 'CIT Bank N.A',
    location: 'Jacksonville, FL',
    dates: '2017 - 2022',
    achievements: [
      'Oversaw a $100M+ technology and industrial equipment lease portfolio, driving a 95% client retention rate through responsive service and strategic upsell opportunities.',
      'Analyzed portfolio performance using metrics such as NPV and IRR to evaluate investment opportunities and deliver strategic recommendations.',
      'Finalized high-volume sales transactions with 110% quarterly attainment by analyzing customer data and aligning renewal terms with business goals.',
      'Led cross-departmental issue resolution initiatives, reducing service backlog resolution time by 25% and improving interdepartmental workflow efficiency.',
      'Contributed to Salesforce CRM implementation by executing UAT scenarios and providing feedback that enhanced system functionality for over 50 users.',
      'Performed detailed financial research to reconcile cash receipts with internal systems, maintaining a 99.8% transaction accuracy rate.',
    ],
  },
  {
    title: 'Business Owner / Managing Partner',
    company: 'Independent Business Operations',
    location: 'Jacksonville, FL',
    dates: '2014 - 2024',
    achievements: [
      'Managed comprehensive P&L with full responsibility for expense management, capital planning, and headcount decisions across multiple operational sites.',
      'Performed all financial planning, forecasting, and monthly close activities while ensuring compliance with regulatory requirements.',
    ],
  },
]

function App() {
  return (
    <>
      <div className="media-header">
        <div className="media-header__links">
          <a
            href={LINKEDIN_URL}
            className="media media__icon"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="" />
          </a>
          <a
            href={GITHUB_URL}
            className="media media__icon"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="" />
          </a>
        </div>
        <span className="media-header__line" />
      </div>

      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="logo">
              <span className="logo__name">Masih</span>
            </div>
            <nav className="header__links" aria-label="Primary">
              <a href="#about" className="header__link">
                about
              </a>
              <a href="#skills" className="header__link">
                skills
              </a>
              <a href="#experience" className="header__link">
                experience
              </a>
              <a href="#projects" className="header__link">
                projects
              </a>
              <a href="#education" className="header__link">
                education
              </a>
              <a href="#contacts" className="header__link">
                contacts
              </a>
            </nav>
          </div>
        </div>
      </header>

      <input type="checkbox" className="hamburger" id="hamburger" aria-hidden="true" />
      <label htmlFor="hamburger" className="hamburger-label" aria-label="Open navigation" />

      <main className="content">
        <div className="container">
          <section className="hero">
            <div className="hero__content">
              <h1 className="hero__title">Masih Azizpour</h1>
              <p className="text-primary font-semibold">
                Financial Reporting Analyst &amp; Data Analytics Specialist
              </p>
              <p className="hero__description text-gray">
                Transforming financial data into strategic insights through advanced analytics and
                automation.
              </p>
              <div className="hero__status text-gray">
                Currently exploring new opportunities in Financial Analytics and Business
                Intelligence
              </div>
              <button className="button" type="button">
                Contact me
              </button>
            </div>
            <div className="hero__image">
              <img src={heroImage} alt="Portrait of Masih Azizpour" />
            </div>
            <DotsPattern />
          </section>
        </div>

        <div className="container">
          <section id="about">
            <div className="section__header">
              <h2 className="section__title">about</h2>
            </div>
            <div className="about">
              <div className="about__text">
                <p className="text-gray">
                  Financial Reporting Analyst with over 7 years of experience in business
                  intelligence, financial planning &amp; analysis, and workflow automation. Expert in
                  leveraging Power BI, Alteryx, SQL, and Oracle systems to transform complex
                  financial data into actionable insights.
                </p>
                <p className="text-gray">
                  Proven track record managing $200M+ operations, automating reporting processes, and
                  delivering strategic recommendations to senior leadership.
                </p>
                <p className="text-gray">
                  Passionate about using data analytics and emerging technologies to drive financial
                  efficiency and strategic decision-making.
                </p>
              </div>
              <div className="about__image">
                <img src={aboutImage} alt="Masih collaborating on a financial analytics project" />
              </div>
              <DotsPattern />
            </div>
          </section>
        </div>

        <div className="container">
          <section id="skills">
            <div className="section__header">
              <h2 className="section__title">skills</h2>
            </div>
            <div className="skills__list skills-columns">
              <div className="skill">
                <div className="skill__title">Financial &amp; Analytics</div>
                <div className="skill__content">
                  Financial Reporting &amp; Analysis, FP&amp;A &amp; OPEX Management, Financial
                  Consolidation &amp; Forecasting, Variance Analysis &amp; Commentary, Capital
                  Investment Analysis (NPV/IRR), Process Improvement &amp; Optimization
                </div>
              </div>
              <div className="skill">
                <div className="skill__title">Technical Tools &amp; Platforms</div>
                <div className="skill__content">
                  Power BI (Dashboard Development), Alteryx (Certified - Workflow Automation), SQL
                  (Data Querying &amp; Manipulation), SAP FI/CO &amp; Oracle Fusion ERP, Hyperion
                  Financial Management, Oracle OTBI, Anaplan, Python (Data Analytics &amp;
                  Automation)
                </div>
              </div>
              <div className="skill">
                <div className="skill__title">Web Development &amp; Applications</div>
                <div className="skill__content">
                  React &amp; Next.js (Web Application Development), TypeScript &amp; JavaScript,
                  Tailwind CSS &amp; Modern UI Design, RESTful APIs &amp; Data Integration, Claude
                  AI &amp; LLM Integration, Full-Stack Development Concepts
                </div>
              </div>
              <div className="skill">
                <div className="skill__title">Business Intelligence</div>
                <div className="skill__content">
                  ETL Processes &amp; Data Integration, Requirements Gathering &amp; Analysis,
                  Executive Presentations, Cross-Functional Collaboration, Strategic Decision Support
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section id="experience">
            <div className="section__header">
              <h2 className="section__title">experience</h2>
            </div>
            <div className="experience__list">
              {experiences.map((role) => (
                <div className="experience__item" key={`${role.title}-${role.company}`}>
                  <div className="experience__header">
                    <h3 className="experience__title">{role.title}</h3>
                    <span className="experience__company">{role.company}</span>
                    <span className="experience__location">{role.location}</span>
                    <span className="experience__dates">{role.dates}</span>
                  </div>
                  <ul className="experience__achievements">
                    {role.achievements.map((achievement) => (
                      <li className="text-gray" key={achievement}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="container">
          <section id="projects">
            <div className="section__header">
              <h2 className="section__title">projects</h2>
            </div>
            <div className="project-list">
              {projects.map((project) => {
                const isLiveAvailable = project.liveUrl && project.liveUrl !== '#'
                const isRepoAvailable = project.repoUrl && project.repoUrl !== '#'

                return (
                  <article className="project" key={project.title}>
                    <div className="project__image">
                      <img src={projectPlaceholder} alt={`${project.title} preview`} />
                    </div>
                    <div className="project__techs">{project.techs.join(' • ')}</div>
                    <div className="project__content">
                      <h3 className="project__title">{project.title}</h3>
                      <p className="project__description text-gray">{project.description}</p>
                      <div className="project__buttons">
                        <a
                          href={isLiveAvailable ? project.liveUrl : undefined}
                          className="button"
                          target={isLiveAvailable ? '_blank' : undefined}
                          rel={isLiveAvailable ? 'noopener noreferrer' : undefined}
                          aria-disabled={!isLiveAvailable}
                          tabIndex={isLiveAvailable ? undefined : -1}
                        >
                          Live Demo
                        </a>
                        <a
                          href={isRepoAvailable ? project.repoUrl : undefined}
                          className="button button__secondary"
                          target={isRepoAvailable ? '_blank' : undefined}
                          rel={isRepoAvailable ? 'noopener noreferrer' : undefined}
                          aria-disabled={!isRepoAvailable}
                          tabIndex={isRepoAvailable ? undefined : -1}
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        </div>

        <div className="container">
          <section id="education">
            <div className="section__header">
              <h2 className="section__title">education</h2>
            </div>
            <div className="education__content">
              <h3>University of North Florida, Coggin College of Business</h3>
              <p className="text-gray">Bachelor of Business Administration</p>
              <p className="text-gray">Dual Majors: Finance and Financial Services</p>
              <p className="text-gray">Jacksonville, FL</p>
              <div className="education__certifications">
                <h4>Certifications</h4>
                <ul>
                  <li className="text-gray">Alteryx Designer Core Certified</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section id="contacts">
            <div className="section__header">
              <h2 className="section__title">contacts</h2>
            </div>
            <div className="contacts">
              <div className="contacts__description">
                <p className="text-gray">
                  I&apos;m interested in opportunities. However, if you have other requests or
                  questions, don&apos;t hesitate to contact me.
                </p>
              </div>
              <SecureContact />
              <div className="contacts__social">
                <a
                  href={LINKEDIN_URL}
                  className="media media__icon"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="" />
                </a>
                <a
                  href={GITHUB_URL}
                  className="media media__icon"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__left">
              <div className="logo">
                <span className="logo__name">Masih</span>
              </div>
              <p className="text-gray">
                Financial Reporting Analyst &amp; Data Analytics Specialist
              </p>
            </div>
            <div className="footer__right">
              <h3>Social</h3>
              <div className="footer__links">
                <a
                  href={LINKEDIN_URL}
                  className="media media__icon"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="" />
                </a>
                <a
                  href={GITHUB_URL}
                  className="media media__icon"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
          <p className="footer__copyright text-gray">
            © 2025 Masih Azizpour. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
