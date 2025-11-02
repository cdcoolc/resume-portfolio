export type SkillCategory = {
  category: string
  items: Array<{
    name: string
    level: number
    blurb: string
    usedAt?: string[]
  }>
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Financial & Analytics',
    items: [
      {
        name: 'Power BI',
        level: 95,
        blurb: 'KPI dashboards, data modeling, and DAX for reporting and executive insights.',
        usedAt: ['Operations and KPI dashboards'],
      },
      {
        name: 'Alteryx',
        level: 95,
        blurb: 'Certified; automated ETL workflows, data prep, and repeatable analytics pipelines.',
        usedAt: ['Automating monthly reporting'],
      },
      {
        name: 'SQL',
        level: 85,
        blurb: 'Joins, aggregations, CTEs for analytics and operational reporting.',
        usedAt: ['Building reporting datasets'],
      },
      {
        name: 'Financial Modeling',
        level: 90,
        blurb: 'Scenario analysis, budgeting/forecasting, and variance tracking.',
        usedAt: ['Budgeting and forecasting models'],
      },
    ],
  },
  {
    category: 'Technical Platforms',
    items: [
      {
        name: 'SAP FI/CO',
        level: 90,
        blurb: 'Finance/Controlling modules for reporting, reconciliations, and process alignment.',
        usedAt: ['Financial reporting operations'],
      },
      {
        name: 'Oracle Fusion ERP',
        level: 90,
        blurb: 'General ledger and subledger analysis, report extraction, and data mapping.',
        usedAt: ['Enterprise reporting workflows'],
      },
      {
        name: 'Hyperion',
        level: 85,
        blurb: 'Planning and consolidation support; data validation and variance analysis.',
        usedAt: ['Planning and close support'],
      },
      {
        name: 'Python',
        level: 60,
        blurb: 'Self‑taught; data cleaning and automation with pandas/NumPy basics.',
        usedAt: ['Ad‑hoc analytics notebooks'],
      },
    ],
  },
  {
    category: 'Web Development',
    items: [
      {
        name: 'React',
        level: 80,
        blurb: 'Component-driven UIs for internal dashboards and prototypes.',
        usedAt: ['Personal analytics tools'],
      },
      {
        name: 'TypeScript',
        level: 75,
        blurb: 'Type-safe React apps and API integrations for better maintainability.',
        usedAt: ['Portfolio and utilities'],
      },
      {
        name: 'REST APIs',
        level: 80,
        blurb: 'Consuming and shaping JSON data for analytics and UI display.',
        usedAt: ['Integration with reporting services'],
      },
    ],
  },
  {
    category: 'Business Intelligence',
    items: [
      {
        name: 'ETL Processes',
        level: 90,
        blurb: 'Designing robust extract/transform/load pipelines and data governance basics.',
        usedAt: ['Data prep for BI models'],
      },
      {
        name: 'Executive Presentations',
        level: 85,
        blurb: 'Clear storytelling with metrics and visuals for senior stakeholders.',
        usedAt: ['Monthly business reviews'],
      },
      {
        name: 'Requirements Gathering',
        level: 85,
        blurb: 'Partnering with stakeholders to scope metrics and success criteria.',
        usedAt: ['New report and dashboard builds'],
      },
    ],
  },
]

export function levelLabel(level: number): 'Beginner' | 'Intermediate' | 'Proficient' | 'Advanced' {
  if (level >= 90) return 'Advanced'
  if (level >= 75) return 'Proficient'
  if (level >= 50) return 'Intermediate'
  return 'Beginner'
}

