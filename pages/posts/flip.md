---
title: FLIP 动画
date: 2026-04-30T16:28
layout: post
---

<OpenLink href="https://aerotwist.com/blog/flip-your-animations/" label="FLIP Your Animations" />

传统基于布局属性（如 width、height、left、top）的动画，往往会频繁触发重排（Layout）与重绘（Paint），**FLIP** 打破了这种现状，它是一套基于浏览器渲染机制的动画实现方案，其核心思路是通过预计算动画前后状态的差值，将高消耗的布局操作转化为低消耗的合成层操作，从而降低浏览器每帧的渲染压力。

FLIP 是 First、Last、Invert、Play 四个步骤的缩写，各步骤环环相扣，共同构成了高性能动画的核心逻辑，让我们来详细分析一下。

- **F**irst：记录元素的初始状态；
- **L**ast：记录元素的最终状态；
- **I**nvert：根据元素的初始状态和最终状态的位置，来判断元素发生了哪些变化，如宽高，透明度等。接下来就是使用 `transform` 属性，`opacity` 属性来反转这些变化，让它看起来还在初始位置；
- **P**lay：运行动画，移除反向偏移，让元素从“假装在初始位置”过渡到最终位置，动画就实现了。

简单说，**FLIP** 就是【先跳终点】→【反拉回起点】→【松手上动画】，将耗性能的布局变化，全转成合成（Composite），由 GPU 接管。

<br>

根据以上分析，我们可以得到一份简单的实现代码。

```js
// 记录元素初始位置
const first = el.getBoundingClientRect()

// 移动 DOM（假设通过 class 移到最后）
el.classList.add('totes-at-the-end')

// 获取修改后的位置
const last = el.getBoundingClientRect()

// 计算需要逆向移动的距离
// 可以使用其他计算样式（Computed Style），只需要确保最后使用合成属性（compositor-only props）
const invert = first.top - last.top

// Play 1：使用 CSS
el.style.transform = `translateY(${invert}px)`;

requestAnimationFrame(() => {
  el.classList.add('animate-on-transforms');
  el.style.transform = '';
});

// Play 2：使用 Web Animations API

el.animate(
  [
    { transform: `translateY(${dis}px)` },
    { transform: 'translateY(0)' }
  ],
  {
    duration: 600,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
)

```

<br>

文章只是做了简易的原理解剖，市面上已经存在许多成熟库供我们直接使用，如 GSAP 的 [Flip 插件](https://gsap.com/docs/v3/Plugins/Flip/)。

最后，使用原生 JS 复刻下 GSAP 的 [Flip 简单示例](https://gsap.com/docs/v3/Plugins/Flip/#simple-example)。

<script setup>
import srcdoc from './flip.code.html?raw'
</script>

<iframe :srcdoc style="height: 300px"></iframe>
