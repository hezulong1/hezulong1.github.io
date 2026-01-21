<script setup lang="ts">
import SwitchTheme from './ConfigSwitchTheme.vue';
import BackToTop from './ConfigBackToTop.vue';
</script>

<template>
  <div :class="$style.root">
    <BackToTop />
    <SwitchTheme />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media print {
    display: none;
  }
}
</style>
