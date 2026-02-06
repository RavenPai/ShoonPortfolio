import type { IconType } from 'react-icons'

export type NavItem = {
  label: string
  href: string
}

export type Skill = {
  name: string
  icon: string
  tech: string
}

export type Experience = {
  role: string
  company: string
  dates: string
  description: string
  tech: string[]
}

export type Project = {
  title: string
  description: string
  tech: string[]
  demoUrl: string
  repoUrl: string
  images: string[]
  details: string
}

export type Activity = {
  title: string
  role: string
  date: string
  description?: string
  images: string[]
  category: 'Event' | 'Award' | 'Certification'
}

export type SocialLink = {
  platform: string
  url: string
  icon: IconType
}
