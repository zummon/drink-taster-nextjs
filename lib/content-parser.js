import matter from 'gray-matter';
import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';

const folderDir = join(process.cwd(), 'content');

export function getContent(shell, slug) {
  const { data, content } = matter(
    readFileSync(join(folderDir, shell, `${slug}.md`))
  );
  const { date } = data;

  return {
    ...data,
    date: date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    content,
    slug,
  };
}

export function getContentPaths(shell) {
  return readdirSync(join(folderDir, shell)).map((file) =>
    file.replace(/\.md?$/, '')
  );
}

export function getAllContents(shell) {
  return getContentPaths(shell)
    .map((slug) => getContent(shell, slug))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
