---
title: Gist
layout: page
---

## Script

### 判断浏览器环境 {#browser-utils}

```ts
const userAgent = navigator.userAgent;

export const isWindows = /*@__PURE__*/(userAgent.indexOf('Windows') >= 0);
export const isMacintosh = /*@__PURE__*/(userAgent.indexOf('Macintosh') >= 0);
export const isLinux = /*@__PURE__*/(userAgent.indexOf('Linux') >= 0);

export const isFirefox = /*@__PURE__*/(userAgent.indexOf('Firefox') >= 0);
export const isChrome = /*@__PURE__*/(userAgent.indexOf('Chrome') >= 0);
export const isSafari = /*@__PURE__*/(!isChrome && (userAgent.indexOf('Safari') >= 0));
export const isEdge = /*@__PURE__*/(userAgent.indexOf('Edg/') >= 0);
export const isIE = /*@__PURE__*/(userAgent.indexOf('trident') >= 0 || userAgent.indexOf('msie') >= 0);
```

### 判断 Dom 元素 {#dom-utils}

```ts
export function isNode(node: unknown): node is Node {
  return !!node && (node instanceof Node);
}

export function isElement(el: unknown): el is Element {
  return !!(el) && (el instanceof Element);
}

export function isHTMLElement(el: unknown): el is HTMLElement {
  return !!(el) && (el instanceof HTMLElement);
}

export function getActiveElement() {
  let result = document.activeElement;

  while (result?.shadowRoot) {
    result = result.shadowRoot.activeElement;
  }

  return result;
}
```

### 无限 Debugger {#infinite-debugger}

```js
(function (a) {
  return (function (a) {
    return (Function('Function(arguments[0]+"' + a + '")()'))
  })(a)
})('bugger')('de', 0, 0, (0, 0));
```

## CSS

### 编写 `vw` 函数 {#implementation-of-vw-function}

- `less@^4.1.2`

设置 `javascriptEnabled` 为 `true`。

```less
.vwMixin() {
  @function: ~`(function() {
    this.vw = function(size, base = 1440) {
      const raw = size / (base / 100) // vw
      return 'calc(' + raw + 'vw - ' + raw / 100 + ' * var(--sbw, 0px))'
    }
  })()`;
}
.vwMixin();

// 测试
[test] {
  desktop: ~`vw(60)`;
  mobile: ~`vw(60, 375)`;
}
```

- `sass@^1.49.10`

```scss
@use 'sass:math' as math;

@function vw($px, $base: 1440) {
  $raw: math.div($px, math.div($base, 100));
  @return calc(#{$raw * 1vw} - #{$raw * 0.01} * var(--sbw, 0px));
}

// 测试
[test] {
  desktop: vw(60);
  mobile: vw(60, 375);
}
```

## Git

### 删除分支 {#delete-branch}

```sh
# 删除本地分支
$ git branch -d [分支名]
# 强制删除本地分支
$ git branch -D [分支名] # 等价于 git branch --delete --force
# 删除远端分支
$ git push origin --delete [分支名]
```

### 设置本地名称和邮箱 {#set-local-name-and-email}

更加细致可以看 [Git 多账户配置](./git-multiple-account-configuration)

```sh
$ git config --local user.name "自己的名称（可以是中文）"
$ git config --local user.email "自己的邮箱"
```

### 查询代码行数 {#query-lines-of-code}

```sh
$ git log  --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```

## Cli

### 添加脚本钩子 {#add-script-hooks}

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
// code from https://github.com/vuejs/core/blob/main/scripts/verify-commit.js

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
