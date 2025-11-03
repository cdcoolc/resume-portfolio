import { useState } from 'react'

import linkedinIcon from './assets/linkedin.svg'
import heroImage from './assets/site/hero.png'
import logoOutline from './assets/logo-outline.svg'
import logoIcon from './assets/logo.svg'
import emailIcon from './assets/email.svg'
import { SecureContact } from './components/SecureContact'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { useEffect } from 'react'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'
import { AboutMePage } from './pages/AboutMePage'

const NAV_SECTIONS = ['home', 'projects', 'about', 'experience', 'contacts'] as const

function App() {
  const [activeSection, setActiveSection] = useState<(typeof NAV_SECTIONS)[number]>('home')
  const [route, setRoute] = useState<string>(window.location.hash.replace('#', ''))

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', ''))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Scroll to top only for page routes (not in-page section anchors)
  useEffect(() => {
    const pageRoutes = new Set(['/projects', '/skills', '/about-me'])
    if (pageRoutes.has(route)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (route === 'home' || route === '') {
      // Ensure navigating to #home or clearing the hash scrolls to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [route])

  return (
    <div className="page">
      <a href="#home" className="skip-link">Skip to content</a>
      <div className="media-header">
        <span className="media-header__line" />
        <div className="media-header__links">
          <a
            href="https://www.linkedin.com/in/masih-a-717b55145"
            className="media__icon"
            title="LinkedIn"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="#contacts"
            className="media__icon"
            title="Email"
            aria-label="Email"
          >
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>

      <header className="header">
        <div className="header__inner">
          <div className="logo">
            <img src={logoIcon} alt="" className="logo__img" />
            <span className="logo__name">Masih</span>
          </div>
          <nav className="header__links">
            <a
              href="#home"
              className={`header__link${activeSection === 'home' ? ' header__link_active' : ''}`}
              onClick={() => {
                setActiveSection('home')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              home
            </a>
            <a
              href="#projects"
              className={`header__link${activeSection === 'projects' ? ' header__link_active' : ''}`}
              onClick={() => setActiveSection('projects')}
            >
              projects
            </a>
            <a
              href="#about"
              className={`header__link${activeSection === 'about' ? ' header__link_active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              about-me
            </a>
            <a
              href="#experience"
              className={`header__link${activeSection === 'experience' ? ' header__link_active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              experience
            </a>
            <a
              href="#contacts"
              className={`header__link${activeSection === 'contacts' ? ' header__link_active' : ''}`}
              onClick={() => setActiveSection('contacts')}
            >
              contacts
            </a>
          </nav>
        </div>
      </header>

      <input type="checkbox" className="hamburger" id="hamburger" aria-hidden="true" />
      <label htmlFor="hamburger" className="hamburger-label" aria-hidden="true" />
      <nav className="mobile-nav" aria-label="Mobile">
        <a
          href="#home"
          className={`mobile-nav__link${activeSection === 'home' ? ' mobile-nav__link_active' : ''}`}
          onClick={() => {
            setActiveSection('home')
            const el = document.getElementById('hamburger') as HTMLInputElement | null
            if (el) el.checked = false
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          home
        </a>
        <a
          href="#projects"
          className={`mobile-nav__link${activeSection === 'projects' ? ' mobile-nav__link_active' : ''}`}
          onClick={() => {
            setActiveSection('projects')
            const el = document.getElementById('hamburger') as HTMLInputElement | null
            if (el) el.checked = false
          }}
        >
          projects
        </a>
        <a
          href="#about"
          className={`mobile-nav__link${activeSection === 'about' ? ' mobile-nav__link_active' : ''}`}
          onClick={() => {
            setActiveSection('about')
            const el = document.getElementById('hamburger') as HTMLInputElement | null
            if (el) el.checked = false
          }}
        >
          about-me
        </a>
        <a
          href="#experience"
          className={`mobile-nav__link${activeSection === 'experience' ? ' mobile-nav__link_active' : ''}`}
          onClick={() => {
            setActiveSection('experience')
            const el = document.getElementById('hamburger') as HTMLInputElement | null
            if (el) el.checked = false
          }}
        >
          experience
        </a>
        <a
          href="#contacts"
          className={`mobile-nav__link${activeSection === 'contacts' ? ' mobile-nav__link_active' : ''}`}
          onClick={() => {
            setActiveSection('contacts')
            const el = document.getElementById('hamburger') as HTMLInputElement | null
            if (el) el.checked = false
          }}
        >
          contacts
        </a>
      </nav>

      {route === '/projects' ? (
        <ProjectsPage />
      ) : route === '/skills' ? (
        <SkillsPage />
      ) : route === '/about-me' ? (
        <AboutMePage />
      ) : (
      <main className="container content" id="home">
        <section>
          <div className="hero">
            <div className="hero__content">
              <h1 className="hero__title">
              Masih is a <span>financial reporting analyst</span> and <span>data analytics specialist</span>
              </h1>
              <p className="hero__description">
                He transforms complex financial data into actionable insights through advanced analytics and intelligent automation

              </p>
              <a href="#contacts" className="button">
                Contact me!!
              </a>
            </div>
            <div className="hero__illustrations" aria-hidden="true">
              <img src={logoOutline} alt="" className="hero__logo" />
              <img src={heroImage} alt="Masih Azizpour" className="hero__image" />
              <svg className="dots" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {[10, 30, 50, 70, 90].flatMap((x) =>
                  [10, 30, 50, 70, 90].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />),
                )}
              </svg>
              <div className="hero__status">Open for new opportunities
                <svg
                  className="hero__status-border"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect x="0.5" y="0.5" width="99" height="99" pathLength="400" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section>
          <blockquote className="quote">
            <p className="quote__text">The goal is to turn data into information, and information into insight.</p>
            <cite className="quote__author">Carly Fiorina</cite>
          </blockquote>
        </section>

        <Projects />

        <section id="about">
          <div className="section__header" style={{ alignItems: 'baseline' }}>
            <h2 className="section__title">career-highlights</h2>
            <a href="#/about-me" className="header__link" style={{ marginLeft: 'auto' }}>
              Read more ~&gt;
            </a>
          </div>
          <div className="about">
            <div className="about-cards">
              <article className="about-card fade-in">
                <h3 className="about-card__title">Automated Financial Workflows</h3>
                <p className="about-card__text">Designed and deployed Alteryx workflows that cut manual reporting time by 50% and improved monthly close accuracy by 30%.</p>
                <p className="about-card__meta">FIS — 2022–2025</p>
              </article>
              <article className="about-card fade-in">
                <h3 className="about-card__title">Power BI Executive Dashboards</h3>
                <p className="about-card__text">Built real-time Power BI dashboards that provided visibility into $200M+ expense and capital operations, accelerating leadership decisions.</p>
                <p className="about-card__meta">FIS — 2022–2025</p>
              </article>
              <article className="about-card fade-in">
                <h3 className="about-card__title">Cross-System Data Integration</h3>
                <p className="about-card__text">Integrated over five financial data sources using SQL and API-based pipelines, improving completeness and reliability of management reporting.</p>
                <p className="about-card__meta">FIS — 2023</p>
              </article>
              <article className="about-card fade-in">
                <h3 className="about-card__title">AI-Enabled Financial Tools</h3>
                <p className="about-card__text">Developed a Python-based currency conversion tool using live exchange-rate APIs, reducing manual prep time by 60% and enabling global reporting standardization.</p>
                <p className="about-card__meta">AI Solutions Initiative — 2024</p>
              </article>
              <article className="about-card fade-in">
                <h3 className="about-card__title">Strategic Capital Investment Analysis</h3>
                <p className="about-card__text">Conducted NPV and IRR analyses for $100M+ capital investments, driving strategic decision-making and optimizing financial outcomes.</p>
                <p className="about-card__meta">CIT Bank — 2017–2022</p>
              </article>
              <article className="about-card fade-in">
                <h3 className="about-card__title">Process Optimization &amp; Compliance</h3>
                <p className="about-card__text">Standardized quarter-close processes, reducing cycle time by 35% while maintaining 99.8% reporting accuracy across global sites.</p>
                <p className="about-card__meta">FIS — 2023</p>
              </article>
            </div>
          </div>
        </section>

        <Skills />

        <Experience />

        <section id="education">
          <div className="section__header">
            <h2 className="section__title">education</h2>
          </div>
          <div className="experience__list">
            <div className="experience__item">
              <div className="experience__header">
                <h3 className="experience__title">University of North Florida</h3>
                <span className="experience__company text-gray">Bachelor of Business Administration</span>
                <span className="experience__location text-gray">Jacksonville, FL</span>
                <span className="experience__dates text-gray">Dual Majors: Finance and Financial Services</span>
              </div>
              <ul className="experience__achievements">
                <li className="text-gray">Alteryx Designer Core Certified</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contacts">
          <div className="section__header">
            <h2 className="section__title">contacts</h2>
          </div>
          <div className="contacts">
            <div className="contacts__description">
              <p className="text-gray">
                I'm interested in opportunities. However, if you have other requests or questions,
                don't hesitate to contact me.
              </p>
            </div>
            <div className="contacts__content">
              <SecureContact />
              <div className="contacts__social">
                <span className="contacts__label text-gray">Media</span>
                <div className="contacts__icons">
                  <a
                    href="https://www.linkedin.com/in/masih-a-717b55145"
                    className="media media__icon"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href="#contacts" className="media media__icon" aria-label="Email">
                    <img src={emailIcon} alt="Email" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}

      <footer className="footer" id="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <div className="logo">
              <img src={logoIcon} alt="" className="logo__img" />
              <span className="logo__name">Masih</span>
            </div>
            <p className="text-gray">Financial Reporting Analyst &amp; Data Analytics Specialist</p>
          </div>
          <div className="footer__right">
            <h3>Media</h3>
            <div className="footer__links">
              <a
                href="https://www.linkedin.com/in/masih-a-717b55145"
                className="media media__icon"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="#contacts"
                className="media media__icon"
                aria-label="Email"
              >
                <img src={emailIcon} alt="Email" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer__copyright text-gray">© 2025 Masih Azizpour. Built with data &amp; design.</p>
      </footer>
    </div>
  )
}

export default App
