import { useEffect } from 'react'
import aboutImage from '../assets/site/about-me-trans.png'

export const AboutMePage = () => {
  useEffect(() => {
    // Ensure page starts at top and accordion is closed on load
    window.scrollTo({ top: 0, behavior: 'auto' })
    const DURATION = 800
    const detailsList = Array.from(
      document.querySelectorAll('#about-me-page .accordion details'),
    ) as HTMLDetailsElement[]

    const cleanups: Array<() => void> = []

    // Close all sections by default on initial render
    detailsList.forEach((d) => (d.open = false))

    detailsList.forEach((detailsEl) => {
      const summary = detailsEl.querySelector('summary') as HTMLElement | null
      const content = detailsEl.querySelector('.accordion__content') as HTMLElement | null
      if (!summary || !content) return

      const onClick = (e: Event) => {
        e.preventDefault()
        const isOpen = detailsEl.open

        if (isOpen) {
          const start = content.scrollHeight
          content.style.height = `${start}px`
          content.style.opacity = '1'
          requestAnimationFrame(() => {
            content.style.transition = `height ${DURATION}ms cubic-bezier(0.2,0,0,1), opacity 500ms ease`
            content.style.height = '0px'
            content.style.opacity = '0'
          })
          window.setTimeout(() => {
            detailsEl.open = false
            content.style.transition = ''
            content.style.height = ''
            content.style.opacity = ''
          }, DURATION)
        } else {
          detailsEl.open = true
          const end = content.scrollHeight
          content.style.height = '0px'
          content.style.opacity = '0'
          requestAnimationFrame(() => {
            content.style.transition = `height ${DURATION}ms cubic-bezier(0.2,0,0,1), opacity 500ms ease`
            content.style.height = `${end}px`
            content.style.opacity = '1'
          })
          window.setTimeout(() => {
            content.style.transition = ''
            content.style.height = ''
          }, DURATION)
        }
      }

      summary.addEventListener('click', onClick)
      cleanups.push(() => summary.removeEventListener('click', onClick))
    })

    // Soft animation for the top Read more section
    const readMore = document.querySelector('#about-me-page details.readmore') as HTMLDetailsElement | null
    if (readMore) {
      readMore.open = false
      const summary = readMore.querySelector('summary') as HTMLElement | null
      const content = readMore.querySelector('.readmore__content') as HTMLElement | null
      if (summary && content) {
        const onClick = (e: Event) => {
          e.preventDefault()
          const isOpen = readMore.open
          if (isOpen) {
            const start = content.scrollHeight
            content.style.height = `${start}px`
            content.style.opacity = '1'
            requestAnimationFrame(() => {
              content.style.transition = `height ${DURATION}ms cubic-bezier(0.2,0,0,1), opacity 500ms ease`
              content.style.height = '0px'
              content.style.opacity = '0'
            })
            window.setTimeout(() => {
              readMore.open = false
              content.style.transition = ''
              content.style.height = ''
              content.style.opacity = ''
            }, DURATION)
          } else {
            readMore.open = true
            const end = content.scrollHeight
            content.style.height = '0px'
            content.style.opacity = '0'
            requestAnimationFrame(() => {
              content.style.transition = `height ${DURATION}ms cubic-bezier(0.2,0,0,1), opacity 500ms ease`
              content.style.height = `${end}px`
              content.style.opacity = '1'
            })
            window.setTimeout(() => {
              content.style.transition = ''
              content.style.height = ''
            }, DURATION)
          }
        }
        summary.addEventListener('click', onClick)
        cleanups.push(() => summary.removeEventListener('click', onClick))
      }
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])
  return (
    <main className="container content">
      <section id="about-me-page">
        <div className="section__header" style={{ flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <h2 className="section__title">/about-me</h2>
          <p className="text-gray" style={{ marginLeft: 'auto' }}>Background, highlights, and case studies</p>
        </div>

        <div className="about-me__grid">
          <div className="about-me__image" style={{ border: 'var(--border-primary)', padding: 'var(--space-sm)', background: 'var(--background-dark)' }}>
            <img src={aboutImage} alt="Profile" style={{ width: '100%', display: 'block' }} />
          </div>
          <div className="about-me__intro">
            <p className="about-me__lead">
              Senior Financial Analyst blending finance and engineering to turn raw data into decisions. I build automated reporting, real-time dashboards, and scalable pipelines that make finance a strategic partner—not a back office.
            </p>

            <div className="pill-list">
              <span className="pill">7+ yrs</span>
              <span className="pill">$200M+ ops</span>
              <span className="pill">50% less manual</span>
              <span className="pill">35% faster close</span>
              <span className="pill">99.8% accuracy</span>
            </div>

            <ul className="about-me__bullets">
              <li><strong>Automated AP workflows</strong> with Alteryx → <span className="accent">50% manual cut</span> and <span className="accent">30% faster close</span>.</li>
              <li><strong>Executive Power BI</strong> for OPEX/CapEx visibility across <span className="accent">$200M+</span>—faster leadership actions.</li>
              <li><strong>Unified 5+ data sources</strong> (SQL + APIs) → reliable, reconciled single source of truth.</li>
              <li><strong>Python FX tool</strong> with live rates → <span className="accent">60% prep time saved</span> and standardized global reporting.</li>
            </ul>

            <details className="readmore">
              <summary>Read more</summary>
              <div className="readmore__content">
                <p>
                  I’m a Senior Financial Analyst with over seven years of experience driving financial intelligence,
                  reporting automation, and strategic decision support across large-scale global operations.
                </p>
                <p>
                  My work bridges finance and technology — leveraging tools like Power BI, Alteryx, SQL, and Oracle
                  Fusion ERP to transform raw data into actionable insights that guide senior leadership.
                </p>
                <p>
                  At FIS, I’ve led initiatives that modernized financial reporting for $200M+ in operations, cutting
                  manual effort by over 50% through end-to-end automation and cross-system integration.
                </p>
                <p>
                  I take pride in solving inefficiencies that slow business performance — whether that means developing
                  AI-assisted reporting tools, redesigning forecasting models, or standardizing close processes across
                  multiple sites.
                </p>
                <p>
                  Throughout my career at CIT Bank and FIS, I’ve built a reputation for precision, innovation, and the
                  ability to translate complex data into financial clarity that drives measurable results.
                </p>
                <p>
                  Beyond the numbers, I’m passionate about empowering teams with smarter tools and forward-looking
                  analytics that make finance not just a reporting function, but a strategic partner in growth.
                </p>
              </div>
            </details>
          </div>
        </div>

        <div className="accordion" style={{ marginTop: 'var(--space-xl)' }}>
          <details>
            <summary>Automated Financial Workflows</summary>
            <div className="accordion__content"><div>
              <p><strong>Situation:</strong> Manual AP reporting caused delays and errors.<br />
              <strong>Task:</strong> Streamline reporting process.<br />
              <strong>Action:</strong> Built modular Alteryx workflows automating extraction, validation, and consolidation.<br />
              <strong>Result:</strong> 50% faster reporting and 30% more accurate close cycles.</p>
            </div></div>
          </details>
          <details>
            <summary>Power BI Executive Dashboards</summary>
            <div className="accordion__content"><div>
              <p><strong>Situation:</strong> Leadership lacked real-time financial visibility.<br />
              <strong>Task:</strong> Build interactive reporting dashboards.<br />
              <strong>Action:</strong> Linked Power BI to SAP/Anaplan data with drill-down variance tracking.<br />
              <strong>Result:</strong> 40% improvement in decision-making speed across $200M+ operations.</p>
            </div></div>
          </details>
          <details>
            <summary>Cross-System Data Integration</summary>
            <div className="accordion__content"><div>
              <p><strong>Situation:</strong> Disparate data caused inconsistent reporting.<br />
              <strong>Task:</strong> Create unified data pipeline.<br />
              <strong>Action:</strong> Built SQL + API integrations merging five data sources.<br />
              <strong>Result:</strong> 90% fewer reconciliation errors and improved reporting reliability.</p>
            </div></div>
          </details>
          <details>
            <summary>AI-Enabled Financial Tools</summary>
            <div className="accordion__content"><div>
              <p><strong>Situation:</strong> Manual FX rate lookups delayed reporting.<br />
              <strong>Task:</strong> Automate currency conversion.<br />
              <strong>Action:</strong> Built Python-based converter with live exchange APIs.<br />
              <strong>Result:</strong> 60% faster prep time and standardized global reports.</p>
            </div></div>
          </details>
          <details>
            <summary>Strategic Capital Investment Analysis</summary>
            <div className="accordion__content"><div>
              <p><strong>Situation:</strong> $100M+ portfolio required renewal risk analysis.<br />
              <strong>Task:</strong> Identify profitable opportunities.<br />
              <strong>Action:</strong> Conducted NPV/IRR modeling and presented findings.<br />
              <strong>Result:</strong> 95% retention and improved capital efficiency.</p>
            </div></div>
          </details>
          <details>
            <summary>Process Optimization &amp; Compliance</summary>
            <div className="accordion__content"><div>
              <p><strong>Situation:</strong> Inconsistent quarter-close procedures.<br />
              <strong>Task:</strong> Standardize and automate.<br />
              <strong>Action:</strong> Introduced templates and journal protocols.<br />
              <strong>Result:</strong> 35% faster closes with 99.8% accuracy.</p>
            </div></div>
          </details>
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
