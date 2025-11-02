import { useEffect, useMemo, useState } from 'react'
import { skillsData, levelLabel } from '../data/skills'

type Filter = 'all' | 'Advanced' | 'Proficient' | 'Intermediate'

export const SkillsPage = () => {
  const [filter, setFilter] = useState<Filter>('all')

  // Flatten skills for easier filtering while preserving categories
  const categories = useMemo(() => {
    return skillsData.map((c) => ({
      name: c.category,
      items: c.items.map((s) => ({
        ...s,
        levelLabel: levelLabel(s.level),
      })),
    }))
  }, [])

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.skill-card')) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('fade-in')
        })
      },
      { threshold: 0.1 },
    )
    cards.forEach((c) => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="container content">
      <section id="skills-page">
        <div className="section__header" style={{ flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <h2 className="section__title">/skills</h2>
          <p className="text-gray" style={{ marginLeft: 'auto' }}>All skills with brief context</p>
        </div>

        <div className="skills-filter">
          {([
            { id: 'all', label: 'All Skills' },
            { id: 'Advanced', label: 'Advanced' },
            { id: 'Proficient', label: 'Proficient' },
            { id: 'Intermediate', label: 'Intermediate' },
          ] as const).map((b) => (
            <button
              key={b.id}
              className={`filter-btn${filter === b.id ? ' active' : ''}`}
              onClick={() => setFilter(b.id)}
            >
              {b.label}
            </button>
          ))}
        </div>

        {categories.map((cat) => {
          const items = cat.items.filter((i) => filter === 'all' || i.levelLabel === filter)
          if (items.length === 0) return null
          return (
            <div className="category" key={cat.name}>
              <h3 className="category__title">{cat.name}</h3>
              <div className="skills-grid-modern">
                {items.map((s) => (
                  <article key={s.name} className="skill-card">
                    <div className="skill-card__header">
                      <div className="skill-card__name">{s.name}</div>
                      <span className={`level-badge level-${s.levelLabel.toLowerCase()}`}>{s.levelLabel}</span>
                    </div>
                    <p className="skill-card__blurb">{s.blurb}</p>
                    {s.usedAt && s.usedAt.length > 0 && (
                      <p className="skill-card__used">Used for: {s.usedAt.join(', ')}</p>
                    )}
                    <div className="skill-progress">
                      <div className="progress-bar" style={{ width: `${s.level}%` }} />
                    </div>
                    <div className="skill-tags">
                      {(s.usedAt || []).slice(0, 3).map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
        })}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-xl)' }}>
          <a
            href="#home"
            className="header__link"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = ''
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >&lt;Back</a>
        </div>
      </section>
    </main>
  )
}
