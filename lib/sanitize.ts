import DOMPurify from "isomorphic-dompurify";

/** Strips HTML/script content from free-text form fields before storage or email rendering. */
export function sanitizeText(value: string): string {
  return DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
}

export function sanitizeFields<T extends Record<string, unknown>>(input: T): T {
  const output = { ...input };
  for (const key in output) {
    const value = output[key];
    if (typeof value === "string") {
      output[key] = sanitizeText(value) as T[Extract<keyof T, string>];
    }
  }
  return output;
}
