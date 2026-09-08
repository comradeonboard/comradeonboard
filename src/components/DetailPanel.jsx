import { useEffect } from 'react'

export default function DetailPanel({ exp, onClose }) {
  const isOpen = !!exp

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const layerColors = ['#00F5FF', '#22d3ee', '#7000FF', '#9d6bff', '#4ade80']
  const layerLevels = ['PRESENTATION', 'APPLICATION', 'LOGIC', 'DATA', 'INFRA']

  return (
    <div className={`detail-overlay ${isOpen ? 'open' : ''}`}>
      <div className="detail-backdrop" onClick={onClose} />
      <div className="detail-panel">
        {exp && (
          <>
            <div className="detail-header">
              <button className="detail-close" onClick={onClose} aria-label="Close">
                ✕
              </button>
              <div className="detail-version">
                {exp.version} · {exp.status}
              </div>
              <h3 className="detail-title">{exp.title}</h3>
              <div className="detail-date">
                {exp.dateRange} · commit {exp.commitHash}
              </div>
            </div>

            <div className="detail-body">
              <div className="detail-summary">{exp.summary}</div>

              {/* stacked layers */}
              <div className="detail-section-title">TECH STACK — STACKED</div>
              <div className="stack-layers">
                {exp.stack.map((layer, i) => (
                  <div className="stack-layer" key={layer}>
                    <span className="layer-name">
                      <span
                        className="layer-icon"
                        style={{
                          background: layerColors[i % layerColors.length],
                          boxShadow: `0 0 6px ${layerColors[i % layerColors.length]}`,
                        }}
                      />
                      {layer}
                    </span>
                    <span className="layer-level">{layerLevels[i % layerLevels.length]}</span>
                  </div>
                ))}
              </div>

              {/* metrics */}
              <div className="detail-section-title">KEY METRICS</div>
              <div className="detail-metrics">
                {exp.metrics.map((m) => (
                  <div className="metric-card" key={m.label}>
                    <div className="metric-value">{m.value}</div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* contributions */}
              <div className="detail-section-title">CONTRIBUTIONS</div>
              <div className="detail-contrib">
                <div className="detail-contrib-header">
                  <span className="detail-contrib-dot frontend" />
                  <span className="detail-contrib-title frontend">FRONTEND / UI</span>
                </div>
                <div className="detail-contrib-desc">{exp.frontend.description}</div>
                <div className="exp-tech">
                  {exp.frontend.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="detail-contrib">
                <div className="detail-contrib-header">
                  <span className="detail-contrib-dot backend" />
                  <span className="detail-contrib-title backend">BACKEND / INFRA</span>
                </div>
                <div className="detail-contrib-desc">{exp.backend.description}</div>
                <div className="exp-tech">
                  {exp.backend.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {/* links */}
              <div className="detail-links">
                <a
                  className="detail-link"
                  href={exp.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ GITHUB_REPO
                </a>
                <a
                  className={`detail-link ${exp.links.demo ? '' : 'disabled'}`}
                  href={exp.links.demo || '#'}
                  target="_blank"
                  rel="noreferrer"
                >
                  ↗ LIVE_DEMO
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
