import logoOutline from '../assets/logo-outline.svg'
// pixel-style decorative shapes, dots, and logo are drawn/positioned via CSS

export const Skills = () => {

  return (
    <section id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section__header" style={{ alignItems: 'baseline' }}>
        <h2 className="section__title">skills</h2>
        <a href="#/skills" className="header__link" style={{ marginLeft: 'auto' }}>
          View all ~&gt;
        </a>
      </div>

      {/* Logo behind texts */}
      <img src={logoOutline} alt="" aria-hidden="true" className="skills__logo" />

      <div className="skills__layout">
        <div className="skills__art" aria-hidden="true">
          {/* Dot blocks */}
          <svg className="dots skills__dots-top" viewBox="0 0 120 120">
            {[15, 40, 65, 90, 115].flatMap((x) => [15, 40, 65, 90, 115].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
            )))}
          </svg>
          <svg className="dots skills__dots-large" viewBox="0 0 180 180">
            {[15, 45, 75, 105, 135, 165].flatMap((x) => [15, 45, 75, 105, 135, 165].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
            )))}
          </svg>
          {/* Purple overlapping squares */}
          <div className="skills__outline skills__outline--one" />
          <div className="skills__outline skills__outline--two" />
          <div className="skills__outline skills__outline--three" />
        </div>

        <div className="skills__cards">
          <div className="skill">
            <div className="skill__title">Languages</div>
            <div className="skill__content">
              <ul className="skills__list-plain">
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>

          <div className="skill">
            <div className="skill__title">Other</div>
            <div className="skill__content">
              <ul className="skills__list-plain">
                <li>Excel (Power Query)</li>
                <li>Power BI</li>
                <li>Alteryx</li>
                <li>Jupyter Notebook</li>
              </ul>
            </div>
          </div>

          <div className="skill">
            <div className="skill__title">Databases</div>
            <div className="skill__content">
              <ul className="skills__list-plain">
                <li>SQLite</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>

          <div className="skill">
            <div className="skill__title">Frameworks</div>
            <div className="skill__content">
              <ul className="skills__list-plain">
                <li>pandas</li>
                <li>NumPy</li>
                <li>Flask</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
