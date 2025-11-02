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
                <img src={projectPlaceholder} alt={`${project.title} preview`} />
              </div>
              <div className="project__techs">{project.technologies.join('  ')}</div>
              <div className="project__content">
                <h3 className="project__name">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <div className="project__links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="button">
                      Live =&gt;
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="button">
                      Github =&gt;
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
