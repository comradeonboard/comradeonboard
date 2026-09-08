import { useGitHubStats } from '../hooks/useGitHubStats.js'

export default function GitHubStats() {
  const stats = useGitHubStats()
  if (!stats) return null

  return (
    <div className="tl-stats">
      <span className="tl-stat">
        <strong>{stats.repos}</strong> public repositories
      </span>
      <span className="tl-stat">
        <strong>{stats.contributions}</strong> contributions
      </span>
      <span className="tl-stat tl-stat-sync">synced from GitHub</span>
    </div>
  )
}
