import { motion } from 'framer-motion'
import { GitHubIcon } from './icons.jsx'
import { GITHUB_URL } from '../data/socials.js'

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a className="nav-logo" href="#top">
        salem<span>.dev</span>
      </a>
      <div className="nav-right">
        <a className="btn btn-primary btn-sm" href={GITHUB_URL} target="_blank" rel="noreferrer">
          <GitHubIcon />
          Follow
        </a>
      </div>
    </motion.header>
  )
}
