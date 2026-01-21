---
title: 编写响应式（vw）函数
date: 2022-03-31
layout: post
category: 笔记
---

## Less {#less}

版本要求：^4.1.2

::: tip 额外配置

```js
{
  less: {
    javascriptEnabled: true
  }
}
```

:::

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

// test

[test] {
  desktop: ~`vw(60)`;
  mobile: ~`vw(60, 375)`;
}
```

## Scss {#scss}

版本要求：^1.49.10

```scss
@use 'sass:math' as math;

@function vw($px, $base: 1440) {
  $raw: math.div($px, math.div($base, 100));
  @return calc(#{$raw * 1vw} - #{$raw * 0.01} * var(--sbw, 0px));
}

// test

[test] {
  desktop: vw(60);
  mobile: vw(60, 375);
}
```
