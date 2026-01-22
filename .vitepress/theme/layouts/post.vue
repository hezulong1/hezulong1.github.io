<script setup lang="ts">
import { computed } from 'vue';
import { useApp } from '@/utils/hooks';
import { toLocalDayjs } from '@/utils/logic';

import Outline from './includes/Outline.vue';
import Pagination from './includes/Pagination.vue';

const { frontmatter } = useApp();
const datetime = computed(() => toLocalDayjs(frontmatter.value.date).format());
const date = computed(() => toLocalDayjs(frontmatter.value.date).format('YYYY年MM月DD日'));
</script>

<template>
  <article :class="$style.post">
    <h1>{{ frontmatter.title }}</h1>
    <time :datetime>{{ date }}</time>
    <Outline :class="$style.outline" />
    <Content id="post-content" />
  </article>
  <Pagination />
</template>

<style lang="scss" module>
.post {
  margin-bottom: 4em;
  word-break: break-word;
  hyphens: auto;

  > h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  > time {
    display: block;
    color: var(--home-date-color);
    margin-bottom: 2rem;
  }

  &:hover .outline {
    [role='heading'] > *,
    > div {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }
}

.outline {
  position: fixed;
  top: 4rem;
  bottom: 2rem;
  left: .5rem;

  [role='heading'] > *:not(svg),
  > *:not([role='heading']) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity .5s 1s, visibility .5s 1s;
  }

  [role='heading'] > svg {
    opacity: .3;
    transition: opacity .5s;
  }
}

:global(#post-content a:not(.header-anchor):hover)  {
  text-decoration: underline;
}
</style>
