import React, { useState } from 'react'
import { motion } from 'motion/react'

type FuzzyTextProps = {
  children: React.ReactNode
  baseIntensity?: number
  hoverIntensity?: number
  enableHover?: boolean
  className?: string
}

const FuzzyText: React.FC<FuzzyTextProps> = ({
  children,
  baseIntensity = 0.2,
  hoverIntensity = 0.5,
  enableHover = true,
  className = ''
}) => {
  const [hovered, setHovered] = useState(false)
  const intensity = enableHover && hovered ? hoverIntensity : baseIntensity
  const blurPx = Math.max(0, Math.min(1, intensity)) * 6
  const spread = Math.max(0, Math.min(1, intensity)) * 3

  const shadow = `
    0 ${spread}px ${blurPx}px rgba(0,0,0,0.15),
    ${spread}px 0 ${blurPx}px rgba(0,0,0,0.12),
    -${spread}px 0 ${blurPx}px rgba(0,0,0,0.12)
  `

  return (
    <motion.span
      className={className}
      style={{
        textShadow: shadow,
        filter: `blur(${blurPx * 0.25}px)`
      }}
      onMouseEnter={() => enableHover && setHovered(true)}
      onMouseLeave={() => enableHover && setHovered(false)}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      aria-hidden={false}
    >
      {children}
    </motion.span>
  )
}

export default FuzzyText
