<script setup lang="ts">
defineProps<{
  href: string;
  title?: string;
}>();
</script>

<template>
  <ClientOnly>
    <a v-tippy="title" v-bind="$attrs" :href="href" target="_blank" rel="noreferrer noopener">
      <slot />
    </a>
  </ClientOnly>
</template>
