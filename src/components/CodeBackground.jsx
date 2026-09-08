const codeSnippet = `// synaptic_ledger.ts — full stack architecture layer
import { Router } from 'express'
import { Pool } from 'pg'
import { redis } from './cache'

const db = new Pool({ connectionString: process.env.DATABASE_URL })
const app = Router()

app.get('/api/experience/:id', async (req, res) => {
  const cacheKey = \`exp:\${req.params.id}\`
  const cached = await redis.get(cacheKey)
  if (cached) return res.json(JSON.parse(cached))

  const { rows } = await db.query(
    'SELECT * FROM experiences WHERE id = $1',
    [req.params.id]
  )
  await redis.setex(cacheKey, 3600, JSON.stringify(rows[0]))
  res.json(rows[0])
})

// middleware stack — auth, rate limit, logging
app.use(authMiddleware)
app.use(rateLimit({ windowMs: 60000, max: 100 }))
app.use(requestLogger)

export default app
// end of synaptic_ledger module — 730 days compiled`

export default function CodeBackground() {
  // repeat the snippet to fill the horizontal track
  const repeated = codeSnippet.repeat(8)
  return (
    <div className="code-bg">
      <pre>{repeated}</pre>
    </div>
  )
}
