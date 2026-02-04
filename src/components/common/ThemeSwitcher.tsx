import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import type { Theme } from '../../types/theme'
import { IconButton } from './IconButton'

type ThemeSwitcherProps = {
  theme: Theme
  onToggle: () => void
}

export const ThemeSwitcher = ({ theme, onToggle }: ThemeSwitcherProps) => {
  const isDark = theme === 'dark'

  return (
    <IconButton ariaLabel="Toggle theme" onClick={onToggle}>
      {isDark ? <RiSunLine className="text-lg" /> : <RiMoonLine className="text-lg" />}
    </IconButton>
  )
}
