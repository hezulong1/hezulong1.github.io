import path from 'node:path'
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  resolve: {
    alias: [
      { find: '@/', replacement: `${path.resolve(__dirname, 'src')}/` },
      { find: /^(dayjs)(?!\/esm)/, replacement: '$1/esm' },
    ],
  },
  build: {
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        charset: false,
      },
    },
    postcss: {
      plugins: [
        _postcss_plugin_local(),
      ],
    },
  },
});

// Plugins ---

function _postcss_plugin_local() {
  return {
    postcssPlugin: '_postcss_plugin_local',
    AtRule: {
      charset(atRule) {
        atRule.name === 'charset' && atRule.remove();
      },
    },
  };
}
