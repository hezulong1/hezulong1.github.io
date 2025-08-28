<script setup lang="ts">
import { useData } from '../utils/composables.ts';

const { frontmatter } = useData();
</script>

<template>
  <div class="VPDoc">
    <h1 v-if="frontmatter.title" style="margin-block-end: 48px;">{{ frontmatter.title }}</h1>
    <Content class="vp-doc" />
  </div>
</template>
