import { twMerge } from "tailwind-merge";

export const cn = (...classes: Array<string | undefined | false | null>) => {
  return twMerge(classes.filter(Boolean).join(" "));
};
