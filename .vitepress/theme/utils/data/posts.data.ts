import type { Post } from '@/app.d';
import dayjs from 'dayjs';
import { createContentLoader } from 'vitepress';

declare const data: Post[];

export { data };

export default createContentLoader('./posts/**/*.md', {
  transform: arr => arr
    .map<Post>((x) => {
      const url = x.url;
      const meta: Post = { url, ...x.frontmatter };

      if (url.includes('/posts/__')) {
        meta.isPoetry = true;
      }

      return meta;
    })
    .filter(x => x.date)
    .sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1),
});
