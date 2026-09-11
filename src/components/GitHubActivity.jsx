import { motion } from 'framer-motion'
import { useGitHubActivity, describeEvent, timeAgo, langColor } from '../hooks/useGitHubActivity.js'
import { GITHUB_URL } from '../data/socials.js'

const MAX_EVENTS = 6

export default function GitHubActivity() {
  const { events, repos, loading, error } = useGitHubActivity()
  const feed = events.map(describeEvent).slice(0, MAX_EVENTS)

  return (
    <section className="section" id="activity">
      <span className="section-kicker">// $ gh api users/comradeonboard/events</span>
      <h2 className="section-title">Live from GitHub</h2>

      {loading && <p className="gh-status">$ fetching activity…</p>}
      {error && <p className="gh-status">$ {error}</p>}

      {!loading && !error && (
        <div className="gh-grid">
          {feed.length > 0 && (
            <motion.div
              className="gh-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="gh-card-title">Recent activity</span>
              <ul className="gh-list">
                {feed.map((e, i) => (
                  <li key={i} className="gh-item">
                    <span className={`gh-dot gh-${e.kind}`} />
                    <span className="gh-item-text">
                      {e.text}{' '}
                      <a
                        className="gh-repo"
                        href={`${GITHUB_URL}/${e.repo}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {e.repo}
                      </a>
                    </span>
                    <span className="gh-item-meta">{timeAgo(events[i].created_at)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {repos.length > 0 && (
            <motion.div
              className="gh-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="gh-card-title">Recently pushed repos</span>
              <ul className="gh-list">
                {repos.map((r) => (
                  <li key={r.id} className="gh-item gh-item-col">
                    <span className="gh-item-text">
                      <a className="gh-repo" href={r.html_url} target="_blank" rel="noreferrer">
                        {r.name}
                      </a>
                    </span>
                    <span className="gh-item-desc">{r.description || ''}</span>
                    <span className="gh-item-meta">
                      <span className="gh-lang">
                        <span
                          className="gh-lang-dot"
                          style={{ background: langColor(r.language) }}
                        />
                        {r.language || 'misc'}
                      </span>
                      · {timeAgo(r.pushed_at)}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      )}
    </section>
  )
}
