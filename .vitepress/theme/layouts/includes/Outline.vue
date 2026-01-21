<script setup lang="ts">
import { ref } from 'vue';
import { useLayout, useActiveAnchor } from '@/utils/hooks';
import OutlineItem from './OutlineItem.vue';
import TableOfContents from '@/ui/icons/TableOfContents.vue';

const container = ref();
const marker = ref();
const { headers, hasLocalNav } = useLayout();

useActiveAnchor(container, marker);
</script>

<template>
  <nav
    ref="container"
    aria-labelledby="post-outline-aria-label"
    :class="[$style.root, { show: hasLocalNav }]"
  >
    <div
      id="post-outline-aria-label"
      aria-level="2"
      :class="$style.title"
      role="heading"
    >
      <TableOfContents />
      <span>ON THIS PAGE</span>
    </div>
    <div :class="$style.content">
      <div ref="marker" :class="$style.marker" />
      <OutlineItem :headers root />
    </div>
  </nav>
</template>

<style lang="scss" module>
.root {
  display: none;
  overflow: auto;
  scrollbar-width: thin;
  padding-left: 1.5rem;

  &:global(.show) {
    display: block;
  }
}

.title {
  display: flex;
  align-items: center;
  gap: .5rem;
  color: var(--leading-color);
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  background-color: var(--body-bg);
}

.content {
  position: relative;
}

.marker {
  position: absolute;
  top: 0;
  left: -1rem;
  z-index: 0;
  opacity: 0;
  width: .25rem;
  border-radius: .25rem;
  height: 18px;
  background-color: var(--accent-color);
  transition:
    top .25s cubic-bezier(0, 1, .5, 1),
    background-color .5s,
    opacity .25s;
}
</style>
