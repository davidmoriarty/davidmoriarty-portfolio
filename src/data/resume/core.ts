// src/data/resume/core.ts
import type { ResumeCore } from "./types";

export const resumeCore: ResumeCore = {
	name: "David Moriarty",
	title: "Full-Stack TypeScript Engineer",
	location: "London, ON",
	email: "davidmoriarty@icloud.com",
	links: {
		portfolio: "https://davidmoriarty.dev",
		github: "https://github.com/davidmoriarty",
		linkedin: "https://www.linkedin.com/in/david-moriarty-248b4970",
	},
	summary: [
		"Full-stack TypeScript engineer building production-ready SaaS systems with React, Node.js/Bun, and PostgreSQL.",
		"Designs secure authentication and authorization layers (JWT with refresh token rotation, RBAC, tenant-scoped data models).",
		"Ships end-to-end features with clean API boundaries, predictable state/data flows, and deployment on Fly.io + Cloudflare Pages.",
	],
	sectionOrder: ["summary", "skills", "projects", "experience", "education"],
};
