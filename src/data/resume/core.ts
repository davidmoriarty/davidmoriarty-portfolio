// src/data/resume/core.ts
import type { ResumeCore } from "./types";

export const resumeCore: ResumeCore = {
  name: "David Moriarty",
  title: "Full-Stack Software Developer",
  location: "London, ON",
  email: "davidmoriarty@icloud.com",
  links: {
    portfolio: "https://davidmoriarty.dev",
    github: "https://github.com/davidmoriarty",
    linkedin: "https://www.linkedin.com/in/david-moriarty-248b4970",
  },
  summary: [
    "Full-stack developer focused on clarity, maintainability, and strong web fundamentals.",
    "Builds accessible, performant UIs and pragmatic backends with clean API boundaries.",
    "Comfortable shipping end-to-end features—from architecture and data modeling to UI polish and deployment.",
  ],
  sectionOrder: ["summary", "skills", "projects", "experience", "education"],
};
