import type { ThemeConfig } from '@/app.d';
import { useData } from 'vitepress';

export const useApp: typeof useData<ThemeConfig> = useData;
