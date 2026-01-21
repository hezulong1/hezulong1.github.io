<script setup lang="ts">
import { useApp } from '@/utils/hooks';

const { site } = useApp();
</script>

<template>
  <header :class="$style.header">
    <h3 :class="$style.logo">
      <a href="/" title="Home">{{ site.title }}</a>
    </h3>
  </header>
</template>

<style lang="scss" module>
.header {
  padding-top: 3rem;
  padding-bottom: 1rem;
  margin-bottom: 4rem;
}

.logo {
  margin: 0;
  font-size: 1.25rem;

  > a {
    color: inherit;

    &::before {
      content: "@";
      margin-right: 0.2rem;
      font-size: .875rem;
      vertical-align: .2em;
    }
  }
}
</style>
