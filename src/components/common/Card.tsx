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
        'rounded-2xl border border-border/40 bg-card/70 p-6 shadow-glass backdrop-blur dark:border-border/70 dark:bg-card/70',
        className,
      )}
    >
      {children}
    </div>
  )
}
