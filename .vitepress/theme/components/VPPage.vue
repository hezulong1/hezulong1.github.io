<script setup lang="ts">
import VPPageHeader from './VPPageHeader.vue';

</script>

<template>
  <article id="page" class="VPPage">
    <VPPageHeader />
    <slot />
  </article>
</template>

<style lang="scss" scoped>
@use '../styles/utils' as utils;

.VPPage {
  padding: 24px 24px 50px 32px;
  margin-inline-start: 0;
  min-block-size: 100vh;
  transition: margin-inline-start 0.2s;

  @include utils.tablet {
    margin-inline-start: var(--siderbar-width);
  }
}
</style>
