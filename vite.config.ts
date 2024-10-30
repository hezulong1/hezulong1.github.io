import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Markdown from 'vite-plugin-md';
import WindiCSS from 'vite-plugin-windicss';
import Prism from 'markdown-it-prism';
import LinkAttributes from 'markdown-it-link-attributes';
import Anchor from 'markdown-it-anchor';
import matter from 'gray-matter';
// @ts-expect-error TOC
import TOC from 'markdown-it-table-of-contents';

import { slugify } from './scripts/slugify';

const markdownWrapperClasses = 'prose prose-sm m-auto text-left';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: ['pages'],
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const _path = path.resolve(__dirname, route.component.slice(1));

        if (!_path.includes('projects.md')) {
          const md = fs.readFileSync(_path, 'utf8');
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }

        return route;
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: '',
          enabledCollections: ['carbon'],
        }),
      ],

      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub',
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: markdownWrapperClasses,
    }),

    // https://github.com/antfu/vite-plugin-md
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperComponent: 'Post',
      wrapperClasses: 'prose m-auto',
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism as any);
        md.use(Anchor as any, {
          slugify,
          permalink: Anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        });
        md.use(LinkAttributes as any, {
          pattern: /^https?:\/\//,
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        });
        md.use(TOC, {
          includeLevel: [1, 2, 3],
          slugify,
        });
      },
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // script: 'async',
    // formatting: 'prettify',
    // crittersOptions: {
    //   mergeStylesheets: false
    // }
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
      'dayjs',
      'dayjs/plugin/localizedFormat',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
