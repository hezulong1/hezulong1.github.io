import { r as resolveComponent, o as openBlock, c as createElementBlock, e as createVNode, a as createStaticVNode, b as createBaseVNode, u as unref } from "./app.Ba6T5Ywu.js";
const srcdoc = `<style>
  :root {
    --dark: #0e100f;
    accent-color: #0ae448;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: #bbbaa6;
    background-color: var(--dark);
    font-family: Mori, sans-serif;
    font-weight: 400;
    line-height: 1.45;
    margin: 0px;
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
  }

  .box {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--dark);
    background-blend-mode: color-dodge;
    font-weight: 600;
    line-height: 1.2;
    will-change: transform;
    border-radius: 12px;
  }

  .gradient-blue {
    background: radial-gradient(78.77% 78.77% at 71.71% 30.77%, #f0fcff 0%, #9bedff 67.21%, #98ecff 76.04%, #5be1ff 84.9%, #00bae2 94.79%), url(https://assets.codepen.io/16327/noise-e82662fe.png);
  }

  .gradient-pink {
    background: linear-gradient(317.42deg, #ffe9fe 10.4%, #ff96f9 83.03%), url(https://assets.codepen.io/16327/noise.png);
  }

  button {
    margin: 2rem 0.5rem;
  }
</style>

<button class="button">Swop element positions</button>
<div class="container">
  <div class="square box gradient-blue" id="sq1">1</div>
  <div class="square box gradient-pink" id="sq2">2</div>
</div>

<script>
  const squares = Array.from(document.querySelectorAll('.square'))

  function doFlip() {
    // Get the initial state
    const firstState = squares.map(sq => sq.getBoundingClientRect().left)

    // Make DOM or styling changes (swap the squares in our case)
    swap(squares);

    const lastState = squares.map(sq => sq.getBoundingClientRect().left)

    // Animate from the initial state to the end state
    squares.forEach((sq, i) => sq.animate(
      [
        { transform: \`translateX(\${firstState[i] - lastState[i]}px)\` },
        { transform: 'translateX(0)' }
      ],
      {
        duration: 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' // GSAP power1.out
      }
    ))
  }

  // Given an Array of two siblings, append the one that's first so it's last (swap)
  function swap([a, b]) {
    a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
  }

  // click to flip
  document.querySelector(".button").addEventListener("click", doFlip);
<\/script>
`;
const _hoisted_1 = ["srcdoc"];
const __pageData = JSON.parse('{"title":"FLIP 动画","description":"","frontmatter":{"title":"FLIP 动画","date":"2026-04-30T16:28","layout":"post"},"headers":[],"relativePath":"posts/flip.md","filePath":"posts/flip.md","lastUpdated":1777539213000}');
const __default__ = { name: "posts/flip.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_OpenLink = resolveComponent("OpenLink");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_OpenLink, {
          href: "https://aerotwist.com/blog/flip-your-animations/",
          label: "FLIP Your Animations"
        }),
        _cache[0] || (_cache[0] = createStaticVNode('<p>传统基于布局属性（如 width、height、left、top）的动画，往往会频繁触发重排（Layout）与重绘（Paint），<strong>FLIP</strong> 打破了这种现状，它是一套基于浏览器渲染机制的动画实现方案，其核心思路是通过预计算动画前后状态的差值，将高消耗的布局操作转化为低消耗的合成层操作，从而降低浏览器每帧的渲染压力。</p><p>FLIP 是 First、Last、Invert、Play 四个步骤的缩写，各步骤环环相扣，共同构成了高性能动画的核心逻辑，让我们来详细分析一下。</p><ul><li><strong>F</strong>irst：记录元素的初始状态；</li><li><strong>L</strong>ast：记录元素的最终状态；</li><li><strong>I</strong>nvert：根据元素的初始状态和最终状态的位置，来判断元素发生了哪些变化，如宽高，透明度等。接下来就是使用 <code>transform</code> 属性，<code>opacity</code> 属性来反转这些变化，让它看起来还在初始位置；</li><li><strong>P</strong>lay：运行动画，移除反向偏移，让元素从“假装在初始位置”过渡到最终位置，动画就实现了。</li></ul><p>简单说，<strong>FLIP</strong> 就是【先跳终点】→【反拉回起点】→【松手上动画】，将耗性能的布局变化，全转成合成（Composite），由 GPU 接管。</p><br><p>根据以上分析，我们可以得到一份简单的实现代码。</p><div class="language-js"><button title="复制代码" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 记录元素初始位置</span></span>\n<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> first</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getBoundingClientRect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 移动 DOM（假设通过 class 移到最后）</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">classList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">totes-at-the-end</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 获取修改后的位置</span></span>\n<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> last</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getBoundingClientRect</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 计算需要逆向移动的距离</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 可以使用其他计算样式（Computed Style），只需要确保最后使用合成属性（compositor-only props）</span></span>\n<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> invert</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> first</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">top</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> last</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">top</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// Play 1：使用 CSS</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">transform</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">translateY(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">invert</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">px)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">requestAnimationFrame</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">classList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animate-on-transforms</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">transform</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// Play 2：使用 Web Animations API</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">el</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">animate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  [</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> transform</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">translateY(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">${</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dis</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">px)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">`</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> },</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> transform</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">translateY(0)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  {</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    duration</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 600</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    easing</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cubic-bezier(0.25, 0.46, 0.45, 0.94)</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><br><p>文章只是做了简易的原理解剖，市面上已经存在许多成熟库供我们直接使用，如 GSAP 的 <a href="https://gsap.com/docs/v3/Plugins/Flip/" target="_blank" rel="noreferrer">Flip 插件</a>。</p><p>最后，使用原生 JS 复刻下 GSAP 的 <a href="https://gsap.com/docs/v3/Plugins/Flip/#simple-example" target="_blank" rel="noreferrer">Flip 简单示例</a>。</p>', 10)),
        createBaseVNode("iframe", {
          srcdoc: unref(srcdoc),
          style: { "height": "300px" }
        }, null, 8, _hoisted_1)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
