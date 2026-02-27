// src/data/resume/experience.ts
import type { ResumeExperience } from "./types";

export const resumeExperience: ResumeExperience[] = [
	{
		company: "Kybernesis · SaaS Platform",
		location: "Remote",
		role: "Founder & Full-Stack Engineer",
		period: "Jan 2026 – Present",
		bullets: [
			"Architected a multi-tenant SaaS platform with workspace isolation and role-based access control (RBAC).",
			"Implemented secure authentication using JWT access tokens with refresh token rotation and protected API routes.",
			"Built a full-stack TypeScript monorepo (Bun, Hono, React, Turborepo) with shared types across client and server.",
			"Modeled relational data architecture in PostgreSQL using Drizzle ORM.",
			"Deployed services using Fly.io (API) and Cloudflare Pages (frontend).",
		],
	},
	{
		company: "Note Manager · Independent SaaS Project",
		location: "Remote",
		role: "Full-Stack Engineer",
		period: "Oct 2025 – Present",
		bullets: [
			"Architected a production-style SaaS application with Bun, Hono, Prisma, and PostgreSQL.",
			"Implemented JWT authentication with refresh token rotation and HTTP-only cookie handling.",
			"Designed a RESTful API layer with explicit request/response contracts and request validation.",
			"Structured a TypeScript monorepo with shared domain types across backend and frontend.",
			"Deployed frontend and backend independently (Cloudflare Pages + Fly.io).",
		],
	},
	// {
	// 	company: "Outsiders Hair Boutique",
	// 	location: "London, ON",
	// 	role: "Technical & Digital Support (Contract)",
	// 	period: "Contract",
	// 	bullets: [
	// 		"Built and maintained a production marketing website with responsive, accessible components.",
	// 		"Managed SEO metadata, performance optimization, and structured content updates.",
	// 	],
	// },
];
