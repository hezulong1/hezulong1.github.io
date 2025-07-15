import{c as d,i as l,d as f,L as p}from"./vendor-D42mPDV2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const r=navigator.userAgent,u=r.indexOf("Windows")>=0,h=r.indexOf("Macintosh")>=0,m=r.indexOf("Linux")>=0,w=r.indexOf("Firefox")>=0,c=r.indexOf("Chrome")>=0,g=!c&&r.indexOf("Safari")>=0;r.indexOf("Edg/")>=0;function x(o){const e=o.style;e.position="relative",e.top="0",e.right="0",e.bottom="0",e.left="0",e.width="var(--window-width, 100vw)",e.height="var(--window-height, 100vh)";const i=u?"windows":m?"linux":h?"mac":"",s=c?"chromium":w?"firefox":g?"safari":"";o.classList.add(...[i,s].filter(Boolean))}function y(o){const e=document.createElement("section");e.className=d`
    font-size: calc(10px + 0.33vw);
    -webkit-overflow-scrolling: touch;

    > .container {
      padding: 5vh 5vw;

      @media (min-width: 768px) {
        padding: 5vh 10vw;
      }
    }

    h1 {
      margin: 0;
      margin-bottom: 3rem;
      font-size: 4.5em;
      font-weight: 500;
      user-select: none;
    }

    p {
      max-width: 30em;
      line-height: 1.6;
      font-size: 1.6em;
      font-weight: 300;
      padding: 0 0.5rem;
    }

    a {
      font-weight: 500;
      text-decoration: underline;
      color: var(--accent-color);
      text-underline-offset: 5px;

      &:hover {
        text-decoration-thickness: 2px;
      }
    }

    .contact {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      margin-top: 2rem;
      font-size: 1rem;
    }
  `,e.innerHTML=`
    <div class="container">
      <h1>
        <span id="hello"></span>
        <span>!</span>
      </h1>

      <p>My name is HeZulong(何祖龙).</p>
      <p>I am a front-end software developer. I prefer to be a full-stack software developer.</p>
      <p class="contact">
        <a href="https://github.com/hezulong1" target="_blank">Github</a>
        <a href="https://www.cnblogs.com/blackcat" target="_blank">博客园</a>
      </p>
    </div>
  `;const i=e.querySelector("#hello");new l(i,{typeSpeed:125,backSpeed:100,smartBackspace:!1,startDelay:100,backDelay:1500,showCursor:!1,loop:!0,strings:["哈喽","Hello","こんにちは","Hola","Bonjour"]}),o.appendChild(e)}function v(o){const e=o.style,i=()=>{e.setProperty("--window-width",innerWidth+"px"),e.setProperty("--window-height",innerHeight+"px")};i(),window.addEventListener("resize",i)}function b(){const o=document.createElement("div");o.id="__layout",o.setAttribute("role","application"),document.body.appendChild(o),x(o),y(o),v(o)}f.extend(p);b();
