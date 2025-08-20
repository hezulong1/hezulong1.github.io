<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as rawPosts } from '../../posts.data';
import { normalize } from '../utils/utils';
import dayjs from 'dayjs';
import type { MyTheme } from '../type';

const route = useRoute();
const posts = computed(() => rawPosts
  .filter(x => x.url.includes(normalize(route.path)))
  .map(x => ({
    url: normalize(x.url),
    date: dayjs(x.date).format('YYYY-MM-DD'),
    title: x.title,
  } as MyTheme.Post))
  .sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1));

type CombineDate = dayjs.Dayjs | Date | string | number;

const getYear = (a: CombineDate) => dayjs(a).year();
const isFuture = (a?: CombineDate) => !!a && dayjs(a).isAfter(dayjs());
const isSameYear = (a?: CombineDate, b?: CombineDate) => !!a && !!b && getYear(a) === getYear(b);
const isSameGroup = (a: MyTheme.Post, b?: MyTheme.Post) => (isFuture(a.date) === isFuture(b?.date)) && isSameYear(a.date, b?.date);
// const getGroupName = (a: MyTheme.Post) => isFuture(a.date) ? 'Upcoming' : getYear(a.date);
</script>

<template>
  <div class="VPListPosts">
    <template v-if="posts.length">
      <template v-for="post, idx in posts" :key="post.url">
        <div v-if="!isSameGroup(post, posts[idx - 1])" class="item placeholder">
          <!-- <span>{{ getGroupName(post) }}</span> -->
        </div>
        <div class="item">
          <a :href="post.url">{{ post.title }}</a>
          <time>{{ dayjs(post.date).format('YYYY年MM月DD日') }}</time>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="nothing">没有任何数据</div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.VPListPosts {

  > .item {
    display: flex;
    align-items: flex-start;
    gap: 8px;

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
  }

  > .nothing {
    margin-block-start: 64px;
    padding: 12px 0;
    font-size: 12px;
    text-align: center;
  }
}
</style>
