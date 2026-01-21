import type { Theme } from 'vitepress';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import vueTippy from 'vue-tippy';

import 'virtual:group-icons.css';
import '@/style/index.scss';
import Layout from './app.vue';

dayjs.extend(utc);
dayjs.extend(timezone);

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(vueTippy, {
      defaultProps: {
        animation: 'scale-subtle',
        appendTo: () => document.body,
        theme: 'tooltip',
        popperOptions: {
          // https://popper.js.org/docs/v2/utils/detect-overflow/
          modifiers: [
            {
              name: 'preventOverflow',
              options: {
                rootBoundary: 'document',
              },
            },
          ],
        },
      },
    });
  },
} satisfies Theme;
