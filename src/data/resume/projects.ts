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
};

function getPortfolioProject(slug: ResumeProjectId) {
  const p = portfolioProjects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Resume project slug not found in portfolio data: ${slug}`);
  return p;
}

const resumeProjectIds: ResumeProjectId[] = ["task-ledger", "baseline-web"];

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
      repo: p.repoUrl || undefined,
      live: p.liveUrl || `/projects/${p.slug}/`,
    },
    screenshot,
    screenshots: screenshots.length ? screenshots : undefined,
  };
});
