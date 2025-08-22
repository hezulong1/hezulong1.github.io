<script setup lang="ts">
import VPButton from './VPButton.vue';
</script>

<template>
  <VPButton class="VPIconButton">
    <slot />
  </VPButton>
</template>

<style lang="scss">
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
