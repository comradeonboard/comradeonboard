import { useEffect, useState } from 'react'
import ParticleField from './components/ParticleField.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import ExperienceTimeline from './components/ExperienceTimeline.jsx'
import GitHubActivity from './components/GitHubActivity.jsx'
import ReadmeStudio from './components/ReadmeStudio.jsx'
import Footer from './components/Footer.jsx'

function readView() {
  return window.location.hash === '#/readme' ? 'readme' : 'profile'
}

export default function App() {
  const [view, setView] = useState(readView)

  useEffect(() => {
    const onHash = () => setView(readView())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="shell">
      <ParticleField />
      <Nav />
      <main>
        {view === 'readme' ? (
          <ReadmeStudio />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <ExperienceTimeline />
            <GitHubActivity />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
