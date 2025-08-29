<script setup lang="ts">
import { useData } from '../utils/composables.ts';
import VPPageHeader from './VPPageHeader.vue';
import VPPost from './VPPost.vue';
import VPNotFound from './VPNotFound.vue';

const { page } = useData();
</script>

<template>
  <article id="page" class="VPPage">
    <VPPageHeader />
    <VPNotFound v-if="page.isNotFound" />
    <VPPost v-else />
  </article>
</template>

<style lang="scss" scoped>
@use '../styles/utils' as utils;

.VPPage {
  margin-inline-start: 0;
  min-block-size: 100vh;
  transition: margin-inline-start 0.2s;

  @include utils.tablet {
    margin-inline-start: var(--siderbar-width);
  }
}
</style>
