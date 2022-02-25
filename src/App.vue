<script setup lang="ts">
useHead({
  title: 'HeZulong',
  meta: [
    { name: 'description', content: '何祖龙的个人网站, hezulong\'s Portfolio' }
  ]
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>
