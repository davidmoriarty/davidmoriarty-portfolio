// src/data/cover-letter/lenses.ts
import type { CoverLetterLensConfig } from "./types";
import {
  backendPlatformTemplate,
  frontendAccessibilityTemplate,
  fullstackGeneralistTemplate,
} from "./templates";

export const coverLetterLenses: CoverLetterLensConfig[] = [
  {
    id: "fullstack-generalist",
    defaultKeywords: [
      "full-stack TypeScript",
      "API design",
      "PostgreSQL",
      "authentication",
      "cloud deployment",
    ],
    template: fullstackGeneralistTemplate,
  },
  {
    id: "frontend-accessibility",
    defaultKeywords: [
      "accessibility (WCAG)",
      "semantic HTML",
      "ARIA",
      "React",
      "state management",
      "performance",
    ],
    template: frontendAccessibilityTemplate,
  },
  {
    id: "backend-platform",
    defaultKeywords: [
      "API design",
      "data modeling",
      "PostgreSQL",
      "authentication",
      "reliability",
      "performance",
    ],
    template: backendPlatformTemplate,
  },
];
