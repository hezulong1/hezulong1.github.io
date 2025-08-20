<script setup lang="ts">
import VPButton from './VPButton.vue';
</script>

<template>
  <VPButton class="VPIconButton" v-bind="$attrs">
    <slot />
  </VPButton>
</template>

<style lang="scss" scoped>
.VPIconButton {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 18px;

  @media (hover: hover) {
    &:hover {
      background-color: var(--vp-gray-a4);
    }
  }

  &:active {
    background-color: var(--vp-gray-a5);
  }

  svg {
    inline-size: 1em;
    block-size: 1em;
  }
}
</style>
