<script setup lang="ts">
import { useData } from '../utils/composables';
import Sun from './icons/Sun.vue';
import Moon from './icons/Moon.vue';
import VPIconButton from './VPIconButton.vue';

const { isDark } = useData();
</script>

<template>
  <VPIconButton
    class="VPThemeButton"
    :aria-checked="isDark"
    @click="isDark = !isDark"
  >
    <Moon v-if="isDark" />
    <Sun v-else />
  </VPIconButton>
</template>
