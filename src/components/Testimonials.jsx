const data = [
  {
    name: 'Aisha Khan',
    role: 'Product Manager, PixelForge',
    quote: 'Delivered beyond expectations. Great communication, clean code and a strong eye for design.'
  },
  {
    name: 'Lucas Silva',
    role: 'CTO, CloudNest',
    quote: 'Transformed our legacy app into a blazing fast modern experience. Highly recommended.'
  },
  {
    name: 'Mina Park',
    role: 'Founder, Nova Labs',
    quote: 'Super reliable and proactive. Found creative solutions to complex problems.'
  },
]

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {data.map((t) => (
        <figure key={t.name} className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-ink-900/40 backdrop-blur p-6">
          <blockquote className="text-ink-900 dark:text-white">“{t.quote}”</blockquote>
          <figcaption className="mt-4 text-sm text-ink-700 dark:text-ink-300">— {t.name}, {t.role}</figcaption>
        </figure>
      ))}
    </div>
  )
}
