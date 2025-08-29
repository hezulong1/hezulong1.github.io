import type { Theme } from 'vitepress';

import './styles/index.scss';
import Layout from './Layout.vue';

import VPPostList from './components/VPPostList.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('VPPostList', VPPostList);
  },
} satisfies Theme;
