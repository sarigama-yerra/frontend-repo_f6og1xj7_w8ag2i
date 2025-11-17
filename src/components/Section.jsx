import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Section({ id, title, subtitle, children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 })
  }, [isInView, controls])

  return (
    <section id={id} ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={controls} transition={{ duration: 0.6, ease: 'easeOut' }}>
          {title && (
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">{title}</h2>
              {subtitle && <p className="mt-2 text-ink-700 dark:text-ink-300 max-w-2xl">{subtitle}</p>}
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
