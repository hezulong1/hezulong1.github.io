<script setup lang="ts">
import { useData } from '../utils/composables.ts';
import VPListPosts from './VPListPosts.vue';
import VPHome from './VPHome.vue';
import VPDoc from './VPDoc.vue';

const { frontmatter } = useData();
</script>

<template>
  <main id="page-content" class="VPContent">
    <VPListPosts v-if="frontmatter.list" />
    <VPHome v-else-if="frontmatter.home" />
    <VPDoc v-else />
  </main>
</template>

<style lang="scss" scoped>
.VPContent {
  padding: 24px 24px 50px;
}
</style>
