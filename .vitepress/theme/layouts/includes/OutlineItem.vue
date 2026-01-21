<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme';

defineProps<{
  headers: DefaultTheme.OutlineItem[];
  root?: boolean;
}>();
</script>

<template>
  <ul :class="[$style.item, root ? 'root' : 'nested']">
    <li v-for="{ children, link, title } in headers" :key="link" :class="{ 'subnav': children?.length }">
      <a :class="$style.link" :href="link" :title>
        <span>{{ title }}</span>
      </a>

      <template v-if="children?.length">
        <OutlineItem :headers="children" />
      </template>
    </li>
  </ul>
</template>

<style lang="scss" module>
.item {
  list-style: none;

  &:global(.root) {
    padding-left: 0;
    margin-bottom: 0;
  }
}

.link {
  position: relative;
  display: flex;
  align-items: center;
  gap: .75rem;
  color: inherit;
  white-space: nowrap;
  transition: color 0.5s;

  &:hover,
  &:global(.active) {
    color: var(--accent-color);
    transition: color 0.25s;
  }

  &:global(.nested) {
    padding-left: 13px;
  }
}
</style>
