import { r as resolveComponent, o as openBlock, c as createElementBlock, e as createVNode, a as createStaticVNode, b as createBaseVNode, u as unref } from "./app.BXo1cFPB.js";
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
const __pageData = JSON.parse('{"title":"FLIP 动画","description":"","frontmatter":{"title":"FLIP 动画","date":"2026-04-30T16:28","layout":"post"},"headers":[],"relativePath":"posts/flip.md","filePath":"posts/flip.md","lastUpdated":1778136321000}');
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
        _cache[0] || (_cache[0] = createStaticVNode("", 10)),
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
