// src/data/resume/lenses.ts
import type { ResumeLensConfig } from "./types";

export const resumeLenses: ResumeLensConfig[] = [
	{
		id: "fullstack-generalist",
		label: "Full-Stack Engineer",
		isDefault: true,
		recommended: {
			projects: ["note-manager", "task-manager", "task-ledger"],
			skillModules: [
				"typescript-runtime",
				"rails-fullstack",
				"api-design",
				"backend-auth",
				"databases-sql",
				"mvc-architecture",
				"frontend-accessibility",
				"tooling-practices",
			],
		},
	},
	{
		id: "frontend-accessibility",
		label: "Frontend / Accessibility",
		isDefault: false,
		recommended: {
			projects: ["baseline-web", "outsiders-hair-boutique", "task-manager"],
			skillModules: [
				"frontend-accessibility",
				"responsive-css",
				"javascript-web",
				"typescript-frameworks",
				"performance",
				"tooling-practices",
			],
		},
	},
	{
		id: "backend-platform",
		label: "Backend / Platform",
		isDefault: false,
		recommended: {
			projects: ["note-manager", "task-manager", "task-ledger"],
			skillModules: [
        "api-design",
        "backend-auth",
        "platform-infrastructure",
        "databases-sql",
        "typescript-runtime",
        "tooling-practices",
        "security-basics",
        "mvc-architecture",
        "rails-fullstack",
      ],
		},
	},
];
