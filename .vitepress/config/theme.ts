import type { ConfigEnv } from 'vitepress';
import type { ThemeConfig } from '../theme/app.d';

export type { ThemeConfig };

export default function getThemeConfig(env: ConfigEnv): ThemeConfig {
  return {
    github: 'https://github.com/hezulong1',
    cnblog: 'https://www.cnblogs.com/blackcat',
  };
}
