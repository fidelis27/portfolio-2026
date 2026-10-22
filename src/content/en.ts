import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Thiago Fidelis — Senior Front-End Engineer',
    description:
      'Senior front-end engineer working with React, TypeScript and micro-frontends. Open to 100% remote roles.',
    htmlLang: 'en',
  },
  ui: {
    skipLink: 'Skip to content',
    navAria: 'Sections',
    languageAria: 'Language',
    languageNames: { en: 'English', pt: 'Português' },
    nav: {
      impact: 'Impact',
      cases: 'Case studies',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    links: {
      resume: 'Resume',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      source: 'Source code',
    },
    caseLabels: {
      role: 'My part',
      period: 'When',
      stack: 'Stack',
      context: 'Context',
      problem: 'Problem',
      actions: 'What I did',
      result: 'Result',
      readCase: 'Read the case study',
    },
    footer: 'Built with Vite, React and TypeScript.',
  },
  hero: {
    headline: 'I make large front‑end systems faster and easier to change.',
    lede: 'Senior Front-End Engineer at Mercado Livre. React, TypeScript and micro-frontends, with Node.js BFFs behind them. Almost six years in software, and over nine in public service before that.',
    availability: 'Open to 100% remote senior front-end roles.',
    chart: {
      title: 'Time to first render',
      note: 'Two micro-frontend apps of a sales CRM, measured in production.',
      before: 'Before',
      after: 'After',
      faster: 'faster',
      rows: ['App 1', 'App 2'],
    },
  },
  impact: {
    heading: 'Selected impact',
    items: [
      {
        label: 'Architecture',
        body: 'Helped split a back office shared by 4 teams into domain-based micro-frontends with Webpack Module Federation, so each team could develop and deploy on its own.',
        caseId: 'backoffice',
      },
      {
        label: 'Performance',
        body: 'Cut the time to first render of a sales CRM’s micro-frontend apps by 60–67% in production.',
        caseId: 'crm',
      },
      {
        label: 'Reliability',
        body: 'Found and fixed the memory exhaustion that crashed a Node.js/TypeScript BFF’s pods almost daily, tracing it from production logs.',
        caseId: 'bff',
      },
      {
        label: 'Scale',
        body: 'Built a self-service broadcast tool that lets one operator reach 8,000+ people on Slack in a day, replacing manual sends.',
      },
      {
        label: 'Team',
        body: 'Mentored several engineers across teams; all were later promoted. Created AI skills that standardize micro-frontend performance investigations.',
      },
    ],
  },
  cases: {
    heading: 'Case studies',
    intro: 'Three problems I worked on, what I did, and how I know it worked.',
    items: [
      {
        id: 'crm',
        title: 'Cutting time to first render of a sales CRM by 60–67%',
        facts: {
          role: 'Built the four applications and made the fix',
          period: '2026',
          stack: 'React, TypeScript, Node.js BFFs, micro-frontend remote modules',
        },
        context:
          'In 2026 I built four applications from scratch for a sales CRM at Mercado Livre: pipeline, recommendations and alerts, calendar, and account planning. Each one is a React and TypeScript front end with a Node.js BFF, delivered as a remote module of a micro-frontend host.',
        problem:
          'Screens waited for all of their calls and requests to finish before they rendered anything.',
        actions: [
          'Measured time to first render of the CRM micro-frontend apps in production.',
          'Removed the calls and requests that blocked the first render, so a screen no longer waits for everything to load.',
        ],
        result:
          'Time to first render dropped by 60–67%. Two examples: 1.2 s to 0.4 s, and 2 s to 0.8 s.',
        evidence: 'Measured in production.',
      },
      {
        id: 'bff',
        title: 'Finding why a session-replay BFF kept crashing',
        facts: {
          role: 'Investigated and fixed it',
          period: '2025',
          stack: 'Node.js, TypeScript, New Relic, Datadog',
        },
        context:
          'The customer-support back office plays back user sessions through a session-replay middleware in a Node.js and TypeScript BFF. For a long recording, the middleware pulls many pages of chunks and combines their events.',
        problem:
          'Instances are limited to 2 GB and normally used about 300 MB. Whenever a user opened a long recording with many chunks, memory ran out, the instance crashed and a new pod started. It happened almost daily.',
        actions: [
          'Traced the failing session from the logs at the moment of the crash.',
          'Reproduced the crash in a test environment.',
          'Found nested flatMap calls over very large event arrays and replaced them with plain loops.',
          'Added per-session chunk-page logging, so any recurrence can be traced in New Relic and Datadog.',
        ],
        result:
          'Memory stayed near its baseline. The crashes and the new pods stopped, with no recurrence since.',
        evidence: 'Observed in production: no crash or new pod since the fix.',
      },
      {
        id: 'backoffice',
        title: 'Splitting a shared back office into domain micro-frontends',
        facts: {
          role: 'Helped define the split and built modules',
          period: 'Late 2024 to 2025',
          stack: 'React, TypeScript, Webpack Module Federation',
        },
        context:
          'The back office is an internal tool for analyzing customer-support cases across commerce and fintech. Its case-detail view had to render 15+ kinds of business entities (purchase, payment, shipment, claim and others), and each case had a different subset depending on the business unit. Four teams worked in the same application.',
        problem:
          'With everything in one app, maintaining it and evolving each part independently got harder.',
        actions: [
          'Helped define the architecture: modules split by domain, following the single responsibility principle, to reduce coupling.',
          'Set up the module structure and Module Federation configuration, and the communication between modules: props and callbacks passed by the host.',
          'Developed the status-card module (entity data) and the timeline module (chronological events).',
          'Independently delivered the migration of a core entity contract (case to friction) across 4 micro-frontends, behind feature flags so the legacy flow kept working.',
        ],
        result:
          'Teams gained autonomy: modules can be developed and deployed independently, and maintenance is simpler because responsibilities are split by domain.',
        evidence: 'Observed by the teams. No quantified metrics.',
      },
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        company: 'Mercado Livre',
        role: 'Senior Front-End Engineer (promoted from Mid-level)',
        period: 'Jan 2025 – present',
        place: 'Remote',
        summary:
          'Front-end engineer on customer-experience tools: a customer-support back office and a sales CRM, built as micro-frontends with React, TypeScript and Node.js BFFs.',
        groups: [
          {
            title: '2026: CRM platform',
            bullets: [
              'Built 4 applications from scratch for a sales CRM (pipeline, recommendations and alerts, calendar, account planning), delivered as remote micro-frontend modules.',
              'Cut time to first render by 60–67% in production (1.2 s to 0.4 s, 2 s to 0.8 s) by removing calls that made screens wait for everything to load.',
              'Traced an intermittent HTTP 502 to an external automation sending an invalid user ID, not a failing dependency, by correlating request IDs across services. Proposed validation returning HTTP 400.',
              'Contributed to existing Go APIs (query parameters, error classification) and ran database migrations to add fields.',
            ],
          },
          {
            title: '2025: Customer-support back office',
            bullets: [
              'From late 2024, helped define and implement the split of a monolithic back office (4 teams, one app) into domain-based micro-frontends with Webpack Module Federation.',
              'Developed the status-card and timeline modules of a case-detail view that renders 15+ business entity types.',
              'Fixed memory exhaustion in the session-replay middleware of a Node.js/TypeScript BFF that crashed pods almost daily.',
              'Built a self-service broadcast tool (message editor, Google Sheets audience import, test send) that lets one operator reach 8,000+ people on Slack in a day, replacing manual sends.',
              'Independently delivered a migration of a core entity contract (case to friction) across 4 micro-frontends, using feature flags to keep the legacy flow working.',
            ],
          },
          {
            title: 'Product and design',
            bullets: [
              'Gathered and refined requirements directly with stakeholders and business teams.',
              'Where there was no dedicated UX/UI team, designed screens and navigation flows from the company Design System’s components and tokens.',
            ],
          },
          {
            title: 'AI-assisted engineering and mentoring',
            bullets: [
              'Created AI skills that standardize micro-frontend performance investigations: they audit bundle, React rendering, lazy loading and network, rank fixes by impact, and apply them in an isolated worktree with build, lint and tests.',
              'Mentored several engineers across teams (juniors while mid-level, mid-level engineers since becoming senior, buddy to 2 new hires); all were later promoted.',
            ],
          },
        ],
      },
      {
        company: 'Mercado Livre',
        role: 'Software Engineer (Mid-level)',
        period: 'Oct 2022 – Dec 2024',
        place: 'Remote',
        summary:
          'Front-end engineer on customer-support tools while the team split a legacy support app into micro-frontends.',
        groups: [
          {
            bullets: [
              'Built the rendering side (rrweb) of a session-replay proof of concept, a challenge set by my tech lead, while another team owned recording.',
              'Built the new chat UI components and the chat micro-frontend, including assisted-help flows.',
              'Helped set up the Timeline as an independent micro-frontend and built its Cypress end-to-end suite. Added case-ID context to logs and New Relic events to speed up production diagnosis.',
              'Built the case-detail page with independent loading, error and retry states per section, so a failing service no longer blocked the whole analysis.',
              'Worked with tech leads, product managers and UX/UI designers: inspected Figma prototypes and design-system handoffs, aligned on component states, business rules and exception flows, and took part in early product discussions about technical and business trade-offs.',
              'Checked responsiveness and faithful use of the company Design System in large applications.',
            ],
          },
        ],
      },
      {
        company: 'Invillia',
        role: 'Mid Front-End Developer (promoted from Junior)',
        period: 'Nov 2020 – Oct 2022',
        place: 'Remote',
        note: 'Client: PagSeguro. Junior until Jul 2021, mid-level after.',
        groups: [
          {
            bullets: [
              'Worked on the “My Account” area, where merchants manage and transfer card machines. Supported customer support on failed transfers and queried the database to investigate bugs.',
              'After the promotion, built all screens and components of a bulk card-machine transfer manager from scratch, with another front-end developer and a senior engineer.',
              'Moved to the refer-a-friend program: built new landing pages and evolved the page where customers track referrals and bonuses.',
            ],
          },
        ],
      },
      {
        company: 'Fundação CASA',
        role: 'Socio-Educational Support Agent (public employee)',
        period: 'Jun 2011 – Nov 2020',
        place: 'São Paulo, Brazil',
        summary:
          'Worked directly with adolescents in the state socio-educational system before changing careers into software development in 2020.',
        groups: [],
      },
    ],
  },
  projects: {
    heading: 'Personal projects',
    intro: 'Built outside work. They are not professional experience.',
    items: {
      'mfe-communication':
        'A school-administration platform built as five independently deployable micro-frontends (Module Federation, Vite, React, TypeScript), with a versioned domain-event contract over WebSocket and CI quality gates.',
      'secretaria-backend':
        'A Go API with hexagonal architecture and MariaDB, Supabase OIDC/JWKS authentication, scoped authorization, rate limiting, ADRs and a security review.',
    },
  },
  skills: {
    heading: 'Skills and background',
    groups: [
      {
        label: 'Front end',
        items: [
          'React',
          'TypeScript',
          'JavaScript',
          'Next.js',
          'Redux Toolkit',
          'Redux Saga',
          'i18n',
        ],
      },
      {
        label: 'Architecture',
        items: ['Micro-frontends (remote modules)', 'Webpack Module Federation', 'Feature-flag rollouts'],
      },
      { label: 'Testing', items: ['Jest', 'Cypress'] },
      {
        label: 'Back end',
        items: [
          'Node.js (BFFs)',
          'REST',
          'Go (contributing to existing APIs)',
          'SQL migrations',
        ],
      },
      {
        label: 'Observability',
        items: ['Datadog', 'New Relic', 'Grafana', 'Kibana', 'Splunk', 'Sentry'],
      },
      {
        label: 'AI-assisted development',
        items: [
          'Claude Code',
          'Cursor',
          'Codex',
          'GitHub Copilot',
          'Spec-Driven Development',
          'MCP',
          'Custom AI skills',
        ],
      },
      {
        label: 'Product and design',
        items: [
          'Figma handoff',
          'Company Design System (components and tokens)',
          'Storybook',
          'Component libraries',
          'Requirements gathering',
        ],
      },
      {
        label: 'Ways of working and documentation',
        items: [
          'Kanban',
          'Docfy (project documentation)',
          'With and without dedicated UX, design and product teams',
        ],
      },
      {
        label: 'Earlier or personal use',
        items: [
          'Docker, Kubernetes and Jenkins CI/CD (at Invillia)',
          'Vite, Go and MariaDB (personal projects)',
        ],
      },
    ],
    languages: {
      label: 'Languages',
      value:
        'Portuguese (native), English (intermediate, technical documentation), Spanish (professional working, spoken at work)',
    },
    education: {
      label: 'Education',
      value: 'Technologist in Systems Analysis and Development, Fatec Taquaritinga, 2011–2014',
    },
  },
  contact: {
    heading: 'Contact',
    lede: 'I am looking for a 100% remote senior front-end role. The quickest way to reach me is email.',
    location: 'Based in Taquaritinga, SP, Brazil.',
  },
};
