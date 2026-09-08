import { useEffect, useRef } from 'react'

const COUNT_DIVISOR = 18000
const LINK_DIST = 130
const MOUSE_DIST = 120

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let raf
    let w = 0
    let h = 0
    let particles = []
    const mouse = { x: -9999, y: -9999 }

    const spawn = () => {
      const count = Math.min(90, Math.floor((w * h) / COUNT_DIVISOR))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.4
      }))
    }

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      spawn()
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < MOUSE_DIST * MOUSE_DIST && d2 > 0.01) {
          const d = Math.sqrt(d2)
          p.x += (dx / d) * 0.6
          p.y += (dy / d) * 0.6
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(34, 211, 238, .5)'
        ctx.fill()
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.12 * (1 - d2 / (LINK_DIST * LINK_DIST))})`
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(step)
    }

    resize()
    step()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
