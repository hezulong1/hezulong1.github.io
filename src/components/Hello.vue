<script setup lang="ts">
import { useTypedJS } from '~/logics/typed'

const target = ref()

useTypedJS(target, {
  typeSpeed: 125,
  backSpeed: 100,
  smartBackspace: false,
  startDelay: 100,
  backDelay: 1500,
  showCursor: false,
  loop: true,
  strings: ['哈喽', 'Hello', 'こんにちは', 'Hola', 'Bonjour']
})
</script>

<template>
  <div class="prose m-auto mb-8">
    <h1 class="mb-0">
      <span ref="target" />
      <span class="pl-1 text-gray-700 dark:text-gray-200">!</span>
    </h1>
  </div>
</template>
