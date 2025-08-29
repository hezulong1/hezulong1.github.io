<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useRouter } from 'vitepress';

import { useSidebarControl } from './utils/composables';
import VPSidebar from './components/VPSidebar.vue';
import VPPage from './components/VPPage.vue';
import VPBackdrop from './components/VPBackdrop.vue';
import VPBackToTop from './components/VPBackToTop.vue';
import VPProgressbar from './components/VPProgressbar.vue';

const router = useRouter();
const progressbarRef = useTemplateRef('progressbar');
const { isOpen: isSidebarOpen, close: closeSidebar } = useSidebarControl();

router.onBeforeRouteChange = () => {
  progressbarRef.value?.start();
};

router.onAfterRouteChange = () => {
  progressbarRef.value?.finish();
};
</script>

<template>
  <div class="VPLayout" :class="{ 'open-sidebar': isSidebarOpen }">
    <VPBackToTop />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPProgressbar ref="progressbar" />
    <VPSidebar :show="isSidebarOpen" />
    <VPPage />
  </div>
</template>

<style>
.VPLayout {
  --siderbar-width: 180px;

  position: relative;
  max-width: 960px;
  margin: 0 auto;
}
</style>
