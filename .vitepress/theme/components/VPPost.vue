<script setup lang="ts">
import { useData } from '../utils/composables.ts';

const { frontmatter } = useData();
</script>

<template>
  <main class="VPPost">
    <h1 v-if="frontmatter.title" style="margin-block-end: 48px;">{{ frontmatter.title }}</h1>
    <Content :class="{ 'vp-doc': !frontmatter.home }" />
  </main>
</template>

<style lang="scss" scoped>
.VPPost {
  padding: 24px 24px 50px;
}
</style>
