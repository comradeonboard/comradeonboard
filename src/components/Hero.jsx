import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitHubIcon, MailIcon } from './icons.jsx'
import { GITHUB_URL, EMAIL_URL } from '../data/socials.js'

const TERMINAL_LINES = [
  { cmd: 'whoami', out: 'salem.gaytus' },
  { cmd: 'cat ~/role.txt', out: 'Software Engineer — building for the web' },
  { cmd: 'echo "welcome to my profile"', out: 'welcome to my profile 👋' }
]

const ROLES = ['full-stack apps', 'clean APIs', 'delightful UIs', 'open-source experiments']

function useTypedLines(onDone) {
  const [lineIdx, setLineIdx] = useState(0)
  const [typed, setTyped] = useState('')
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    if (lineIdx >= TERMINAL_LINES.length) {
      onDone()
      return
    }
    const line = TERMINAL_LINES[lineIdx]
    if (typed.length < line.cmd.length) {
      const t = setTimeout(() => setTyped(line.cmd.slice(0, typed.length + 1)), 55 + Math.random() * 45)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setCompleted((prev) => [...prev, line])
      setTyped('')
      setLineIdx((i) => i + 1)
    }, 420)
    return () => clearTimeout(t)
  }, [typed, lineIdx, onDone])

  return { lineIdx, typed, completed }
}

function useRoleTyper(roles) {
  const [text, setText] = useState('')
  useEffect(() => {
    let roleIdx = 0
    let char = 0
    let deleting = false
    let timer
    const tick = () => {
      const role = roles[roleIdx]
      if (!deleting) {
        char++
        setText(role.slice(0, char))
        if (char === role.length) {
          deleting = true
          timer = setTimeout(tick, 1800)
          return
        }
        timer = setTimeout(tick, 70)
      } else {
        char--
        setText(role.slice(0, char))
        if (char === 0) {
          deleting = false
          roleIdx = (roleIdx + 1) % roles.length
          timer = setTimeout(tick, 400)
          return
        }
        timer = setTimeout(tick, 40)
      }
    }
    timer = setTimeout(tick, 500)
    return () => clearTimeout(timer)
  }, [roles])
  return text
}

export default function Hero() {
  const [booted, setBooted] = useState(false)
  const handleDone = useCallback(() => setBooted(true), [])
  const { lineIdx, typed, completed } = useTypedLines(handleDone)
  const role = useRoleTyper(ROLES)

  return (
    <section className="hero" id="top">
      <motion.div
        className="terminal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="terminal-bar">
          <span className="terminal-dot r" />
          <span className="terminal-dot y" />
          <span className="terminal-dot g" />
          <span className="terminal-title">salem@gaytus: ~</span>
        </div>
        <div className="terminal-body">
          {completed.map((l) => (
            <div className="t-line" key={l.cmd}>
              <div>
                <span className="t-prompt">$</span>
                <span className="t-cmd">{l.cmd}</span>
              </div>
              <div className="t-out">{l.out}</div>
            </div>
          ))}
          {lineIdx < TERMINAL_LINES.length && (
            <div className="t-line">
              <span className="t-prompt">$</span>
              <span className="t-cmd">{typed}</span>
              <span className="t-cursor" />
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {booted && (
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.img
              className="hero-avatar"
              src="https://github.com/comradeonboard.png"
              alt="Salem Gaytus"
              width="112"
              height="112"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            />
            <p className="hero-greeting">// hey there, I&apos;m</p>
            <h1 className="hero-name">
              Salem <span>Gaytus</span>
            </h1>
            <p className="hero-role">
              Software Engineer · I craft <span className="role-typed">{role}</span>
              <span className="caret" />
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary pulse" href={GITHUB_URL} target="_blank" rel="noreferrer">
                <GitHubIcon />
                Follow @comradeonboard
              </a>
              <a className="btn btn-ghost" href={EMAIL_URL}>
                <MailIcon />
                Say hello
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
