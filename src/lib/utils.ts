export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function projectHref(slug: string) {
  return `/projects/${slug}`;
}
