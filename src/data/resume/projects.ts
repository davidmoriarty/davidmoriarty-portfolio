// src/data/resume/projects.ts
import { projects as portfolioProjects } from "../projects";
import type { ResumeProject, ResumeProjectId } from "./types";

const resumeBulletsBySlug: Record<ResumeProjectId, string[]> = {
  "baseline-web": [
    "Built a no-build microsite emphasizing semantic HTML, accessible landmarks, and keyboard-first navigation patterns.",
    "Implemented responsive navigation with ARIA, focus management, and ESC-to-close behavior using minimal vanilla JS.",
    "Created accessible form validation with inline messaging patterns designed for screen readers and clarity.",
    "Designed a responsive image gallery using <figure>/<figcaption> with descriptive alt text and consistent aspect ratios.",
  ],
  "task-ledger": [
    "Built a fundamentals-first Express app with session-based authentication (register/login/logout) and protected routes.",
    "Implemented task CRUD with status transitions and filtering backed by SQLite, using explicit query helpers for clarity.",
    "Added a server-rendered dashboard UI with predictable request/response flows and minimal client-side JS.",
    "Hardened defaults with helmet, input validation, and request logging for debugging and ops visibility.",
  ],
  "task-manager": [
    "Built a full-stack task management application using Bun, Hono, and React with a shared TypeScript domain model.",
    "Designed a clean REST API with JWT-based authentication, protected routes, and explicit request/response contracts.",
    "Implemented end-to-end type sharing across client and server via a shared workspace package (Task, User, API responses).",
    "Deployed frontend and backend independently (Cloudflare Pages + Fly.io) to demonstrate decoupled full-stack architecture.",
    "Structured the project as a monorepo coordinated with Turbo, enabling isolated builds and scalable code organization.",
  ],
  "note-manager": [
    "Built a full-stack notes application with Bun, Hono, Prisma, and PostgreSQL using a type-safe API surface.",
    "Implemented JWT authentication with refresh token rotation and protected routes to support secure sessions.",
    "Designed relational data models and request validation at system boundaries to keep contracts predictable and durable.",
    "Deployed the backend to Fly.io and the frontend to Cloudflare Pages to demonstrate production delivery and separation of concerns.",
  ],
  "outsiders-hair-boutique": [
    "Built a production marketing site with an emphasis on semantic structure, accessible components, and keyboard-first interactions.",
    "Implemented responsive layouts and reusable UI patterns to keep pages consistent and maintainable.",
    "Improved performance and UX through lightweight client behavior and disciplined asset usage (images, typography, layout).",
    "Applied SEO-friendly structure and metadata patterns to support discoverability and shareable previews.",
  ],
};

function getPortfolioProject(slug: ResumeProjectId) {
  const p = portfolioProjects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Resume project slug not found in portfolio data: ${slug}`);
  return p;
}

function isResumeProjectSlug(slug: string): slug is ResumeProjectId {
  return slug in resumeBulletsBySlug;
}

const resumeProjectIds: ResumeProjectId[] = portfolioProjects
  .filter(
    (p) =>
      p.status === "finished" &&
      Boolean(p.liveUrl) &&
      isResumeProjectSlug(p.slug)
  )
  .map((p) => p.slug as ResumeProjectId);

export const resumeProjects: ResumeProject[] = resumeProjectIds.map((slug) => {
  const p = getPortfolioProject(slug);
  const screenshots = Array.isArray(p.screenshots) ? p.screenshots : [];
  const screenshot = screenshots[0];

  return {
    id: slug,
    title: p.title,
    stackLine: p.stack,
    bullets: resumeBulletsBySlug[slug],
    links: {
      repo: p.repoUrl,
      live: p.liveUrl ?? `https://davidmoriarty.dev/projects/${p.slug}/`,
    },
    screenshot,
    screenshots: screenshots.length ? screenshots : undefined,
  };
});
