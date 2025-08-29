<template>
  <header id="page-header" class="VPPageHeader" />
</template>

<style lang="scss" scoped>
@use '../styles/utils' as utils;

.VPPageHeader {
  position: sticky;
  top: 0;
  z-index: 10;
  block-size: 48px;
  // backdrop-filter: blur(10px);

  @include utils.tablet {
    position: static;
  }
}
</style>
