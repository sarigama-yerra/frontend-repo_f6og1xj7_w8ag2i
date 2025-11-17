import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-ink-900/40 backdrop-blur p-6">
        <h3 className="font-semibold text-ink-900 dark:text-white">Let’s build something great</h3>
        <p className="mt-2 text-sm text-ink-700 dark:text-ink-300">Tell me about your project and I’ll get back to you within 24 hours.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input required className="px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-ink-900/60" placeholder="Name"/>
          <input type="email" required className="px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-ink-900/60" placeholder="Email"/>
          <textarea required rows={4} className="px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-ink-900/60" placeholder="Your message"/>
          <button className="justify-self-start px-5 py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90">Send Message</button>
          {sent && <p className="text-sm text-green-600">Thanks! I will reply shortly.</p>}
        </form>
      </div>
      <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-ink-900/40 backdrop-blur p-6">
        <h4 className="font-semibold text-ink-900 dark:text-white">Contact</h4>
        <ul className="mt-3 text-sm text-ink-700 dark:text-ink-300 grid gap-2">
          <li>Email: hello@devportfolio.com</li>
          <li>Location: Remote / Worldwide</li>
          <li>Available for: Freelance, Contract, Full-time</li>
        </ul>
      </div>
    </div>
  )
}
