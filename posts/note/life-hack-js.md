---
title: 奇思妙想的脚本
date: 2025-08-28T14:52:00
---

## 无限 debugger {#wu-xian-debugger}

```js
(function (a) {
  return (function (a) {
    return (Function('Function(arguments[0]+"' + a + '")()'))
  })(a)
})('bugger')('de', 0, 0, (0, 0));
```
