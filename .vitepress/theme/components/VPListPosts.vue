<script setup lang="ts">
import type { MyTheme } from '../type';

import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as rawPosts } from '../../posts.data';
import { normalize } from '../utils/utils';
import dayjs from 'dayjs';

const route = useRoute();
const posts = computed(() => rawPosts
  .filter(x => x.url.includes(normalize(route.path)))
  .map(x => ({
    url: normalize(x.url),
    date: dayjs(x.date).format('YYYY-MM-DD'),
    title: x.title,
  } as MyTheme.Post))
  .sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1));
</script>

<template>
  <div class="VPListPosts">
    <template v-if="posts.length">
      <div v-for="post in posts" :key="post.url" class="item">
        <a :href="post.url">{{ post.title }}</a>
        <time>{{ dayjs(post.date).format('YYYY年MM月DD日') }}</time>
      </div>
    </template>
    <template v-else>
      <div class="nothing">没有任何数据</div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.VPListPosts {

  > .item {
    display: grid;
    grid-template-columns: 1fr 80px;
    grid-gap: var(--page-space);

    &.placeholder {
      position: relative;
      pointer-events: none;
      user-select: none;
      block-size: 32px;
    }

    > time {
      flex: 0 0 80px;
      margin-inline-start: auto;
      min-inline-size: 80px;
      font-size: 10px;
      font-style: italic;
    }

    &+.item {
      margin-block-start: 4px;
    }
  }

  > .nothing {
    margin-block-start: 64px;
    padding: 12px 0;
    font-size: 12px;
    text-align: center;
  }
}
</style>
