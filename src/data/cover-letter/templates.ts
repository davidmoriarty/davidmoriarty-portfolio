// src/data/cover-letter/templates.ts
import type { CoverLetterTemplate } from "./types";
import { formatKeywordLine, formatSalutation } from "./utils";

function linesToBody(lines: Array<string | undefined | null>) {
  return lines.filter((l) => (l ?? "").trim().length > 0).join("\n");
}

export const fullstackGeneralistTemplate: CoverLetterTemplate = {
  subject: (p) => `Application: ${p.positionTitle} — ${p.fullName}`,
  body: (p) => {
    const kw = formatKeywordLine(p.keywords);
    return linesToBody([
      p.fullName,
      `${p.email} | ${p.phone}`,
      p.date,
      "",
      p.companyName,
      p.companyLocationLine,
      "",
      `Re: ${p.positionTitle}`,
      "",
      formatSalutation(p.hiringManagerName),
      "",
      `I am applying for the ${p.positionTitle} role at ${p.companyName}. ${
        p.companyFocus
          ? `Your focus on ${p.companyFocus} aligns with how I build software: structured, type-safe, and production-ready.`
          : "I build software that is structured, type-safe, and production-ready."
      } I bring experience designing and deploying full-stack TypeScript applications with clear API contracts, maintainable architecture, and polished user interfaces.`,
      kw ? `\n${kw}` : "",
      "",
      `In a recent project, I designed the database schema, implemented RESTful endpoints, integrated authentication, and connected the client through shared type definitions across the stack. By enforcing validation at system boundaries and structuring the codebase around predictable data flow, I delivered a production application deployed to cloud infrastructure with strong maintainability and minimal runtime issues.`,
      "",
      `I prioritize architectural clarity and clean extensibility. Through shared schema models and disciplined state management, I reduce defects and accelerate feature iteration without sacrificing long-term stability.`,
      "",
      `My ability to own features end-to-end—from data modeling through UI delivery and deployment—would allow me to contribute immediate value to ${p.companyName}. I welcome the opportunity to discuss how my experience aligns with your team’s goals.`,
      "",
      "Sincerely,",
      p.fullName,
    ]);
  },
};

export const backendPlatformTemplate: CoverLetterTemplate = {
  subject: (p) => `Application: ${p.positionTitle} — ${p.fullName}`,
  body: (p) => {
    const kw = formatKeywordLine(p.keywords);
    return linesToBody([
      p.fullName,
      `${p.email} | ${p.phone}`,
      p.date,
      "",
      p.companyName,
      p.companyLocationLine,
      "",
      `Re: ${p.positionTitle}`,
      "",
      formatSalutation(p.hiringManagerName),
      "",
      `I am applying for the ${p.positionTitle} role at ${p.companyName}. ${
        p.companyFocus
          ? `Your emphasis on ${p.companyFocus} aligns with my experience designing secure, maintainable backend systems.`
          : "I design secure, maintainable backend systems."
      }`,
      kw ? `\n${kw}` : "",
      "",
      `I have built RESTful APIs backed by relational database schemas with a focus on data integrity and predictable contracts. By modeling relationships carefully and enforcing validation at both schema and request layers, I ensure consistency and long-term extensibility.`,
      "",
      `Security is central to my backend work. I have implemented token-based authentication flows with refresh rotation, protected route enforcement, and structured middleware to maintain clean separation of concerns while safeguarding endpoints.`,
      "",
      `I also prioritize performance and reliability through query optimization, structured error handling, and removal of redundant network calls, resulting in backend services that remain stable under growth.`,
      "",
      `I would welcome the opportunity to contribute my API design, data modeling, and production reliability experience to ${p.companyName}.`,
      "",
      "Sincerely,",
      p.fullName,
    ]);
  },
};

export const frontendAccessibilityTemplate: CoverLetterTemplate = {
  subject: (p) => `Application: ${p.positionTitle} — ${p.fullName}`,
  body: (p) => {
    const kw = formatKeywordLine(p.keywords);
    return linesToBody([
      p.fullName,
      `${p.email} | ${p.phone}`,
      p.date,
      "",
      p.companyName,
      p.companyLocationLine,
      "",
      `Re: ${p.positionTitle}`,
      "",
      formatSalutation(p.hiringManagerName),
      "",
      `I am applying for the ${p.positionTitle} role at ${p.companyName}. ${
        p.companyFocus
          ? `Your focus on ${p.companyFocus} aligns with how I approach frontend engineering: accessible, structured, and performance-aware.`
          : "I build accessible, structured, performance-aware frontends."
      }`,
      kw ? `\n${kw}` : "",
      "",
      `I build React interfaces with semantic HTML, keyboard navigation support, and proper ARIA implementation to ensure usability across assistive technologies. Accessibility is integrated at the component level, not layered on afterward.`,
      "",
      `I emphasize predictable state management and clean component architecture. By structuring routing, data fetching, and client state deliberately, I reduce UI inconsistencies and improve maintainability.`,
      "",
      `Through reusable component systems and consistent design patterns, I create frontend codebases that scale without sacrificing clarity or performance.`,
      "",
      `I would welcome the opportunity to contribute my accessibility-focused frontend experience to ${p.companyName}.`,
      "",
      "Sincerely,",
      p.fullName,
    ]);
  },
};
