import type { Experience } from '../types/data'

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Aurora Analytics',
    dates: '2022 — Present',
    description:
      'Led the rebuild of a multi-tenant analytics dashboard, improving load times by 38% and establishing a shared UI kit for four product teams.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'GraphQL'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Cloudline Health',
    dates: '2020 — 2022',
    description:
      'Delivered patient onboarding workflows with a focus on accessibility, reducing form drop-off by 24% and improving Lighthouse scores to 95+.',
    tech: ['React', 'Tailwind CSS', 'React Hook Form', 'Node.js'],
  },
  {
    role: 'Software Engineer',
    company: 'Northwind Labs',
    dates: '2018 — 2020',
    description:
      'Built internal tools for logistics teams, enabling real-time shipment tracking and automated reporting across regional warehouses.',
    tech: ['TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
  },
]
