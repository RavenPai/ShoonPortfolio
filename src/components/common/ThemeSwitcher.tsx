import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import type { Theme } from '../../types/theme'
import { Button } from '../ui/button'

type ThemeSwitcherProps = {
  theme: Theme
  onToggle: () => void
}

export const ThemeSwitcher = ({ theme, onToggle }: ThemeSwitcherProps) => {
  const isDark = theme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full bg-background/70 hover:bg-accent hover:text-accent-foreground"
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      {isDark ? <RiSunLine className="text-lg" /> : <RiMoonLine className="text-lg" />}
    </Button>
  )
}
