import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/10 text-center text-sm text-ink-700 dark:text-ink-300">
      © {new Date().getFullYear()} Your Name — Built with love
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-ink-50 dark:from-ink-900 dark:to-ink-900/90">
      <Navbar />
      <main>
        <Hero />
        <Section id="about" title="About" subtitle="Focused on building delightful, performant products.">
          <p className="max-w-3xl text-ink-800 dark:text-ink-200">
            I’m a web developer specializing in crafting modern, accessible interfaces. I turn complex problems into elegant solutions using React, TypeScript and a strong design mindset.
          </p>
        </Section>
        <Section id="skills" title="Skills" subtitle="A well-rounded toolkit for modern web apps.">
          <Skills />
        </Section>
        <Section id="experience" title="Experience" subtitle="A snapshot of my journey so far.">
          <Experience />
        </Section>
        <Section id="projects" title="Projects" subtitle="Selected work that highlights quality and impact.">
          <Projects />
        </Section>
        <Section id="testimonials" title="Client Reviews" subtitle="What clients and teammates say.">
          <Testimonials />
        </Section>
        <Section id="contact" title="Contact" subtitle="Have an idea? Let’s talk.">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  )
}

export default App
