import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createTextVNode } from "./app.BlIOv8jY.js";
const __pageData = JSON.parse('{"title":"FLIP 动画","description":"","frontmatter":{"title":"FLIP 动画","date":"2026-04-30T16:28","layout":"post"},"headers":[],"relativePath":"posts/flip.md","filePath":"posts/flip.md","lastUpdated":1778120303000}');
const _sfc_main = { name: "posts/flip.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("p", null, [
      createTextVNode("传统基于布局属性（如 width、height、left、top）的动画，往往会频繁触发重排（Layout）与重绘（Paint），"),
      createBaseVNode("strong", null, "FLIP"),
      createTextVNode(" 打破了这种现状，它是一套基于浏览器渲染机制的动画实现方案，其核心思路是通过预计算动画前后状态的差值，将高消耗的布局操作转化为低消耗的合成层操作，从而降低浏览器每帧的渲染压力。")
    ], -1),
    createBaseVNode("p", null, "FLIP 是 First、Last、Invert、Play 四个步骤的缩写，各步骤环环相扣，共同构成了高性能动画的核心逻辑，让我们来详细分析一下。", -1),
    createBaseVNode("p", null, [
      createTextVNode("简单说，"),
      createBaseVNode("strong", null, "FLIP"),
      createTextVNode(" 就是【先跳终点】→【反拉回起点】→【松手上动画】，将耗性能的布局变化，全转成合成（Composite），由 GPU 接管。")
    ], -1),
    createBaseVNode("p", null, "根据以上分析，我们可以得到一份简单的实现代码。", -1)
  ])]);
}
const flip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  flip as default
};
