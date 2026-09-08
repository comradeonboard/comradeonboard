import { motion } from 'framer-motion'
import { SOCIALS } from '../data/socials.js'
import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon, GlobeIcon } from './icons.jsx'

const ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  email: MailIcon,
  website: GlobeIcon
}

export default function Footer() {
  return (
    <footer className="footer" id="connect">
      <div className="footer-inner">
        <span className="section-kicker">// $ ./connect.sh</span>
        <h2 className="section-title">Let&apos;s connect</h2>
        <div className="socials">
          {SOCIALS.map((s, i) => {
            const Icon = ICONS[s.id]
            return (
              <motion.a
                key={s.id}
                className="social-link"
                href={s.href}
                target={s.id === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Icon />
                <span>
                  <span className="social-label">{s.label}</span>
                  <span className="social-handle">{s.handle}</span>
                </span>
              </motion.a>
            )
          })}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Salem Gaytus</span>
          <span>crafted with React · follow the journey →</span>
        </div>
      </div>
    </footer>
  )
}
