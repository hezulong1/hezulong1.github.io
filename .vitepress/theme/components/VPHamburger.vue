<script setup lang="ts">
defineProps<{ active?: boolean }>();
</script>

<template>
  <!-- https://jonsuh.com/hamburgers/ -->
  <button class="VPHamburger squeeze" :class="{ active }">
    <div class="box">
      <div class="inner" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
@use 'sass:math' as math;
@use '../styles/utils' as utils;

$hamburger-layer-width         : 22px !default;
$hamburger-layer-height        : 1px !default;
$hamburger-layer-spacing       : 4px !default;

.VPHamburger {
  position: fixed;
  inset-block-start: 17px;
  inset-block-start: calc(env(safe-area-inset-top) + 17px);
  inset-inline-start: 24px;
  z-index: 11;

  padding: 0;
  cursor: default;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  background-color: transparent;

  @include utils.tablet {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  .box {
    width: $hamburger-layer-width;
    height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
    position: relative;
  }

  .inner {
    display: block;
    top: 50%;
    margin-top: math.div($hamburger-layer-height, -2);

    &,
    &::before,
    &::after {
      width: $hamburger-layer-width;
      height: $hamburger-layer-height;
      background-color: var(--vp-layout-text-contrast);
      border-radius: 2px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }

    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
    }

    &::after {
      bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
    }
  }
}

.squeeze {
  .inner {
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::before {
      transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    }

    &::after {
      transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.active {
    .inner {
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
</style>
