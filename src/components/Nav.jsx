export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <span className="logo-dot" />
        SALEM<span>G</span>
      </div>
      <div className="nav-links">
        <a href="#timeline">// timeline</a>
        <a href="#contact">// contact</a>
        <a href="https://github.com/comradeonboard" target="_blank" rel="noreferrer">
          // github
        </a>
      </div>
      <div className="nav-status">
        <span className="status-dot" />
        SYSTEM_ONLINE
      </div>
    </nav>
  )
}
