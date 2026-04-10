import type { App } from 'vue';
import OpenLink from './OpenLink.vue';

export default function setup(app: App) {
  app.component('OpenLink', OpenLink);
}
