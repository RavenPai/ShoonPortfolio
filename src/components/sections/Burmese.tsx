import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Card } from '../common/Card'
import { HoverGallery } from '../ui/HoverGallery'
import { Button } from '../ui/button'

type World = {
  id: string
  images: string[]
}

const WORLDS: World[] = [
  {
    id: 'b1',
    images: ['/BurmeseWorld/B1/1.JPG', '/BurmeseWorld/B1/2.JPG', '/BurmeseWorld/B1/3.JPG', '/BurmeseWorld/B1/4.jpg'],
  },
  {
    id: 'b2',
    images: ['/BurmeseWorld/B2/1.jpg', '/BurmeseWorld/B2/2.jpg', '/BurmeseWorld/B2/3.jpg', '/BurmeseWorld/B2/4.jpg'],
  },
  {
    id: 'b3',
    images: ['/BurmeseWorld/B3/1.jpg', '/BurmeseWorld/B3/2.jpg', '/BurmeseWorld/B3/3.jpg', '/BurmeseWorld/B3/4.jpg'],
  },
  {
    id: 'b4',
    images: ['/BurmeseWorld/B4/1.jpg', '/BurmeseWorld/B4/2.jpg', '/BurmeseWorld/B4/3.jpg', '/BurmeseWorld/B4/4.jpg'],
  },
  {
    id: 'b5',
    images: ['/BurmeseWorld/B5/1.jpg', '/BurmeseWorld/B5/2.jpg', '/BurmeseWorld/B5/3.jpg', '/BurmeseWorld/B5/4.jpg'],
  },
  {
    id: 'b6',
    images: ['/BurmeseWorld/B6/1.jpg', '/BurmeseWorld/B6/2.jpg', '/BurmeseWorld/B6/3.jpg', '/BurmeseWorld/B6/4.jpg'],
  },
]

export default function Burmese() {
  return (
    <section id="burmese" className="relative scroll-mt-32 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 rounded-3xl px-8 py-12 md:px-12 md:py-16 relative overflow-hidden">
          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-pink-700 dark:text-pink-200">
                Proud & Traditional
              </span>
              <h2 className="mb-6 font-serif text-5xl font-medium italic text-pink-900 dark:text-white md:text-7xl">Burmese Dress</h2>
              <p className="text-lg leading-relaxed text-pink-800/90 dark:text-pink-100/90 md:text-xl">
                Burmese at heart, traditional by choice. My everyday style is a tribute to my roots.
              </p>
            </div>
            <div className="shrink-0">
              <motion.button
                onClick={() => document.querySelector('#burmese-grid')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Scroll Down"
                className="group relative flex flex-col items-center justify-center"
              >
                <span className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-900 dark:text-white">
                  Scroll Down
                </span>
                <motion.div
                  initial={{ y: 0, opacity: 0.95 }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-full border border-pink-900/30 dark:border-white/30 p-3 bg-white/70 dark:bg-white/10 shadow-sm"
                >
                  <ArrowDown className="h-6 w-6 text-pink-900 dark:text-white" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        <div id="burmese-grid" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORLDS.map((world, index) => (
            <motion.div
              key={world.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.2) }}
            >
              <Card className="overflow-hidden">
                <HoverGallery images={world.images} className="h-64 w-full" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
