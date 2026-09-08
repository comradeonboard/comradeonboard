import { motion } from 'framer-motion'

const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const SKILLS = [
  { name: 'JavaScript', icon: `${ICON_BASE}/javascript/javascript-original.svg` },
  { name: 'React', icon: `${ICON_BASE}/react/react-original.svg` },
  { name: 'Node.js', icon: `${ICON_BASE}/nodejs/nodejs-original.svg` },
  { name: 'Python', icon: `${ICON_BASE}/python/python-original.svg` },
  { name: 'CSS', icon: `${ICON_BASE}/css3/css3-original.svg` },
  { name: 'HTML', icon: `${ICON_BASE}/html5/html5-original.svg` }
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <span className="section-kicker">// $ ls ~/skills</span>
      <h2 className="section-title">Tools of the trade</h2>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <img src={s.icon} alt="" width="30" height="30" />
            <span className="skill-name">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
