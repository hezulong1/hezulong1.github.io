<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
import ArrowUp from '@/ui/icons/ArrowUp.vue';
import Button from '@/ui/Button.vue';

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
  <Button
    :class="[$style.root, { show: y > 240 }]"
    title="回到顶部"
    tabindex="-1"
    square
    @click="toTop"
  >
    <ArrowUp />
  </Button>
</template>

<style lang="scss" module>
.root {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;

  &:global(.show) {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
