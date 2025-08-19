<script setup lang="ts">
import VPSetting from './VPSetting.vue';
import VPSidebarItem from './VPSidebarItem.vue';
import { useData } from '../utils/composables.ts';

const { theme } = useData();

defineProps<{
  show?: boolean;
}>();
</script>

<template>
  <aside class="VPSidebar" :class="{ show }">
    <VPSidebarItem v-for="item in theme.nav ?? []" :key="JSON.stringify(item)" :item />
    <VPSetting />
  </aside>
</template>

<style lang="scss" scoped>
.VPSidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: var(--siderbar-width);
  padding: calc(var(--page-space) + 64px) 16px 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--vp-c-divider);
  text-align: center;
  backdrop-filter: blur(10px);
  transform: translateX(-100%);
  transition: transform 0.2s;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    transform: translateX(0);
    text-align: right;
  }

  :deep(.VPSetting) {
    margin-top: auto;
  }
}
</style>
