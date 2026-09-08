// 2-year Full Stack Developer experience — 8 milestones across 24 months
// Each milestone maps frontend (top) and backend (bottom) contributions

export const experiences = [
  {
    id: 'exp-01',
    monthLabel: 'MONTH 01–03',
    dateRange: 'Sep 2024 — Nov 2024',
    commitHash: 'a3f1c0d',
    title: 'Foundation Layer',
    version: 'v0.1.0',
    status: 'ONBOARDED',
    summary:
      'Ramped up on the codebase and shipped first production features — a React component library and a Node.js REST API with PostgreSQL.',
    frontend: {
      description:
        'Built a reusable React component library with 24 components. Established design tokens and Storybook documentation.',
      tech: ['React', 'TypeScript', 'Storybook', 'CSS Modules'],
    },
    backend: {
      description:
        'Designed PostgreSQL schema for user management. Implemented Express REST endpoints with JWT auth middleware.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    },
    stack: ['React', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'COMPONENTS', value: '24' },
      { label: 'API ENDPOINTS', value: '12' },
      { label: 'PRs MERGED', value: '18' },
    ],
    links: { github: 'https://github.com/comradeonboard', demo: null },
  },
  {
    id: 'exp-02',
    monthLabel: 'MONTH 04–06',
    dateRange: 'Dec 2024 — Feb 2025',
    commitHash: 'b7e2d4a',
    title: 'First Production Deploy',
    version: 'v0.2.4',
    status: 'DEPLOYED',
    summary:
      'Led the migration to TypeScript across the frontend and introduced Redis caching to cut API response times by 60%.',
    frontend: {
      description:
        'Migrated 40+ components from JavaScript to TypeScript. Implemented code-splitting with React.lazy for initial bundle reduction.',
      tech: ['TypeScript', 'React.lazy', 'Webpack', 'Jest'],
    },
    backend: {
      description:
        'Added Redis caching layer for hot endpoints. Built rate-limiting middleware and structured request logging.',
      tech: ['Redis', 'Express', 'Winston', 'Docker'],
    },
    stack: ['React + TS', 'Node.js', 'Redis', 'PostgreSQL'],
    metrics: [
      { label: 'RESPONSE TIME', value: '-60%' },
      { label: 'BUNDLE SIZE', value: '-34%' },
      { label: 'TYPE COVERAGE', value: '92%' },
    ],
    links: { github: 'https://github.com/comradeonboard', demo: null },
  },
  {
    id: 'exp-03',
    monthLabel: 'MONTH 07–09',
    dateRange: 'Mar 2025 — May 2025',
    commitHash: 'c4a9f2b',
    title: 'Scale Initiative',
    version: 'v0.3.1',
    status: 'SCALED',
    summary:
      'Drove the move to Next.js SSR for SEO and performance, and containerized the entire backend with Docker for consistent deploys.',
    frontend: {
      description:
        'Migrated SPA to Next.js with SSR and ISR. Implemented incremental static regeneration for content-heavy pages.',
      tech: ['Next.js', 'SSR', 'ISR', 'Tailwind CSS'],
    },
    backend: {
      description:
        'Containerized all microservices with Docker Compose. Set up GitHub Actions CI pipeline with automated testing.',
      tech: ['Docker', 'GitHub Actions', 'Nginx', 'Jest'],
    },
    stack: ['Next.js', 'Node.js', 'Docker', 'PostgreSQL'],
    metrics: [
      { label: 'LCP', value: '1.2s' },
      { label: 'DEPLOY TIME', value: '4 min' },
      { label: 'UPTIME', value: '99.9%' },
    ],
    links: { github: 'https://github.com/comradeonboard', demo: null },
  },
  {
    id: 'exp-04',
    monthLabel: 'MONTH 10–12',
    dateRange: 'Jun 2025 — Aug 2025',
    commitHash: 'd8c3e1f',
    title: 'Architecture Redesign',
    version: 'v1.0.0',
    status: 'ARCHITECTED',
    summary:
      'End of Year 1 — refactored the monolith into microservices and shipped real-time WebSocket features for live collaboration.',
    frontend: {
      description:
        'Built real-time collaborative UI with WebSocket subscriptions. Implemented optimistic updates and conflict resolution.',
      tech: ['React', 'WebSocket', 'Zustand', 'Framer Motion'],
    },
    backend: {
      description:
        'Split monolith into 4 microservices with an API gateway. Implemented event-driven messaging with RabbitMQ.',
      tech: ['Microservices', 'RabbitMQ', 'API Gateway', 'Docker'],
    },
    stack: ['React', 'API Gateway', 'Microservices', 'PostgreSQL'],
    metrics: [
      { label: 'MICROSERVICES', value: '4' },
      { label: 'P99 LATENCY', value: '85ms' },
      { label: 'CONCURRENT USERS', value: '5K' },
    ],
    links: { github: 'https://github.com/comradeonboard', demo: null },
  },
  {
    id: 'exp-05',
    monthLabel: 'MONTH 13–15',
    dateRange: 'Sep 2025 — Nov 2025',
    commitHash: 'e2b7a9c',
    title: 'Year 2 — Product Launch',
    version: 'v1.1.0',
    status: 'SHIPPED',
    summary:
      'Owned a new product module end-to-end — from React Native mobile app to AWS infrastructure provisioning.',
    frontend: {
      description:
        'Developed React Native mobile app with offline-first architecture and sync. Shared 70% of logic with web via monorepo.',
      tech: ['React Native', 'Expo', 'Monorepo', 'Turborepo'],
    },
    backend: {
      description:
        'Provisioned AWS infrastructure with Terraform. Built serverless Lambda functions for image processing.',
      tech: ['AWS', 'Terraform', 'Lambda', 'API Gateway'],
    },
    stack: ['React Native', 'Node.js', 'AWS Lambda', 'PostgreSQL'],
    metrics: [
      { label: 'CODE SHARE', value: '70%' },
      { label: 'APP SIZE', value: '12 MB' },
      { label: 'COLD START', value: '120ms' },
    ],
    links: { github: 'https://github.com/comradeonboard', demo: null },
  },
  {
    id: 'exp-06',
    monthLabel: 'MONTH 16–18',
    dateRange: 'Dec 2025 — Feb 2026',
    commitHash: 'f5d1e3b',
    title: 'Performance Sprint',
    version: 'v1.2.0',
    status: 'OPTIMIZED',
    summary:
      'Led a system-wide performance initiative — database indexing, frontend code-splitting, and automated load testing.',
    frontend: {
      description:
        'Implemented route-level code splitting and image optimization pipeline. Reduced Time to Interactive by 45%.',
      tech: ['React', 'Lighthouse', 'Sharp', 'CDN'],
    },
    backend: {
      description:
        'Added composite database indexes and query optimization. Set up k6 load testing in CI with regression alerts.',
      tech: ['PostgreSQL', 'k6', 'Grafana', 'Prometheus'],
    },
    stack: ['React', 'Node.js', 'PostgreSQL', 'Prometheus'],
    metrics: [
      { label: 'TTI', value: '-45%' },
      { label: 'QUERY SPEED', value: '3.2x' },
      { label: 'PEAK RPS', value: '8K' },
    ],
    links: { github: 'https://github.com/comradeonboard', demo: null },
  },
  {
    id: 'exp-07',
    monthLabel: 'MONTH 19–21',
    dateRange: 'Mar 2026 — May 2026',
    commitHash: 'a9c4f7d',
    title: 'Team Leadership',
    version: 'v1.3.0',
    status: 'MENTORED',
    summary:
      'Stepped into a leadership role — built the design system, mentored two junior developers, and led Kubernetes migration.',
    frontend: {
      description:
        'Architected a cross-team design system with 50+ components, theming, and automated visual regression testing.',
      tech: ['React', 'Storybook', 'Chromatic', 'Figma'],
    },
    backend: {
      description:
        'Migrated Docker Compose stack to Kubernetes with auto-scaling. Implemented API gateway with rate limiting.',
      tech: ['Kubernetes', 'Helm', 'Istio', 'Grafana'],
    },
    stack: ['Design System', 'Node.js', 'Kubernetes', 'PostgreSQL'],
    metrics: [
      { label: 'COMPONENTS', value: '50+' },
      { label: 'MENTEES', value: '2' },
      { label: 'PODS', value: '24' },
    ],
    links: { github: 'https://github.com/comradeonboard', demo: null },
  },
  {
    id: 'exp-08',
    monthLabel: 'MONTH 22–24',
    dateRange: 'Jun 2026 — Aug 2026',
    commitHash: 'b1e8a2f',
    title: 'System Architecture',
    version: 'v2.0.0',
    status: 'ARCHITECT',
    summary:
      'Took full ownership of system architecture — designed event-driven systems, set up production observability, and owned end-to-end feature delivery.',
    frontend: {
      description:
        'Built data visualization dashboards with real-time charts. Implemented end-to-end testing with Playwright across web and mobile.',
      tech: ['React', 'D3.js', 'Playwright', 'WebSocket'],
    },
    backend: {
      description:
        'Designed event-sourcing architecture with CQRS. Set up distributed tracing and alerting with OpenTelemetry.',
      tech: ['CQRS', 'Event Sourcing', 'OpenTelemetry', 'Kubernetes'],
    },
    stack: ['React + D3', 'CQRS', 'Event Store', 'Kubernetes'],
    metrics: [
      { label: 'FEATURES OWNED', value: '12' },
      { label: 'MTTR', value: '8 min' },
      { label: 'TEST COVERAGE', value: '88%' },
    ],
    links: { github: 'https://github.com/comradeonboard', demo: 'https://comrade.base44.app' },
  },
]
