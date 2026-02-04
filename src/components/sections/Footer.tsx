import { RiArrowUpLine } from 'react-icons/ri'

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200/60 py-10 dark:border-slate-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 dark:text-slate-400 md:flex-row">
        <p>© 2026 Avery Morgan. All rights reserved.</p>
        <button
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:bg-slate-900"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top
          <RiArrowUpLine />
        </button>
      </div>
    </footer>
  )
}
