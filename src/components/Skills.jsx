import { motion } from 'framer-motion'

const SKILLS = [
  { id: 'js', name: 'JavaScript' },
  { id: 'react', name: 'React' },
  { id: 'nodejs', name: 'Node.js' },
  { id: 'py', name: 'Python' },
  { id: 'css', name: 'CSS' },
  { id: 'html', name: 'HTML' }
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <span className="section-kicker">// $ ls ~/skills</span>
      <h2 className="section-title">Tools of the trade</h2>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.id}
            className="skill-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <img src={`https://skillicons.dev/icons?i=${s.id}`} alt="" width="30" height="30" />
            <span className="skill-name">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
