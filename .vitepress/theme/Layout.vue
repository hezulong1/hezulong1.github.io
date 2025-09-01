<script setup lang="ts">
import { useTemplateRef, watchEffect } from 'vue';
import { useRouter, inBrowser } from 'vitepress';
import { useScrollLock, useMediaQuery, useEventListener } from '@vueuse/core';

import { useSidebarControl } from './utils/composables';
import VPSidebar from './components/VPSidebar.vue';
import VPPage from './components/VPPage.vue';
import VPBackdrop from './components/VPBackdrop.vue';
import VPBackToTop from './components/VPBackToTop.vue';
import VPHamburger from './components/VPHamburger.vue';
import VPProgressbar from './components/VPProgressbar.vue';

const router = useRouter();
const progressbarRef = useTemplateRef('progressbar');
const { isOpen: isSidebarOpen, close: closeSidebar, toggle } = useSidebarControl();

router.onBeforeRouteChange = () => {
  progressbarRef.value?.start();
};

router.onAfterRouteChange = () => {
  progressbarRef.value?.finish();
};

const is768 = useMediaQuery('(min-width: 768px)');
const isLocked = useScrollLock(inBrowser ? document.body : null);

watchEffect(() => {
  isLocked.value = is768.value ? false : isSidebarOpen.value;
});

useEventListener('resize', () => {
  if (is768.value) {
    closeSidebar();
  }
});
</script>

<template>
  <div class="VPLayout" :class="{ 'open-sidebar': isSidebarOpen }">
    <VPBackToTop />
    <VPBackdrop :show="isSidebarOpen" @click="closeSidebar" />
    <VPProgressbar ref="progressbar" />
    <VPHamburger :active="isSidebarOpen" @click="toggle" />
    <VPSidebar :open="isSidebarOpen" />
    <VPPage />
  </div>
</template>

<style>
.VPLayout {
  --siderbar-width: 180px;

  position: relative;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
  padding:
    env(safe-area-inset-top, 0px)
    env(safe-area-inset-right, 0px)
    env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px);
}
</style>
