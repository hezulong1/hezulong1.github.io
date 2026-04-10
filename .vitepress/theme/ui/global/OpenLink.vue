<script setup lang="ts">
import Link from '../Link.vue';
import ArrowRight from '../icons/ArrowRight.vue';

defineProps<{
  href?: string;
  label?: string;
}>();
</script>

<template>
  <Link :href :class="$style.root">
    <ArrowRight />{{ label }}
  </Link>
</template>

<style lang="scss" module>
.root {
  display: inline-flex;
  align-items: center;
  gap: .25rem;
  font-size: small;
}
</style>
