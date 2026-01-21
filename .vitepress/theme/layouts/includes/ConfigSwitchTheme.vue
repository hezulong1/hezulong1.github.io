<script setup lang="ts">
import { useApp } from '@/utils/hooks';
import Sun from '@/ui/icons/Sun.vue';
import Moon from '@/ui/icons/Moon.vue';
import Button from '@/ui/Button.vue';

const { isDark } = useApp();
function onKeyup(e: KeyboardEvent) {
  if (e.keyCode === 13) {
    e.preventDefault();
    isDark.value = !isDark.value;
  }
}
</script>

<template>
  <Button
    square
    :aria-label="isDark ? 'light' : 'dark'"
    aria-live="polite"
    title="切换明暗模式"
    @click="isDark = !isDark;"
    @keyup="onKeyup"
  >
    <Moon :class="$style.moon" />
    <Sun :class="$style.sun" />
  </Button>
</template>

<style lang="scss" module>
.moon, :global(.dark) .sun {
  display: none;
}

:global(.dark) .moon {
  display: initial;
}
</style>
