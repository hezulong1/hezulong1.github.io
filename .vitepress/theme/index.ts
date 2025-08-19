import type { Theme } from 'vitepress';

import './styles/index.scss';
import Layout from './Layout.vue';

import VPListPosts from './components/VPListPosts.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('ListPosts', VPListPosts);
  },
} satisfies Theme;
