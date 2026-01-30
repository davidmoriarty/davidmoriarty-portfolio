// src/data/resume/core.ts

import type { ResumeCore } from "./types";

export const resumeCore: ResumeCore = {
  name: "David Moriarty",
  title: "Full-Stack Software Developer",
  location: "London, ON",
  links: {
    portfolio: "https://davidmoriarty.dev",
    github: "https://github.com/davidmoriarty",
    linkedin: "https://www.linkedin.com/in/david-moriarty-248b4970",
  },
  summary: [
    "Full-stack developer focused on clarity, maintainability, and strong web fundamentals.",
    "Builds accessible UIs, pragmatic backends, and clean data models across modern and classic stacks.",
    "Comfortable shipping end-to-end features—from architecture and APIs to UI polish and deployment.",
  ],
  sectionOrder: ["summary", "projects", "skills", "experience", "education"],
};
