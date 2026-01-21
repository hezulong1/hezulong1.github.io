import type { UserConfig, ConfigEnv } from 'vitepress';
import path from 'node:path';
import { groupIconVitePlugin } from '../plugins/group-icons';

type ViteConfig = UserConfig['vite'];

export default function getViteConfig(env: ConfigEnv): ViteConfig {
  const isDev = env.mode === 'development';

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
        generateScopedName: (isDev ? `[local]_` : ``) + '[hash:base26:2][hash:base36:6]',
      },
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },
  };
}
