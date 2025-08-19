<script setup lang="ts">
defineProps<{
  show: boolean;
}>();
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="VPBackdrop" />
  </transition>
</template>

<style lang="scss" scoped>
.VPBackdrop {
  position: fixed;
  inset: 0;
  z-index: var(--vp-z-index-backdrop);
  background: var(--vp-backdrop-bg-color);
  transition: opacity 0.5s;

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }

  &.fade-leave-active {
    transition-duration: .25s;
  }

  @media (min-width: 1280px) {
    display: none;
  }
}
</style>
