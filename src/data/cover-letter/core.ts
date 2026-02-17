// src/data/cover-letter/core.ts
import type { CoverLetterLensId, CoverLetterOverrides, CoverLetterPlaceholders } from "./types";
import { coverLetterLenses } from "./lenses";
import { uniqKeepOrder } from "./utils";

const DEFAULTS: Pick<
  CoverLetterPlaceholders,
  "fullName" | "email" | "phone" | "date" | "companyName" | "positionTitle"
> = {
  fullName: "David Moriarty",
  email: "[Email]",
  phone: "[Phone]",
  date: "[Date]",
  companyName: "[Company Name]",
  positionTitle: "[Position Title]",
};

export function getCoverLetter(lensId: CoverLetterLensId, overrides: CoverLetterOverrides = {}) {
  const cfg = coverLetterLenses.find((l) => l.id === lensId);
  if (!cfg) throw new Error(`Unknown cover letter lens: ${lensId}`);

  const p: CoverLetterPlaceholders & { keywords: string[] } = {
    ...DEFAULTS,
    ...overrides,
    keywords: uniqKeepOrder([...(cfg.defaultKeywords ?? []), ...(overrides.keywords ?? [])]),
  };

  return {
    lensId,
    subject: cfg.template.subject(p),
    body: cfg.template.body(p),
  };
}
