export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="mt-12 border-t border-slate-200/50 bg-transparent py-8 text-center text-sm text-slate-700 dark:border-slate-800/60 dark:text-slate-300">
            <div className="mx-auto max-w-6xl px-6">
                <p className="">© {year} Shoon. All rights reserved.</p>
            </div>
        </footer>
    )
}
