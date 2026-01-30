// src/data/projects.ts

export const projects = [
  {
    slug: "baseline-web",
    status: "finished",
    title: "Baseline Web",
    description: "A no-build, standards-first microsite demonstrating semantic HTML, responsive CSS, and progressive enhancement.",
    why: "Showcase core web fundamentals (semantic HTML, accessibility, responsive layout, progressive enhancement) without frameworks.",
    stack: "HTML5 + CSS3 + Vanilla JS",
    repoUrl: "https://github.com/davidmoriarty/baseline-web",
    liveUrl: "https://baseline-web.pages.dev",
    features: [
      "Semantic landmarks + skip link + visible focus styles",
      "Responsive navigation with keyboard/ESC support",
      "Accessible form validation with aria-live + aria-invalid",
      "Responsive image gallery with descriptive alt text and captions",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Accessibility", "Progressive Enhancement"],
    screenshots: [
      "/images/screenshots/baselineweb-gallery.png",
      "/images/screenshots/baselineweb-home.png",
      "/images/screenshots/baselineweb-blog.png",
      "/images/screenshots/baselineweb-article.png",
      "/images/screenshots/baselineweb-contact.png",
    ],
  },
  {
    slug: "task-ledger",
    status: "finished",
    title: "Task Ledger",
    description: "Fundamentals-first Express app with sessions, SQLite persistence, and a server-rendered dashboard for task management.",
    why: "Demonstrate classic backend patterns common in production Express apps: sessions, auth, CRUD, and server-rendered UI.",
    stack: "Node.js + Express + EJS + SQLite (better-sqlite3)",
    repoUrl: "https://github.com/davidmoriarty/task-ledger",
    liveUrl: "",
    features: [
      "Session-based authentication (register/login/logout)",
      "Protected routes + server-rendered dashboard",
      "Task CRUD with status (active/completed/archived)",
      "Validation + security middleware (helmet) + request logging (morgan)",
    ],
    tags: ["Node.js", "Express", "EJS", "SQLite", "Sessions"],
    screenshots: [
      "/images/screenshots/taskledger-dashboard.png",
      "/images/screenshots/taskledger-login.png"
    ],
  },
  {
    slug: "task-manager",
    status: "wip",
    title: "Task Manager",
    description: "Personal productivity app with task CRUD, categories, and filters.",
    why: "Essentials of Routing, CRUD APIs, Authentication, and Shared Types.",
    stack: "BHVR: Bun + Hono (RPC) + React (Vite) + TanStack Router & Query + TailwindCSS + ShadCN/ui",
    repoUrl: "",
    liveUrl: "",
    features: [
      "Bun API CRUD routes (/tasks, /auth/login, /auth/register)",
      "React Frontend UI with basic routing (/login, /tasks)",
      "JWT-based authentication stored in HttpOnly cookies",
      "Shared Types: Task, User, AuthResponse in packages/types"
    ],
    tags: ["Bun", "Hono", "React", "TanStack", "Tailwind", "ShadCN", "TypeScript"],
    screenshots: [
      "/images/screenshots/taskmanager-tasks.png",
      "/images/screenshots/taskmanager-login.png"
    ]
  },
  {
    slug: "notes-app",
    status: "wip",
    title: "Notes App",
    description: "Write, preview, and manage notes in Markdown with cloud sync.",
    why: "Tiny Notion-like app to experiment with real-time sync, file storage, and Prisma integration.",
    stack: "BHVR + Prisma + PostgreSQL",
    repoUrl: "",
    liveUrl: "",
    features: [
      "React Markdown Editor with live preview panel",
      "Prisma database integration",
      "Authentication with HttpCookie and token refresh"
    ],
    tags: ["Bun", "Hono", "React", "TanStack", "Tailwind", "ShadCN", "TypeScript", "Prisma", "PostgreSQL"],
    screenshots: [
      "https://placehold.co/400x225@2x.png",
      "https://placehold.co/400x225@2x.png"
    ]
  },
  {
    slug: "finance-dashboard",
    status: "wip",
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking currencies, expenses, and investments.",
    why: "Combine front-end data visualization with back-end data aggregation.",
    stack: "BHVR + Recharts",
    repoUrl: "",
    liveUrl: "",
    features: [
      "Landing page with What, Why, How, and CTA flow",
      "Overview dashboard with real-time charts",
      "Detail pages for Expenses, Currency Exchange Rates, Investments",
      "Mock data (no database yet)"
    ],
    tags: ["Bun", "Hono", "React", "TanStack", "Tailwind", "ShadCN", "TypeScript", "Recharts"],
    screenshots: [
      "/images/screenshots/financedashboard-dashboard.png",
      "/images/screenshots/financedashboard-home.png"
    ]
  },
  {
    slug: "cli-web-ui",
    status: "wip",
    title: "Developer Tool / CLI + Web UI",
    description: "Command-line tool and web interface sharing backend logic.",
    why: "Demonstrate full-stack logic reuse and CLI + Web integration.",
    stack: "BHVR",
    repoUrl: "",
    liveUrl: "",
    features: [
      "Bun CLI tool to run commands",
      "React Web Frontend displaying same data",
      "Shared core logic between CLI and Web UI"
    ],
    tags: ["Bun", "React", "TypeScript"],
    screenshots: [
      "https://placehold.co/400x225@2x.png"
    ]
  },
  {
    slug: "mini-auth-dashboard-starter",
    status: "wip",
    title: "Mini Auth + Dashboard Starter",
    description: "Reusable full-stack starter kit for authentication and dashboard apps.",
    why: "Provide a boilerplate SaaS template for rapid project bootstrapping.",
    stack: "BHVR",
    repoUrl: "",
    liveUrl: "",
    features: [
      "React frontend with authentication (login/signup)",
      "Bun API with JWT auth",
      "Shared UI package",
      "Shared Types for User and Session models"
    ],
    tags: ["Bun", "Hono", "React", "Tailwind", "ShadCN", "TypeScript"],
    screenshots: [
      "https://placehold.co/400x225@2x.png"
    ]
  },
  {
    slug: "auth-crud-saas-project",
    status: "wip",
    title: "Auth + CRUD SaaS Project",
    description: "Small multi-tenant SaaS with authentication and CRUD functionality.",
    why: "Showcase a production-ready, full-stack SaaS app with admin workflows.",
    stack: "Next.js, TypeScript, PostgreSQL, Prisma",
    repoUrl: "",
    liveUrl: "",
    features: [
      "Authentication + OAuth",
      "Role-Based Access Control (RBAC)",
      "Billing workflow",
      "Admin dashboard with seed data, pagination, optimistic updates",
      "Accessibility and mobile responsiveness"
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "CI/CD", "Testing"],
    screenshots: [
      "https://placehold.co/400x225@2x.png"
    ]
  },
  {
    slug: "internationalized-project",
    status: "wip",
    title: "Internationalized Project",
    description: "App with full multi-language and locale support.",
    why: "Demonstrate advanced i18n, RTL handling, and locale-specific formatting.",
    stack: "Next.js App Router + Middleware + TanStack Query/Form",
    repoUrl: "",
    liveUrl: "",
    features: [
      "i18n with language selection",
      "Right-to-left (RTL) awareness",
      "Locale-specific formatting and content workflows"
    ],
    tags: ["Next.js", "TypeScript", "TanStack", "i18n", "RTL", "Middleware"],
    screenshots: [
      "https://placehold.co/400x225@2x.png"
    ]
  },
  {
    slug: "audio-language-project",
    status: "wip",
    title: "Audio + Language Project",
    description: "Combine audio processing and language features in one app.",
    why: "Showcase linguistics, audio processing, and small analytics dashboards.",
    stack: "Rails API or Hono + Node services + PostgreSQL + Tailwind + ShadCN",
    repoUrl: "",
    liveUrl: "",
    features: [
      "Speech-to-text transcription",
      "Background job processing with retries and rate limits",
      "Small analytics page for metrics"
    ],
    tags: ["Bun", "React", "TypeScript"],
    screenshots: [
      "https://placehold.co/400x225@2x.png"
    ]
  }
];
