// Resolve image paths relative to the base URL so they work through proxies
const BASE = import.meta.env.BASE_URL || './';
export function img(path: string): string {
  // Strip leading slash if present
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
