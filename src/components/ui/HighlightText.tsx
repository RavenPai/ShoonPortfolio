import clsx from 'clsx'
import type { CSSProperties, ReactNode } from 'react'

type HighlightTextProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export const HighlightText = ({ children, className, style }: HighlightTextProps) => {
  return (
    <span
      className={clsx(
        'bg-clip-text text-transparent font-semibold',
        className,
      )}
      style={style}
    >
      {children}
    </span>
  )
}
