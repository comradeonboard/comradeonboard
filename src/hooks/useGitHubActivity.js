// Live GitHub data via the public REST API (no auth needed for public profiles)
import { useEffect, useState } from 'react'
import { GITHUB_URL } from '../data/socials.js'

const USERNAME = GITHUB_URL.split('github.com/')[1].replace(/\/$/, '')
const API = `https://api.github.com/users/${USERNAME}`

export function useGitHubActivity() {
  const [data, setData] = useState({ events: [], repos: [], loading: true, error: null })

  useEffect(() => {
    const controller = new AbortController()
    let events = []
    let repos = []

    const load = async () => {
      try {
        const [eventsRes, reposRes] = await Promise.all([
          fetch(`${API}/events/public?per_page=30`, { signal: controller.signal }),
          fetch(`${API}/repos?sort=pushed&per_page=4`, { signal: controller.signal }),
        ])
        if (!eventsRes.ok || !reposRes.ok) throw new Error('GitHub API unavailable')
        events = await eventsRes.json()
        repos = await reposRes.json()
        setData({ events, repos, loading: false, error: null })
      } catch (err) {
        if (err.name !== 'AbortError') {
          setData({ events, repos, loading: false, error: 'activity unavailable right now' })
        }
      }
    }
    load()
    return () => controller.abort()
  }, [])

  return data
}

export function timeAgo(dateStr) {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

// Turn a public event into one readable activity line
export function describeEvent(event) {
  const repo = event.repo.name.split('/')[1]
  switch (event.type) {
    case 'PushEvent':
      return {
        kind: 'push',
        text: `pushed ${event.payload.size || event.payload.commits?.length || 1} commit${event.payload.size === 1 ? '' : 's'} to`,
        repo,
      }
    case 'PullRequestEvent':
      return { kind: 'pr', text: `${event.payload.action} a pull request in`, repo }
    case 'CreateEvent':
      return { kind: 'create', text: `created ${event.payload.ref_type} in`, repo }
    case 'WatchEvent':
      return { kind: 'star', text: 'starred', repo }
    case 'ForkEvent':
      return { kind: 'fork', text: 'forked', repo }
    case 'IssuesEvent':
      return { kind: 'issue', text: `${event.payload.action} an issue in`, repo }
    default:
      return { kind: 'other', text: 'was active in', repo }
  }
}

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Rust: '#dea584',
  Shell: '#89e051',
  Java: '#b07219',
}

export const langColor = (lang) => LANG_COLORS[lang] || '#8892b0'
