import { defineConfig, type UserConfigExport } from 'vitepress';
import { groupIconMdPlugin } from '../plugins/group-icons';
import getThemeConfig, { type ThemeConfig } from './theme';
import getViteConfig from './vite';

export default <UserConfigExport<ThemeConfig>> function vitepressConfig(env) {
  const themeConfig = getThemeConfig(env);
  const vite = getViteConfig(env);

  return defineConfig<ThemeConfig>({
    base: '/',
    srcDir: 'pages',
    outDir: 'dist',
    lang: 'zh-Hans',
    title: 'HeZulong',
    description: '何祖龙的网络日志',
    head: [
      ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
      ['meta', { name: 'renderer', content: 'webkit' }],
      ['meta', { name: 'theme', content: '#000000' }],

      ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '144*144', href: '/apple-touch-icon-144.png' }],
      ['link', { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' }],
      ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/inter.min.css' }],
      [
        'script',
        { id: 'check-browser' },
        `;(() => {
const UA = navigator.userAgent;

const isWindows = (UA.indexOf('Windows') >= 0);
const isMacintosh = (UA.indexOf('Macintosh') >= 0);
const isLinux = (UA.indexOf('Linux') >= 0);

const isFirefox = (UA.indexOf('Firefox') >= 0);
const isChrome = (UA.indexOf('Chrome') >= 0);
const isSafari = (!isChrome && (UA.indexOf('Safari') >= 0));
const isEdge = (UA.indexOf('Edg/') >= 0);

const platformClass = isWindows ? 'windows' : isLinux ? 'linux' : isMacintosh ? 'mac' : '';
const browserClass = isChrome ? 'chromium' : isFirefox ? 'firefox' : isSafari ? 'safari' : '';

platformClass && document.documentElement.classList.add(platformClass);
browserClass && document.documentElement.classList.add(browserClass);
})()`,
      ],
    ],
    lastUpdated: true,
    sitemap: {
      hostname: 'https://hezulong1.github.io/',
    },
    cleanUrls: true,
    metaChunk: true,
    ignoreDeadLinks: [
      /^https?:\/\/localhost/,
      /^https?:\/\/abc\.com/,
      url => url.includes('/reference/') || url === '/',
    ],
    markdown: {
      codeCopyButtonTitle: '复制代码',
      theme: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      config(md) {
        md.use(groupIconMdPlugin);
      },
    },
    themeConfig,
    vite,
  });
};
