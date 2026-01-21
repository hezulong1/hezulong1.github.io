import { computed, readonly } from 'vue';
import { useApp } from './app';
import { isActivePath } from '../logic';
import { data } from '../data/posts.data';

export function usePostList() {
  return readonly(data);
}

export function usePrevNext() {
  const { page } = useApp();

  return computed(() => {
    // 按时间降序排列
    const candidates = data.filter(x => !x.draft);
    const index = candidates.findIndex(x => isActivePath(page.value.relativePath, x.url));

    const prev = candidates[index + 1];
    const next = candidates[index - 1];

    return [
      prev ? { title: prev.title, url: prev.url } : null,
      next ? { title: next.title, url: next.url } : null,
    ];
  });
}
