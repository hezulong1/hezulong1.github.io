<script setup lang="ts">
import { useApp, registerWatchers } from './utils/hooks';

import Header from './layouts/includes/Header.vue';
import Footer from './layouts/includes/Footer.vue';
import Config from './layouts/includes/Config.vue';

import NotFound from './layouts/[...404].vue';
import Home from './layouts/home.vue';
import Post from './layouts/post.vue';

const { page, frontmatter } = useApp();

registerWatchers();
</script>

<template>
  <div :class="$style.container">
    <Header />

    <NotFound v-if="page.isNotFound" />

    <main v-else>
      <Home v-if="frontmatter.isHome" />
      <Post v-else />
    </main>

    <Footer />
  </div>

  <Config :class="$style.config" />
</template>

<style lang="scss" module>
@use "@/style/mixins/media" as *;

.container {
  position: relative;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-columns: 100%;
  max-width: 38rem;
  min-height: 100vh;
  min-height: 100dvh;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
}

.config {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  @media (min-width: 44rem) { // 38 + 3 * 2
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
}
</style>
