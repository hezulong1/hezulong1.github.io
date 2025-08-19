<script setup lang="ts">
import { motion } from 'motion-v';
import { useWindowScroll } from '@vueuse/core';
import ArrowUp from './icons/ArrowUp.vue';

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const { y } = useWindowScroll();
</script>

<template>
  <motion.button
    class="VPBackup"
    :class="{ show: y > 300 }"
    title="回到顶部"
    @click="toTop"
  >
    <ArrowUp />
  </motion.button>
</template>

<style lang="scss" scoped>
.VPBackup {
  position: fixed;
  z-index: 100;
  inline-size: 32px;
  block-size: 32px;
  inset-inline-end: 12px;
  inset-block-end: 12px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  background-color: transparent;
  border: none;

  &.show {
    opacity: 0.3;
    pointer-events: auto;
  }

  &:hover {
    opacity: 1 !important;
  }

  @media print {
    display: none;
  }
}
</style>
