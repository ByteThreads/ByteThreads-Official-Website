import { strings } from '@/content/strings';

// Utility function to get nested string values safely
export function getString(path: string): string {
  const keys = path.split('.');
  let current: unknown = strings;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      console.warn(`String not found for path: ${path}`);
      return `[Missing: ${path}]`;
    }
  }

  return typeof current === 'string' ? current : `[Invalid: ${path}]`;
}

// Alternative: Direct access to strings object
export { strings } from '@/content/strings';

// Type-safe getter function
export function getStringTyped<T extends keyof typeof strings>(
  section: T
): typeof strings[T] {
  return strings[section];
}