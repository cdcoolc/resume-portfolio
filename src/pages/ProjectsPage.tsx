import projectPlaceholder from '../assets/project-placeholder.svg'
import { projects } from '../data/projects'

export const ProjectsPage = () => {
  return (
    <main className="container content">
      <section id="projects-page">
        <div className="section__header" style={{ flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <h2 className="section__title">/projects</h2>
          <p className="text-gray" style={{ marginLeft: 'auto' }}>All of my projects</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.id} className="project">
              <div className="project__image">
                <img src={project.image || projectPlaceholder} alt={`${project.title} preview`} />
              </div>
              <div className="project__techs">{project.technologies.join('  ')}</div>
              <div className="project__content">
                <h3 className="project__name">{project.title}</h3>
                <p className="project__description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

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
