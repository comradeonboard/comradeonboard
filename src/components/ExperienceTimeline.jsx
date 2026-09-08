import { motion } from 'framer-motion'
import { experiences } from '../data/experience.js'

export default function ExperienceTimeline() {
  return (
    <section className="section" id="timeline">
      <span className="section-kicker">// $ git log --oneline --reverse</span>
      <h2 className="section-title">Two years of building</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={exp.title}>
            {exp.year === 2 && experiences[i - 1]?.year === 1 && (
              <span className="tl-year-label">— YEAR 2 —</span>
            )}
            <motion.div
              className={`tl-item ${exp.year === 2 ? 'year-2' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <span className="tl-period">{exp.period}</span>
              <div className="tl-card">
                <h3 className="tl-title">{exp.title}</h3>
                <p className="tl-summary">{exp.summary}</p>
                <div className="tl-tech">
                  {exp.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
