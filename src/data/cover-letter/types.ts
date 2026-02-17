// src/data/cover-letter/types.ts
import type { ResumeLensConfig } from "../resume/types";

export type CoverLetterLensId = ResumeLensConfig["id"];

export type CoverLetterPlaceholders = {
  date: string; // "Feb 16, 2026"
  fullName: string;
  email: string;
  phone: string;

  companyName: string;
  positionTitle: string;

  hiringManagerName?: string; // "Alex Chen"
  companyLocationLine?: string; // "Toronto, ON"
  companyAddressLines?: string[]; // optional multi-line address
  companyFocus?: string; // short hook mirroring the posting
};

export type CoverLetterOverrides = Partial<CoverLetterPlaceholders> & {
  // Exact phrases/nouns from the job ad for Jobscan/ATS mirroring.
  keywords?: string[];
};

export type CoverLetterTemplate = {
  subject: (p: CoverLetterPlaceholders) => string;
  body: (p: CoverLetterPlaceholders & { keywords: string[] }) => string;
};

export type CoverLetterLensConfig = {
  id: CoverLetterLensId;
  defaultKeywords: string[];
  template: CoverLetterTemplate;
};
