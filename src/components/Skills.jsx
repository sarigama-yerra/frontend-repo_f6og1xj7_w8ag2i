import { Code2, Database, Palette, Rocket, Wrench, Cpu } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind'] },
  { icon: Database, title: 'Backend', items: ['Node.js', 'FastAPI', 'MongoDB', 'Prisma', 'REST'] },
  { icon: Cpu, title: 'DevOps', items: ['Vercel', 'Docker', 'CI/CD', 'AWS', 'Monitoring'] },
  { icon: Palette, title: 'UI/UX', items: ['Figma', 'Design Systems', 'Accessibility', 'Animation'] },
  { icon: Rocket, title: 'Performance', items: ['Lighthouse 95+', 'Code Splitting', 'Caching', 'PWA'] },
  { icon: Wrench, title: 'Tooling', items: ['ESLint', 'Prettier', 'Jest', 'Storybook'] },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map(({ icon: Icon, title, items }) => (
        <div key={title} className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-ink-900/40 backdrop-blur p-6 hover:shadow-lg transition">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-black/5 dark:bg-white/10">
              <Icon className="w-5 h-5 text-ink-900 dark:text-ink-100" />
            </div>
            <h3 className="font-semibold text-ink-900 dark:text-white">{title}</h3>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-700 dark:text-ink-300">
            {items.map(i => <li key={i} className="rounded bg-black/5 dark:bg-white/5 px-2 py-1">{i}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}
