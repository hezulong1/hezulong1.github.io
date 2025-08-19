<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as rawPosts } from '../../posts.data';
import { normalize } from '../utils/utils';
import VPButton from './VPButton.vue';
import dayjs from 'dayjs';
import type { MyTheme } from '../type';

const route = useRoute();
const posts = computed(() => rawPosts
  .filter(x => x.url.includes(normalize(route.path)))
  .map(x => ({
    url: x.url,
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
          <time>{{ post.date }}</time>
          <VPButton :href="post.url">{{ post.title }}</VPButton>
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
  margin: 0;
  padding: 0;

  > .item {
    display: flex;
    align-items: baseline;

    &.placeholder {
      position: relative;
      pointer-events: none;
      user-select: none;
      height: 64px;
    }

    > time {
      min-width: 60px;
      font-size: 10px;
    }
  }

  > .nothing {
    margin-top: 64px;
    padding: 12px 0;
    font-size: 12px;
    text-align: center;
  }

  :deep(.VPButton) {
    margin-right: auto;
    color: inherit !important;
    font-size: 14px;
  }
}
</style>
