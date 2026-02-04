import { RiGithubLine, RiLinkedinLine, RiMailLine } from 'react-icons/ri'
import type { SocialLink } from '../types/data'

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/example', icon: RiGithubLine },
  { platform: 'LinkedIn', url: 'www.linkedin.com/in/pai-min-thway-47b735382', icon: RiLinkedinLine },
  { platform: 'Email', url: 'mailto:paiminthway13@gmail.com', icon: RiMailLine },
]
