// src/data/resume/skills.ts

import type { ResumeSkillModule } from "./types";

export const resumeSkillModules: ResumeSkillModule[] = [
	{
		id: "api-design",
		label: "API Design",
		bullets: [
			"Build CRUD APIs with clear request/response contracts, validation at boundaries, and predictable status codes.",
			"Organize routes and data access layers for maintainability, including protected routes and explicit error handling.",
		],
		tags: ["REST", "CRUD", "Validation"],
	},
	{
		id: "backend-auth",
		label: "Backend Auth & Sessions",
		bullets: [
			"Implement authentication using sessions or JWTs, including refresh token rotation and HTTP-only cookie handling when needed.",
			"Design authorization boundaries (RBAC, tenant-scoped access) with middleware for auth, validation, and consistent error responses.",
		],
		tags: ["Auth", "Sessions", "JWT", "RBAC"],
	},
	{
		id: "databases-sql",
		label: "Databases & Data Modeling",
		bullets: [
			"Design relational schemas and write practical SQL queries for production web applications (PostgreSQL, SQLite).",
			"Keep data access explicit and testable using lightweight query helpers or ORMs (Drizzle/Prisma) where appropriate.",
		],
		tags: ["SQL", "Postgres", "SQLite", "Drizzle", "Prisma"],
	},
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
		id: "javascript-web",
		label: "JavaScript Fundamentals",
		bullets: [
			"Write small, composable vanilla JS for UI behaviors (menus, validation, client-side UX).",
			"Prefer minimal dependencies and straightforward request/response flows when appropriate.",
		],
		tags: ["JavaScript"],
	},
	{
		id: "rails-fullstack",
		label: "Ruby on Rails",
		bullets: [
			"Build full-stack web applications using Ruby on Rails with conventional MVC structure, RESTful routing, and ActiveRecord-backed data models.",
			"Implement authentication, authorization, and structured business workflows using Rails conventions and supporting service layers.",
		],
		tags: ["Ruby", "Rails", "ActiveRecord", "REST"],
	},
	{
		id: "mvc-architecture",
		label: "MVC Architecture",
		bullets: [
			"Design web applications using MVC patterns with clear separation of concerns between routing, controllers, business logic, and data layers.",
			"Apply consistent structure across frameworks to keep codebases maintainable, testable, and easy to reason about.",
		],
		tags: ["MVC", "Architecture", "Separation of Concerns"],
	},
	{
		id: "performance",
		label: "Performance & UX",
		bullets: [
			"Optimize for fast load and strong Core Web Vitals using lean pages and sensible caching.",
			"Prefer server-rendered or static output when it reduces complexity and improves UX.",
		],
		tags: ["Performance", "Core Web Vitals", "Caching", "SSR"],
	},
	{
		id: "responsive-css",
		label: "Responsive CSS",
		bullets: [
			"Design responsive layouts using modern CSS (flex/grid), tokens, and predictable spacing systems.",
			"Structure CSS for maintainability with clear separation of reset, base, layout, and components.",
		],
		tags: ["CSS", "Layout", "Tailwind"],
	},
	{
		id: "security-basics",
		label: "Security Basics",
		bullets: [
			"Use standard security middleware and safe defaults for headers, cookies, and input handling.",
			"Understand CSP/HSTS tradeoffs and apply pragmatic protections for public-facing sites.",
		],
		tags: ["Security", "OWASP", "CSP", "HSTS", "Cookies"],
	},
	{
		id: "tooling-practices",
		label: "Tooling & Engineering Practices",
		bullets: [
			"Maintain clean repos with consistent conventions, scripts, and documentation.",
			"Ship iteratively with a focus on readability, debugging, basic testing, and production delivery (CI, deployments, environment config).",
		],
		tags: ["Tooling", "Docker", "CI/CD"],
	},
	{
		id: "typescript-frameworks",
		label: "TypeScript & Modern Frontend",
		bullets: [
			"Build typed frontend applications using TypeScript with React and Vite, emphasizing clear component boundaries and predictable state management.",
			"Develop component-driven sites and applications using modern frameworks (e.g., React, Astro) integrated with REST APIs and authentication flows.",
		],
		tags: ["TypeScript", "React", "Astro", "Vite", "SPA"],
	},
	{
		id: "typescript-runtime",
		label: "TypeScript & JavaScript Runtime",
		bullets: [
			"Build typed applications using TypeScript across frontend and server-side runtimes.",
			"Work within modern JavaScript ecosystems (Node-based runtimes, tooling, and module systems) to structure maintainable full-stack applications.",
		],
		tags: ["TypeScript", "JavaScript", "Node"],
	},
];
