<script setup lang='ts'>
import { isDark } from '~/logics';

function toggleDark() {
  isDark.value = !isDark.value;
}
</script>

<template>
  <ClientOnly>
    <a v-tippy="'Toggle Color Scheme'" class="select-none" @click="toggleDark">
      <carbon-moon v-show="isDark" />
      <carbon-sun v-show="!isDark" />
    </a>
  </ClientOnly>
</template>
