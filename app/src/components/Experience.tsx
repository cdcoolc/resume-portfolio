import { useState } from 'react'
import { jobs } from '../data/experience'

export const Experience = () => {
  const [openJobId, setOpenJobId] = useState<string>('fis')
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set())

  const toggleJob = (jobId: string) => {
    setOpenJobId(openJobId === jobId ? '' : jobId)
  }

  const toggleShowAll = (jobId: string) => {
    const newExpanded = new Set(expandedJobs)
    if (newExpanded.has(jobId)) newExpanded.delete(jobId)
    else newExpanded.add(jobId)
    setExpandedJobs(newExpanded)
  }

  return (
    <section id="experience">
      <div className="section__header">
        <h2 className="section__title">experience</h2>
      </div>
      <div className="experience__list">
        {jobs.map((job) => {
          const isOpen = openJobId === job.id
          const isExpanded = expandedJobs.has(job.id)
          const visibleAchievements = isExpanded ? job.achievements : job.achievements.slice(0, 3)
          const hasMore = job.achievements.length > 3

          return (
            <div key={job.id} className="experience__item">
              <div
                className="experience__header"
                onClick={() => toggleJob(job.id)}
                style={{
                  cursor: 'pointer',
                  padding: 'var(--space-md)',
                  border: '1px solid var(--gray)',
                  marginBottom: isOpen ? '0' : 'var(--space-md)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  <h3 className="experience__title">{job.title}</h3>
                  <span style={{ fontSize: '24px', color: 'var(--primary)', fontWeight: 'var(--font-bold)' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                <div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', fontSize: '14px' }}
                >
                  <span className="experience__company text-gray">{job.company}</span>
                  <span className="experience__location text-gray">{job.location}</span>
                  <span className="experience__dates text-gray">{job.dates}</span>
                </div>
              </div>

              {isOpen && (
                <div
                  style={{
                    padding: 'var(--space-md)',
                    border: '1px solid var(--gray)',
                    borderTop: 'none',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  <ul className="experience__achievements">
                    {visibleAchievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray"
                        style={{
                          position: 'relative',
                          paddingLeft: 'var(--space-md)',
                          marginBottom: 'var(--space-sm)',
                          fontWeight:
                            achievement.priority === 'high' ? 'var(--font-medium)' : 'var(--font-regular)',
                          color: achievement.priority === 'high' ? 'var(--white)' : 'var(--gray)',
                        }}
                      >
                        <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>
                          {achievement.priority === 'high' ? '●' : '▹'}
                        </span>
                        {achievement.text}
                      </li>
                    ))}
                  </ul>

                  {hasMore && !isExpanded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleShowAll(job.id)
                      }}
                      className="button button__secondary"
                      style={{ marginTop: 'var(--space-md)' }}
                    >
                      Show {job.achievements.length - 3} more achievements
                    </button>
                  )}

                  {isExpanded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleShowAll(job.id)
                      }}
                      className="button button__secondary"
                      style={{ marginTop: 'var(--space-md)' }}
                    >
                      Show less
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
