import { useEffect, useRef } from 'react'

export default function CursorRing() {
  const ringRef = useRef(null)

  useEffect(() => {
    const ring = ringRef.current
    if (!ring) return
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      const interactive = e.target.closest('a, button, .exp-card, .exp-node-dot, input, textarea')
      ring.classList.toggle('active', !!interactive)
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ringRef} className="cursor-ring" />
}
