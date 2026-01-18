// src/utils/title.ts
export const setTitle = (pageTitle?: string) => {
  const base = "David Moriarty – Portfolio";
  return pageTitle ? `${pageTitle} | ${base}` : base;
};
