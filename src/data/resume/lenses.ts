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
        "frontend-accessibility",
        "api-design",
        "backend-auth",
        "databases-sql",
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
      projects: ["note-manager", "task-ledger", "task-manager"],
      skillModules: [
        "backend-auth",
        "api-design",
        "databases-sql",
        "security-basics",
        "tooling-practices",
      ],
    },
  },
];
