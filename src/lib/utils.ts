import type { CollectionEntry } from 'astro:content';

export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-');
}

export function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

export function isPublished(entry: CollectionEntry<'posts'> | CollectionEntry<'earthDaily'>): boolean {
  return !entry.data.draft;
}