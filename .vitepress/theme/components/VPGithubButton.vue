<script setup lang="ts">
import { useData } from '../utils/composables';
import Github from './icons/Github.vue';
import VPIconButton from './VPIconButton.vue';

const { theme } = useData();
</script>

<template>
  <VPIconButton :href="theme.github">
    <Github />
  </VPIconButton>
</template>
