---
title: Vue 状态仓库持久化
date: 2026-09-13-03T22:42
layout: post
---

以插件的形式让 Vuex 和 Pinia 的数据仓库持久化。在 npm 中已经存在这样的插件（可以搜索关键字：`pinia persist` / `vuex persist`），这里更多是学习为主。

本地存储分 2 种形式：

- 以实时为主，优点是同步性非常好，缺点就是读写 localstorage 是一个 io 操作，过于频繁会造成卡顿；

- 以效率为主，即我们在进入页面时**读取**，离开页面时**存储**，缺点就是准确性未必高，还有因为以 `beforeupload` 事件为主，未必会每次都触发。

记住，无论那种都是服务于实际项目，如何取舍需要来自主判断。

下面以第二种做示例代码：

<br>
__Vuex__

::: code-group

```js [store.js]
import { createStore } from 'vuex';
import persistPlugin from './persistPlugin.js';

const store = createStore({
  modules: {...},
  plugins: [persistPlugin],
});

export default store;

```

```js [persistPlugin.js]
const STORAGE_KEY = 'vuex-store';

export default (store) => {
  // 存储
  window.addEventListener('beforeupload', () => {
    const state = store.state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });

  // 获取
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    try {
      const parsedState = JSON.parse(savedState);
      store.replaceState(parsedState);
    } catch (err) {
      console.error('Failed to parse saved state:', err);
    }
  }
}

```
:::


<br>
__Pinia__

::: code-group

```js [main.js]
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import persistPlugin from './persistPlugin.js';

const pinia = createPinia();
pinia.use(persistPlugin);

const app = createApp(App);
app.use(pinia);

app.mount('#app');

```

```js [persistPlugin.js]
const STORAGE_KEY_PREFIX = 'pinia-store-';

export default (context) => {
  const key = `${STORAGE_KEY_PREFIX}${context.store.$id}`;

  // 存储
  window.addEventListener('beforeupload', () => {
    const state = context.store.$state;
    localStorage.setItem(key, JSON.stringify(state));
  });

  // 获取
  const savedState = localStorage.getItem(key);
  if (savedState) {
    try {
      const parsedState = JSON.parse(savedState);
      context.store.$patch(parsedState);
    } catch (err) {
      console.error('Failed to parse saved state:', err);
    }
  }
}
```

:::
