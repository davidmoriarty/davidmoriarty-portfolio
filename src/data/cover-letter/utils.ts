// src/data/cover-letter/utils.ts
export function uniqKeepOrder(items: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of items) {
    const s = raw.trim();
    if (!s) continue;
    const k = s.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(s);
  }
  return out;
}

export function formatSalutation(hiringManagerName?: string) {
  return hiringManagerName?.trim()
    ? `Dear ${hiringManagerName.trim()},`
    : "Dear Hiring Manager,";
}

export function formatKeywordLine(keywords: string[], max = 6): string {
  const list = uniqKeepOrder(keywords).slice(0, max);
  return list.length ? `Relevant strengths: ${list.join(", ")}.` : "";
}
