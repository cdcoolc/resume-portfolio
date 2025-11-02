export interface Achievement {
  text: string
  priority: 'high' | 'normal'
}

export interface Job {
  id: string
  title: string
  company: string
  location: string
  dates: string
  achievements: Achievement[]
}

export const jobs: Job[] = [
  {
    id: 'fis',
    title: 'Financial Reporting Analyst II',
    company: 'Fidelity Information Services (FIS)',
    location: 'Jacksonville, FL',
    dates: '2022 — 2025',
    achievements: [
      {
        text: 'Built Power BI dashboards → 40% time savings on $200M+ AP operations',
        priority: 'high',
      },
      {
        text: 'Managed $200M+ global financial consolidation across multiple business units',
        priority: 'high',
      },
      {
        text: 'Led forecasting identifying $2M+ in risks and opportunities annually',
        priority: 'high',
      },
      {
        text: 'Automated AP workflows with Alteryx/SQL → 50% faster processing',
        priority: 'normal',
      },
      {
        text: 'Achieved 99.8% quarter-close accuracy, cut cycle time by 35%',
        priority: 'normal',
      },
      {
        text: 'Created analytics packages informing $2M budget reallocation',
        priority: 'normal',
      },
      {
        text: 'Integrated 5+ data sources for enhanced reporting completeness',
        priority: 'normal',
      },
      {
        text: 'Presented insights to Senior Directors and VP of Finance',
        priority: 'normal',
      },
    ],
  },
  {
    id: 'cit',
    title: 'End of Lease Specialist III',
    company: 'CIT Bank N.A',
    location: 'Jacksonville, FL',
    dates: '2017 — 2022',
    achievements: [
      {
        text: 'Managed $100M+ lease portfolio with 95% client retention',
        priority: 'high',
      },
      {
        text: 'Achieved 110% quarterly sales through data-driven renewal strategies',
        priority: 'high',
      },
      { text: 'Used NPV/IRR metrics to deliver strategic recommendations', priority: 'normal' },
      { text: 'Reduced service backlog resolution time by 25%', priority: 'normal' },
      { text: 'Led Salesforce CRM UAT testing for 50+ users', priority: 'normal' },
      { text: 'Maintained 99.8% transaction accuracy in reconciliation', priority: 'normal' },
    ],
  },
  {
    id: 'independent',
    title: 'Business Owner / Managing Partner',
    company: 'Independent Business Operations',
    location: 'Jacksonville, FL',
    dates: '2014 — 2024',
    achievements: [
      { text: 'Managed full P&L across multiple operational sites', priority: 'high' },
      { text: 'Led financial planning, forecasting, and monthly close activities', priority: 'normal' },
    ],
  },
]

