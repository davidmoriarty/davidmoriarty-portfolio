// src/data/resume/education.ts
import type { ResumeEducation } from "./types";

export const resumeEducation: ResumeEducation[] = [
  {
    institution: "Western University",
    location: "London, Ontario, Canada",
    credential:
      "Bachelor of Science — Double Major in Computer Science and Spanish Language & Linguistics",
    period: "2016 – 2023",
    summary: "Computer science foundations with additional focus in language/linguistics and communication.",
    notes: [
      "Graduated June 2023",
      "Primary academic focus relevant to software development",
    ],
  },
  {
    institution: "Ontario Institute of Audio Recording Technology (OIART)",
    location: "London, Ontario, Canada",
    credential: "Diploma in Recording Technology and Music Production",
    period: "2009 – 2010",
    summary: "Hands-on audio engineering: signal flow, recording, editing, and production workflows.",
    notes: [
      "Graduated July 2010",
      "Primary academic focus relevant to audio engineering",
    ],
  },
  {
    institution: "Tamkang University",
    location: "Taipei, Taiwan",
    credential: "Chinese Language Studies",
    period: "2001 – 2004",
    summary: "Intensive language study with immersion and academic coursework.",
    notes: [
      "Graduated July 2004",
      "Primary academic focus relevant to language studies",
    ],
  },
];
