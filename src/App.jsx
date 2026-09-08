import ParticleField from './components/ParticleField.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import FollowPrompt from './components/FollowPrompt.jsx'

export default function App() {
  return (
    <div className="shell">
      <ParticleField />
      <Nav />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
      <FollowPrompt />
    </div>
  )
}
