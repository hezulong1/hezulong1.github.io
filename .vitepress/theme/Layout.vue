<script setup lang="ts">
import { useData } from 'vitepress';
import VPNotFound from './components/VPNotFound.vue';
import VPSidebar from './components/VPSidebar.vue';
import VPPage from './components/VPPage.vue';
import VPHome from './components/VPHome.vue';
import VPDoc from './components/VPDoc.vue';
import VPBackdrop from './components/VPBackdrop.vue';
import { useSidebarControl } from './utils/composables';
import VPBackup from './components/VPBackup.vue';

const { frontmatter, page } = useData();
const {
  isOpen: isSidebarOpen,
  close: closeSidebar,
} = useSidebarControl();
</script>

<template>
  <div class="VPLayout" :class="{ 'open-sidebar': isSidebarOpen }">
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPSidebar :show="isSidebarOpen" />
    <VPPage>
      <VPNotFound v-if="page.isNotFound" />
      <VPHome v-else-if="frontmatter.home" />
      <VPDoc v-else />
    </VPPage>
    <VPBackup />
  </div>
</template>

<style>
.VPLayout {
  --siderbar-width: 180px;
  --page-space: 24px;

  position: relative;
  max-width: 900px;
  margin: 0 auto;
}
</style>
