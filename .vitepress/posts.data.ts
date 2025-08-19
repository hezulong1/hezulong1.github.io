import { createContentLoader } from 'vitepress';
import fg from 'fast-glob';

interface Post {
  title: string;
  date: string;
  url: string;
}

declare const data: Post[];

export { data };

export default createContentLoader('./**/*.md', {
  includeSrc: true, // 包含原始 markdown 源?
  render: true, // 包含渲染的整页 HTML?
  transform(raw) {
    const categories = fg.sync('./posts/*', { onlyDirectories: true }).map(x => x.replace('./posts', ''));
    const filtered = raw.filter(x =>
      !x.url.endsWith('/') &&
      categories.some(category => x.url.startsWith(category)) &&
      x.frontmatter.date &&
      !x.frontmatter.draft,
    ).filter(Boolean);
    return filtered.map(x => ({
      title: x.frontmatter.title,
      date: x.frontmatter.date,
      url: x.url,
    }));
  },
});
