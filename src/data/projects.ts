// src/data/projects.ts
export type PortfolioProject = {
  slug: string;
  status: "finished" | "wip";
  title: string;
  description: string;
  why: string;
  stack: string;
  repoUrl?: string;
  liveUrl?: string;
  features: string[];
  tags: string[];
  screenshots?: string[];
};

export const projects: PortfolioProject[] = [
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
    liveUrl: "https://task-ledger.fly.dev",
    features: [
      "Session-based authentication (register/login/logout)",
      "Protected routes + server-rendered dashboard",
      "Task CRUD with status (active/completed/archived)",
      "Validation + security middleware (helmet) + request logging (morgan)",
    ],
    tags: ["Node.js", "Express", "EJS", "SQLite", "Sessions"],
    screenshots: [
      "/images/screenshots/taskledger-demo.png",
      "/images/screenshots/taskledger-login.png",
    ],
  },
  {
    slug: "task-manager",
    status: "finished",
    title: "Task Manager",
    description:
      "A full-stack task management app built with Bun, Hono, React, and shared TypeScript types.",
    why:
      "Demonstrate routing, CRUD APIs, JWT auth, and shared types in a lightweight full-stack monorepo.",
    stack:
      "BHVR: Bun + Hono + React (Vite) + TanStack Router & Query + TailwindCSS + shadcn/ui",
    repoUrl: "https://github.com/davidmoriarty/task-manager",
    liveUrl: "https://task-manager-client.pages.dev",
    features: [
      "Auth routes: /auth/signup and /auth/login (demo signup via curl)",
      "Protected task routes: /tasks, /tasks/:id/toggle, /tasks/:id",
      "JWT-based auth (token stored client-side) with issuer/audience/expiry validation",
      "Shared types in /shared used by both client and server",
    ],
    tags: ["Bun", "Hono", "React", "TanStack", "Tailwind", "Shadcn/ui", "TypeScript"],
    screenshots: [
      "/images/screenshots/taskmanager-dashboard.png",
      "/images/screenshots/taskmanager-login.png",
    ],
  },
  {
    slug: "outsiders-hair-boutique",
    status: "finished",
    title: "Outsiders Hair Boutique",
    description:
      "Small-business salon website and ops support: site updates, marketing assets, and booking/product maintenance.",
    why:
      "Demonstrate practical, real-world delivery: shipping and maintaining a client-facing site plus day-to-day business tooling updates.",
    stack: "Astro + Tailwind + content-driven components",
    repoUrl: "https://github.com/davidmoriarty/outsiders-site",
    liveUrl: "https://outsidershairboutique.com",
    features: [
      "Content updates for services, products, and promos",
      "Booking and inventory support (Square)",
      "Performance- and mobile-first layout",
      "SEO and business listing maintenance (Google Business Profile)",
    ],
    tags: ["Astro", "Tailwind", "Content Ops", "Small Business"],
    screenshots: [
      "/images/screenshots/outsiders-portfolio.png",
      "/images/screenshots/outsiders-home.png",
    ]
  },
  {
    slug: "note-manager",
    status: "finished",
    title: "Note Manager",
    description: "Full-stack notes application with secure JWT authentication and rotating refresh tokens.",
    why: "Built to design and implement a production-style authentication system using access tokens, rotating refresh tokens, and indexed token verification inside a Bun + Hono monorepo architecture.",
    stack: "Bun + Hono + Prisma + PostgreSQL + React + TanStack Router",
    repoUrl: "https://github.com/davidmoriarty/note-manager",
    liveUrl: "",
    features: [
      "JWT access tokens with rotating refresh token architecture",
      "HttpOnly refresh cookies with server-side revocation",
      "Indexed refresh token lookup (O(1) verification)",
      "Protected routes with token refresh flow",
      "Full CRUD notes with Prisma + PostgreSQL",
      "Monorepo architecture (client/server/shared) using Turborepo",
      "Form validation with Zod + TanStack Form"
    ],
    tags: [
      "Bun",
      "Hono",
      "React",
      "TanStack",
      "Zustand",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Authentication",
      "TypeScript"
    ],
    screenshots: [
      "/images/screenshots/notemanager-overview.png",
      "/images/screenshots/notemanager-editor.png",
    ]
  },
  {
    slug: "finance-dashboard",
    status: "wip",
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking currencies, expenses, and investments.",
    why: "Combine front-end data visualization with back-end data aggregation.",
    stack: "BHVR + Recharts",
    // Add repoUrl/liveUrl when ready
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
    // Add repoUrl/liveUrl when ready
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
    // Add repoUrl/liveUrl when ready
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
    // Add repoUrl/liveUrl when ready
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
    // Add repoUrl/liveUrl when ready
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
    // Add repoUrl/liveUrl when ready
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
