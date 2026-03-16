import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app.Db6VHVrF.js";
const __pageData = JSON.parse('{"title":"如何封装组件","description":"","frontmatter":{"title":"如何封装组件","date":"2026-03-16T08:56","layout":"post"},"headers":[],"relativePath":"posts/how-to-write-component.md","filePath":"posts/how-to-write-component.md","lastUpdated":1773630417000}');
const _sfc_main = { name: "posts/how-to-write-component.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode("<p>编码过程中，封装组件是必不可少的，但与之匹配的是开发者的能力，有的开发者看似封装了组件，实际使用起来却极其难用；有的开发者封装的组件好用，却无法清晰表达封装逻辑。</p><p>结合自身经验，我总结了一套流程，分享给大家。</p><br><p><strong>一、确认动机</strong></p><p>实际工作中，我们必须明确为何要封装这个组件，不可为了封装而封装。</p><p>比如界面太复杂，想把它拆分出一部分，那么这个动机就是减少当前界面的复杂度。因为仅为当前界面服务，所以不需要考虑通用性。</p><p>但如果发现某一个功能在多处被使用，希望将这个功能抽离出来，那么在这个动机下，组件就必须具备一些通用性特征。</p><p>至于通用的程度，是仅在这一系列模块内通用，还是在整个项目里通用，或是要跨越项目实现通用，甚至做成开源组件，通用范围不同，动机就不同，后续的设计也会完全不一样。</p><br><p><strong>二、分析边界</strong></p><p>所谓边界，就是明确组件的权责范围——哪些事情归这个组件负责，哪些事情不该它管。而组件边界的宽窄，完全由之前确认的封装动机决定。</p><p>一般来说，组件越通用，它的边界就越窄。这是因为通用组件只需实现核心的少量功能，不能假定过多业务条件，否则会影响它的适配性。</p><p>举个例子，若一个表单仅在单个地方使用，无需考虑通用性，怎么便捷怎么来。但如果这个表单需要跨项目通用，就不能这么做了。此时只能专注于界面设计，甚至界面上的很多内容都不能写死，必须尽量收窄组件边界，才能兼顾不同项目的使用需求。</p><p>边界越窄，组件的灵活性就越强，就能适配各种不同的使用场景，但随之而来的问题是使用便利性会降低，操作起来相对繁琐。</p><p>这也是我们需要对一些 UI 组件进行二次封装的原因。</p><p>通用组件边界窄、灵活性强、适配范围广，但使用不便，所以我们需要通过结合自身业务重新封装，就能为业务场景提供更便捷的使用体验。</p><br><p><strong>三、设计接口</strong></p><p>组件的边界明确后，就可以着手设计接口了。主要包含三部分：属性、插槽和事件。如果是通用组件，最好能形成配套文档，方便他人使用和协作。</p><br><p><strong>四、代码实现</strong></p><p>业务组件，在项目内单独新建文件夹编写即可；通用组件，最好新建一个独立的工程，专门用于组件的开发和维护。</p><br><p><strong>五、功能测试</strong></p><p>测试可采用单元测试、集成测试等方式。</p><p>具体使用哪种，可以根据组件的通用性来决定。如果通用性不强，直接运行测试效果即可。如果是通用组件，最好编写测试脚本，确保组件稳定性。</p><br><p><strong>六、后续维护</strong></p><p>后期就剩下组件的维护工作，从<strong>组件优化</strong>，<strong>Bug 修复</strong>和<strong>功能更新</strong>入手即可，确保组件能够持续适配实际使用场景。</p><hr><p>组件封装并无固定模板，它看似简单，却能解决代码冗余、维护繁琐的痛点，也是开发者必须要掌握的技能，以上流程不可省，记住，越通用越要做到细致。</p>", 31)
  ])]);
}
const howToWriteComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  howToWriteComponent as default
};
