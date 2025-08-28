---
title: 浏览器辅助函数
date: 2025-08-28T14:55:00
---

## 环境判断 {#huan-jing-pan-duan}

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

## DOM {#dom}

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
