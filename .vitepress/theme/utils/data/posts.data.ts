import type { Post } from '@/app.d';
import dayjs from 'dayjs';
import { createContentLoader } from 'vitepress';

declare const data: Post[];

export { data };

export default createContentLoader(['./posts/**/*.md', './quotations/**/*.md'], {
  transform: arr => arr
    .map<Post>((x) => {
      const url = x.url;
      const meta: Post = { url, ...x.frontmatter };
      return meta;
    })
    .filter(x => x.date)
    .sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1),
});
