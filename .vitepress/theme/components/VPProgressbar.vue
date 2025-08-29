<script setup lang="ts">
import { ref } from 'vue';
import { clamp, useIntervalFn } from '@vueuse/core';

const percent = ref(0);
const show = ref(false);

function rand() {
  let num = 0;

  if (percent.value >= 0 && percent.value < 20) {
    num = Math.random() * 5;
  } else if (percent.value >= 20 && percent.value < 40) {
    num = Math.random() * 3;
  } else if (percent.value >= 40 && percent.value < 80) {
    num = Math.random() * 2;
  } else if (percent.value >= 80 && percent.value < 98) {
    num = Math.random();
  } else if (percent.value >= 98 && percent.value < 100) {
    num = Math.random() / 10;
  }

  return num;
}

const repeatController = useIntervalFn(() => {
  percent.value = clamp(percent.value + rand(), 0, 99.85);
}, 200, { immediate: false });

function hide() {
  repeatController.pause();
  show.value = false;
  setTimeout(() => {
    percent.value = 0;
  }, 500);
}

function finish() {
  percent.value = 100;
  hide();
}

function start() {
  percent.value = 0;
  show.value = true;
  repeatController.resume();
}

defineExpose({
  start,
  finish,
});
</script>

<template>
  <Transition name="fade">
    <div v-show="show" class="VPProgressbar" :style="{ inlineSize: `${percent}%` }" />
  </Transition>
</template>

<style lang="scss" scoped>
.VPProgressbar {
  position: fixed;
  inset-block-start: 0;
  inset-inline-start: 0;
  z-index: 3000;
  block-size: 4px;
  background-color: var(--vp-accent-solid);
  transition: opacity 0.4s, inline-size 0.2s;

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }
}
</style>
