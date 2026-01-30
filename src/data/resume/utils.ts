// src/data/resume/utils.ts
export function isDefined<T>(value: T | undefined | null): value is T {
  return value != null;
}
