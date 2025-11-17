import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div className="py-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 text-ink-800 dark:text-ink-200 border border-black/5 dark:border-white/10">
              Interactive • Playful • Modern
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-ink-900 dark:text-white">
              Web Developer crafting delightful digital experiences
            </h1>
            <p className="mt-4 text-ink-700 dark:text-ink-200 max-w-xl">
              I build fast, accessible and visually engaging web apps with React, TypeScript and modern tooling.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">View Projects</a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg border border-black/10 dark:border-white/20 text-ink-900 dark:text-ink-100 hover:bg-black/5 dark:hover:bg-white/5">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white dark:from-ink-900/80 dark:via-ink-900/40 dark:to-ink-900"></div>
    </section>
  )
}
