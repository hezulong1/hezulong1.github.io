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
  z-index: 5;
  background: hsla(0,0%,0%,.5);
  transition: opacity 0.5s;
  backdrop-filter: blur(2px);

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }

  &.fade-leave-active {
    transition-duration: .25s;
  }

  @media (min-inline-size: 1280px) {
    display: none;
  }
}
</style>
