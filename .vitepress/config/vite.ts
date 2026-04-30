import type { UserConfig, ConfigEnv } from 'vitepress';
import path from 'node:path';
import { groupIconVitePlugin } from '../plugins/group-icons';

type ViteConfig = UserConfig['vite'];

export default function getViteConfig(env: ConfigEnv): ViteConfig {
  let counter = 0;

  const cache = new Map<string, string>();
  const isDev = env.mode === 'development';
  const CHARS = 'abcdefghijklmnopqrstuvwxyz';
  const generate = (n: number) => {
    let s = '';
    do {
      s = CHARS[n % CHARS.length] + s;
      n = Math.floor(n / CHARS.length) - 1;
    } while (n >= 0);
    return s;
  };

  return {
    publicDir: '../public',
    plugins: [
      groupIconVitePlugin(),
    ],
    resolve: {
      alias: [
        { find: '@/', replacement: `${path.join(__dirname, '../theme')}/` },
      ],
    },
    build: {
      minify: false,
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
      modules: {
        generateScopedName(name, filename) {
          const id = name + '$$$' + filename;

          let hash = cache.get(id);
          if (!hash) {
            hash = generate(counter++);
            cache.set(id, hash);
          }

          return isDev ? `${name}_${hash}` : hash;
        },
      },
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },
  };
}
