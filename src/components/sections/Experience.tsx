import { motion } from 'framer-motion'
import type { Experience as ExperienceType } from '../../types/data'
import { Badge } from '../ui/Badge'

type ExperienceProps = {
  experiences: ExperienceType[]
}

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Recent roles</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.role}`}
                className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-glass backdrop-blur transition hover:-translate-y-1 dark:border-slate-800/70 dark:bg-slate-950/70"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{experience.role}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{experience.company}</p>
                  </div>
                  <Badge className="whitespace-nowrap">{experience.dates}</Badge>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {experience.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tech.map((item) => (
                    <Badge key={`${experience.company}-${item}`} className="bg-white/80">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
