import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { HighlightText } from '../ui/HighlightText'
import { TextAnimate } from '../ui/text-animate'

type HeroProps = {
  name: string
  title: string
  bio: string
  titleGradientColors?: [string, string, string]
}

const DEFAULT_GRADIENT: [string, string, string] = ['#F871A0', '#F54180', '#F31260']

export const Hero = ({
  name = "Shoon Lae Phyu Sin",
  title = "Medical Student",
  bio = "I am a third-year medical student at University of Medicine, Mandalay. Guided by my Buddhist faith and a quiet curiosity, I find beauty in the small details of life.",
  titleGradientColors = DEFAULT_GRADIENT
}: Partial<HeroProps>) => {
  const [angle, setAngle] = useState(0)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setAngle((prev) => (prev + 1) % 360)
    }, 50)
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--pink-200),_transparent_55%)] opacity-40 dark:bg-[radial-gradient(circle_at_top,_var(--pink-800),_transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex h-72 w-72 items-center justify-center self-center md:h-80 md:w-80"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300/30 via-pink-400/20 to-pink-500/30 blur-2xl" />
          <div className="flex h-64 w-64 items-center justify-center rounded-full border border-white/40 bg-white/60 shadow-glass backdrop-blur dark:border-pink-800/80 dark:bg-pink-900/70 overflow-hidden">
            <img
              src="/profile.png   "
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <TextAnimate
            as="p"
            animation="slideUp"
            by="word"
            className="text-xs font-bold uppercase tracking-[0.4em] text-black dark:font-semibold dark:text-slate-400"
          >
            {name}
          </TextAnimate>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-pink-900 dark:font-semibold dark:text-white sm:text-5xl">
            <HighlightText
              className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500"
              style={{ backgroundImage: `linear-gradient(${angle}deg, ${titleGradientColors[0]}, ${titleGradientColors[1]}, ${titleGradientColors[2]})` }}
            >
              {title}
            </HighlightText>
          </h1>
          <TextAnimate
            as="p"
            animation="slideUp"
            by="word"
            className="mt-5 text-lg font-medium text-pink-800 dark:font-normal dark:text-pink-200 text-justify"
          >
            {bio}
          </TextAnimate>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
              Read My Story
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.querySelector('#burmese')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Galleries
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
