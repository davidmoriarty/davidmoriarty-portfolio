// src/data/resume/types.ts

export type ResumeRoleLens =
  | "fullstack-generalist"
  | "frontend-accessibility"
  | "backend-platform";

export type ResumeSkillModuleId =
  | "frontend-accessibility"
  | "responsive-css"
  | "javascript-web"
  | "backend-auth"
  | "api-design"
  | "databases-sql"
  | "tooling-practices"
  | "performance"
  | "security-basics";

export type ResumeProjectId = "task-ledger" | "baseline-web";

export type ResumeCore = {
  name: string;
  title: string;
  location?: string;
  links: {
    portfolio: string;
    github: string;
    linkedin?: string;
  };
  summary: string[];
  sectionOrder: Array<
    "summary" | "projects" | "skills" | "experience" | "education"
  >;
};

export type ResumeSkillModule = {
  id: ResumeSkillModuleId;
  label: string;
  bullets: string[];
  tags?: string[];
};

export type ResumeProject = {
  id: ResumeProjectId; // tie to portfolio slug if you want
  title: string;
  stackLine: string;
  bullets: string[]; // pool; you’ll pick 2–3 at render-time
  links?: {
    repo?: string;
    live?: string; // can be your /projects/slug page for now
  };
  screenshot?: string;
  screenshots?: string[];
};

export type ResumeLensConfig = {
  id: ResumeRoleLens;
  label: string;
  isDefault?: boolean;
  recommended: {
    skillModules: ResumeSkillModuleId[];
    projects: ResumeProjectId[];
  };
};
