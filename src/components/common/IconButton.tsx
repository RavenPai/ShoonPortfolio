import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  ariaLabel: string
}

export const IconButton = ({ ariaLabel, className, ...props }: IconButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-900 dark:focus-visible:ring-offset-slate-950',
        className,
      )}
      {...props}
    />
  )
}
