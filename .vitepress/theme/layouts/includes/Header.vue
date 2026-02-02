<script setup lang="ts">
import { useRoute } from 'vitepress';
import Link from '@/ui/Link.vue';
import { useApp } from '@/utils/hooks';
import { isActivePath } from '@/utils/logic';

const route = useRoute();
const { site } = useApp();

const links = [
  { href: '/bookmark', text: 'Bookmark' },
  { href: '/gist', text: 'Gist' },
];
</script>

<template>
  <header :class="$style.header">
    <h3 :class="$style.logo">
      <a href="/" title="Home">{{ site.title }}</a>
    </h3>
    <span>:</span>
    <ul :class="$style.breadcrumb">
      <li v-for="item in links" :key="item.href">
        <Link :href="item.href" color-mode="inherit" :class="isActivePath(route.path, item.href) ? $style.active : ''">
          {{ item.text }}
        </Link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" module>
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
}

.logo {
  margin: 0;
  font-size: 1rem;

  > a {
    color: inherit;

    &::before {
      content: "@";
      margin-right: .2rem;
      font-size: .875rem;
      vertical-align: .1em;
    }
  }
}

.active {
  text-decoration: underline;
}

.breadcrumb {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: .75rem;

  li {
    margin: 0;

    &:not(:first-child)::before {
      content: '/';
      margin-right: .75rem;
    }
  }
}
</style>
