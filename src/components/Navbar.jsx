import { useEffect, useState } from 'react'
import { Menu, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 dark:bg-ink-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight dark:text-white">dev.portfolio</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-ink-700 dark:text-ink-200">
            <a href="#about" className="hover:text-black dark:hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-black dark:hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-black dark:hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition">Projects</a>
            <a href="#testimonials" className="hover:text-black dark:hover:text-white transition">Reviews</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
              {theme === 'dark' ? <Sun size={18} className="text-ink-200"/> : <Moon size={18} className="text-ink-700"/>}
            </button>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-black/5 dark:border-white/10">
              <Menu size={18} />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden py-3 grid gap-2 text-sm text-ink-700 dark:text-ink-200">
            {['About','Skills','Experience','Projects','Reviews','Contact'].map((t) => (
              <a key={t} href={`#${t.toLowerCase()}`} className="py-2 px-2 rounded hover:bg-black/5 dark:hover:bg-white/5" onClick={() => setOpen(false)}>
                {t}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
