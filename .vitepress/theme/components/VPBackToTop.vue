<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
import ArrowUp from './icons/ArrowUp.vue';
import VPIconButton from './VPIconButton.vue';

function toTop() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',
  });
}

const { y } = useWindowScroll();
</script>

<template>
  <VPIconButton
    class="VPBackToTop"
    :class="{ show: y > 300 }"
    title="回到顶部"
    @click="toTop"
  >
    <ArrowUp />
  </VPIconButton>
</template>

<style lang="scss" scoped>
.VPBackToTop {
  position: fixed;
  z-index: 100;
  inset-inline-end: 12px;
  inset-block-end: 38px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  &.show {
    opacity: 1;
    pointer-events: auto;
  }

  @media print {
    display: none;
  }
}
</style>
