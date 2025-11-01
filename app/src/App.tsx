import emailIcon from './assets/email.svg'
import linkedinIcon from './assets/linkedin.svg'
import heroImage from './assets/hero.png'
import logoOutline from './assets/logo-outline.svg'
import logoIcon from './assets/logo.svg'

function App() {
  return (
    <div className="page">
      <div className="media-header">
        <span className="media-header__line" />
        <div className="media-header__links">
          <a
            href="mailto:masih.azizpour@gmail.com"
            className="media__icon"
            title="Email"
            aria-label="Email"
          >
            <img src={emailIcon} alt="Email" />
          </a>
          <a
            href="https://www.linkedin.com/in/masih-azizpour/"
            className="media__icon"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
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
            <a href="#home" className="header__link header__link_active">
              home
            </a>
            <a href="#projects" className="header__link">
              projects
            </a>
            <a href="#about" className="header__link">
              about-me
            </a>
            <a href="#contacts" className="header__link">
              contacts
            </a>
          </nav>
        </div>
      </header>

      <main className="content" id="home">
        <section className="container">
          <div className="hero">
            <div className="hero__content">
              <h1 className="hero__title">
                Masih is a <span>financial analyst</span> and <span>data specialist</span>
              </h1>
              <p className="hero__description">
                He crafts analytics-driven experiences where strategy meets automation
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

        <section className="container">
          <blockquote className="quote">
            <p className="quote__text">With great power comes great electricity bill</p>
            <cite className="quote__author">Dr. Who</cite>
          </blockquote>
        </section>

        <section id="projects" className="container">
          <h2 className="h2">projects</h2>
          <div className="project-list">
            <article className="project">
              <div className="project__image">Project Image</div>
              <div className="project__techs">Power BI SQL Oracle Alteryx</div>
              <div className="project__content">
                <h3 className="project__name">Automated AP Dashboard</h3>
                <p className="project__description">Real-time insights for $200M+ operations.</p>
                <div className="project__links">
                  <a href="#contacts" className="button">
                    Live &lt;~&gt;
                  </a>
                </div>
              </div>
            </article>

            <article className="project">
              <div className="project__image">Project Image</div>
              <div className="project__techs">React TypeScript Claude AI</div>
              <div className="project__content">
                <h3 className="project__name">Financial Analytics Portal</h3>
                <p className="project__description">
                  Interactive dashboards and automated reporting flows.
                </p>
                <div className="project__links">
                  <a href="#contacts" className="button">
                    Live &lt;~&gt;
                  </a>
                </div>
              </div>
            </article>

            <article className="project">
              <div className="project__image">Project Image</div>
              <div className="project__techs">SAP Hyperion Excel</div>
              <div className="project__content">
                <h3 className="project__name">Forecasting Accelerator</h3>
                <p className="project__description">Cut quarter-close cycles by 35%.</p>
                <div className="project__links">
                  <a href="#contacts" className="button">
                    Live &lt;~&gt;
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
