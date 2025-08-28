<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { useTypedJS } from '../utils/typed';

const helloRef = useTemplateRef('hello');

useTypedJS(helloRef, {
  typeSpeed: 125,
  backSpeed: 100,
  smartBackspace: false,
  startDelay: 100,
  backDelay: 1500,
  showCursor: false,
  loop: true,
  strings: ['哈喽', 'Hello', 'こんにちは', 'Hola', 'Bonjour'],
});
</script>

<template>
  <div class="VPNotFound">
    <span class="hello"><span ref="hello">哈喽</span>，</span>
    <span>很高兴认识<strong>你</strong>！</span>
  </div>
</template>

<style lang="scss" scoped>
.VPNotFound {
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .hello {
    font-size: 22px;
    margin-bottom: 12px;
  }
}
</style>
