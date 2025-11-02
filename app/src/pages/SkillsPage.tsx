import { skillsData, levelLabel } from '../data/skills'

export const SkillsPage = () => {
  return (
    <main className="container content">
      <section id="skills-page">
        <div className="section__header" style={{ flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <h2 className="section__title">/skills</h2>
          <p className="text-gray" style={{ marginLeft: 'auto' }}>All skills with brief context</p>
        </div>

        <div className="skills-page__canvas">
          <div className="skills-page__grid">
            {skillsData.map((category) => (
              <div key={category.category} className="skill">
                <div className="skill__title">{category.category}</div>
                <div className="skill__content skills-page__list">
                  {category.items.map((s) => (
                    <div key={s.name} className="skill__entry">
                      <div className="skill__row">
                        <strong className="skill__name">{s.name}</strong>
                        <span className="skill__level">{levelLabel(s.level)}</span>
                      </div>
                      <p className="skill__blurb">{s.blurb}</p>
                      {s.usedAt && s.usedAt.length > 0 && (
                        <p className="skill__used">Used for: {s.usedAt.join(', ')}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
