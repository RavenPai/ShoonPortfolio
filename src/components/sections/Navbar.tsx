import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { navItems } from '../../constants/navigation'
import { ThemeSwitcher } from '../common/ThemeSwitcher'
import { useTheme } from '../../contexts/ThemeContext'

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full px-6 pt-6">
      <div
        className={clsx(
          'mx-auto flex max-w-6xl items-center justify-between rounded-full border px-6 py-3 transition',
          scrolled
            ? 'border-white/40 bg-white/75 shadow-glass backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/70'
            : 'border-transparent bg-white/30 backdrop-blur',
        )}
      >
        <a href="#home" className="text-sm font-semibold tracking-[0.3em] text-slate-700 dark:text-slate-200">
          AVM
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <select
              aria-label="Jump to section"
              className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
              onChange={(event) => {
                const target = document.querySelector(event.target.value)
                target?.scrollIntoView({ behavior: 'smooth' })
              }}
              value=""
            >
              <option value="" disabled>
                Navigate
              </option>
              {navItems.map((item) => (
                <option key={item.href} value={item.href}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <ThemeSwitcher theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  )
}

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      className="relative text-xs font-semibold uppercase tracking-[0.25em] transition hover:text-slate-900 dark:hover:text-white"
    >
      {label}
    </a>
  )
}
