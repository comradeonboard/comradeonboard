import { useEffect, useRef, useState } from 'react'
import { experiences } from '../data/experience.js'
import DetailPanel from './DetailPanel.jsx'
import CodeBackground from './CodeBackground.jsx'

export default function ExperienceTimeline() {
  const viewportRef = useRef(null)
  const [activeId, setActiveId] = useState(null)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  // drag-to-scroll
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onDown = (e) => {
      // don't drag if clicking on a card or node
      if (e.target.closest('.exp-card, .exp-node-dot, .detail-link')) return
      isDown = true
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
      el.classList.add('dragging')
    }
    const onLeave = () => {
      isDown = false
      el.classList.remove('dragging')
    }
    const onMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX) * 1.5
      el.scrollLeft = scrollLeft - walk
    }

    el.addEventListener('mousedown', onDown)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseup', onLeave)
    el.addEventListener('mousemove', onMove)
    return () => {
      el.removeEventListener('mousedown', onDown)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mouseup', onLeave)
      el.removeEventListener('mousemove', onMove)
    }
  }, [])

  // parallax code background
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const onScroll = () => {
      const bg = el.querySelector('.code-bg pre')
      if (bg) bg.style.setProperty('--bg-offset', -el.scrollLeft * 0.3 + 'px')
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const openDetail = (exp) => setActiveId(exp.id)
  const closeDetail = () => setActiveId(null)

  const activeExp = experiences.find((e) => e.id === activeId)

  return (
    <>
      <section className="timeline-section" id="timeline">
        <div className="timeline-header">
          <div className="timeline-kicker">// LOGIC_STRATA — HORIZONTAL TIMELINE</div>
          <h2 className="timeline-title">
            The Experience <span>Data-Stream</span>
          </h2>
          <p className="timeline-desc">
            Scroll horizontally through 24 months of full-stack work. Top half maps frontend
            contributions; bottom half maps backend infrastructure. Click any node to deep-dive.
          </p>
          <div className="scroll-hint">
            <span className="hint-arrow">→</span> SCROLL TO TRAVERSE
          </div>
        </div>

        <div className="timeline-viewport" ref={viewportRef}>
          <div className="timeline-track">
            <CodeBackground />

            {/* year divider */}
            <div className="year-marker" style={{ left: 'calc(80px + 4 * 340px)' }}>
              <span className="year-marker-label">YEAR 2 →</span>
            </div>

            {/* SVG connection thread */}
            <ThreadSVG count={experiences.length} />

            {experiences.map((exp, i) => (
              <div className="exp-pillar" key={exp.id}>
                {/* frontend card (top) */}
                <div className="exp-frontend">
                  <div
                    className="exp-card frontend"
                    onClick={() => openDetail(exp)}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div className="exp-card-label">FRONTEND / UI</div>
                    <div className="exp-card-desc">{exp.frontend.description}</div>
                    <div className="exp-tech">
                      {exp.frontend.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* connector to top */}
                <div className="exp-connector top" />

                {/* center node */}
                <div className="exp-node">
                  <div
                    className={`exp-node-dot ${activeId === exp.id ? 'active' : ''}`}
                    onClick={() => openDetail(exp)}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  />
                  <div className="exp-node-hash">
                    {exp.commitHash} · {exp.dateRange}
                  </div>
                </div>

                {/* connector to bottom */}
                <div className="exp-connector bottom" />

                {/* backend card (bottom) */}
                <div className="exp-backend">
                  <div
                    className="exp-card backend"
                    onClick={() => openDetail(exp)}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div className="exp-card-label">BACKEND / INFRA</div>
                    <div className="exp-card-desc">{exp.backend.description}</div>
                    <div className="exp-tech">
                      {exp.backend.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* month label */}
                <div className="exp-month" style={{ top: 'calc(50% + 48px)' }}>
                  {exp.monthLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DetailPanel exp={activeExp} onClose={closeDetail} />
    </>
  )
}

function ThreadSVG({ count }) {
  // build a wavy path that weaves through each pillar's center node
  const pillarWidth = 340
  const padding = 80
  const points = []
  for (let i = 0; i < count; i++) {
    const x = padding + i * pillarWidth + pillarWidth / 2
    // alternate up/down slightly for a wave effect
    const y = 310 + Math.sin(i * 0.8) * 10
    points.push({ x, y })
  }

  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const midX = (prev.x + curr.x) / 2
    d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`
  }

  const totalWidth = padding * 2 + count * pillarWidth

  return (
    <svg className="thread-svg" width={totalWidth} height="620" viewBox={`0 0 ${totalWidth} 620`}>
      <defs>
        <linearGradient id="thread-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#00F5FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7000FF" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path className="thread-line" d={d} />
    </svg>
  )
}
