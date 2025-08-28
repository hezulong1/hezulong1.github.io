---
title: 脚手架（CLI）辅助函数
date: 2024-04-02T00:10:59
---

## 添加脚本验证 {#tian-jia-jiao-ben-yan-zheng}

```sh
$ npm i simple-git-hooks nano-staged -D
```

::: code-group

```json [package.json]
{
  "devDependencies": {
    "simple-git-hooks": "latest",
    "nano-staged": "latest"
  },
  "type": "module",
  // 以上配置仅限参考
  "scripts": {
    "postinstall": "simple-git-hooks"
  },
  "simple-git-hooks": {
    "pre-commit": "npm nano-staged",
    "commit-msg": "node scripts/verify-commit.js"
  },
  "nano-staged": {
    "*.{css,scss,json,md,html,yml}": [
      "prettier --write"
    ],
    "*.{js,ts,tsx,vue}": [
      "eslint --cache --fix"
    ]
  }
}
```

```js [verify-commit.js]
// inspired from vue https://github.com/vuejs/core/blob/main/scripts/verify-commit.js

import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs-extra';
import colors from 'picocolors';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const msgPath = path.resolve(dirname, '../.git/COMMIT_EDITMSG');
const msg = fs.readFileSync(msgPath, 'utf8').trim();

const commitRE = /^(revert: )?(feat|fix|refactor|perf|wip|docs|style|chore|types)(\(.+\))?: .{1,120}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `${colors.bgRed(colors.white(' ERROR '))} ${colors.red(`invalid commit message format.`)}\n\n` +
    `${colors.red(`Proper commit message format is required for automated changelog generation. Examples:\n\n`)}` +
    `  ${colors.green(`feat(compiler): add 'comments' option)`)}\n` +
    `  ${colors.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
    `${colors.red(` See .github/commit-convention.md for more details.\n`)}`,
  );
  process.exit(1);
}

```

:::


## Vite 配置自动导入 {#vite-pei-zhi-zi-dong-dao-ru}

```bash
$ npm i unplugin-auto-import -D
```

::: code-group

```js [vite.config.js]
import AutoImport from 'unplugin-auto-import/vite';

const autoImports = [
  'vue-router',
  {
    from: 'vue',
    imports: [
      'computed',
      'defineComponent',
      'h',
      'inject',
      'isProxy',
      'isReactive',
      'isReadonly',
      'isRef',
      'markRaw',
      'nextTick',
      'onMounted',
      'provide',
      'reactive',
      'readonly',
      'ref',
      'useSlots',
      'watch',
      'watchEffect',
    ],
  },
  {
    from: 'vue',
    imports: [
      'CSSProperties',
      'ComputedRef',
      'InjectionKey',
      'Ref',
      'WritableComputedRef',
      'VNode',
    ],
    type: true,
  },
  {
    from: 'TS接口包',
    imports: ['Numberish', 'Dictionary', 'NumericDictionary'],
    type: true,
  },
  {
    from: '自定义函数包',
    imports: ['useData'],
  },
];

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
  plugins: [
    AutoImport({
      imports: autoImpots,
      dts: '指定生成路径',
      vueTemplate: false,
    })
  ]
}

export default config
```

```ts [vite.config.ts]
import type { UserConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite';

const autoImports = [
  'vue-router',
  {
    from: 'vue',
    imports: [
      'computed',
      'defineComponent',
      'h',
      'inject',
      'isProxy',
      'isReactive',
      'isReadonly',
      'isRef',
      'markRaw',
      'nextTick',
      'onMounted',
      'provide',
      'reactive',
      'readonly',
      'ref',
      'useSlots',
      'watch',
      'watchEffect',
    ],
  },
  {
    from: 'vue',
    imports: [
      'CSSProperties',
      'ComputedRef',
      'InjectionKey',
      'Ref',
      'WritableComputedRef',
      'VNode',
    ],
    type: true,
  },
  {
    from: 'TS接口包',
    imports: ['Numberish', 'Dictionary', 'NumericDictionary'],
    type: true,
  },
  {
    from: '自定义函数包',
    imports: ['useData'],
  },
];

const config: UserConfig = {
  // ...
  plugins: [
    AutoImport({
      imports: autoImpots,
      dts: '指定生成路径',
      vueTemplate: false,
    })
  ]
}

export default config
```

:::

