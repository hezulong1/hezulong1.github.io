<script setup lang="ts">
import { motion } from 'motion-v';
import { computed, type Component } from 'vue';
import { isExternal } from '../utils/utils.ts';

const props = defineProps<{
  href?: string;
  span?: boolean;
  icon?: Component;
}>();

const tag = computed(() => props.span ? 'span' : 'a');
</script>

<template>
  <component
    :is="motion[tag]"
    class="VPButton"
    :class="{
      link: tag === 'a',
      icon,
      'external-link-icon': isExternal(href),
    }"
    :href="href"
    :target="isExternal(href) ? '_blank' : undefined"
    :rel="isExternal(href) ? 'noreferrer' : undefined"
    :while-hover="{ color: '#fff' }"
    :while-press="{ y: 1 }"
  >
    <component :is="icon" v-if="icon" />
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.VPButton {
  appearance: none;
  position: relative;
  display: block;
  font-size: 14px;
  line-height: 22px;
  padding: 3px 5px;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &.icon {
    padding: 5px;
    font-size: 18px;
  }
}

span.VPButton {
  cursor: default;
}
</style>
