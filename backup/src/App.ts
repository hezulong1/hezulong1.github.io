import Typed from 'typed.js';
import { css } from '@emotion/css';
import * as Browser from './logic/browser';

function setAppStyle(domNode: HTMLElement) {
  const domNodeStyle = domNode.style;

  domNodeStyle.position = 'relative';
  domNodeStyle.top = '0';
  domNodeStyle.right = '0';
  domNodeStyle.bottom = '0';
  domNodeStyle.left = '0';
  domNodeStyle.width = `var(--window-width, 100vw)`;
  domNodeStyle.height = `var(--window-height, 100vh)`;

  const platformClass = Browser.isWindows ? 'windows' : Browser.isLinux ? 'linux' : Browser.isMacintosh ? 'mac' : '';
  const browserClass = Browser.isChrome ? 'chromium' : Browser.isFirefox ? 'firefox' : Browser.isSafari ? 'safari' : '';

  domNode.classList.add(...[platformClass, browserClass].filter(Boolean));
}

function setAppContent(domNode: HTMLElement) {
  const introDomNode = document.createElement('section');
  introDomNode.className = css`
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
  `;

  introDomNode.innerHTML = `
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
  `;

  const helloDomNode = introDomNode.querySelector<HTMLElement>('#hello');

  // eslint-disable-next-line no-new
  new Typed(helloDomNode!, {
    typeSpeed: 125,
    backSpeed: 100,
    smartBackspace: false,
    startDelay: 100,
    backDelay: 1500,
    showCursor: false,
    loop: true,
    strings: ['哈喽', 'Hello', 'こんにちは', 'Hola', 'Bonjour'],
  });

  domNode.appendChild(introDomNode);
}

function onWindowResize(domNode: HTMLElement) {
  const domNodeStyle = domNode.style;

  const onResize = () => {
    domNodeStyle.setProperty('--window-width', innerWidth + 'px');
    domNodeStyle.setProperty('--window-height', innerHeight + 'px');
  };

  onResize();
  window.addEventListener('resize', onResize);
}

export function setupApp() {
  const domNode = document.createElement('div');
  domNode.id = '__layout';
  domNode.setAttribute('role', 'application');
  document.body.appendChild(domNode);

  setAppStyle(domNode);
  setAppContent(domNode);
  onWindowResize(domNode);
}
