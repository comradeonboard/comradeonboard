// Live GitHub stats: repository count from the profile, contribution total
// from github-contributions-api.jogruber.de (public proxy, no token needed)
import { useEffect, useState } from 'react'
import { GITHUB_URL } from '../data/socials.js'

const USERNAME = GITHUB_URL.split('github.com/')[1].replace(/\/$/, '')

export function useGitHubStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const load = async () => {
      try {
        const [profileRes, contribRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { signal: controller.signal }),
          fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}`, { signal: controller.signal }),
        ])
        if (!profileRes.ok || !contribRes.ok) throw new Error('unavailable')
        const profile = await profileRes.json()
        const contrib = await contribRes.json()
        const contributions = Object.values(contrib.total || {}).reduce((a, b) => a + b, 0)
        setStats({ repos: profile.public_repos, contributions })
      } catch {
        /* stats stay hidden if either endpoint is unreachable */
      }
    }
    load()
    return () => controller.abort()
  }, [])

  return stats
}
