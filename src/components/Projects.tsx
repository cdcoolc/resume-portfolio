import { useState } from 'react'
import { projects } from '../data/projects'
import projectPlaceholder from '../assets/project-placeholder.svg'

export const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects">
      <div className="section__header" style={{ alignItems: 'baseline' }}>
        <h2 className="section__title">projects</h2>
        <a href="#/projects" className="header__link" style={{ marginLeft: 'auto' }}>
          View all ~&gt;
        </a>
      </div>

      <div className="project-list">
        {featuredProjects.map((project) => (
          <article key={project.id} className="project fade-in">
            <div className="project__image">
              <img src={project.image || projectPlaceholder} alt={`${project.title} preview`} />
            </div>
            <div className="project__techs">{project.technologies.join(' • ')}</div>
            <div className="project__content">
              <h3 className="project__name">{project.title}</h3>
              <p className="project__description">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      

      {showAll && (
        <div className="project-list" style={{ marginTop: 'var(--space-lg)' }}>
          {otherProjects.map((project) => (
            <article key={project.id} className="project">
              <div className="project__image">
                <img src={project.image || projectPlaceholder} alt={`${project.title} preview`} />
              </div>
              <div className="project__techs">{project.technologies.slice(0, 3).join(' • ')}</div>
              <div className="project__content">
                <h3 className="project__name">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
