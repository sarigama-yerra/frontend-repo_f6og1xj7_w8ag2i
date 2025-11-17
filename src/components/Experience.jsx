const timeline = [
  {
    role: 'Senior Frontend Engineer',
    company: 'PixelForge',
    time: '2023 — Present',
    points: ['Led migration to React 18 + Vite', 'Built design system used across 6 apps', 'Improved performance by 40%']
  },
  {
    role: 'Full‑Stack Developer',
    company: 'CloudNest',
    time: '2021 — 2023',
    points: ['Delivered 12+ client projects', 'Implemented CI/CD pipelines', 'Mentored 4 junior devs']
  },
  {
    role: 'Frontend Developer',
    company: 'Nova Labs',
    time: '2019 — 2021',
    points: ['Shipped complex dashboards', 'Introduced accessibility standards']
  }
]

export default function Experience() {
  return (
    <ol className="relative border-s border-black/10 dark:border-white/10">
      {timeline.map((t, i) => (
        <li key={i} className="ms-6 pb-10 last:pb-0">
          <span className="absolute -start-2 mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white ring-4 ring-white dark:ring-ink-900"></span>
          <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-ink-900/40 backdrop-blur p-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="font-semibold text-ink-900 dark:text-white">{t.role} • {t.company}</h3>
              <span className="text-sm text-ink-600 dark:text-ink-300">{t.time}</span>
            </div>
            <ul className="mt-3 grid gap-2 text-sm text-ink-700 dark:text-ink-200">
              {t.points.map(p => <li key={p}>• {p}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
