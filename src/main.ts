import '@guanwei/app-style/en'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'

import './styles/main.css'
import './styles/prose.css'
import './styles/markdown.css'
import 'virtual:windi-utilities.css'

import autoRoutes from 'pages-generated'
import NProgress from 'nprogress'
import { ViteSSG } from 'vite-ssg'
import type { RouterScrollBehavior } from 'vue-router'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import App from './App.vue'

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: any
  }
}

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/')
      ? `${i.path}index.html`
      : `${i.path}.html`
  }
})

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  async ({ router, isClient, app }) => {
    dayjs.extend(LocalizedFormat)

    if (isClient) {
      const { default: VueTippy, Tippy } = await import('vue-tippy')
      app.use(VueTippy, {
        defaultProps: {
          animation: 'shift-away',
          arrow: false
        }
      })
      app.component('Tippy', Tippy)

      router.beforeEach(() => { NProgress.start() })
      router.afterEach(() => { NProgress.done() })
    }
  }
)
