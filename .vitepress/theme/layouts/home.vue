<script setup lang="ts">
import { usePostList } from '@/utils/hooks';
import { toLocalDayjs } from '@/utils/logic';

const postList = usePostList().filter(x => !x.draft).map((x) => {
  const d = toLocalDayjs(x.date);
  const datetime = d.format();
  const year = d.format('YYYY');
  const month = d.format('MM');
  const date = d.format('DD');
  return {
    datetime,
    year,
    month,
    date,
    url: x.url,
    title: x.title,
  };
});
</script>

<template>
  <article v-for="post in postList" :key="post.url" :class="$style.root">
    <h1>
      <a :href="post.url">
        {{ post.title }}
      </a>
    </h1>

    <time :datetime="post.datetime">
      <span>{{ post.year }}</span>
      <span :class="$style.dot" data-character="&#8226;" />
      <span>{{ post.month }}</span>
      <span :class="$style.dot" data-character="&#8226;" />
      <span>{{ post.date }}</span>
    </time>
  </article>
</template>

<style lang="scss" module>
.root {
  display: flex;
  align-items: baseline;
  gap: 1rem;

  > h1 {
    order: 2;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
  }

  > time {
    display: flex;
    align-items: center;
    color: var(--home-date-color);
    cursor: default;
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
  }

  a {
    color: var(--body-color);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-underline-offset: clamp(2px, .2em, 6px);

    &:hover {
      color: var(--link-color);
    }
  }

  & + & {
    margin-top: .5rem;
  }
}

.dot {
  margin-right: .25rem;
  margin-left: .25rem;

  --size: .125rem;

  width: var(--size);
  height: var(--size);
  border-radius: calc(var(--size) * 4);
  background-color: currentColor;
  -webkit-text-fill-color: #0000;
}
</style>
