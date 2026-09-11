import { useState } from 'react'
import { marked } from 'marked'
import readmeSource from '../../README.md?raw'
import '../readme-studio.css'

export default function ReadmeStudio() {
  const [md, setMd] = useState(readmeSource)
  const html = marked.parse(md, { gfm: true, breaks: true })

  return (
    <section className="studio">
      <div className="studio-head">
        <div>
          <span className="section-kicker">// $ nano README.md</span>
          <h2 className="section-title">README Studio</h2>
        </div>
        <p className="studio-hint">
          Edit on the left; the GitHub-style preview updates live on the right.
        </p>
      </div>

      <div className="studio-split">
        <textarea
          className="studio-editor"
          value={md}
          onChange={(e) => setMd(e.target.value)}
          spellCheck={false}
          aria-label="README markdown editor"
        />
        <div className="studio-preview">
          <div className="readme-body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </section>
  )
}
