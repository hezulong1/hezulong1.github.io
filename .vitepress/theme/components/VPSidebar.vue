<script setup lang="ts">
import VPSetting from './VPSetting.vue';
import VPSidebarItem from './VPSidebarItem.vue';
import { useData } from '../utils/composables.ts';

const { theme } = useData();

defineProps<{
  open?: boolean;
}>();
</script>

<template>
  <aside class="VPSidebar" :class="{ open }">
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
  padding: calc(env(safe-area-inset-top, 0px) + 84px) 16px calc(env(safe-area-inset-bottom, 0px) + 16px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--vp-layout-bg);
  overscroll-behavior: contain;
  transform: translateX(-100%);
  opacity: 0;
  transition: opacity .25s,transform .5s cubic-bezier(.19,1,.22,1);

  &.open {
    opacity: 1;
    transform: translateX(0);
  }

  @include utils.tablet {
    opacity: 1;
    transform: translateX(0);
  }

  &:not(.open) > * {
    align-self: flex-end;
  }

  :deep(.VPSetting) {
    margin-block-start: auto;
  }

  .dark & {
    box-shadow: var(--vp-shadow-1);
  }
}
</style>
