import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

type AutoSwapGalleryProps = {
  images: string[]
  className?: string
  alt?: string
  interval?: number
}

export const AutoSwapGallery = ({
  images,
  className,
  alt = "Gallery image",
  interval = 1500
}: AutoSwapGalleryProps) => {
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (isDragging) return

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, isDragging])

  const handleDragEnd = (_event: any, info: any) => {
    setIsDragging(false)
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (offset < -50 || velocity < -500) {
      setIndex((prev) => (prev + 1) % images.length)
    } else if (offset > 50 || velocity > 500) {
      setIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  return (
    <div
      className={clsx("relative overflow-hidden cursor-grab active:cursor-grabbing", className)}
      onMouseEnter={() => setIsDragging(true)} // Pause on hover
      onMouseLeave={() => setIsDragging(false)}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        />
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation()
              setIndex(i)
            }}
            className={clsx(
              "h-2 w-2 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-white" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
