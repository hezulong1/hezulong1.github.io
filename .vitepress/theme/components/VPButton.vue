<script setup lang="ts">
import { computed } from 'vue';
import { isExternal } from '../utils/utils.ts';

const props = defineProps<{
  href?: string;
  span?: boolean;
}>();

const tag = computed(() => props.span ? 'span' : 'a');
</script>

<template>
  <component
    :is="tag"
    class="VPButton"
    :class="{
      'external-link-icon': isExternal(href),
    }"
    :href="href"
    :target="isExternal(href) ? '_blank' : undefined"
    :rel="isExternal(href) ? 'noreferrer' : undefined"
    :tabindex="tag === 'a' ? 0 : undefined"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.VPButton {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  vertical-align: top;
  position: relative;
  font-size: 14px;
  line-height: 22px;
  padding: 3px 5px;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  outline: none;

  &:focus-visible {
    outline: 2px solid var(--vp-accent-solid);
    outline-offset: 2px;
  }

  @media (hover: hover) {
    &:hover {
      color: hsl(var(--vp-netural-hsl));
    }
  }

  &.active {
    color: hsl(var(--vp-netural-hsl));
  }
}

span.VPButton {
  cursor: default;
}
</style>
