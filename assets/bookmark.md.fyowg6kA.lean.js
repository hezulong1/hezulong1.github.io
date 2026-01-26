import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode, b as createBaseVNode, d as createTextVNode } from "./app.Da10uWFE.js";
const __pageData = JSON.parse('{"title":"Bookmark","description":"","frontmatter":{"title":"Bookmark","layout":"page"},"headers":[],"relativePath":"bookmark.md","filePath":"bookmark.md","lastUpdated":1769405545000}');
const _sfc_main = { name: "bookmark.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode("", 20),
    createBaseVNode("h3", {
      "qi-ta-gong-ju": "",
      id: "其他工具",
      tabindex: "-1"
    }, [
      createTextVNode("其他工具 # "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#其他工具",
        "aria-label": "Permalink to “其他工具 #”"
      }, "​")
    ], -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: "https://smodin.me/translate-one-text-into-multiple-languages",
          target: "_blank",
          rel: "noreferrer"
        }, "翻译")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: "http://api.map.baidu.com/lbsapi/getpoint/",
          target: "_blank",
          rel: "noreferrer"
        }, "拾取地图坐标")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", {
          href: "https://isoflow.io/",
          target: "_blank",
          rel: "noreferrer"
        }, "Isoflow"),
        createTextVNode(" - 流程图解")
      ])
    ], -1)
  ])]);
}
const bookmark = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  bookmark as default
};
