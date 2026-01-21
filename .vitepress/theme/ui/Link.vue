<script setup lang="ts">
import { computed } from 'vue';
import { EXTERNAL_URL_RE } from '@/utils/logic';

const props = defineProps<{
  href?: string;
  tabindex?: string;
  colorMode?: 'auto' | 'inherit';
}>();

const isExternal = computed(() => !!props.href && EXTERNAL_URL_RE.test(props.href));
</script>

<template>
  <a
    :class="colorMode === 'inherit' ? $style.inherit : undefined"
    :href
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noreferrer' : undefined"
    :tabindex="tabindex ? tabindex : href ? 0 : undefined"
  >
    <slot />
  </a>
</template>

<style lang="scss" module>
.inherit {
  color: inherit;

  &:hover {
    color: var(--link-color);
  }
}
</style>
