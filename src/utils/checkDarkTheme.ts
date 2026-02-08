import type { Theme } from '../types/theme'

export const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  // Default to light mode to showcase the Pink Palette
  return 'light' 
}
