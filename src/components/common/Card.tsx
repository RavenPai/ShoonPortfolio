import clsx from 'clsx'
import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/40 bg-white/70 p-6 shadow-glass backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70',
        className,
      )}
    >
      {children}
    </div>
  )
}
