---
title: Notes - HeZulong
display: Notes
subtitle: 快速笔记 / 小提示
---

<article>

## less, scss 函数的定义

_2022/03/31_

#### less

一个额外的配置:

```js
{
  less: {
    javascriptEnabled: true
  }
}
```

```less
// version: ^4.1.2
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

#### scss

```scss
// version: ^1.49.10
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
</article>

<article>

## Git 查询代码行数

_2022/02/23_

```bash
git log  --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -
```

</article>

<article>

## 无限 debugger

```js
(function (a) {
  return (function (a) {
    return (Function('Function(arguments[0]+"' + a + '")()'))
  })(a)
})('bugger')('de', 0, 0, (0, 0));
```

</article>

<article>

## 一个简单的 dom resize 监听器

#### html
```html
<div class="fake-element" style="height: 50px"></div>
```

#### css
```css
.fake-element {
  position: relative; /* 需要指定一个非 static 属性 */
  width: 100%;  
}

.resize-observer {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
}
```

#### javascript
```javascript
const userAgent = navigator.userAgent.toLowerCase();
const isIE = (userAgent.indexOf('trident') >= 0 || userAgent.indexOf('msie') >= 0);
const isEdge = (userAgent.indexOf('Edge/') >= 0);
const isEdgeOrIE = isIE || isEdge;

const resizeHandler = () => { console.log(new Date() };
const createResize = element => {
  const obj = document.createElement('object');
  obj.className = 'resize-observer';
  obj.type = 'text/html';
  obj.setAttribute('tabindex', '-1');
  obj.setAttribute('aria-hidden', 'true');
  obj.onload = () => {
    const win = obj.contentDocument.defaultView;
    win.onresize = _resizeHandler.bind(this);
  };
  // IE: Does not like that this happens before, even if it is also added after.
  if (!isEdgeOrIE) { obj.data = 'about:blank' }
  element.appendChild(obj);
  // IE: This must occur after adding the object to the DOM.
  if (isEdgeOrIE) { obj.data = 'about:blank' }
  return obj;
};

```

</article>
