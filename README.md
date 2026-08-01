<div style="background: linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1a1a2e 100%); border-radius: 16px; padding: 2.5rem; color: #e6edf3; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; min-height: 600px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; border: 1px solid #30363d;">
  <style>
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes typeWriter {
      from { width: 0; }
      to { width: 100%; }
    }
    @keyframes blink {
      0%, 49% { border-right-color: #58a6ff; }
      50%, 100% { border-right-color: transparent; }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 5px #58a6ff, 0 0 10px #58a6ff; }
      50% { box-shadow: 0 0 10px #58a6ff, 0 0 20px #58a6ff, 0 0 30px #58a6ff; }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .header { animation: fadeInUp 0.8s ease-out; }
    .typing {
      display: inline-block;
      border-right: 3px solid #58a6ff;
      animation: typeWriter 3s steps(30, end) 0.5s forwards, blink 0.75s step-end 3.5s infinite;
      overflow: hidden;
      white-space: nowrap;
      width: 0;
    }
    .name {
      font-size: 2.8rem;
      font-weight: 700;
      margin: 0;
      margin-bottom: 0.3rem;
      background: linear-gradient(90deg, #58a6ff, #bc8cff, #f778ba);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .subtitle {
      font-size: 1.2rem;
      opacity: 0.85;
      margin: 0;
      font-weight: 300;
      color: #8b949e;
    }
    .content { animation: fadeInUp 1s ease-out 0.3s backwards; }
    .section-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: #58a6ff;
      margin: 1.5rem 0 1rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .section-title::before {
      content: '';
      width: 4px;
      height: 20px;
      background: #58a6ff;
      border-radius: 2px;
    }
    .skills-section { margin-top: 1.5rem; }
    .skill-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.9rem;
      animation: slideInLeft 0.6s ease-out backwards;
    }
    .skill-item:nth-child(1) { animation-delay: 1.2s; }
    .skill-item:nth-child(2) { animation-delay: 1.4s; }
    .skill-item:nth-child(3) { animation-delay: 1.6s; }
    .skill-item:nth-child(4) { animation-delay: 1.8s; }
    .skill-label {
      font-size: 0.85rem;
      min-width: 100px;
      font-weight: 500;
      color: #c9d1d9;
    }
    .skill-bar {
      flex: 1;
      height: 10px;
      background: rgba(255,255,255,0.08);
      border-radius: 5px;
      margin: 0 1rem;
      overflow: hidden;
    }
    .skill-fill {
      height: 100%;
      border-radius: 5px;
      animation: slideInLeft 1.2s ease-out backwards;
      background: linear-gradient(90deg, #58a6ff, #bc8cff);
      position: relative;
    }
    .skill-fill::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      animation: shimmer 2s infinite;
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .skill-item:nth-child(1) .skill-fill { animation-delay: 1.2s; width: 95%; }
    .skill-item:nth-child(2) .skill-fill { animation-delay: 1.4s; width: 90%; }
    .skill-item:nth-child(3) .skill-fill { animation-delay: 1.6s; width: 85%; }
    .skill-item:nth-child(4) .skill-fill { animation-delay: 1.8s; width: 80%; }
    .skill-percent {
      font-size: 0.8rem;
      min-width: 35px;
      text-align: right;
      font-weight: 600;
      color: #58a6ff;
    }
    .terminal {
      background: #0d1117;
      border: 1px solid #30363d;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 1.5rem;
      animation: fadeInUp 1s ease-out 2s backwards;
    }
    .terminal-header {
      background: #161b22;
      padding: 0.6rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 1px solid #30363d;
    }
    .terminal-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .dot-red { background: #f85149; }
    .dot-yellow { background: #e3b341; }
    .dot-green { background: #3fb950; }
    .terminal-body {
      padding: 1rem;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      line-height: 1.6;
    }
    .terminal-line {
      opacity: 0;
      animation: fadeInUp 0.4s ease-out forwards;
    }
    .terminal-line:nth-child(1) { animation-delay: 2.2s; }
    .terminal-line:nth-child(2) { animation-delay: 2.5s; }
    .terminal-line:nth-child(3) { animation-delay: 2.8s; }
    .terminal-line:nth-child(4) { animation-delay: 3.1s; }
    .terminal-line:nth-child(5) { animation-delay: 3.4s; }
    .prompt { color: #58a6ff; }
    .command { color: #e6edf3; }
    .output { color: #7ee787; }
    .cursor {
      display: inline-block;
      width: 8px;
      height: 14px;
      background: #58a6ff;
      animation: blink-cursor 1s step-end infinite;
      vertical-align: middle;
      margin-left: 2px;
    }
    @keyframes blink-cursor {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .projects { margin-top: 1.5rem; }
    .project-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid #30363d;
      border-radius: 10px;
      padding: 1.2rem;
      margin-bottom: 1rem;
      transition: all 0.3s ease;
      animation: slideInRight 0.6s ease-out backwards;
    }
    .project-card:nth-child(1) { animation-delay: 2.4s; }
    .project-card:nth-child(2) { animation-delay: 2.6s; }
    .project-card:hover {
      border-color: #58a6ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(88, 166, 255, 0.15);
    }
    .project-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: #f0f6fc;
      margin: 0 0 0.3rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .project-name svg { color: #58a6ff; }
    .project-desc {
      font-size: 0.85rem;
      color: #8b949e;
      margin: 0;
    }
    .project-tags {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.7rem;
      flex-wrap: wrap;
    }
    .tag {
      background: rgba(88, 166, 255, 0.15);
      color: #58a6ff;
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      border: 1px solid rgba(88, 166, 255, 0.3);
    }
    .links {
      display: flex;
      gap: 0.8rem;
      margin-top: 2rem;
      flex-wrap: wrap;
      animation: fadeInUp 1.2s ease-out 3.2s backwards;
    }
    .link-btn {
      background: rgba(255,255,255,0.06);
      color: #e6edf3;
      border: 1px solid #30363d;
      padding: 0.7rem 1.4rem;
      border-radius: 25px;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 500;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .link-btn:hover {
      background: #58a6ff;
      color: #0d1117;
      border-color: #58a6ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(88, 166, 255, 0.3);
    }
    .link-btn svg { transition: transform 0.3s ease; }
    .link-btn:hover svg { transform: scale(1.1); }
    .floating-icon {
      position: absolute;
      font-size: 3.5rem;
      opacity: 0.06;
      animation: float 4s ease-in-out infinite;
      color: #58a6ff;
    }
    .icon-1 { top: 15px; right: 25px; animation-delay: 0s; }
    .icon-2 { bottom: 60px; left: 15px; animation-delay: 1s; }
    .icon-3 { top: 45%; right: 8px; animation-delay: 2s; }
    .icon-4 { top: 10px; left: 30px; animation-delay: 0.5s; }
    .stats {
      display: flex;
      gap: 2rem;
      margin-top: 1.5rem;
      animation: fadeInUp 0.8s ease-out 0.5s backwards;
    }
    .stat {
      text-align: center;
    }
    .stat-number {
      font-size: 1.8rem;
      font-weight: 700;
      color: #58a6ff;
    }
    .stat-label {
      font-size: 0.75rem;
      color: #8b949e;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    @media (max-width: 600px) {
      .name { font-size: 2rem; }
      .subtitle { font-size: 1rem; }
      .skills-section { padding: 0 0.5rem; }
      .links { flex-direction: column; }
      .stats { gap: 1rem; }
      .floating-icon { display: none; }
    }
  </style>

  <div class="floating-icon icon-1">&lt;/&gt;</div>
  <div class="floating-icon icon-2">{"{"}</div>
  <div class="floating-icon icon-3">{"}"}</div>
  <div class="floating-icon icon-4">&lt;&gt;</div>

  <div class="header">
    <h1 class="name">Salem Gaytus</h1>
    <p class="subtitle">
      <span class="typing">Dev &bull; AI &bull; Crypto Enthusiast</span>
    </p>
  </div>

  <div class="stats">
    <div class="stat">
      <div class="stat-number">50+</div>
      <div class="stat-label">Repos</div>
    </div>
    <div class="stat">
      <div class="stat-number">1k+</div>
      <div class="stat-label">Stars</div>
    </div>
    <div class="stat">
      <div class="stat-number">200+</div>
      <div class="stat-label">Contributions</div>
    </div>
  </div>

  <div class="content">
    <div class="skills-section">
      <div class="section-title">Skills</div>
      <div class="skill-item">
        <span class="skill-label">Python</span>
        <div class="skill-bar"><div class="skill-fill"></div></div>
        <span class="skill-percent">95%</span>
      </div>
      <div class="skill-item">
        <span class="skill-label">JavaScript</span>
        <div class="skill-bar"><div class="skill-fill"></div></div>
        <span class="skill-percent">90%</span>
      </div>
      <div class="skill-item">
        <span class="skill-label">Web3 / Solana</span>
        <div class="skill-bar"><div class="skill-fill"></div></div>
        <span class="skill-percent">85%</span>
      </div>
      <div class="skill-item">
        <span class="skill-label">Flask</span>
        <div class="skill-bar"><div class="skill-fill"></div></div>
        <span class="skill-percent">80%</span>
      </div>
    </div>

    <div class="projects">
      <div class="section-title">Projects</div>
      <div class="project-card">
        <h3 class="project-name">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
          WIFRMTS
        </h3>
        <p class="project-desc">A high-performance framework for building decentralized applications on Solana with Rust and Anchor.</p>
        <div class="project-tags">
          <span class="tag">Rust</span>
          <span class="tag">Solana</span>
          <span class="tag">Anchor</span>
          <span class="tag">Web3</span>
        </div>
      </div>
      <div class="project-card">
        <h3 class="project-name">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
          Comrade Labs
        </h3>
        <p class="project-desc">An open-source research lab building AI-powered tools and developer infrastructure for the crypto ecosystem.</p>
        <div class="project-tags">
          <span class="tag">Python</span>
          <span class="tag">AI/ML</span>
          <span class="tag">Flask</span>
          <span class="tag">Open Source</span>
        </div>
      </div>
    </div>

    <div class="terminal">
      <div class="terminal-header">
        <div class="terminal-dot dot-red"></div>
        <div class="terminal-dot dot-yellow"></div>
        <div class="terminal-dot dot-green"></div>
        <span style="color: #8b949e; font-size: 0.8rem; margin-left: 0.5rem;">bash</span>
      </div>
      <div class="terminal-body">
        <div class="terminal-line"><span class="prompt">$ </span><span class="command">npm run dev</span></div>
        <div class="terminal-line"><span class="prompt">></span> Building amazing projects...</div>
        <div class="terminal-line"><span class="prompt">></span> Compiling WIFRMTS... <span class="output">✓</span></div>
        <div class="terminal-line"><span class="prompt">></span> Deploying Comrade Labs... <span class="output">✓</span></div>
        <div class="terminal-line"><span class="prompt">></span> <span class="dot" style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#3fb950;margin-right:6px;animation:pulse 2s ease-in-out infinite;"></span> Ready <span class="cursor"></span></div>
      </div>
    </div>

    <div class="links">
      <a class="link-btn" href="https://linktr.ee/comradeonboard">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 3a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 7.5zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
        Portfolio
      </a>
      <a class="link-btn" href="https://github.com/comradeonboard">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        GitHub
      </a>
      <a class="link-btn" href="https://x.com/comradeonboard">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.294 6.436 14.5 0h-1.28L8.736 5.55 4.34 0H0l5.633 8.16L0 16h1.28l5.04-5.83 4.44 8.16h4.34L9.977 10.29l4.135 6h-1.28L8.594 6.436h.699z"/></svg>
        Twitter
      </a>
      <a class="link-btn" href="https://linkedin.com/in/comradeonboard">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
        LinkedIn
      </a>
    </div>
  </div>
</div>