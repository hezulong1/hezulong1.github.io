<template>
  <header class="header z-40">
    <router-link
      class="w-8 h-8 absolute lg:fixed m-7 select-none outline-none"
      to="/"
      focusable="false"
    >
      <div class="bg-accentLight rounded-full w-8 h-8" />
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <router-link to="/posts">
          <span class="<md:hidden">Blog</span>
          <carbon-align-box-top-left class="md:hidden" />
        </router-link>
        <router-link to="/talks" class="<md:hidden">
          Talks
        </router-link>
        <router-link to="/projects">
          <span class="<md:hidden">Projects</span>
          <carbon-idea class="md:hidden" />
        </router-link>

        <ClientOnly>
          <router-link v-tippy="'Bookmarks'" to="/bookmarks" class="<md:hidden">
            <carbon-bookmark />
          </router-link>

          <router-link v-tippy="'Notes'" to="/notes">
            <carbon-notebook />
          </router-link>

          <extra-link title="Github" href="https://github.com/hezulong1">
            <carbon-logo-github />
          </extra-link>
        </ClientOnly>

        <extra-link class="<md:hidden" title="Legacy" href="/legacy.html">
          <carbon-crop-growth />
        </extra-link>

        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a,
.nav:deep(a) {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease, color 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover,
.nav:deep(a:hover) {
  color: var(--c-accent);
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
