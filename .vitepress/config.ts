import type { UserConfig } from 'vitepress';
import type { MyTheme } from './theme/type.ts';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig<MyTheme.Config>({
  title: 'HeZulong',
  description: 'Writing & Learning',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
  ],
  lang: 'zh-Hans',
  base: '/',
  srcDir: 'posts',
  outDir: 'dist',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://hezulong1.github.io/',
  },
  cleanUrls: true,
  ignoreDeadLinks: [
    /^https?:\/\/localhost/,
    /^https?:\/\/abc\.com/,
    url => url.includes('/reference/'),
  ],
  themeConfig: myThemeConfig(),
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  vite: getViteConfig(),
});

function myThemeConfig(): MyTheme.Config {
  return {
    github: 'https://github.com/hezulong1',
    nav: [
      {
        text: '写作',
        link: '/writing.html',
        activeMatch: '^/writing(?:/|$)',
      },
      {
        text: '笔记',
        link: '/note.html',
        activeMatch: '^/note(?:/|$)',
      },
      {
        text: '摘录',
        link: '/excerpt.html',
        activeMatch: '^/excerpt(?:/|$)',
      },
      {
        text: '杂谈',
        link: '/speak.html',
        activeMatch: '^/speak(?:/|$)',
      },
      {
        text: '书签',
        link: '/bookmark.html',
      },
    ],
  };
}

function getViteConfig() {
  return {
    publicDir: '../public',
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
        // TODO 未找到问题所在，临时解决方案
        onwarn(warning, rollupWarn) {
          if (!warning.code || !['UNUSED_EXTERNAL_IMPORT'].includes(warning.code)) {
            rollupWarn(warning);
          }
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: '_postcss_plugin_local',
            AtRule: {
              charset(atRule) {
                atRule.name === 'charset' && atRule.remove();
              },
            },
          },
        ],
      },
    },
  } satisfies UserConfig['vite'];
}
