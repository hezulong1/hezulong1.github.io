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
    <VPSidebarItem :item="{ link: '/', text: '主页' }" style="margin-block-end: 16px" />
    <VPSidebarItem v-for="item in theme.nav ?? []" :key="JSON.stringify(item)" :item />
    <VPSetting />
  </aside>
</template>

<style lang="scss" scoped>
@use '../styles/utils' as utils;

.VPSidebar {
  position: fixed;
  inset-block-start: 0;
  inset-block-end: 0;
  z-index: 10;
  inline-size: var(--siderbar-width);
  padding: 84px 16px 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // backdrop-filter: blur(10px);
  transform: translateX(-100%);
  transition: transform 0.2s;

  &.open {
    transform: translateX(0);
  }

  @include utils.tablet {
    transform: translateX(0);
  }

  > * {
    align-self: flex-end;
  }

  :deep(.VPSetting) {
    margin-block-start: auto;
  }
}
</style>
