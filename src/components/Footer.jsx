import { useState } from 'react'

export default function Footer() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setName('')
      setMessage('')
    }, 3000)
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer-prompt">SYSTEM_READY</div>
      <h2 className="footer-title">
        Let's <span>Build</span> Something
      </h2>
      <p className="footer-sub">
        Initiate a connection. Drop a message in the terminal below — I read every line.
      </p>

      <form className="terminal-form" onSubmit={handleSubmit}>
        <div className="terminal-form-bar">
          <span className="terminal-dot r" />
          <span className="terminal-dot y" />
          <span className="terminal-dot g" />
          <span className="terminal-form-title">salem@synaptic-ledger: ~/contact</span>
        </div>
        <div className="terminal-form-body">
          {sent ? (
            <div className="terminal-success">
              <span className="terminal-prompt">$</span>
              message transmitted ✓ — I'll get back to you soon.
            </div>
          ) : (
            <>
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-label">echo "Your Name"</span>
                <input
                  className="terminal-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  required
                />
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-label">cat &gt;&gt; message.txt</span>
                <textarea
                  className="terminal-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  required
                />
              </div>
              <button type="submit" className="terminal-submit">
                <span className="terminal-prompt">$</span>
                ./send --transmit
              </button>
            </>
          )}
        </div>
      </form>

      <div className="footer-bottom">
        <span>© 2026 SALEM_GAYTUS</span>
        <span>·</span>
        <a href="https://github.com/comradeonboard" target="_blank" rel="noreferrer">
          GITHUB
        </a>
        <a href="https://linkedin.com/in/salemgaytus" target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
        <a href="mailto:comradeonboard@gmail.com">EMAIL</a>
        <span>·</span>
        <span>BUILT_WITH 730_DAYS_OF_DEPLOYMENT</span>
      </div>
    </footer>
  )
}
