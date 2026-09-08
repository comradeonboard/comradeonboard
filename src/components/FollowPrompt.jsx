import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitHubIcon } from './icons.jsx'
import { GITHUB_URL } from '../data/socials.js'

const SHOW_DELAY_MS = 2800

export default function FollowPrompt() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.aside
          className="follow-prompt"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        >
          <button className="follow-prompt-close" onClick={() => setDismissed(true)} aria-label="Dismiss">
            ×
          </button>
          <div className="follow-prompt-head">
            <span className="follow-prompt-wave">👋</span>
            <div>
              <p className="follow-prompt-title">Enjoying my profile?</p>
              <p className="follow-prompt-text">Follow along for new projects &amp; experiments.</p>
            </div>
          </div>
          <div className="follow-prompt-actions">
            <a className="btn btn-primary btn-sm" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <GitHubIcon />
              Follow
            </a>
            <button className="btn btn-ghost btn-sm" onClick={() => setDismissed(true)}>
              Not now
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
