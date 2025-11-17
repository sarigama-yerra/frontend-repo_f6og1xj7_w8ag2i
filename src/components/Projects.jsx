import { Github, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Analytics dashboard with live charts and socket updates.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    links: { demo: '#', code: '#' }
  },
  {
    title: 'E‑commerce Storefront',
    description: 'Headless commerce with Next.js and Stripe integration.',
    tags: ['Next.js', 'Stripe', 'SSR'],
    links: { demo: '#', code: '#' }
  },
  {
    title: 'Design System',
    description: 'Composable component library with dark mode and theming.',
    tags: ['Storybook', 'Radix', 'TypeScript'],
    links: { demo: '#', code: '#' }
  },
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(p => (
        <div key={p.title} className="group rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-ink-900/40 backdrop-blur overflow-hidden">
          <div className="h-36 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900" />
          <div className="p-5">
            <h3 className="font-semibold text-ink-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-ink-700 dark:text-ink-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map(t => <span key={t} className="px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-ink-700 dark:text-ink-200">{t}</span>)}
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <a href={p.links.demo} className="inline-flex items-center gap-1 hover:underline"><Globe size={16}/> Live</a>
              <a href={p.links.code} className="inline-flex items-center gap-1 hover:underline"><Github size={16}/> Code</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
