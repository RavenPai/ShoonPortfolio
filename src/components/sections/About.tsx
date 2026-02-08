import { motion } from 'framer-motion'
import { TextAnimate } from '../ui/text-animate'
import { HighlightText } from '../ui/HighlightText'
import { AutoSwapGallery } from '../ui/AutoSwapGallery'

export const About = () => {
  const interests = [
    { title: "Reading", desc: "Constantly seeking new knowledge and perspectives." },
    { title: "Mindfulness", desc: "Finding peace through my Buddhist values." },
    { title: "Nature & Pets", desc: "A deep love for flowers and feline companions." }
  ]

  const skills = [
    "Clinical Research & Study",
    "Cat Lover",
    "Night Owl",
    "Continuous Learning"
  ]

  const galleryImages = [
    '/aboutme/1.jpg',
    '/aboutme/2.jpg',
    '/aboutme/3.jpg',
  ]

  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Background elements to match Hero style but subtle */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--pink-200),_transparent_70%)] opacity-20 dark:bg-[radial-gradient(circle_at_bottom_left,_var(--pink-900),_transparent_70%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between">
        {/* Text Section (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <TextAnimate
            as="p"
            animation="slideUp"
            by="word"
            className="text-xs font-bold uppercase tracking-[0.4em] text-black dark:font-semibold dark:text-slate-400"
          >
            About Me
          </TextAnimate>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-pink-900 dark:font-semibold dark:text-white sm:text-4xl">
            <HighlightText
              className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500"
            >
              Behind the Stethoscope
            </HighlightText>
          </h2>

          <p className="mt-6 text-lg font-medium leading-relaxed text-pink-800 dark:font-normal dark:text-pink-200 text-justify">
            I am just a girl who believes in giving my absolute best to everything I do. I appreciate a stable life, the company of cats, and the simple joy of a blooming flower.
          </p>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-pink-900 dark:text-pink-100">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default rounded-full bg-white/10 px-4 py-1.5 text-sm text-pink-900 backdrop-blur-sm transition-colors hover:border-pink-500 hover:bg-white/20 dark:text-pink-100 border border-transparent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-pink-900 dark:text-pink-100">
                Interests
              </h3>
              <div className="grid gap-4 sm:grid-cols-1">
                {interests.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 4 }}
                    className="flex flex-col gap-1 border-l-2 border-pink-300 pl-4 dark:border-pink-700"
                  >
                    <span className="font-semibold text-pink-900 dark:text-pink-100">
                      {item.title}
                    </span>
                    <span className="text-sm text-pink-800/80 dark:text-pink-300/80">
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Section (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center md:w-1/2"
        >
          {/* Blob/Glow Effect */}
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-br from-pink-300/30 via-pink-400/20 to-pink-500/30 blur-2xl" />

          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm dark:border-pink-500/20 dark:bg-black/20 aspect-[5/4]">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent opacity-50 pointer-events-none z-10" />
            <AutoSwapGallery
              images={galleryImages}
              className="h-full w-full"
              alt="About gallery"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
