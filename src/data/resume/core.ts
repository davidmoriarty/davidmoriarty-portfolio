// src/data/resume/core.ts
import type { ResumeCore } from "./types";

export const resumeCore: ResumeCore = {
	name: "David Moriarty",
	title: "Full-Stack Engineer",
	location: "London, ON",
	email: "davidmoriarty@icloud.com",
	links: {
		portfolio: "https://davidmoriarty.dev",
		github: "https://github.com/davidmoriarty",
		linkedin: "https://www.linkedin.com/in/david-moriarty-248b4970",
	},
	summary: [
		"Full-stack engineer with experience building production-ready web applications using Ruby on Rails, TypeScript, React, and PostgreSQL.",
		"Designs secure authentication and authorization layers, including sessions, JWT-based flows, refresh token rotation, and role-based access control.",
		"Builds end-to-end features with clear API boundaries, relational data models, and production-focused deployment workflows.",
	],
	sectionOrder: ["summary", "skills", "projects", "experience", "education"],
};
