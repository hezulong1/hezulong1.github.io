<script setup lang="ts">
import { computed, ref } from 'vue';
import { clamp, useIntervalFn } from '@vueuse/core';

const percent = ref(0);
const show = ref(false);
const started = ref(false);

const size = computed(() => percent.value + '%');
const op = computed(() => show.value ? 1 : 0);

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

function increase() {
  if (!started.value) {
    start();
    return;
  }

  percent.value += rand();
  percent.value = clamp(percent.value, 0, 99.85);
}

const { pause, resume } = useIntervalFn(increase, 200, { immediate: false });

function hide() {
  pause();
  show.value = false;
  setTimeout(() => {
    percent.value = 0;
  }, 200);
}

function finish() {
  percent.value = 100;
  started.value = false;
  hide();
}

function start() {
  percent.value = 0;
  started.value = true;
  show.value = true;
  resume();
}

defineExpose({
  start,
  finish,
});
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-show="show" class="VPProgress" />
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.VPProgress {
  position: fixed;
  inset-block-start: 0;
  inset-inline-start: 0;
  z-index: 3000;
  block-size: 4px;
  inline-size: v-bind(size);
  background-color: var(--vp-accent-solid);
  opacity: v-bind(op);
  transition: opacity 0.4s, inline-size 0.2s;
}
</style>
