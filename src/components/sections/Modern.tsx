import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import CircularGallery from '../ui/CircularGallery'
import Loading from '../ui/Loading'
import BounceCards from '../ui/BounceCards.tsx'
import { X } from 'lucide-react'

const GALLERY_COLLECTIONS = [
  {
    id: 'angel',
    title: 'Angel Collection',
    main: '/NewWay/Angel/Main.jpg',
    images: ['/NewWay/Angel/1.jpg', '/NewWay/Angel/2.jpg', '/NewWay/Angel/3.jpg'],
  },
  {
    id: 'birthday',
    title: 'Birthday Collection',
    main: '/NewWay/Birthday/Main.jpg',
    images: [
      '/NewWay/Birthday/1.jpg',
      '/NewWay/Birthday/2.jpg',
      '/NewWay/Birthday/3.jpg',
      '/NewWay/Birthday/4.jpg',
      '/NewWay/Birthday/5.jpg',
      '/NewWay/Birthday/6.jpg',
    ],
  },
  {
    id: 'flower',
    title: 'Flower Collection',
    main: '/NewWay/Flower/Main.jpg',
    images: ['/NewWay/Flower/1.jpg', '/NewWay/Flower/2.jpg', '/NewWay/Flower/3.jpg'],
  },
  {
    id: 'japan',
    title: 'Japan Collection',
    main: '/NewWay/Japan/Main.JPG',
    images: ['/NewWay/Japan/1.JPG', '/NewWay/Japan/2.JPG'],
  },
  {
    id: 'mama',
    title: 'Mama Collection',
    main: '/NewWay/Mama/Main.JPG',
    images: ['/NewWay/Mama/1.JPG', '/NewWay/Mama/2.JPG', '/NewWay/Mama/3.JPG'],
  },
  {
    id: 'playground',
    title: 'Playground Collection',
    main: '/NewWay/PlayGround/Main.jpg',
    images: [
      '/NewWay/PlayGround/1.jpg',
      '/NewWay/PlayGround/2.jpg',
      '/NewWay/PlayGround/3.jpg',
      '/NewWay/PlayGround/4.jpg',
      '/NewWay/PlayGround/5.jpg',
    ],
  },
  {
    id: 'saung',
    title: 'Saung Collection',
    main: '/NewWay/Saung/Main.jpg',
    images: ['/NewWay/Saung/1.jpg', '/NewWay/Saung/2.jpg', '/NewWay/Saung/3.jpg', '/NewWay/Saung/4.jpg'],
  },
]

const GALLERY_ITEMS = GALLERY_COLLECTIONS.map(c => ({
  image: c.main,
  text: c.title,
}))

export default function Modern() {
  const [activeCollection, setActiveCollection] = useState<typeof GALLERY_COLLECTIONS[0] | null>(null)
  const [isGalleryLoading, setIsGalleryLoading] = useState(false)

  useEffect(() => {
    if (activeCollection) {
      setIsGalleryLoading(true)
      const timer = setTimeout(() => setIsGalleryLoading(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [activeCollection])

  return (
    <>
      <AnimatePresence mode="wait">
        {activeCollection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setActiveCollection(null)}
          >
            <button
              className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => setActiveCollection(null)}
            >
              <X size={24} />
            </button>
            <div
              className="relative h-full w-full max-w-7xl overflow-hidden rounded-3xl bg-transparent p-0"
              onClick={e => e.stopPropagation()}
            >
              {isGalleryLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Loading />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isGalleryLoading ? 0 : 1 }}
                transition={{ duration: 0.8 }}
                style={{ height: '100%', width: '100%', position: "relative" }}
              >
                {/* Hint Label */}
                <div className="absolute top-24 md:top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-full flex justify-center">
                  <span className="text-white/90 text-sm font-bold tracking-[0.2em] uppercase bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-lg whitespace-nowrap">
                    Slide left or right
                  </span>
                </div>

                <CircularGallery
                  items={activeCollection.images.map(img => ({ image: img, text: '' }))}
                  bend={3}
                  textColor="#ffffff"
                  borderRadius={0.05}
                  scrollSpeed={2}
                  scrollEase={0.05}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative scroll-mt-32 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-6 font-serif text-5xl font-medium italic text-pink-900 dark:text-white md:text-7xl">
                My Burmese heart <span className="ml-2 italic font-light">in a new way.</span>
              </h2>
              <p className="text-lg leading-relaxed text-pink-800/90 dark:text-pink-100/90 md:text-xl">A lovely new way to carry my culture every day</p>
            </div>
          </div>
          <div id='new-way' className="flex flex-col items-center">
            <span className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-pink-800/60 dark:text-pink-200/60 md:mb-2">
              Tap and click a card to VIEW MORE
            </span>
            <BounceCards
              items={GALLERY_ITEMS}
              containerHeight={300}
              onItemClick={index => setActiveCollection(GALLERY_COLLECTIONS[index])}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
