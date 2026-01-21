<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import Link from './Link.vue';

const props = defineProps<{
  disabled?: boolean;
  square?: boolean;
  active?: boolean;
  href?: string;
}>();

const $style = useCssModule();
const extraClassNames = computed(() => {
  const classNames = [$style.root];

  if (props.square) classNames.push('square');
  if (props.active) classNames.push('active');
  if (props.disabled) classNames.push('disabled');

  return classNames;
});
</script>

<template>
  <span v-if="disabled" :class="extraClassNames">
    <slot />
  </span>
  <Link v-else-if="href" :class="extraClassNames" tabindex="0"><slot /></Link>
  <button v-else :class="extraClassNames" :disabled>
    <slot />
  </button>
</template>

<style lang="scss" module>
.root {
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  padding: .125rem .25rem;
  border-radius: .25rem;
  border: 1px solid var(--border-color);
  background: var(--body-bg);
  font-size: 1rem;
  user-select: none;
  outline: none;
  cursor: pointer;

  &:not(:global(.disabled)) {
    &:focus-visible {
      outline: 2px solid var(--accent-color);
      outline-offset: 2px;
    }

    &:hover,
    &:global(.active) {
      background: var(--fill-color);
    }
  }

  &:not(a) {
    color: inherit;
  }

  &:global(.square) {
    padding: .25rem;
  }

  &:global(.disabled) {
    cursor: default !important;
    color: #ccc !important;
    pointer-events: none !important;
  }
}
</style>
