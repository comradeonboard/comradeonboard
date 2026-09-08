import ParticleField from './components/ParticleField.jsx'
import CursorRing from './components/CursorRing.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ExperienceTimeline from './components/ExperienceTimeline.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="shell">
      <CursorRing />
      <ParticleField />
      <Nav />
      <main>
        <Hero />
        <ExperienceTimeline />
      </main>
      <Footer />
    </div>
  )
}
