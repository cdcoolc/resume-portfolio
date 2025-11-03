export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
}

// Project images (updated)
import imgAutomatedAPDashboardReporting from '../assets/projects/Automated AP Dashboard & Reporting System.png'
import imgFinancialConsolidationForecasting from '../assets/projects/Financial Consolidation & Forecasting Platform.png'
import imgETLWorkflowOptimization from '../assets/projects/ETL Workflow Optimization.png'
import imgExecutiveAnalyticsPackage from '../assets/projects/Executive Analytics Package.png'
import imgFinancialAnalyticsWebPortal from '../assets/projects/Financial Analytics Web Portal.png'
import imgSalesforceCRMEnhancement from '../assets/projects/Salesforce CRM Enhancement Initiative.png'

export const projects: Project[] = [
  {
    id: 'ap-dashboard',
    title: 'Automated AP Dashboard & Reporting System',
    description:
      'Developed an end-to-end reporting solution consolidating data from 5+ sources, cutting manual reporting time by 40% and delivering real-time visibility into $200M+ AP operations.',
    technologies: ['Power BI', 'Alteryx', 'SQL', 'Oracle Fusion'],
    image: imgAutomatedAPDashboardReporting,
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/masih-azizpour',
  },
  {
    id: 'consolidation-platform',
    title: 'Financial Consolidation & Forecasting Platform',
    description:
      'Led deployment of a global consolidation system integrating SAP, Oracle Fusion, and Hyperion to streamline quarter-close processes while maintaining 99.8% accuracy.',
    technologies: ['SAP FI/CO', 'Oracle Fusion', 'Hyperion', 'Excel'],
    image: imgFinancialConsolidationForecasting,
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/masih-azizpour',
  },
  {
    id: 'etl-workflow',
    title: 'ETL Workflow Optimization',
    description:
      'Built modular Alteryx workflows that automated data ingestion from multiple ERP systems, improving processing efficiency by 50% and enabling real-time analytics.',
    technologies: ['Alteryx', 'SQL', 'Python', 'Oracle OTBI'],
    image: imgETLWorkflowOptimization,
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/masih-azizpour',
  },
  {
    id: 'analytics-package',
    title: 'Executive Analytics Package',
    description:
      'Designed monthly analytics packages blending Accounts Payable trends, cash flow analysis, and expense performance, informing $2M in strategic budget reallocations.',
    technologies: ['Power BI', 'Excel', 'PowerPoint'],
    image: imgExecutiveAnalyticsPackage,
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/masih-azizpour',
  },
  {
    id: 'web-portal',
    title: 'Financial Analytics Web Portal',
    description:
      'Built a custom web application combining real-time data visualizations with AI-assisted reporting workflows to empower stakeholders with on-demand insights.',
    technologies: ['React', 'TypeScript', 'Claude AI', 'REST APIs'],
    image: imgFinancialAnalyticsWebPortal,
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/masih-azizpour',
  },
  {
    id: 'crm-enhancement',
    title: 'Salesforce CRM Enhancement Initiative',
    description:
      'Collaborated on UAT and optimization for a Salesforce CRM rollout supporting 50+ users, improving lease management workflows and customer tracking.',
    technologies: ['Salesforce', 'CRM Systems'],
    image: imgSalesforceCRMEnhancement,
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/masih-azizpour',
  },
]
