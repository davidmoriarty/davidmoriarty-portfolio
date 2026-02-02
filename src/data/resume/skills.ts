// src/data/resume/skills.ts

import type { ResumeSkillModule } from "./types";

export const resumeSkillModules: ResumeSkillModule[] = [
  {
    id: "frontend-accessibility",
    label: "Frontend & Accessibility",
    bullets: [
      "Build semantic, accessible UIs with keyboard-first navigation and clear focus states.",
      "Apply progressive enhancement so core functionality works without JavaScript.",
    ],
    tags: ["HTML", "A11y", "Progressive Enhancement"],
  },
  {
    id: "responsive-css",
    label: "Responsive CSS",
    bullets: [
      "Design responsive layouts using modern CSS (flex/grid), tokens, and predictable spacing systems.",
      "Structure CSS for maintainability with clear separation of reset, base, layout, and components.",
    ],
    tags: ["CSS", "Layout"],
  },
  {
    id: "javascript-web",
    label: "JavaScript Fundamentals",
    bullets: [
      "Write small, composable vanilla JS for UI behaviors (menus, validation, client-side UX).",
      "Prefer minimal dependencies and straightforward request/response flows when appropriate.",
    ],
    tags: ["JavaScript"],
  },
  {
    id: "backend-auth",
    label: "Backend Auth & Sessions",
    bullets: [
      "Implement authentication using sessions or JWTs with clear protected-route boundaries.",
      "Design middleware for authentication, validation, and error handling with predictable responses.",
    ],
    tags: ["Auth", "Sessions", "JWT"],
  },
  {
    id: "api-design",
    label: "API Design",
    bullets: [
      "Build CRUD APIs with consistent response shapes, validation, and predictable status codes.",
      "Organize routes and data access layers for clarity and long-term maintainability.",
    ],
    tags: ["REST", "CRUD"],
  },
  {
    id: "databases-sql",
    label: "Databases & Data Modeling",
    bullets: [
      "Design relational schemas and write practical SQL queries for real application workflows.",
      "Keep data access explicit and testable with lightweight query helpers.",
    ],
    tags: ["SQL", "SQLite", "Postgres"],
  },
  {
    id: "security-basics",
    label: "Security Basics",
    bullets: [
      "Use standard security middleware and safe defaults for headers, cookies, and input handling.",
      "Understand CSP/HSTS tradeoffs and apply pragmatic protections for public-facing sites.",
    ],
    tags: ["Security"],
  },
  {
    id: "performance",
    label: "Performance & UX",
    bullets: [
      "Optimize for fast load and strong Core Web Vitals using lean pages and sensible caching.",
      "Prefer server-rendered or static output when it reduces complexity and improves UX.",
    ],
    tags: ["Performance"],
  },
  {
    id: "tooling-practices",
    label: "Tooling & Engineering Practices",
    bullets: [
      "Maintain clean repos with consistent conventions, scripts, and documentation.",
      "Ship iteratively with a focus on readability, debugging, and pragmatic abstraction levels.",
    ],
    tags: ["Tooling"],
  },
];
