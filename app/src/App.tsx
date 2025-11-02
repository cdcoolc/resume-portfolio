import { useState } from 'react'

import linkedinIcon from './assets/linkedin.svg'
import heroImage from './assets/hero.png'
import aboutImage from './assets/about-me-trans.png'
import logoOutline from './assets/logo-outline.svg'
import logoIcon from './assets/logo.svg'
import githubIcon from './assets/github.svg'
import { SecureContact } from './components/SecureContact'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { useEffect } from 'react'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'

const NAV_SECTIONS = ['home', 'projects', 'about', 'experience', 'contacts'] as const

function App() {
  const [activeSection, setActiveSection] = useState<(typeof NAV_SECTIONS)[number]>('home')
  const [route, setRoute] = useState<string>(window.location.hash.replace('#', ''))

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', ''))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div className="page">
      <a href="#home" className="skip-link">Skip to content</a>
      <div className="media-header">
        <span className="media-header__line" />
        <div className="media-header__links">
          <a
            href="https://www.linkedin.com/in/masih-azizpour/"
            className="media__icon"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/masih-azizpour"
            className="media__icon"
            title="GitHub"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" />
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
              onClick={() => setActiveSection('home')}
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

      {route === '/projects' ? (
        <ProjectsPage />
      ) : route === '/skills' ? (
        <SkillsPage />
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
              <div className="hero__status">Open for new opportunities</div>
            </div>
          </div>
        </section>

        <section>
          <blockquote className="quote">
            <p className="quote__text">With great power comes great electricity bill</p>
            <cite className="quote__author">Dr. Who</cite>
          </blockquote>
        </section>

        <Projects />

        <section id="about">
          <div className="section__header">
            <h2 className="section__title">about</h2>
          </div>
          <div className="about">
            <div className="about__text">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-md)' }}>
                <div style={{ border: '1px solid var(--gray)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <span style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-semibold)', color: 'var(--primary)' }}>7+</span>
                  <span className="text-gray">Years Experience</span>
                </div>
                <div style={{ border: '1px solid var(--gray)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <span style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-semibold)', color: 'var(--primary)' }}>$200M+</span>
                  <span className="text-gray">Operations Managed</span>
                </div>
                <div style={{ border: '1px solid var(--gray)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <span style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-semibold)', color: 'var(--primary)' }}>40%</span>
                  <span className="text-gray">Efficiency Gains</span>
                </div>
                <div style={{ border: '1px solid var(--gray)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <span style={{ fontSize: 'var(--font-size-large)', fontWeight: 'var(--font-semibold)', color: 'var(--primary)' }}>✓</span>
                  <span className="text-gray">Alteryx Certified</span>
                </div>
              </div>
            </div>
            <div className="about__image">
              <img src={aboutImage} alt="Masih Azizpour collaborative illustration" />
            </div>
            <svg className="dots about__dots" width="84" height="84" viewBox="0 0 84 84" aria-hidden="true">
              {[6, 18, 30, 42, 54, 66, 78].flatMap((x) =>
                [6, 18, 30, 42, 54, 66, 78].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />),
              )}
            </svg>
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
                    href="https://www.linkedin.com/in/masih-azizpour/"
                    className="media media__icon"
                    aria-label="LinkedIn"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/masih-azizpour" className="media media__icon" aria-label="GitHub">
                    <img src={githubIcon} alt="GitHub" />
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
                href="https://www.linkedin.com/in/masih-azizpour/"
                className="media media__icon"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/masih-azizpour"
                className="media media__icon"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" />
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
