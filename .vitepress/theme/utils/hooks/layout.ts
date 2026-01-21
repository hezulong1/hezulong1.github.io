import type { DefaultTheme } from 'vitepress/theme';

import { onContentUpdated } from 'vitepress';

import {
  computed,
  shallowReadonly,
  shallowRef,
  type ComputedRef,
  type InjectionKey,
} from 'vue';
import { useMediaQuery } from '@vueuse/core';
import { useApp } from './app';
import { getHeaders } from './outline';

const headers = shallowRef<DefaultTheme.OutlineItem[]>([]);

export function useLayout() {
  const { frontmatter } = useApp();

  const isHome = computed(() => !!(frontmatter.value.isHome));
  const isDesktop = useMediaQuery('(min-width: 68rem)');
  const hasLocalNav = computed(() => headers.value.length > 0 && isDesktop.value);

  return {
    isHome,
    headers: shallowReadonly(headers),
    hasLocalNav,
  };
}

export function registerWatchers() {
  onContentUpdated(() => {
    headers.value = getHeaders([2, 3]);
  });
}

export interface LayoutInfo {
  heroImageSlotExists: ComputedRef<boolean>;
}

export const layoutInfoInjectionKey: InjectionKey<LayoutInfo> = Symbol('layout-info');
