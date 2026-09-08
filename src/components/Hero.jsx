import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const dialRef = useRef(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI)
      setRotation(angle * 0.3)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // build 24 tick marks for the radial dial
  const ticks = Array.from({ length: 24 }, (_, i) => i)

  return (
    <section className="hero" id="hero">
      <div className="hero-kicker">// SYNAPTIC LEDGER — FULL STACK ARCHITECT</div>

      <div className="hero-dial" ref={dialRef} style={{ transform: `rotate(${rotation}deg)` }}>
        <svg viewBox="0 0 200 200">
          <defs>
            <linearGradient id="dial-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F5FF" />
              <stop offset="100%" stopColor="#7000FF" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(0,245,255,0.1)" strokeWidth="1" />
          <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(112,0,255,0.08)" strokeWidth="1" />
          {ticks.map((i) => {
            const angle = (i / 24) * 360 - 90
            const rad = (angle * Math.PI) / 180
            const x1 = 100 + Math.cos(rad) * 88
            const y1 = 100 + Math.sin(rad) * 88
            const x2 = 100 + Math.cos(rad) * (i % 3 === 0 ? 76 : 82)
            const y2 = 100 + Math.sin(rad) * (i % 3 === 0 ? 76 : 82)
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={i % 3 === 0 ? 'url(#dial-grad)' : 'rgba(100,116,139,0.3)'}
                strokeWidth={i % 3 === 0 ? 1.5 : 0.8}
              />
            )
          })}
        </svg>
        <div className="hero-dial-center" style={{ transform: `rotate(${-rotation}deg)` }}>
          <div className="hero-dial-number">730</div>
          <div className="hero-dial-label">DAYS OF DEPLOYMENT</div>
        </div>
      </div>

      <h1 className="hero-title">
        Two Years of <span>Full Stack</span> Evolution
      </h1>
      <p className="hero-sub">
        A chronological data-stream mapping 24 months of building, shipping, and scaling — from
        first commit to system architecture.
      </p>

      <div className="hero-actions">
        <button className="btn btn-primary pulse" onClick={() => document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' })}>
          ▶ Start Sequence
        </button>
        <a className="btn btn-ghost" href="#contact">
          Connect
        </a>
      </div>
    </section>
  )
}
