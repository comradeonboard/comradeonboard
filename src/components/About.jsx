import { motion } from 'framer-motion'

const STATS = [
  { value: '2+', label: 'years building for the web' },
  { value: '6', label: 'core technologies in my stack' },
  { value: '∞', label: 'curiosity & side projects' }
]

export default function About() {
  return (
    <section className="section" id="about">
      <span className="section-kicker">// $ cat about-me.md</span>
      <h2 className="section-title">Who I am</h2>
      <motion.div
        className="about-text"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <p>
          I&apos;m Salem, a Software Engineer who has spent the last 2+ years building for the web.
        </p>
        <p>
          I work across the stack: crafting delightful UIs with React, wiring up clean APIs with
          Node.js and Python, and shipping full-stack apps end to end. I love turning ideas into
          polished products, and sharing the journey as I go.
        </p>
      </motion.div>
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
