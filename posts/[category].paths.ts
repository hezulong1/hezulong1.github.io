import fg from 'fast-glob';
import { defineRoutes } from 'vitepress';

const paths = fg.sync('./posts/*', { onlyDirectories: true }).map(dir => ({
  params: { category: dir.split('/').pop()! },
}));

export default defineRoutes({
  paths: () => paths,
});
